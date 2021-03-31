// Declarar uma variável qualquer, que receba um objeto vazio.
var object = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var person = {
     nome: 'Herber',
     sobrenome: 'Pucinelli',
     sexo: 'Masculino',
     idade: 29,
     altura: 1.75,
     peso: 85,
     andando: false,
     caminhouQuantosMetros: 0};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
person.fazerAniversario = function() {
    person.idade++;
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
person.andar = function(metros) {
    if (metros > 0) {
    person.caminhouQuantosMetros += metros;
    person.andando = true;}
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
person.parar = function() {
    person.andando = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
person.nomeCompleto = function() {
    return 'Olá! meu nome é ' + person.nome + ' ' + person.sobrenome;
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
person.mostrarIdade = function() {
    return 'Olá, eu tenho ' + person.idade + ' ' + 'anos!'
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
person.mostrarPeso = function() {
    return 'Eu peso ' + person.peso + ' ' + 'Kg'
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
person.mostrarAltura = function() {
    return 'Minha altura é ' + person.altura + 'm'
};

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.nomeCompleto(); // Herber Pucinelli

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.mostrarIdade(); // 'Olá, eu tenho 30 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.mostrarPeso(); // 'Eu peso 85 Kg'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.mostrarAltura(); // 'Minha altura é 1.75m'

/*
Faça a `pessoa` fazer 3 aniversários.
*/
person.fazerAniversario();
person.fazerAniversario();
person.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
person.mostrarIdade(); // 'Olá, eu tenho 33 anos!'

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
person.andar(5);
person.andar(5);
person.andar(5);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.andando; // andando = true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
person.parar;

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
person.andando. // andando = false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
person.caminhouQuantosMetros(); // 15

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

person.apresentacao = function() {
    var sexo = 'o';
    var idadeAnos = 'anos';
    var metrosCaminhados = 'metros';

    if (person.sexo === "Feminino"){
        sexo ='a';
    }
    if (person.idadeAnos === 1){
        idadeAnos = 'ano';
    }
    if (person.metrosCaminhados === 1) {
        metrosCaminhados = 'metro';
    }

    return 'Olá, eu sou ' + sexo + ' ' + person.nome + ', ' + 'tenho ' + person.idade + ' ' + idadeAnos + ', ' + person.altura + ' ' + 'de altura, meu peso é ' + person.peso +'kgs e, só hoje, eu já caminhei ' + person.caminhouQuantosMetros + ' ' + metrosCaminhados + '!';  
}


// Agora, apresente-se ;)
person.apresentacao(); // 'Olá, eu sou o Herber, tenho 29 anos, 1.75 de altura, meu peso é 85kgs e, só hoje, eu já caminhei 50 metros!'