export class CalculatriceService {
    constructor() {
        this.a = 0;
        this.b = 0;
    }
    setA(a) {
        this.a = a;
    }
    setB(b) {
        this.b = b;
    }
    addition() {
        return this.a + this.b;
    }
    soustraction() {
        return this.a - this.b;
    }
    multiplicaiton() {
        return this.a * this.b;
    }
    division() {
        if (this.b === 0) {
            throw new Error("Division par zéro impossible.");
        }
        return this.a / this.b;
    }
    calculatrice(operation) {
        switch (operation) {
            case "addition":
                return this.addition();
            case "soustraction":
                return this.soustraction();
            case "multiplication":
                return this.multiplicaiton();
            case "division":
                return this.division();
            default:
                throw new Error("Opération non reconnue.");
        }
    }
}
