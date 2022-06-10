import {qArray} from "./QArray";
import {student1, student2} from "./Data/Data";

console.log('Hello world ff!');
let students = qArray([student1, student2])

let includetest = students.include("Courses", x => x.select("Subject", "Study", "Professors").orderBy("Subject")
    .include("Professors", x => x.select("FirstName"))).toArray();
let res = students.orderBy('FirstName');
export const timesTwo = (a: number) => (a * a);