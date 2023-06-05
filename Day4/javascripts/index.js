const subject1 = ["Math", "Science", "Nepali"]
const person1 = {
    name: "Ram",
    rollno: 24,
    address: {
        district: "Kaski",
        muncipality: "Pokhara",
        ward: 9
    },
    subject: subject1
}
subject1.push("Social")
    //console.log(person1.subject);

const subject2 = ["Math", "Science", "Nepali"]

const person2 = {
        name: "Ram",
        rollno: 24,
        address: {
            district: "Kaski",
            muncipality: "Pokhara",
            ward: 9
        },
        subject: subject2
    }
    //console.log(subject1)
const employee = [person1, person2]
console.log(employee)