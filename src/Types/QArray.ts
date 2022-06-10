import {getArrayType, IncludeKeys, OrderByKeys} from "./KeyTypes";

export type QArray<T> = {
    data: Array<T>
    select: <K extends keyof T>(...props: K[]) => QArray<Pick<T,typeof props[number]>>
    orderBy: <K extends OrderByKeys<T>>(property: K, order?: "asc" | "desc") => QArray<T>
    where: (f: (_: T) => boolean) => QArray<T>,
    include: <K extends IncludeKeys<T>, P extends getArrayType<T[K]>, R>(
                param: K,
                f: (_: QArray<P>
            ) => QArray<R>) => QArray<Omit<T,K> & {[key in K] : Array<R>}>,
    toArray: () => Array<T>
}