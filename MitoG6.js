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
    pergunta     : "Os poemas épicos Ilíada e Odisséia são importantes para o conhecimento de Mitologia Grega. Quem é o autor desses poemas?",
    alternativaA : "Homero",
    alternativaB : "Virgílio",
    alternativaC : "Aristóteles",
    alternativaD : "Platão",
    correta      : "Homero",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quem deu origem ao Universo na Mitologia Grega?",
    alternativaA : "Gaia",
    alternativaB : "Caos",
    alternativaC : "Cronos",
    alternativaD : "Zeus",
    correta      : "Caos",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem matou Medusa?",
    alternativaA : "Teseu",
    alternativaB : "Jasão",
    alternativaC : "Perseu",
    alternativaD : "Hércules",
    correta      : "Perseu",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Todo mundo conhece o semideus Hércules, mas na verdade esse é o seu nome romano. Qual é o nome de Hércules na Mitologia Grega?",
    alternativaA : "Alcides",
    alternativaB : "Ícaro",
    alternativaC : "Heráclito",
    alternativaD : "Héracles",
    correta      : "Héracles",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quem destruiu Urano?",
    alternativaA : "Gaia",
    alternativaB : "Cronos",
    alternativaC : "Tártaro",
    alternativaD : "Tifão",
    correta      : "Cronos",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Quem era a esposa de Cronos?",
    alternativaA : "Têmis",
    alternativaB : "Febe",
    alternativaC : "Réia",
    alternativaD : "Tétis",
    correta      : "Réia",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Quem voou perto demais do Sol?",
    alternativaA : "Dédalo",
    alternativaB : "Hércules",
    alternativaC : "Odisseu",
    alternativaD : "Ícaro",
    correta      : "Ícaro",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quem se apaixonou pelo próprio reflexo?",
    alternativaA : "Narcisio",
    alternativaB : "Édipo",
    alternativaC : "Midas",
    alternativaD : "Jasão",
    correta      : "Narcisio",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Quem criou a humanidade na Mitologia Grega?",
    alternativaA : "Atlas e Prometeu",
    alternativaB : "Zeus e Poseidon",
    alternativaC : "Gaia e Urano",
    alternativaD : "Epimeteu e Prometeu",
    correta      : "Epimeteu e Prometeu",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Quantos são os principais Deuses do Olimpo? ",
    alternativaA : "10",
    alternativaB : "12",
    alternativaC : "8",
    alternativaD : "14",
    correta      : "12",
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