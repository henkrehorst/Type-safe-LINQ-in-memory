import {qArray} from "./Types/QArray";
import {student1, student2} from "./Data/Data";

console.log('Hello world ff!');
let students = qArray([student1, student2])

let includetest = students.include("Courses", x => x.select("Study"))

let res = students.orderBy('Courses');
export const timesTwo = (a: number) => (a * a);