class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }

    toString() {
        return `Person[name=${this.name}, age=${this.age}, gender=${this.gender}]`;
    }
}

const person1 = new Person("John Doe", 25, "Male");
console.log(person1.toString());
// Output:
// Person[name=John Doe, age=25, gender=Male]


// Modify details
person1.setAge(26);
person1.setGender("Other");
console.log(person1.toString());
//Output:
// Person[name=John Doe, age=26, gender=Other]