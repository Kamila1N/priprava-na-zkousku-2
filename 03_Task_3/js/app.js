/**
 * Write your code below!
 */

//třídy

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

sayHallo(){
    console.log(`Ahoj jsem ${this.name} a je mi ${this.age} let`);
}
}

const zvire = new Animal('Pepik', 3);
console.log(zvire);
zvire.sayHallo()


const zvire2 = new Animal('zofie', 5);
console.log(zvire2);
zvire2.sayHallo()

//vytvořili jsme třídu pro kocky která dědí ze třídy animal

class Cat extends Animal {
    constructor(name, age, color, lives) {
        super(name, age);
        this.color = color;
        this.lives = lives;
    }

    sayHallo() {
        console.log(`Mnau jsem ${this.name} a je mi ${this.age} let. Moje barva je ${this.color}`)
    }

    meow(){
        console.log('mnau, chci jíst')
    }

    die(){
        this.lives--;
        console.log(`Zbývá mi už jen ${this.lives}`)
    }
}


const kocka = new Cat ('Micka', 12, 'strakatá', 7);
console.log(kocka);
kocka.sayHallo();
console.log(kocka.name);
kocka.meow();
kocka.die();
kocka.die();
kocka.die();



class People {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    sayHallo() {
        console.log(`Ahoj jsem ${this.name}, je mi ${this.age} let a pracuji jako ${this.job}`);
    }
}

const clovek = new People('Petr', 30, 'programátor');
console.log(clovek);
clovek.sayHallo();


class Girl extends People {
    constructor(name, age, job, hairColor, haveChildren, hobby) {
        super(name, age, job);
        this.hairColor = hairColor;
        this.haveChildren = haveChildren;
        this.hobby = hobby;
    }
    sayHallo() {
        console.log(`Ahoj jsem ${this.name}, je mi ${this.age} let, pracuji jako ${this.job}, mám ${this.hairColor} vlasy, také mám ${this.haveChildren} děti, moje koníčky jsou: ${this.hobby}`);
    }

}

const novaHolka = new Girl('Kateřina', 27, 'učitelka', 'hnědé', 2, ['čtení', 'cestování', 'malování']);

console.log(novaHolka);
novaHolka.sayHallo();
