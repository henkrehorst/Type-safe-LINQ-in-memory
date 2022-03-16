export type QArray<T> = {
    data: Array<T>
    select: <K extends keyof T>(...props: K[]) => Array<Extract<T, K[]>>
}

export const qArray = <T>(initData: Array<T>): QArray<T> => ({
    data: initData,
    select: function <K extends keyof T>(...params: K[]) {
        let array: Array<Extract<T, K[]>> = []
        
        this.data.forEach((item: T) => {
            let result: any = {}
            params.forEach((param: K) => {result[param] = item[param]})
            array.push(result as Extract<T, K[]>)
        });
        return array
    }
})