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
    pergunta     : "Quais são as cores da bandeira nacional do Brasil?",
    alternativaA : "Verde e amarela",
    alternativaB : "Azul e branca",
    alternativaC : "Vermelha e branca",
    alternativaD : "Verde e vermelha",
    correta      : "Verde e amarela",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quantas estrelas há na bandeira dos Estados Unidos da América?",
    alternativaA : "13",
    alternativaB : "50",
    alternativaC : "48",
    alternativaD : "52",
    correta      : "50",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quais são as cores da bandeira da Alemanha?",
    alternativaA : "Vermelha, preta e amarela",
    alternativaB : "Vermelha, dourada e preta",
    alternativaC : "Azul, verde e amarela",
    alternativaD : "Branca, vermelha e azul",
    correta      : "Vermelha, dourada e preta",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quais são as cores presentes na bandeira da França?",
    alternativaA : "Vermelha e verde",
    alternativaB : "Azul e amarela",
    alternativaC : "Vermelha e branca",
    alternativaD : "Azul, branca e vermelha",
    correta      : "Azul, branca e vermelha",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o nome da bandeira que representa o Reino Unido?",
    alternativaA : "Union Jack",
    alternativaB : "United Kingdom",
    alternativaC : "Estrela de Davi",
    alternativaD : "Sol de Maio",
    correta      : "Union Jack",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Em qual país você encontraria uma bandeira com uma folha de plátano vermelha em seu centro?",
    alternativaA : "Canadá",
    alternativaB : "Líbano",
    alternativaC : "Austrália",
    alternativaD : "Índia",
    correta      : "Canadá",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Quais são as cores da bandeira olímpica?",
    alternativaA : "Vermelha, branca e azul",
    alternativaB : "Vermelha, verde e amarela",
    alternativaC : "Azul, amarela e preta",
    alternativaD : "Azul, amarela, preta, verde e vermelha",
    correta      : "Azul, amarela, preta, verde e vermelha",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é o país cuja bandeira é composta por um círculo vermelho em um fundo verde?",
    alternativaA : "China",
    alternativaB : "Japão",
    alternativaC : "Blangladesh",
    alternativaD : "Indonésia",
    correta      : "Blangladesh",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é o único país do mundo cuja bandeira não é retangular ou quadrada?",
    alternativaA : "Nepal",
    alternativaB : "Suíça",
    alternativaC : "Blangladesh",
    alternativaD : "Vietnã",
    correta      : "Nepal",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Em qual país você encontraria uma bandeira com uma estrela branca em um círculo vermelho em seu canto superior esquerdo?",
    alternativaA : "Chile",
    alternativaB : "Coreia do Sul",
    alternativaC : "Taiwan",
    alternativaD : "Blangladesh",
    correta      : "Taiwan",
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