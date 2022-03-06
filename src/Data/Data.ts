import { Professor, Student, Course } from "./Types"

export const Sybren : Student = {
    FirstName: 'Sybren',
    LastName: 'de Jongh',
    StudentNumber: 1
}

export const Henk : Student = {
    FirstName: 'Henk',
    LastName: 'Rehorst',
    StudentNumber: 2
}

export const Mark : Student = {
    FirstName: 'Mark',
    LastName: 'van t Hof',
    StudentNumber: 3
}

export const Prof1: Professor = {
    FirstName: 'Hans',
    LastName: 'Worst',
    Certificate: ['Computer engineering', 'Typescripting']
}

export const Course1: Course = {
    Subject: 'Functional Programming',
    Professor: Prof1,
    Students: [Henk, Sybren, Mark]
}