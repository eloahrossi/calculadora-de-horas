let hi = document.getElementById("HoraInicial");
let mi = document.getElementById("MinInicial");
let hf = document.getElementById("HoraFinal");
let mf = document.getElementById("MinFinal");
let resultado = document.getElementById("r");

function soma(){
    let somaHora =  Number(hi.value) =  Number(hf.value);
    let somaMinuto =  Number(mi.value) +  Number(mf.value);

    resultado.innerHTML = somaHora + ":" + somaMinuto;
}

function sub(){

}