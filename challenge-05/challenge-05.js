/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var a = [1,'1', true, {}, '2'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(a)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFArr(arr, ind) {
    return arr[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var b = [1,'1', true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFArr(b,0));
console.log(myFArr(b,1));
console.log(myFArr(b,2));
console.log(myFArr(b,3));
console.log(myFArr(b,4));

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
function book(nameBook) {
    var allBooks = {
        'name1': {
            quantidadePaginas: 455,
            autor: '01',
            editora: 'lala'
        },
        'name2': {
            quantidadePaginas: 544,
            autor: '02',
            editora: 'kaka'
        },
        'name3': {
            quantidadePaginas: 895,
            autor: '03',
            editora: 'rara'
        }
    };

    return !nameBook ? allBooks : allBooks[nameBook];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro nome1 tem '+ book('name1').quantidadePaginas +' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro name2 é ' + book('name2').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro name3 foi publicado pela editora ' + book('name3').editora + '.' );