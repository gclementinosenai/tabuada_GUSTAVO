let btnEnviar = document.getElementById('calc')
btnEnviar.addEventListener("click", calcular)
let resposta = ''

function calcular(){

    let input1 = document.getElementById('n1')
    let resp = document.getElementById('resp')
    let n1 = input1.value

    resposta = ""

    if(n1 <=10 && n1 > 0){
    for(let i = 1; i <= 10; i++){
        resposta += `${n1} x ${i} = ${n1 * i}. \n`
    }
    resp.innerText = `${resposta}`
    } else {
        alert("Esse número não está disponível. Digite outro número !")
    }
}