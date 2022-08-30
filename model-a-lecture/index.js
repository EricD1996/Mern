class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = 0;
    }

    fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    sendMoney(amount, targetPerson){
        this.wallet -= amount;
        targetPerson.receiveMoney(amount);
    }

    receiveMoney(amount){
        this.wallet += amount;
    }
}

//Instructor IS A Person - Inheritance
class Teacher extends Person {
    constructor(firstName, lastName, yearsTeachingExperience){
        super(firstName, lastName);
        this.yearsTeachingExperience = yearsTeachingExperience;
    }

}
class Student extends Person {
    constructor(firstName, lastName, hobbies = []){
        super(firstName, lastName);
        this.hobbies = hobbies;
    }
}

// Lecture has a instructor - composition
class Lecture {
    constructor(topic, zoomLink, teacher, students = []){
        this.topic = topic;
        this.zoomLink = zoomLink;
        this.teacher = teacher;
        this.students = students;
    }
    createAttendanceList() {
        const fullNames = [];
        for (const student of this.students){
            fullNames.push(student.fullName());
        }
        return fullNames;
    }
}

const neil = new Teacher('Neil', 'M', 3);

const joshua = new Student('Joshu', 'Diaz');

const oopLecture = new Lecture(
    'OOP Intro',
    'https://codingdojo.zoom.us/j/83907514763?pwd=Y0V',
    neil,
    [joshua, new Student('Yelena', 'Dovgal')]
)