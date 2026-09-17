// formas de tipar 
// forma 1 
let idade: number; 
// forma 2 
const nome: string = "Seu zé";
// forma 3 não recomendado por ser redundante
const sobrenome: string = "da Silva";

// Tipagem especiais
type usuario = { "nick": string, "age": number }

// chamando type novo
let jugador: usuario = { nick: "Ricardo", age: 18 };
let jogadorVelho: usuario = { nick: "toin", age: 76 }; // Corrigido aqui!

function verificarIdade(usuarioAtual: usuario) {
    if (usuarioAtual.age >= 21) {
        // Corrigido: Usando crases (`) para a interpolação funcionar
        console.log(` acesso liberado: o jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso joguinho muito massa de pei pei 👍!`);
    } else {
        // Corrigido aqui: Ajustada a sintaxe do ${usuarioAtual.nick} e uso de crases
        console.log(`EI ${usuarioAtual.nick} È de menor pode da pei pei não só ${usuarioAtual.age} anos um bebê`);
    }
} // Chave de fechamento da função adicionada aqui!

verificarIdade(jugador);
verificarIdade(jogadorVelho);
