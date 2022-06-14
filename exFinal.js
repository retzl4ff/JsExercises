let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Numero inválido ou já presente na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length > 1){
        res.innerHTML = `<br>Ao todo, temos ${valores.length} números cadastrados`
    } else if(valores.length == 1) {
        res.innerHTML = `<br>Ao todo, temos ${valores.length} número cadastrado`
    } else {
        res.innerHTML = `<br>Não há numeros cadastrados!`
    }
    let maior = Math.max.apply(Math,valores)
    let menor = Math.min.apply(Math,valores)
    let soma = 0
    for(let pos in valores) {
        soma = soma + valores[pos]
    }
    let media = soma/valores.length
    res.innerHTML = ''
    res.innerHTML += `<p>O maior valor informado foi ${maior}`
    res.innerHTML += `<p>O menor valor informado foi ${menor}`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}`
    res.innerHTML += `<p>A média dos valores digitados é ${media}`
}