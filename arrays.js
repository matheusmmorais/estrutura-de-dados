const pilotos = ['Senna','Prost','Schumacher','Hamilton'];

// a indexacao (index) começa pelo numero 0
console.log(pilotos[0]) // senna
console.log(pilotos[3]) // hamilton

// acessar o tamanho do array

console.log(pilotos.length);

// iterável

for (let piloto of pilotos) {
    console.log(piloto);
};

// adicionar elemento

pilotos.push('Alonso');

// encontrar o senna

const senna = pilotos.find(piloto => piloto === 'senna');

// deletar um elemento

pilotos.splice(1,1);