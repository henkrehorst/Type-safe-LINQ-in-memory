export type Course ={
    Subject: string
    Professor: Professor
    Students: Array<Student>
}

export type Person = {
    FirstName: string
    LastName: string
}

export type Student = Person & {
    StudentNumber: number
}

export type Professor = Person & {
    Certificate: Array<string>
}