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
