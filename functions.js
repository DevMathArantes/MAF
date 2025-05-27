//Funções para ajudar o programador

//Retorna o elemento com o id desejado
function get(id){
    return document.getElementById(id);
}

//Troca o display de um elemento entre none e block
function dijuntor(id){
    if(get(id).style.display=='block'){
        get(id).style.display='none';
    }else{
        get(id).style.display='block';
    }
}

//
let agora = new Date();
let hora = agora.getHours();
function periodo(){
    if(hora>11){
        return "Boa tarde";
    } else if(hora>17){
        return "Boa noite";
    } else{
        return "Bom dia"
    }
}

//Funções principais

function solicita(titulo){
    dijuntor('solicita');
    get('solicita').innerHTML=`
        <div id="formulario" class="formularioEsquerda">
            <button onclick="dijuntor('solicita')" class="fechar">
                <img src="Assets/Icons/fechar.png" alt="icone fechar">
            </button>
            <h3 id="sistema" class="reescrever">${titulo}...</h3>
            <p>Preencha o formulário com seus dados</p>
            <input id="nome" type="text" placeholder="Nome">
            <input id="endereco" type="text" placeholder="Endereço">
            <button class="btnPadrao" onclick="verifica()">Gerar Solicitação</button>
        </div>
    `;
}

function verifica(){
    
    let nome = get('nome').value;
    let endereco = get('endereco').value;
    let sistema = get('sistema').innerHTML;
    if(nome !== "" && endereco !== ""){
        montarSolicita(nome,endereco,sistema);
    }else{
        alert("Preencha todos os campos...");
    }
}

function montarSolicita(nome, endereco, sistema){
    let link = "https://wa.me/5516992909552?text="
    +periodo()
    +",%20me%20chamo%20"
    +nome
    +",%20do%20endereço%20"
    +endereco
    +"%20e%20estou%20interessado(a)%20no%20seguinte%20sistema:%20"
    +sistema;
    get('formulario').innerHTML=`
        <button onclick="dijuntor('solicita')" class="fechar">
            <img src="Assets/Icons/fechar.png" alt="icone fechar">
        </button>
        <a class="btnPadrao" href="${link}">Enviar Solicitação</a>
    `;
}