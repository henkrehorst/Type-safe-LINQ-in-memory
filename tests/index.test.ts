import {expect} from "chai";
import {timesTwo} from "../src";
import {qArray} from "../src/Types/QArray"
import {student1, student2, student3} from "../src/Data/Data"
import {it} from "mocha";

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

        expect(selectedStudentArray.toArray()[0]).has.all.keys(["FirstName", "StudentNumber"])
    })
    it('', () => {
        let students = qArray([student1, student2])
        expect(students.select("FirstName").toArray()).to.deep.equal([{"FirstName": student1.FirstName},{"FirstName": student2.FirstName}])
    })
})

describe('OrderBy testing', () => {
    it('orderBy number', () => {
        let students = qArray([student1, student2])
        expect(students.orderBy('StudentNumber','desc').toArray()).to.deep.equal([student2, student1])
    })
    it('orderBy string', () => {
        let students = qArray([student1, student2, student2, student3])
        expect(students.orderBy('FirstName').toArray()).to.deep.equal([student2, student2, student3, student1])
    });
    it('orderBy not supported type', () => {
        let students = qArray([student1, student2])
        expect(students.orderBy("Courses").toArray()).to.deep.equal([student1, student2]);
    });
    it('orderBy boolean', () => {
        let students = qArray([student1, student2, student3]);
        expect(students.orderBy('Active').toArray()).to.deep.equal([student1, student3, student2]);
    })
})