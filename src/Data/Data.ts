import { School, Study, Course, Professor, Student, Certificate } from "../Models/DataTypes"

export const school1: School = {
    Name: 'Hogeschool Rotterdam'
}

export const study1: Study = {
    Name: 'Informatica',
    Level: 'HBO',
    School: school1
}

export const certificate1: Certificate = {
    Subject: 'Typescripting',
    Level: 'HBO'
}

export const certificate2: Certificate = {
    Subject: 'Computer Egineering',
    Level: 'University'
}

export const certificate3: Certificate = {
    Subject: 'Analytics',
    Level: 'University'
}

export const prof1: Professor = {
    FirstName: 'Hans',
    LastName: 'Worst',
    Certificate: [certificate1, certificate2]
}

export const prof2: Professor = {
    FirstName: 'Henk',
    LastName: 'de Groot',
    Certificate: [certificate3]
}

export const course1: Course = {
    Subject: 'Development',
    Professor: prof1,
    Study: study1
}

export const course2: Course = {
    Subject: 'Analyse',
    Professor: prof2,
    Study: study1
}

export const student1 : Student = {
    FirstName: 'Sybren',
    LastName: 'de Jongh',
    StudentNumber: 1,
    Courses: [course1, course2]
}

export const student2 : Student = {
    FirstName: 'Henk',
    LastName: 'Rehorst',
    StudentNumber: 2,
    Courses: [course1, course2]
}

export const student3 : Student = {
    FirstName: 'Mark',
    LastName: 'van t Hof',
    StudentNumber: 3,
    Courses: [course1, course2]
}