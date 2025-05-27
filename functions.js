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

//Funções principais

function solicita(titulo){
    dijuntor('solicita');
    get('solicita').innerHTML=`
        <div class="formularioEsquerda">
            <button onclick="dijuntor('solicita')" class="fechar">
                <img src="Assets/Icons/fechar.png" alt="icone fechar">
            </button>
            <h3 class="reescrever">${titulo}...</h3>
            <p>Preencha o formulário com seus dados</p>
            <input type="text" placeholder="Nome">
            <input type="text" placeholder="Endereço">
            <button class="btnPadrao">Gerar Solicitação</button>
        </div>
    `;
}