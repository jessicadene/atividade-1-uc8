let dataevento = [15, 09, 2021];
let dataHoje = [14, 09, 2021];
let idade = 16;

if((dataevento[2] - dataHoje[2]) < 0){
    console.log("Impossível marcar, pois o ANO  é posterior ao Evento!!!");
} else if ((dataevento[1] - dataHoje[1]) < 0){
    console.log("Impossível marcar, pois o MÊS  é posterior ao evento!!");
} else if (((dataevento[0] - dataHoje[0]) < 0) && ((dataevento[1] - dataHoje[1]) == 0)){
    console.log("Impossível marcar, pois o DIA  é posterior ao Evento!");
} else {
    if(idade < 18){
        console.log("Impossível marcar, pois a idade é inferior a 18 anos.");
    } else {
        console.log("Marcado com Sucesso!!");
    }        
}

let listaDeParticipantesEPalestrantes = ["Marcela", "João", "Mário", "Helena", "Jessica", "Milena", "José", "Jonas", "Pedro"];
let quantidadeDeParticipantesEPalestrantes = listaDeParticipantesEPalestrantes.length;
console.log(quantidadeDeParticipantesEPalestrantes);


let listaDeParticipantes = 09;
    if (listaDeParticipantes >= 100) {
        console.log("impossivel cadastrar - excedido limite" );
   
} 
else  {
 console.log( "Cadastro Permitido");
}