import { useEffect, useState } from 'react';
import { useLanguage } from './hooks/LanguageContext.jsx';

import { Header, Skills, AboutMe, ProjetcCards, Projects, Form, Footer, Digitando } from './components';
import { Container, ContainerMain, Info, Perfil, Button } from './styles.js';
import { FaArrowUp } from "react-icons/fa";
import ImgPerfil from './assets/Brendon.png';
import Curriculo from './assets/curriculo.pdf'; // Pegando o currículo

export function Home() {
    const [showScroll, setShowScroll] = useState(false);
    const { language, setLanguage } = useLanguage();

    // Colocar a lógica do scroll
    const handleScroll = () => {
        // Quando o scroll passar de 300 pixels, mostre o ícone  
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    // Função para mover o usuário para o topo do site
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave para o topo  
        });
    };

    useEffect(() => {
        // Adiciona um listener de evento de rolagem  
        window.addEventListener('scroll', handleScroll);

        // Remove o listener de evento na limpeza do efeito  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            greeting: "Olá a todos, me chamo",
            introduction: "Brendon Lira Olivier, e sou um",
            welcome: "Seja bem vindo ao meu Portfólio! Venha conheçer mais sobre mim e meus projetos."
        },
        'en-US': {
            greeting: "Hello everyone, my name is",
            introduction: "Brendon Lira Olivier, and I'm a",
            welcome: "Welcome to my Portfolio! Come learn more about me and my projects."
        }
    };

    return (
        <Container>
            <div className='bg'></div>

            <Header />

            <ContainerMain>
                <Info>
                    <h2>{texts[language].greeting}</h2>
                    <h1>{texts[language].introduction}</h1>
                    <Digitando />
                    <p>{texts[language].welcome}</p>
                    <a href={Curriculo} download><Button>Dowload CV</Button></a>
                </Info>

                <Perfil>
                    <img src={ImgPerfil} alt="" />
                </Perfil>
            </ContainerMain>

            <Skills />
            <AboutMe />
            <ProjetcCards />
            <Projects />
            <Form />
            <Footer />

            {showScroll && (
                <div className='icon-topo' onClick={scrollToTop}>
                    <FaArrowUp />
                </div>
            )}
        </Container>
    )
}