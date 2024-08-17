import { useState } from 'react';
import { useLanguage } from '../../hooks/LanguageContext.jsx'
import { Container, ContLogo, ContLinks, Language, MenuToggle } from './styles'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo.png'
import Brazil from '../../assets/Brazil.png'
import EUA from '../../assets/EUA.png'

export function Header() {
    const { setLanguage, language } = useLanguage(); // Obtendo setLanguage do contexto
    const [changeBackground, setChangeBackground] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 150) {
            setChangeBackground(true)
        }
        if (changeBackground && window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    }

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            technologies: "Tecnologias",
            aboutMe: "Sobre",
            projects: "Projetos",
            button: "Contato",
            certificate: "Certificado"
        },
        'en-US': {
            technologies: "Technologies",
            aboutMe: "AboutMe",
            projects: "Projects",
            button: "Contact",
            certificate: "Certificate"
        }
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    const handleLinkClick = (event, targetId) => {
        event.preventDefault(); // Previne o comportamento padrão do link  
        closeMenu(); // Fecha o menu  
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção  
        }
    };

    return (
        <Container changeBackground={changeBackground}>
            <ContLogo>
                <img src={Logo} alt="logo" />
            </ContLogo>

            <MenuToggle onClick={toggleMenu}>
                <FaBars />
            </MenuToggle>

            <ContLinks menuVisible={menuVisible}>
                <FaTimes onClick={closeMenu} className='icon-close' />
                <a href="#tecnologias" onClick={(e) => handleLinkClick(e, "#tecnologias")}>
                    <li>{texts[language].technologies}</li>
                </a>

                <a href="#sobre" onClick={(e) => handleLinkClick(e, "#sobre")}>
                    <li>{texts[language].aboutMe}</li>
                </a>

                <a href="#projetos" onClick={(e) => handleLinkClick(e, "#projetos")}>
                    <li>{texts[language].projects}</li>
                </a>

                <a href="#contato" onClick={(e) => handleLinkClick(e, "#contato")}>
                    <button className='Btn' style={{ '--btn-content': `'${texts[language].button}'` }}>
                        <span className="button-text">{texts[language].button}</span>
                    </button>
                </a>

                <Language>
                    <p>Idioma</p>
                    <div className='cont-language'>
                        <img src={Brazil} onClick={() => {
                            setLanguage('pt-BR');   
                            closeMenu();
                        }} />
                        <img src={EUA} onClick={() => {
                            setLanguage('en-US');
                            closeMenu();
                        }} />
                    </div>
                </Language>
            </ContLinks>
        </Container>
    )
}