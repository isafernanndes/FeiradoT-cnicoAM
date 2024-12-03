const frases = [
    "Acredite em você e tudo será possível.",
    "O sucesso é a soma de pequenos esforços diários.",
    "Seu esforço hoje é o caminho para a conquista de amanhã.",
    "Persista, mesmo quando for difícil.",
    "Você é mais forte do que imagina.",
    "Cada dia é uma nova oportunidade para vencer.",
    "Não desista, o futuro agradece seu esforço.",
    "Aprender nunca é um erro, é um investimento.",
    "O segredo do sucesso está na disciplina.",
    "O impossível é só uma questão de perspectiva."
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("frase-do-dia").textContent = fraseAleatoria;
