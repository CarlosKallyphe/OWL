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
    pergunta     : "Qual é o quarto nome do Dumbledore?",
    alternativaA : "Percival",
    alternativaB : "Brian",
    alternativaC : "Wulfrico",
    alternativaD : "Alvo",
    correta      : "Brian",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual foi a quinta Horcrux a ser destruída?",
    alternativaA : "Taça",
    alternativaB : "Anel",
    alternativaC : "Medalhão",
    alternativaD : "Diadema",
    correta      : "Diadema",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Os Senhores Aluado, Rabicho, Almofadinhas e Pontas eram respectivamente:",
    alternativaA : "James Potter, Peter Pettigrew, Frank Longbottom e Sirius Black.",
    alternativaB : "Remus Lupin, Severo Snape, Régulo Black e Peter Pettigrew.",
    alternativaC : "Remus Lupin, Peter Pettigrew, Sirius Black e James Potter. ",
    alternativaD : "Remus Lupin, Peter Pettigrew, James Potter e Sirius Black.",
    correta      : "Remus Lupin, Peter Pettigrew, Sirius Black e James Potter. ",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "'As coisas que perdemos sempre acabam voltando para nós. Mas nem sempre da forma que esperamos.' Quem disse essa frase?",
    alternativaA : "Alvo Dumbledore ",
    alternativaB : "Hermione Granger",
    alternativaC : "Luna Lovegood",
    alternativaD : "Remus Lupin",
    correta      : "Luna Lovegood",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o nome completo da Hermione?",
    alternativaA : "Hermione Jean Granger",
    alternativaB : "Hermione Jane Granger ",
    alternativaC : "Hermione Mary Granger ",
    alternativaD : "Hermione Marie Granger ",
    correta      : "Hermione Jean Granger",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Quando Rony Weasley nasceu?",
    alternativaA : "27 de Fevereiro de 1980",
    alternativaB : "6 de Dezembro de 1979",
    alternativaC : "5 de Janeiro de 1980",
    alternativaD : "1 de Março de 1980",
    correta      : "1 de Março de 1980",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Em que ano foi lançado o primeiro livro de Harry Potter (no Reino Unido)?",
    alternativaA : "2000",
    alternativaB : "2001",
    alternativaC : "1999",
    alternativaD : "1997",
    correta      : "1997",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Alastor Moody transforma Draco Malfoy em que animal?",
    alternativaA : "Furão",
    alternativaB : "Texugo",
    alternativaC : "Doninha",
    alternativaD : "Suricato",
    correta      : "Doninha",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual o número do cofre que o Hagrid leva o Harry na primeira vez que foram no Gringotes?",
    alternativaA : "714",
    alternativaB : "713",
    alternativaC : "471",
    alternativaD : "437",
    correta      : "713",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual é o verdadeiro nome de Voldemort? ",
    alternativaA : "Tom Gaunt Riddle",
    alternativaB : "Tom Servolo Riddle",
    alternativaC : "Tom Servolo Gaunt",
    alternativaD : "Tom Gaunt Perverel",
    correta      : "Tom Servolo Riddle",
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