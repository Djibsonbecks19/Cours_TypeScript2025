import { CalculatriceService } from "./calculatrice.service";
function main() {
    const a = 10;
    const b = 5;
    const operation = "addition";
    try {
        const resultat = new CalculatriceService();
        resultat.setA(a);
        resultat.setB(b);
        console.log(`Le résultat de ${operation} entre ${a} et ${b} est : ${resultat.calculatrice(operation)}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
main();
