class Templates {
    constructor() {
        this.sec = document.createElement('section')
        this.mainBox = document.createElement('div');
        this.postImg = document.createElement('div');
        this.img = document.createElement('img');
        this.txtApresentation = document.createElement('div');
        this.txtH3 = document.createElement('h3');
        this.txtP = document.createElement('p');

        //about

    }

    home() {
        this.mainBox.className = 'main-box'
        this.postImg.className = 'poster-img';
        this.txtApresentation.className = 'txt-apresentation'
        this.img.src = './src/img/mainPoster.webp';
        this.txtH3.innerHTML = 'Bem vido ao servidor de Ponta de Pedras.';
        this.txtP.innerHTML = `Essa página foi criada com o intuito de direcionar os participantes
        do nosso server. Na aba sobre estarão as instruções para o acesso o download
        do apk entre outras iformações.`


        // Appends
        this.sec.appendChild(this.mainBox);
        this.mainBox.appendChild(this.postImg);
        this.mainBox.appendChild(this.txtApresentation);
        this.postImg.appendChild(this.img);
        this.txtApresentation.appendChild(this.txtH3);
        this.txtApresentation.appendChild(this.txtP);

        return this.sec.innerHTML;
    }

    about() {
        return `<div id="main-box">
        <div class="m-about" id="sobre-nos">
            <h4>Saiba um pouco mais sobre nós</h4>
            <button class="sobre-btn">Sobre nós</button>
        </div>
        <div class="m-about" id="regras">
            <h4>Veja as regras do nosso servidor</h4>
            <button class="rules">Regras</button>
        </div>
        <div class="m-about" id="links">
            <h4>Veja aqui os links para downloads entre outros endereços</h4>
            <button class="links">Links</button>
        </div>
        <div class="m-about" id="eventos">
            <h4>Fique de olho nos eventos do nosso servidor</h4>
            <button class="events">Eventos</button>
        </div>
    </div>`
    }

    contact() {
        return `<div id="main-box">
        <div class="m-about" id="facebook">
            <h4>Grupo do Facebook:</h4>
            <a href="https://facebook.com/groups/1034944277665282/">Facebook</a>
        </div>
        <div class="m-about" id="Whatsapp">
            <h4>Grupo Whatsapp</h4>
            <a href="https://chat.whatsapp.com/F6okB3bY6cA70ZBMk6J9oH">Whatsapp</a>
        </div>
        <div class="m-about" id="youtube">
            <h4>Veja nosso youtube</h4>
            <a href="">Youtube</a>
        </div>
    </div>`
    }

    sobreNos() {
        return `<div id="main-box">
        <button class="back" style="position: absolute; top:50px; left:10px;">voltar</button>
        <div class="txt-apresentation">
        <h1>Quem somos?</h1>
        <p>Somos um grupo que jogamos Minecraft PE, em conjunto elaborando regras e metodos que ajudem a convivencia em grupo, algo como uma familia, para participar precisa responder perguntas, que vão ser avaliadas pelo administrador. No nosso servidor costumamos morar em uma Cidade Chamada Capital, onde criamos varios eventos em conjunto que chamamos de Festival. Buscamos pessoas que queiram somar e ajudar o grupo a crescer tanto no servidor quanto aqui na página.
        </p></div>
    </div>`;
    }

    rules() {
        return `<div id="main-box">
        <button class="back" style="position: absolute; top:50px; left:10px;">voltar</button>
        <div class="txt-apresentation">
        <h1>Mandamentos do server:</h1>
        <p>1 - Não Matarás <br>
        2 - Não Furtar <br> 
        3 - Não Intervir no Território do Próximo <br> 
        4 - Dormir não é Obrigatório <br>
        5 - Punição para Quem Infringir as Regras é Determinado Pelo Grupo <br>
        6 - Placas e Muros Tornam Propriedade Privada.
        </p></div>
    </div>`;
    }

    links() {
        return `<div id="main-box">
        <button class="back" style="position: absolute; top:50px; left:10px;">voltar</button>
        <div class="m-about" id="endereco">
            <h4>Endereço e host do servidor para entrar no jogo:</h4>
            <p>Endereço: <span style="color: blue;">AluizioNetto.aternos.me</span> <br>
            Porta: <span style="color:blue;">34584</span></p>
        </div>
        <div class="m-about" id="ver-down">
            <h4>Download da versão do miecraft usada no server</h4>
            <a href="https://drive.google.com/file/d/1-DJQT8CU_x3_5LMg0GrCU4luLxyy0CS6/view?usp=drivesdk">Download</a>
        </div>
    </div>`
    }

    events() {
        return `<div id="main-box">
        <button class="back" style="position: absolute; top:50px; left:10px;">voltar</button>
        <div class="txt-apresentation">
        <h1>Nada o momento...</h1>
        <p>Em breve podemos atualizar a aba de eventos</p></div>
    </div>`;
    }
}