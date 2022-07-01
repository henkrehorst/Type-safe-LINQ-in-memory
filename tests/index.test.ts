import {expect} from "chai";
import {timesTwo} from "../src";
import {qArray} from "../src/QArray"
import {student1, student2, student3} from "../src/Data/Data"
import {it} from "mocha";

describe('Check check', () => {
    it('check', () => {
        expect(timesTwo(2)).to.equal(4)
    })
})

describe('Select testing', () => {
    it('', () => {
        let studentArray = qArray([student1,student2,student3])

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
    it('orderBy boolean', () => {
        let students = qArray([student1, student2, student3]);
        expect(students.orderBy('Active').toArray()).to.deep.equal([student1, student3, student2]);
    })
})

describe('Where testing', () => {
    it('filtering on string', () => {
        const students = qArray([student1, student2, student3])

        expect(students.where(x => x.FirstName === "Henk").toArray()).to.deep.equal([student2])
    })
})

describe('Include testing', () => {
    it('',() =>{
        let students = qArray([student1, student2, student3])

        let allThreeStudents = students.include('Courses',x => x.select('Subject') )
        expect(allThreeStudents.toArray()[0].Courses[0]).has.all.keys(['Subject']);
    })
})