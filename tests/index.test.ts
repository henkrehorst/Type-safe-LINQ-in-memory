import {expect} from "chai";
import {timesTwo} from "../src";
import {qArray} from "../src/Types/QArray"
import {student1, student2, student3} from "../src/Data/Data"

describe('Check check', () => {
    it('check', () => {
        expect(timesTwo(2)).to.equal(4)
    })
})

describe('Select testing', () => {
    it('', () => {
        const students = [student1,student2,student3]

        let studentArray = qArray(students)

        let selectedStudentArray = studentArray.select("FirstName", "StudentNumber")

        expect(Object.keys(selectedStudentArray[0]) as Array<keyof typeof selectedStudentArray[0]>).to.equal(["FirstName","StudentNumber"])
    })
})