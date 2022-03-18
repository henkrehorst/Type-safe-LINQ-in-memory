export type School = {
    Name: string
}

export type Study = {
    Name: string
    Level: string
    School: School
}

export type Course = {
    Subject: string
    Professor: Professor
    Study: Study
}

export type Person = {
    FirstName: string
    LastName: string
}

export type Student = Person & {
    StudentNumber: number
    Active: boolean
    Courses: Array<Course>
}

export type Professor = Person & {
    Certificate: Array<Certificate>
}

export type Certificate = {
    Subject: string
    Level: string
}