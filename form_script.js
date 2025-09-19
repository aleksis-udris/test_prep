class PInfo {
    constructor(name, email, number) {
        this.name = name;
        this.email = email;
        this.number = number;
    }

    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}, Number: ${this.number}`;
    }

    static validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getNumber() {
        return this.number;
    }

    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setNumber(number) {
        this.number = number;
    }
}

person1 = new PInfo("Alice", "alice.reaper@example.com", "123-456-7890");
person2 = new PInfo("Bob", "bob.thebuilder@architects.net", "987-654-3210");

pArr = [person1, person2];

function submitForm() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;

    if (!PInfo.validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    person = new PInfo(name, email, number);

    pArr.push(person);
    console.log("Form submitted:", person.getInfo());
    document.getElementById("userForm").reset();

    displayInfo();
}

function displayInfo() {
    pArr.forEach((person, index) => {
        document.getElementById("output").innerHTML += `<p>${index + 1}. ${person.getInfo()}</p>`;
    });
    if (pArr.length === 0) {
        document.getElementById("output").innerHTML = "<p>No entries yet.</p>";
    }
}