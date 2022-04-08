import { isPropertyAccessOrQualifiedName } from "typescript";

type IncludeKeys<T> = { [K in keyof T]: T[K] extends Array<object> ? K : never }[keyof T];

type getArrayType<T> = T extends Array<object> ? T[number] : never

export type QArray<T> = {
    data: Array<T>
    select: <K extends keyof T>(...props: K[]) => QArray<Pick<T,typeof props[number]>>
    orderBy: <K extends keyof T>(property: K, order?: "asc" | "desc") => QArray<T>
    where: (f: (_: T) => boolean) => QArray<T>,
    include: <K extends IncludeKeys<T>, P extends getArrayType<T[K]>>(param: K, f: (_: QArray<P>) => QArray<any>) => QArray<any>,
    toArray: () => Array<T>
}

export const qArray = <T>(initData: Array<T>): QArray<T> => ({
    data: initData,
    select: function <K extends keyof T>(...props: K[]) {
        let array: Array<Pick<T,typeof props[number]>> = []
        this.data.forEach((item: T) => {
            let result: any = {}
            props.forEach((prop: K) => {result[prop] = item[prop]})
            array.push(result as Pick<T, typeof props[number]>)
        });
        return qArray<Pick<T,typeof props[number]>>(array);
    },
    orderBy: function <K extends keyof T>(property: K, order: 'asc' | 'desc' = 'asc') {
        return qArray<T>(initData.sort((a, b) => {
            if(order === 'desc') [a, b] = [b, a];

            switch (typeof a[property]) {
                case "boolean":
                    return Boolean(a[property]) === Boolean(b[property]) ? 0 : Boolean(b[property]) ? 1: -1;
                case "number":
                    return Number(a[property]) - Number(b[property]);
                case "string":
                    const lowerA = String(a[property]).toLowerCase(),
                        lowerB = String(b[property]).toLowerCase();
                    return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : 0;
            }

            return 0;
        }));
    },
    where: function(f: (_: T) => boolean) {
        //We considered the standard filter function, but we found it to be slower than a for loop
        let newArray: Array<T> = []
        for(let i = 0; i < this.data.length; i++){
            if(f(this.data[i])){
                newArray.push(this.data[i])
            }
        }
        return qArray(newArray)
    },
    include: function <K extends IncludeKeys<T>, P extends getArrayType<T[K]>>(param: K, f: (_: QArray<P>) => QArray<any>){
        let newDataAray: Omit<T,K>
        for (let i = 0; i < this.data.length; i++) {
            const element: T[K] = this.data[i][param];

            let newQArray: QArray<P>
            if(Array.isArray(element)){
                newQArray = qArray(element)
                let processed = f(newQArray)
                let test: Omit<T, K>
            }

        }
        return qArray(this.data);
    },
    toArray: () => initData
})