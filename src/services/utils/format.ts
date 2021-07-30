function formatCurrency(value:number, category:string) {
    const signal = category==='expense'?'-':''
    return `${signal} $ ${(value/100).toFixed(2).replace('.', ',')}`
}

function formatDate(date:string) {
    return date.split('-').reverse().join('/')
}

export { formatCurrency, formatDate }