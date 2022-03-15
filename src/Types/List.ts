import { certificate1, certificate2, certificate3 } from "../Data/Data"
import { Certificate } from "../Models/DataTypes"

type ListData<T> = {
    data: Array<T>
}

type ListOperations<T> = {
    Select: <K extends keyof T>(params: K) => Array<Pick<T, K>>
}

type List<T> = ListData<T> & ListOperations<T>

const list = <T>(initData: Array<T>): List<T> => ({
    data: initData,
    Select: function <K extends keyof T>(params: K) {
        let result: Array<Pick<T,K>> = []
        this.data.forEach(entity => {
            result.push({ [params] : entity[params] } as Pick<T, K>)
        })
        return result
    }
})

let testData = [certificate1, certificate2, certificate3]

let certificates = list(testData)

let result = certificates.Select("Level")

console.log(result)