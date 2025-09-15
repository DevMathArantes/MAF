import { regioes } from "./script.js";
import { montarRede, rede } from "./montarRede.js";
import { get } from "../utils.js";

let regiao;
let settings;

//Montagem das opções do filtro
export function montarSelect(){
    for(let i = 0; i < regioes.length; i++){
        regiao = regioes[i];
        settings = regiao[0];
        get('selectRedes').innerHTML+=`
            <option value="${settings[0]}">${settings[1]}</option>
        `;
    }
}

//Filtrar a rede
export function filtrarRede(){

    get('redes').innerHTML=``;

    if(get('selectRedes').value != "redeTotal"){

        for(let i = 0; i < regioes.length; i++){

            regiao = regioes[i];
            settings = regiao[0];
            if(get('selectRedes').value == settings[0]){
                
                rede(regiao);

            }

        }
    } else{
        montarRede();
    }
}