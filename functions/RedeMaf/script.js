import { montarRede } from "./montarRede.js";
import { igarapava } from "../../lists/igarapava.js";
import { aramina } from "../../lists/aramina.js";
import { filtrarRede, montarSelect } from "./filtrarRede.js";
import { get } from "../utils.js";
import { footer, nav, whatsapp } from "../../script.js";

export let regioes = [igarapava, aramina];
montarRede();
montarSelect();
window.globalFiltrarRede = filtrarRede;

get('footer').innerHTML = footer;
get('navRedeMaf').innerHTML = nav;
get('negociarRede').href = whatsapp+"text=Olá,%20estou%20interessado(a)%20em%20fazer%20parte%20da%20rede%20de%20divulgação%20MAF";