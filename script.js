let detalhesVisiveis = false;
let detalhesAtuais = []; // Armazena os detalhes do produto atual

function mostrarDetalhes(produtoId) {
    const produtos = {
        1: {
            img: "./fotos-cosmica/mochilamudita.jpeg",
            titulo: "MOCHILA MUDITA",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Couro", "Camurça", "Feito com roupas recicladas"]
        },
        2: {
            img: "./fotos-cosmica/mochilaupeksha.jpeg",
            titulo: "MOCHILA UPEKSHA",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Tecido resistente", "Cor preta", "Design bicolor"]
        },
        3: {
            img: "./fotos-cosmica/basicbag.jpeg",
            titulo: "BASIC BAG",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Compacta", "Leve", "Espaçosa"]
        },
        4: {
            img: "./fotos-cosmica/18.png",
            titulo: "BOLSA TRANSVERSAL",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Transversal", "Funcional", "Acompanha diversas ocasiões"]
        },
        5: {
            img: "./fotos-cosmica/basicbagpreta.jpeg",
            titulo: "BASIC BAG PRETA",
            descricao: "Ao escolher nossas criações, você está valorizando o meio ambiente e transformando desperdício em beleza.",
            subtitulo: "INFORMAÇÕES ADICIONAIS:",
            detalhes: ["Estilo clássico", "Cor preta", "Alta durabilidade"]
        }
    };

    const produto = produtos[produtoId];

    // Atualiza informações principais
    document.getElementById("produto-principal-img").src = produto.img;
    document.getElementById("produto-principal-titulo").innerText = produto.titulo;
    document.getElementById("produto-principal-descricao").innerText = produto.descricao;
    document.getElementById("produto-principal-subtitulo").innerText = produto.subtitulo;

    // Atualiza os detalhes
    detalhesAtuais = produto.detalhes;
    criarListaDetalhes();
    detalhesVisiveis = false; // Define como oculto inicialmente
    atualizarBotao();
}

function criarListaDetalhes() {
    const listaDescricao = document.getElementById("lista-descricao");
    listaDescricao.innerHTML = ""; // Limpa a lista antes de recriar

    // Adiciona cada item da lista
    detalhesAtuais.forEach(detalhe => {
        const item = document.createElement("li");
        item.textContent = detalhe;
        listaDescricao.appendChild(item);
    });

    listaDescricao.style.display = "none"; // Garante que esteja oculta inicialmente
}

function alternarDetalhes() {
    const listaDescricao = document.getElementById("lista-descricao");
    detalhesVisiveis = !detalhesVisiveis;

    if (detalhesVisiveis) {
        listaDescricao.style.display = "block"; // Mostra a lista
    } else {
        listaDescricao.style.display = "none"; // Oculta a lista
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

