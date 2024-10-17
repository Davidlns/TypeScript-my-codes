class LinguaLatina {
    public exibir_informacao():void {
        console.log("Esta classe contém informações sobre a língua latina");
    }
}
class LinguaPortuguesa extends LinguaLatina{
    public exibir_informacao(): void {
        console.log("Esta classe contém informações sobre a língua portuguesa");
    }
}

const obj1 = new LinguaLatina();
const obj2 = new LinguaPortuguesa();
obj1.exibir_informacao();
obj2.exibir_informacao();