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

let head = document.querySelector('.cabecalho')
let body = document.body
let cards = document.querySelectorAll('.cards')
let cardTotal = document.querySelector('.cards.total')
let foot = document.querySelector('.rodape-link')
let tableTitle = document.querySelectorAll('.title')
let tableDate = document.querySelectorAll('.date')
let tableDescription = document.querySelectorAll('.description')

let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let rocket = document.querySelector('.rocket')

function selectStyle() {
    let theme
    switch (style) {
        case 'light':
            theme = themeDark;
            style = 'dark'
            sun.style.opacity = 0
            moon.style.opacity = 1
            rocket.style.opacity = 0
            break;
        case 'dark':
            theme = themeRocketseat
            style = 'rocket'
            sun.style.opacity = 0
            moon.style.opacity = 0
            rocket.style.opacity = 1
            break;
        case 'rocket':
            theme = themeDefault
            style = 'light'
            sun.style.opacity = 1
            moon.style.opacity = 0
            rocket.style.opacity = 0
            break;
    }

    changeColor(theme)
}

function changeColor(pallette) {
    head.style.background = pallette[1]
    
    body.style.background = pallette[2]

    cardTotal.style.background = pallette[4]

    for(i=0; i<(cards.length-1); i++) {
        cards.item(i).style.background = pallette[3]
        cards.item(i).style.color = pallette[0]
    }

    for(let date of tableDate)  {
        date.style.color = pallette[6]
    }

    for(let description of tableDescription)  {
        description.style.color = pallette[6]
    }
    
    for(let title of tableTitle)  {
        title.style.color = pallette[6]
    }

    foot.style.color = pallette[6]
}
