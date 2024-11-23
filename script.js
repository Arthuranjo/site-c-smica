let detalhesVisiveis = false;
let detalhesAtuais = []; // Armazena os detalhes do produto atual

function mostrarDetalhes(produtoId) {
    const produtos = {
        1: {
            img: "./fotos-cosmica/mochilamudita.jpeg",
            titulo: "MOCHILA MUDITA",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Couro", "Camurça", "Feito com roupas recicladas", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4" ]
        },
        2: {
            img: "./fotos-cosmica/mochilaupeksha.jpeg",
            titulo: "MOCHILA UPEKSHA",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Tecido resistente", "Cor preta", "Design bicolor", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4"]
        },
        3: {
            img: "./fotos-cosmica/basicbag.jpeg",
            titulo: "BASIC BAG",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Compacta", "Leve", "Espaçosa", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4"]
        },
        4: {
            img: "./fotos-cosmica/18.png",
            titulo: "BOLSA TRANSVERSAL",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Transversal", "Funcional", "Acompanha diversas ocasiões", " Detalhes 1", " Detalhes 2", " Detalhes 3", " Detalhes 4"]
        },
        5: {
            img: "./fotos-cosmica/basicbagpreta.jpeg",
            titulo: "BASIC BAG PRETA",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
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

