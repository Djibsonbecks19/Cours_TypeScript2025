function addition(a: number, b: number): number {
    return a + b;
}
function soustraction(a: number, b: number): number {
    return a - b;
}

function multiplicaiton(a: number, b: number): number {
    return a * b;
}

function division(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division par zéro impossible.");
    }
    return a / b;
}

function calculatrice(a: number, b: number, operation: string): number {
    switch (operation) {
        case "addition":
            return addition(a, b);
        case "soustraction":
            return soustraction(a, b);
        case "multiplication":
            return multiplicaiton(a, b);
        case "division":
            return division(a, b);
        default:
            throw new Error("Opération non reconnue.");
    }
}

function main() {
    const a = 10;
    const b = 5;
    const operation = "addition";

    try {
        const resultat = calculatrice(a, b, operation);
        console.log(`Le résultat de ${operation} entre ${a} et ${b} est : ${resultat}`);
    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
        }
    }
}
main()