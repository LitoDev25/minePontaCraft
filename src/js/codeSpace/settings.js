class Settings {
    constructor() {
        this.title =   document.querySelector('title');
        this.localeH3 = document.querySelector('h3.localeCity');
        this.dateFH3 = document.querySelector('h3.dateNota');
    }

    /**
     * 
     * @param {string} txtTitle 
     * @returns {string}
     */
    setATitle(txtTitle){
        this.title.innerHTML = txtTitle
    }

    /**
     * 
     * @param {string} city 
     * @returns {string}
     */
    setLocaleCity(city) {
        this.localeH3.innerHTML = city;
    }

    /**
     * @returns {string}
     */
    setDateOnPage() {
        const date = new Date();
        let day;
        let mounth;
        let year = date.getFullYear();

        if (date.getDate() < 10) {
            day = `0${date.getDate()}`;
        } else {
            day = date.getDate();
        }

        switch (date.getMonth()) {
            case 0:
                mounth = 1;
                break;

            case 1:
                mounth = 2;
                break;

            case 2:
                mounth = 3;
                break;

            case 3:
                mounth = 4;
                break;

            case 4:
                mounth = 5;
                break;

            case 5:
                mounth = 6;
                break;

            case 6:
                mounth = 7;
                break;

            case 7:
                mounth = 8;
                break;

            case 9:
                mounth = 10;
                break;

            case 10:
                mounth = 11;
                break;

            case 11:
                mounth = 12;
                break;
        
            default:
                break;
        }

        if (mounth < 10) {
            mounth = `0${mounth}`;
        } else {
            mounth = mounth;
        }

        this.dateFH3.innerHTML = `${day} / ${mounth} / ${year}`;
    }
}
