import { useLanguage } from '../../hooks/LanguageContext.jsx';

import { Container, Projetos } from './styles'
import img1 from '../../assets/Barbearia.png'
import img2 from '../../assets/ListaCompras.png'
import img3 from '../../assets/ConversorMoeda.png'
import img4 from '../../assets/Cidades.png'
import img5 from '../../assets/Starbucks.png'
import img6 from '../../assets/ListaTarefas.png'
import { TbWorldWww } from "react-icons/tb";
import { PiTreeViewDuotone } from "react-icons/pi";

export function Projects() {
    const { language } = useLanguage(); // Obetendo as linguagens

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            title: "Projetos FrontEnd",
            introduction: "Conheça muito mais projetos em minhas redes sociais",
            titleProject1: "Vitor Cortes",
            titleProject2: "Lista de Compras",
            titleProject3: "Conversor de Moedas",
            titleProject4: "Carrossel de Cidades",
            titleProject5: "Starbucks",
            titleProject6: "Lista de Tarefas",
            introductionProject1: "Página freelancer, para uma barbearia listando alguns cortes, preços, contato e endereço.",
            introductionProject2: "Site onde o usuário pode listar itens para compras, onde irá ser calculado pela quantidade e preço.",
            introductionProject3: "Site para converter moedas como do real para: dólar, euro, libra e bitcoin, e assim para os demais.",
            introductionProject4: "Uma landing page, mostrando um carrossel com algumas cidades.",
            introductionProject5: "Uma landing page, inspirada no maravilho Starbucks.",
            introductionProject6: "Site onde o usuário pode listar suas tarefas, para melhor organizar seu dia, o tornando mais produtivo.",
            button: "Código"
        },
        'en-US': {
            title: "FrontEnd Projects",
            introduction: "Discover many more projects on my social networks",
            titleProject1: "Victor Cortes",
            titleProject2: "Shopping List",
            titleProject3: "Currency Converter",
            titleProject4: "Cities Carousel",
            titleProject5: "Starbucks",
            titleProject6: "Task List",
            introductionProject1: "Freelance page for a barbershop listing some cuts, prices, contact and address.",
            introductionProject2: "Site where the user can list items for purchases, where quantity and price will be calculated.",
            introductionProject3: "Site to convert currencies such as the real to: dollar, euro, pound and bitcoin, and so on for others.",
            introductionProject4: "A landing page, showing a carousel with some cities.",
            introductionProject5: "A landing page, inspired by the wonderful Starbucks.",
            introductionProject6: "Site where users can list their tasks, to better organize their day, making them more productive.",
            button: "Code"
        }
    };


    return (
        <Container>
            <h5>{texts[language].title}</h5>
            <p className='info'>{texts[language].introduction}</p>

            <Projetos>
                <div className='container-projects'>
                    <div class="card">
                        <img src={img1} alt="imagem-projeto" />
                        <div class="card__content">
                            <p class="card__title">{texts[language].titleProject1}</p>
                            <p class="card__description">{texts[language].introductionProject1}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <a target="_blank" href="https://vitor-cortes.netlify.app/">
                            <button className='btn-site'><TbWorldWww /> Site</button>
                        </a>
                        <a target="_blank" href="https://github.com/BrendonOlivier/Barbearia-VitorCortes">
                            <button className='btn-code'><PiTreeViewDuotone /> {texts[language].button}</button>
                        </a>
                    </div>
                </div>

                <div className='container-projects'>
                    <div class="card">
                        <img src={img2} alt="imagem-projeto" />
                        <div class="card__content">
                            <p class="card__title">{texts[language].titleProject2}</p>
                            <p class="card__description">{texts[language].introductionProject2}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <a target="_blank" href="https://devcompras.netlify.app/">
                            <button className='btn-site'><TbWorldWww /> Site</button>
                        </a>
                        <a target="_blank" href="https://github.com/BrendonOlivier/Lista-de-Compras">
                            <button className='btn-code'><PiTreeViewDuotone /> {texts[language].button}</button>
                        </a>
                    </div>
                </div>

                <div className='container-projects'>
                    <div class="card">
                        <img src={img3} alt="imagem-projeto" />
                        <div class="card__content">
                            <p class="card__title">{texts[language].titleProject3}</p>
                            <p class="card__description">{texts[language].introductionProject3}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <a target="_blank" href="https://conversordmoedas.netlify.app/">
                            <button className='btn-site'><TbWorldWww /> Site</button>
                        </a>
                        <a target="_blank" href="https://github.com/BrendonOlivier/Conversor-de-Moeda">
                            <button className='btn-code'><PiTreeViewDuotone /> {texts[language].button}</button>
                        </a>
                    </div>
                </div>

                <div className='container-projects'>
                    <div class="card">
                        <img src={img4} alt="imagem-projeto" />
                        <div class="card__content">
                            <p class="card__title">{texts[language].titleProject4}</p>
                            <p class="card__description">{texts[language].introductionProject4}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <a target="_blank" href="https://dev-cidades.netlify.app/">
                            <button className='btn-site'><TbWorldWww /> Site</button>
                        </a>
                        <a target="_blank" href="https://github.com/BrendonOlivier/Carrosel-Cidades">
                            <button className='btn-code'><PiTreeViewDuotone /> {texts[language].button}</button>
                        </a>
                    </div>
                </div>

                <div className='container-projects'>
                    <div class="card">
                        <img src={img5} alt="imagem-projeto" />
                        <div class="card__content">
                            <p class="card__title">{texts[language].titleProject5}</p>
                            <p class="card__description">{texts[language].introductionProject5}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <a target="_blank" href="https://dev-starbuck.netlify.app/">
                            <button className='btn-site'><TbWorldWww /> Site</button>
                        </a>
                        <a target="_blank" href="https://github.com/BrendonOlivier/Starbucks">
                            <button className='btn-code'><PiTreeViewDuotone /> {texts[language].button}</button>
                        </a>
                    </div>
                </div>

                <div className='container-projects'>
                    <div class="card">
                        <img src={img6} alt="imagem-projeto" />
                        <div class="card__content">
                            <p class="card__title">{texts[language].titleProject6}</p>
                            <p class="card__description">{texts[language].introductionProject6}</p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <a target="_blank" href="https://github.com/BrendonOlivier/TodoList---FrontEnd">
                            <button className='btn-site'><TbWorldWww /> Site</button>
                        </a>
                        <a target="_blank" href="https://github.com/BrendonOlivier/TodoList---BackEnd">
                            <button className='btn-code'><PiTreeViewDuotone /> {texts[language].button}</button>
                        </a>
                    </div>
                </div>

            </Projetos>
        </Container>
    )
}