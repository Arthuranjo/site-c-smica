export default function impacto() {
    const impacto = document.createElement('main')
    impacto.innerHTML = `
    <nav class="cabeçalho">
        <img id="logocosmica" src="imagens/LOGO-BRANCO.png">
    </nav>
    <header class="mini-borda-1">
        <ul class="inicio">
            <li><img src="imagens/LOGO-BRANCO.png"> </li>
            <li><a class="n" href="#home">HOME</a></li>
            <li><a class="n" href="#afeto">AFETO</a></li>
            <li><a class="n" href="#impacto">IMPACTO</a></li>
            <li><a class="n" href="#produtos">PRODUTOS</a></li>
            <li><a class="n" href="#contato">CONTATOS</a></li>
        </ul>
    </header>
    <section>
            <h1>O IMPACTO DOS RESÍDUOS TÊXTEIS NO MUNDO</h1>

            <p class="mudanca-mundo">
                A indústria têxtil é uma das mais poluentes do planeta, contribuindo significativamente para a geração de resíduos sólidos e o consumo excessivo de recursos naturais. Anualmente, toneladas de tecidos são descartadas, muitas vezes em aterros sanitários ou queimadas, liberando gases tóxicos e contaminando o solo e a água. Além disso, a produção têxtil demanda volumes imensos de água e energia, causando impactos devastadores ao meio ambiente e às comunidades que vivem próximas às áreas de descarte e produção. Esse cenário não apenas acelera as mudanças climáticas, mas também reforça um modelo de consumo insustentável, onde o novo é constantemente substituído, sem consideração pelos danos deixados para trás.
            </p>

        </section>

        <section class="mochila-atitude">
            <div class="texto-atitude">

                <h1>CADA ATITUDE, UMA MUDANÇA</h1>
                <p>Adotar um consumo consciente é uma das maneiras mais eficazes de reverter esse quadro. Ao valorizar práticas como o upcycle, reduzimos a quantidade de resíduos descartados e prolongamos a vida útil dos materiais. Escolher produtos criados de forma sustentável, como as bolsas da Cósmica Cria, é um ato de impacto que vai além da moda: é uma declaração de respeito ao planeta e às futuras gerações. Quando consumimos com propósito, ajudamos a construir um ciclo de produção mais responsável, mostrando que é possível unir estilo, funcionalidade e cuidado com o meio ambiente em cada escolha que fazemos.
                </p>

            </div>

            <div class="mochila-mudanca">
                <img src="./fotos-cosmica/18.png" alt="mochila">
            </div>
        </section>

        <section class="fazemos-juntos">
            <h1 class="mudanca">A MUDANÇA<br>QUE FAZEMOS JUNTOS!</h1>

            <p class="texto-mudanca">
                A cada peça da Cósmica Upcyle, você contribui para um mundo com menos resíduos e mais significado. A indústria têxtil convencional polui, desperdiça e explora. Mas quando você opta por upcycling, está ajudando a reduzir esses danos e a promover a sustentabilidade. Pequenas mudanças, como a sua escolha de consumir de forma consciente, geram grandes transformações no planeta. Juntos, estamos moldando um futuro mais sustentável.

            </p>

        </section>
    `
    return impacto
}