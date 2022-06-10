import {getArrayType, IncludeKeys, OrderByKeys} from "./Types/KeyTypes";
import {QArray} from "./Types/QArray";

export const qArray = <T>(initData: Array<T>): QArray<T> => ({
    data: initData,
    select: function <K extends keyof T>(...props: K[]) {
        return qArray(this.data.map((item: T) => {
            let result: any = {}
            props.forEach((prop: K) => {result[prop] = item[prop]})
            return result as Pick<T, typeof props[number]>
        }))
    },
    orderBy: function <K extends OrderByKeys<T>>(property: K, order: 'asc' | 'desc' = 'asc') {
        return qArray<T>(initData.sort((a, b) => {
            if(order === 'desc') [a, b] = [b, a];
            switch (typeof a[property]) {
                case "boolean":
                    return Boolean(a[property]) === Boolean(b[property]) ? 0 : Boolean(b[property]) ? 1: -1;
                case "number":
                    return Number(a[property]) - Number(b[property]);
                default:
                    const lowerA = String(a[property]).toLowerCase(),
                        lowerB = String(b[property]).toLowerCase();
                    return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : 0;
            }
        }));
    },
    where: function(f: (_: T) => boolean) {
        return qArray(this.data.filter(x => f(x)));
    },
    include: function <K extends IncludeKeys<T>, P extends getArrayType<T[K]>, R>(param: K, f: (_: QArray<P>) => QArray<R>){
        return qArray(this.data.map((item: T): Omit<T,K> & {[key in K] : Array<R>} => {
            let processed = f(qArray(item[param] as any));
            let {[param]: removedProperty, ...elementRest } = item;

            let newParam: {[key in K]: Array<R>} = { [param] : processed.toArray() } as {[key in K]: Array<R>};
            return {...elementRest, ...newParam}
        }))
    },
    toArray: () => initData
})