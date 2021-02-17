interface UserInterface{
    name: string; 
    email: string;
    age: number;
    register();
    payInvoice(); 
}

class User implements UserInterface{
    // optional to use access modifiers
    // - private can't be accessed outside the class
    // - public can be accessed anywhere
    // - protected can be accessed from any class that inherits from this one
    name: string; 
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
        
        console.log(`User details: ${this.name}`)
    }

        register() {
            console.log('registered');
        }

        payInvoice() {
            console.log('paid');
        }
}

let user = new User('Daffy ducky', 'quack@gmail.com', 30)


class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice()
    }
}

let buggs: User = new Member(1, 'Buggs Bunny', 'buggs@gmail.com', 35)
buggs.payInvoice()
