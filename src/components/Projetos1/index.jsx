import { useLanguage } from '../../hooks/LanguageContext.jsx';
import { Container } from './styles'
import img1 from '../../assets/Astronauta.png'
import img2 from '../../assets/Hamburgueria.png'
import img3 from '../../assets/DevFilmes.png'
import img4 from '../../assets/Previsao.png'
import img5 from '../../assets/RickMorty.png'
import { useEffect } from 'react'

export function ProjetcCards() {
    const { language } = useLanguage(); // Obetendo as linguagens

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            title: "Projetos FullStack",
            introduction: `"Clique na imagem para ver"`
        },
        'en-US': {
            title: "Projects FullStack",
            introduction: `"Click on the image to see"`
        }
    };

    useEffect(() => {
        // Você pode fazer um reset no estado ou re-render aqui, se necessário  
    }, []);

    return (
        <Container id="projetos">
            <section class="projects">
                <h3>{texts[language].title}</h3>
                <p class="cliqueInImage">{texts[language].introduction}</p>

                <div class="boxImages">
                    <div className='card'>
                        <a class="projectImgsLinks" target="_blank" href='https://dev-astronauta.netlify.app/'>
                            <img src={img1} class="projectImgs" />
                        </a>
                    </div>

                    <div className='card'>
                        <a class="projectImgsLinks" target="_blank" href="https://github.com/BrendonOlivier/devdonald-frontend">
                            <img src={img2} class="projectImgs" />
                        </a>
                    </div>

                    <div className='card'>
                        <a class="projectImgsLinks" target="_blank" href="https://dev-moviess.netlify.app/">
                            <img src={img3} class="projectImgs" />
                        </a>
                    </div>

                    <div className='card'>
                        <a class="projectImgsLinks" target="_blank" href="https://dev-previsoes.netlify.app/">
                            <img src={img4} class="projectImgs" />
                        </a>
                    </div>

                    <div className='card'>
                        <a class="projectImgsLinks" target="_blank" href="https://devrickmorty.netlify.app/">
                            <img src={img5} class="projectImgs" />
                        </a>
                    </div>

                </div>
            </section>
        </Container>
    )
}