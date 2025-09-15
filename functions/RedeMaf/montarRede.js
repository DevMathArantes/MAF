import { get } from "../utils.js";
import { regioes } from "./script.js";

let htmlRede;
let settings;
let elementoRede;

//Monta toda a rede
export function montarRede(){
    get('redes').innerHTML=``;
    for(let i = 0; i < regioes.length; i++){
        rede(regioes[i]);
    }
}

//Monta rede da região
export function rede(rede){

    htmlRede = ``;
    settings = rede[0];

    //Montando section
    get('redes').innerHTML+=`
        <h2 class="titulo-section">${settings[1]}</h2>
        <section class="carrossel-hibrido" id="${settings[0]}"></section>
    `;

    //Preenchendo section
    for(let i = 1; i < rede.length; i++){
        elementoRede = rede[i];
        htmlRede +=`
            <a class="painel-imagem" href="${elementoRede[0]}">
                <img src="../assets/images/ambiente${elementoRede[1]}.png" alt="Foto do ambiente">
                <h3 class="titulo${elementoRede[1]}">${elementoRede[2]}</h3>
                <p>${elementoRede[3]}</p>
            </a>
        `;
    }
    get(settings[0]).innerHTML=htmlRede;
}

