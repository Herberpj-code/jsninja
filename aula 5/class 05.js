/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayFunction(array) {
     return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrayFunction(array)[2]; // 3

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayFunction2(array, num) {
     return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [1, null, undefined, 'herber', true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayFunction(newArray); // [ 1, null, undefined, 'herber', true ]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

//My Function
function book(livro) {
	var livro = {
		'livro1': {
			quantidadePaginas: 50,
			autor: 'Herber',
			editora: 'cia do saber'},
		'livro2': {
			quantidadePaginas: 60,
			autor: 'Jonas',
			editora: 'letrinhas'},
		'livro3': {
			quantidadePaginas: 70,
			autor: 'Fernando',
			editora: 'casa do codigo'}
    }
}

//Instructor Function

function book(livro) {
	var allBooks = {
		'livro1': {
			quantidadePaginas: 50,
			autor: 'Herber',
			editora: 'cia do saber'},
		'livro2': {
			quantidadePaginas: 60,
			autor: 'Jonas',
			editora: 'letrinhas'},
		'livro3': {
			quantidadePaginas: 70,
			autor: 'Fernando',
			editora: 'casa do codigo'}
    }

    return !livro ? allBooks : allBooks [ livro ];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('o livro1 tem ' + book('livro1').quantidadePaginas + ' ' + 'paginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('o autor do livro1 é ' + book('livro1').autor+'.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('o livro1 foi publicado pela editora ' + book('livro1').editora+'.')