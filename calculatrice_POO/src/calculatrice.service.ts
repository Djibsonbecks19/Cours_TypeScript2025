export class CalculatriceService {

    private  a: number = 0;
    private  b: number = 0;

    public constructor(){

    }

    public setA(a: number): void {
        this.a = a;
    }
    public setB(b: number): void {
        this.b = b;
    }
    private addition(): number {
        return this.a + this.b;
    }
    private soustraction(): number {
        return this.a - this.b;
    }
    
    private multiplicaiton(): number {
        return this.a * this.b;
    }
    
    private division(): number {
        if (this.b === 0) {
            throw new Error("Division par zéro impossible.");
        }
        return this.a / this.b;
    }
    
    calculatrice(operation: string): number {
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