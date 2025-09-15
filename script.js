import { get } from "./functions/utils.js";

export let whatsapp = "https://wa.me/16992909552";
let instagram = "https://www.instagram.com/math.arantes/";
let linkedin = "https://www.linkedin.com/in/matheus-arantes-688528360/";

export let footer = `
    <p>Developed by Matheus Arantes Ferreira</p>
    <h2>MAF</h2>
    <p>Estamos felizes por ter você conosco.</p>
`;

export let nav = `
    <a href="../index.html">
        <div class="icon home"></div>
        <span>Voltar</span>
    </a>
    <a href="${linkedin}">
        <div class="icon linkedin"></div>
        <span>Linkedin</span>
    </a>
    <a href="${instagram}">
        <div class="icon instagram"></div>
        <span>Instagram</span>
    </a>
    <a href="${whatsapp}">
        <div class="icon whatsapp"></div>
        <span>WhatsApp</span>
    </a>
    <h2>MAF</h2>
`;

get('footer').innerHTML=footer;