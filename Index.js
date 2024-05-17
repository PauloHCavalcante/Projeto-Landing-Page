var setadireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function rolarparadireita(){
    leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top 55px" 
}

function rolarparaesquerda(){
    leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}