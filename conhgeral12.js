let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0
let placar = 0

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')


let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "De quem é a frase: 'Penso, logo existo'?",
    alternativaA : "Sócrates",
    alternativaB : "Descartes",
    alternativaC : "Aristóteles",
    alternativaD : "Galileu Galilei",
    correta      : "Descartes",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é o idioma falado na Angola?",
    alternativaA : "Francês",
    alternativaB : "Espanhol",
    alternativaC : "Português",
    alternativaD : "Holandês",
    correta      : "Português",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é o menor país do mundo?",
    alternativaA : "Vaticano",
    alternativaB : "Gibraltar",
    alternativaC : "San Marino",
    alternativaD : "Mônaco",
    correta      : "Vaticano",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quais destas construções famosas estão localizadas nos Estados Unidos?",
    alternativaA : "Estátua da Liberdade, Golden Gate Bridge e Empire State Building",
    alternativaB : "Estátua da Liberdade, Big Ben e The High Line",
    alternativaC : "Angkor Wat, Taj Mahal e Skywalk no Grand Canyon",
    alternativaD : "Lincoln Memorial, Sidney Opera House e Burj Khalifa",
    correta      : "Estátua da Liberdade, Golden Gate Bridge e Empire State Building",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quem é o autor de ('O Príncipe')?",
    alternativaA : "Maquiavel",
    alternativaB : "Antoine de Saint-Exupéry",
    alternativaC : "Montesquieu",
    alternativaD : "Thomas Hobbes",
    correta      : "Maquiavel",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Júpiter e Plutão são correspondentes romanos de quais deuses gregos?",
    alternativaA : "Ares e Hermes",
    alternativaB : "Cronos e Apolo",
    alternativaC : "Zeus e Hades",
    alternativaD : "Zeus e Ares",
    correta      : "Zeus e Hades",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual é a capital da Austrália?",
    alternativaA : "Camberra",
    alternativaB : "Tasmânia",
    alternativaC : "Queensland",
    alternativaD : "Norfolk",
    correta      : "Camberra",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quem amamentou os gêmeos Rômulo e Remo?",
    alternativaA : "Uma cabra",
    alternativaB : "Uma loba",
    alternativaC : "Uma ovelha",
    alternativaD : "Uma gata",
    correta      : "Uma loba",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?",
    alternativaA : "Veias",
    alternativaB : "Àtrios",
    alternativaC : "Ventrículos",
    alternativaD : "Artérias",
    correta      : "Artérias",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Com quais desses países da América do Sul o Brasil não faz fronteira?",
    alternativaA : "Venezuela é Equador",
    alternativaB : "Colômbia e Bolívia",
    alternativaC : "Chile e Equador",
    alternativaD : "Peru e Guiana",
    correta      : "Chile e Equador",
}


const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent

    let certa = questoes[numeroDaQuestao].correta


    if(respostaEscolhida == certa) {
        console.log("Acertou! 😊")
        pontos += 10 
    } else {
        console.log("Errou! 😢")
    }

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont
    alert(`Muito bem! Você conseguiu ${pontos} ${pont}`)

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}