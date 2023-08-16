class App {
    constructor() {
        this.root = document.querySelector('#root');
        this.btnHome = document.querySelector('.home')
        this.btnAbout = document.querySelector('.about')
        this.btnContact = document.querySelector('.contact')
        this.setting = new Settings();
        this.template = new Templates();
    }

    /**
     * 
     * @param {string} title 
     * @param {strig} locale 
     * @returns {void}
     */
    setterConfigs(title, locale) {
        this.setting.setATitle(title);
        this.setting.setLocaleCity(locale)
        this.setting.setDateOnPage();
    }

    update() {
        this.setting.setATitle('carregando...');
        this.root.innerHTML = `<div id="main-box"><h1>Carregando...</h1></div>`

        const loaOninitial = setInterval(() => {
            this.setting.setATitle('MinePedraCraft - Início');
            this.root.innerHTML = this.template.home();
            clearInterval(loaOninitial);
        }, 3141);

        this.btnHome.onclick = () => {
            this.setting.setATitle('MinePedraCraft - Início');
            // this.root.innerHTML = '';
            this.root.innerHTML = this.template.home();
        }

        this.btnAbout.onclick = () => {
            this.setting.setATitle('MinePedraCraft - Sobre');
            // this.root.innerHTML = '';
            this.root.innerHTML = this.template.about();
        }

        this.btnContact.onclick = () => {
            this.setting.setATitle('MinePedraCraft - Contatos');
            // this.root.innerHTML = '';
            this.root.innerHTML = this.template.contact();
        }

        document.addEventListener('click', (e) => {
            let el = e.target;

            if(el.classList.contains('sobre-btn')) {
                this.setting.setATitle('MinePedraCraft - Sobre nós');
                this.root.innerHTML = this.template.sobreNos();
            }

            if(el.classList.contains('rules')) {
                this.setting.setATitle('MinePedraCraft - Mandamentos');
                this.root.innerHTML = this.template.rules();
            }

            if(el.classList.contains('links')) {
                this.setting.setATitle('MinePedraCraft - Links');
                this.root.innerHTML = this.template.links();
            }

            if(el.classList.contains('events')) {
                this.setting.setATitle('MinePedraCraft - eventos');
                this.root.innerHTML = this.template.events();
            }

            if (el.classList.contains('back')) {
                this.setting.setATitle('MinePedraCraft - Sobre');
                this.root.innerHTML = this.template.about();
            }
        })
    }
}