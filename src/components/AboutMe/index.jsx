import { useLanguage } from '../../hooks/LanguageContext.jsx';
import { Container, Info, Button } from './styles'
import Perfil from '../../assets/Brendon-2.jpeg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Zoom } from 'react-reveal';

export function AboutMe() {
    const { language } = useLanguage(); // Obetendo as linguagens

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            title: "Sobre mim",
            introduction: ` Desenvolvedor FullStack, crio páginas web completas com interface UI/UX, e com serviços de APIs.
                    Atuo no momento como freelancer desenvolvendo páginas para meus clientes em comércios, empresas e até uso pessoal,
                    busco o melhor para meus clientes tanto em qualidade, praticidade e rapidez.`,
            button: "Baixar currículo"
        },
        'en-US': {
            title: "About me",
            introduction: `Developer FullStack developer, I create complete web pages with UI/UX interface and API services.
                    I currently work as a freelancer developing pages for my clients in businesses, companies and even for personal use,
                    I seek the best for my clients in terms of quality, practicality and speed.`,
            button: "Download CV"
        }
    };

    const cvLink = 'https://drive.google.com/file/d/1VGyxZ-XPT7_AePUb5vBUm3yBSWoFwXXT/view?usp=sharing';

    return (
        <Container id='sobre'>
            <Zoom>
                <div className='caixa-img'>
                    <img src={Perfil} alt="Foto de perfil" />
                    <h3>{texts[language].title}</h3>
                </div>

                <Info>
                    <h4>{texts[language].introduction}</h4>
                    <a href={cvLink} target='_blank'>
                        <Button>{texts[language].button} <FaRegFilePdf /></Button>
                    </a>
                </Info>
            </Zoom>
        </Container>
    )
}