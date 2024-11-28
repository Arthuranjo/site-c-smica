let detalhesVisiveis = false;
let detalhesAtuais = []; // Armazena os detalhes do produto atual

function mostrarDetalhes(produtoId) {
    const produtos = {
        1: {
            img: "./fotos-cosmica/mochilamudita.jpeg",
            titulo: "MOCHILA MUDITA",
            descricao: "Mochila ideal para quem necessita de um uso constante no dia-a-dia, possui bolsos internos",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Couro", "Camurça", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4", "Feito com roupas recicladas" ]
        },
        2: {
            img: "./fotos-cosmica/mochilaupeksha.jpeg",
            titulo: "MOCHILA UPEKSHA",
            descricao: "Mochila que possui diversos bolsos externos, com bolso interno para notebook até 15,6",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Tecido resistente", "Cor preta", "Design bicolor", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4"]
        },
        3: {
            img: "./fotos-cosmica/basicbag.jpeg",
            titulo: "BASIC BAG",
            descricao: "Leve e discreta seu tamanho parece pequeno, mas ela é uma bolsa muito espaçosa",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Compacta", "Leve", "Espaçosa", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4"]
        },
        4: {
            img: "./fotos-cosmica/18.png",
            titulo: "BOLSA TRANSVERSAL",
            descricao: "Bolsa transversal espaçosa e funcional, pensada para te acompanhar em muitas ocasiões",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Transversal", "Funcional", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4", "Acompanha diversas ocasiões"]
        },
        5: {
            img: "./fotos-cosmica/basicbagpreta.jpeg",
            titulo: "BASIC BAG PRETA",
            descricao: "Leve e discreta, apesae de seu tamanho parecer pequeno, ela é uma bolsa muito espaçosa",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Estilo clássico", "Cor preta", "Alta durabilidade", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4"]
        }
    };

    const produto = produtos[produtoId];

    
    document.getElementById("produto-principal-img").src = produto.img;
    document.getElementById("produto-principal-titulo").innerText = produto.titulo;
    document.getElementById("produto-principal-descricao").innerText = produto.descricao;
    document.getElementById("produto-principal-subtitulo").innerText = produto.subtitulo;


    detalhesAtuais = produto.detalhes;
    criarListaDetalhes();
    detalhesVisiveis = false; 
    atualizarBotao();
}

function criarListaDetalhes() {
    const listaDescricao = document.getElementById("lista-descricao");
    listaDescricao.innerHTML = ""; 

    
    detalhesAtuais.forEach(detalhe => {
        const item = document.createElement("li");
        item.textContent = detalhe;
        listaDescricao.appendChild(item);
    });

    listaDescricao.style.display = "none"; 
}

function alternarDetalhes() {
    const listaDescricao = document.getElementById("lista-descricao");
    detalhesVisiveis = !detalhesVisiveis;

    if (detalhesVisiveis) {
        listaDescricao.style.display = "flex";
        listaDescricao.style.flexWrap = "wrap";
        listaDescricao.style.gap = "30px";
        listaDescricao.style.listStyleType = "none";
        listaDescricao.style.padding = "0";
        listaDescricao.style.margin = "0";
        listaDescricao.style.justifyContent = "center"; 
        listaDescricao.style.marginTop = "50px";
        listaDescricao.style.marginBottom = "150px";

        const itens = listaDescricao.querySelectorAll("li");
        itens.forEach((item) => {
        
        item.style.flexBasis = "calc(30% - 30px)"; 
        item.style.textAlign = "center";
        item.style.border = "1px solid #ddd";
        item.style.padding = "10px";
        item.style.boxSizing = "border-box";
        });
    }
        
    else {
        listaDescricao.style.display = "none"; 
    }

    atualizarBotao();
}

function atualizarBotao() {
    const botao = document.getElementById("botao-detalhes");
    botao.innerText = detalhesVisiveis ? "Ocultar Detalhes" : "Mostrar Detalhes";
}

function mudarImagem(imagem) {
    document.getElementById("produto-principal-img").src = imagem;
}

//CARROSEL

document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const itens = document.querySelectorAll(".item");
    const btnAntes = document.querySelector(".antes");
    const btnProximo = document.querySelector(".proximo");

    let posicaoAtual = 0;
    const totalItens = itens.length;
    const visiveis = 3; // Quantidade de itens visíveis no carrossel
    const larguraItem = 100 / visiveis; // Porcentagem para cada item visível

    // Configurar largura dos itens no carrossel
    itens.forEach(item => {
        item.style.minWidth = `${larguraItem}%`;
    });

    // Função para mover o carrossel
    function moverCarrossel(direcao) {
        if (direcao === "proximo") {
            posicaoAtual++;
            if (posicaoAtual > totalItens - visiveis) {
                posicaoAtual = 0; // Volta para o início
            }
        } else if (direcao === "antes") {
            posicaoAtual--;
            if (posicaoAtual < 0) {
                posicaoAtual = totalItens - visiveis; // Vai para o final
            }
        }
        atualizarCarrossel();
    }

    // Atualiza a posição do carrossel com transição suave
    function atualizarCarrossel() {
        const deslocamento = -(posicaoAtual * (100 / visiveis));
        carrossel.style.transform = `translateX(${deslocamento}%)`;
    }

    // Eventos dos botões de navegação
    btnProximo.addEventListener("click", () => moverCarrossel("proximo"));
    btnAntes.addEventListener("click", () => moverCarrossel("antes"));
});

