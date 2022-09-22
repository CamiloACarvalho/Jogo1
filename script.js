
const mario = document.querySelector ('.mario'); //Aqui estamos trazendo a classe mario criado no programa css

const bala = document.querySelector ('.bala'); //Aqui estamos trazendo a classe da bala criado no programa css

const pular = () => {

    mario.classList.add('pular'); //aqui estamos criando a classe pular, para quando pressionar a teclar o gif do mário pular

    setTimeout (() => {
        mario.classList.remove('pular'); //Aqui vamos limpar o comando de pular, podendo assim pular novamente. Porque vc só pode executar um pulo. Agora adicionou esse código abaixo, toda vez que ele pular, será feito a "limpeza", podendo assim pular novamente.
    }, 700) //o setTimeout recebe dois parâmetros, primeiro recebe uma função e depois o tempo. O tempo é o tempo da animação dentro da classe pular 500ms. E a função vai ser remover a classe que ele pula. Para isso criamos uma classe anônima ()

}

//vamos criar um looping para verificar toda hora se a bala atingiu mario, pq se atingir, perde

const loop = setInterval(() => {

    const posicaoBala = bala.offsetLeft;

    if (posicaoBala <= 127){

        bala.style.animation = 'none';

        bala.style.left = '${posicaoBala}px';



    }
    
}, 10);//criamos uma função anônima, para ficar rodando no intervalo de 10ms


document.addEventListener ('keydown', pular); //Esse código permite que toda vez eu apertar qualquer tecla, do meu teclado (keydown), o mário faz a ação de pular. criarei um classe chamada "pular" e ela também será "anexada" no código html, dentro do gif do mário correndo
