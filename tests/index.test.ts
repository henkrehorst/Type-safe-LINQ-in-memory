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

        expect(selectedStudentArray[0]).has.all.keys(["FirstName", "StudentNumber"])
    })
    it('', () => {
        let students = qArray([student1, student2])
        expect(students.select("FirstName")).to.deep.equal([{"FirstName": student1.FirstName},{"FirstName": student2.FirstName}])
    })
})