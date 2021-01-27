const  themeDark = [/*.some texts*/'#fff',
                    /*header*/'#000',
                    /*body*/'#484d50',
                    /*cards*/'#235a60',
                    /*cardTotal*/'#40e0d0',
                    /*toogle*/'#0037a4',
                    /*footer*/'#fff']

const themeDefault = [/*.some texts*/'#000',
                      /*header*/'#12a454',
                      /*body*/'#f0f2f5',
                      /*cards*/'#fff',
                      /*cardTotal*/' #3dd705',
                      /*toogle*/'#000',
                      /*footer*/'#363f5f']

const themeRocketseat = [/*.some texts*/'#fff',
                         /*header*/'#7159c1',
                         /*body*/'#000',
                         /*cards*/'#9370DB',
                         /*cardTotal*/'#8A2BE2',
                         /*toogle*/'#fe6e00',
                         /*footer*/'#fff']

let style = 'light'
let svg = 'sun'

let head = document.querySelector('.cabecalho')
let body = document.body
let cards = document.querySelectorAll('.cards')
let cardTotal = document.querySelector('.cards.total')
let toogle = document.querySelector(/*'.circle'*/'.toogle')
let foot = document.querySelector('.rodape-link')
let tableDate = document.querySelectorAll('.date')
let tableDescription = document.querySelectorAll('.description')

function selectStyle() {
    switch (style) {
        case 'light':
            changeColor(themeDark);
            style = 'dark'
            svg = 'moon'
            break;
        case 'dark':
            changeColor(themeRocketseat)
            style = 'rocket'
            svg = 'rocket'
            break;
        case 'rocket':
            changeColor(themeDefault)
            style = 'light'
            svg = 'sun'
            break;
    }
}

function changeColor(pallette) {
    head.style.background = pallette[1]
    body.style.background = pallette[2]
    cardTotal.style.background = pallette[4]
    toogle.style.backgroundImage = '../images/${svg}.svg'

    for(i=0; i<2; i++) {
        cards.item(i).style.background = pallette[3]
        cards.item(i).style.color = pallette[0]
    }

    for (x=0; x<tableDate.length; x++) {
        tableDate[x].style.color = pallette[6]
        tableDescription[x].style.color = pallette[6]
    }

    //tableExpense.style.color = pallette[6]
    //tableIncome.style.color = pallette[6]

    foot.style.color = pallette[6]
}
