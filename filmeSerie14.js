let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

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
    pergunta     : "Em que ano a Netflix foi fundada?",
    alternativaA : "1997",
    alternativaB : "2001",
    alternativaC : "2009",
    alternativaD : "2015",
    correta      : "1997",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual foi a série mais assistida da Netflix em 2019?",
    alternativaA : "Friends",
    alternativaB : "Stranger Things",
    alternativaC : "Riverdale",
    alternativaD : "Brooklyn 99",
    correta      : "Stranger Things",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual o nome do primeiro filme da Pixar?",
    alternativaA : "Toy Story",
    alternativaB : "Up: Altas Aventuras",
    alternativaC : "Procurando Nemo",
    alternativaD : "Valente",
    correta      : "Toy Story",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual nome da cafeteria em Friends?",
    alternativaA : "Central Perk",
    alternativaB : "Central Park",
    alternativaC : "Central Coffee",
    alternativaD : "Coffee and Tea",
    correta      : "Central Perk",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual o nome do primeiro filme da Disney?",
    alternativaA : "Branca de Neve e os Sete Anões",
    alternativaB : "A Dama e o Vagabundo",
    alternativaC : "101 Dálmatas",
    alternativaD : "Aristogatas",
    correta      : "Branca de Neve e os Sete Anões",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual filme com maior bilheteria?",
    alternativaA : "Avatar",
    alternativaB : "Vingadores: Ultimato",
    alternativaC : "Titanic",
    alternativaD : "Homem-Aranha: Sem volta para casa",
    correta      : "Avatar",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual o top 1 da Netflix atualmente?",
    alternativaA : "A grande virada",
    alternativaB : "Uma linda vida",
    alternativaC : "Atirador",
    alternativaD : "Tin&Tina",
    correta      : "Uma linda vida",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quantas temporadas tem a série The Walking Dead?",
    alternativaA : "10",
    alternativaB : "11",
    alternativaC : "12",
    alternativaD : "13",
    correta      : "11",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Em qual temporada da série Grey's Anatomy o personagem Derek Shepherd morre?",
    alternativaA : "11",
    alternativaB : "12",
    alternativaC : "13",
    alternativaD : "14",
    correta      : "11",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Em que ano lançou a primeira temporada da série La Casa de Papel?",
    alternativaA : "2016",
    alternativaB : "2017",
    alternativaC : "2018",
    alternativaD : "2019",
    correta      : "2017",
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