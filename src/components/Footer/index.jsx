import { useLanguage } from '../../hooks/LanguageContext.jsx';
import { Container, Links } from './styles'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
    const { language } = useLanguage(); // Obetendo as linguagens

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            title: "© Brendon L. Olivier. Todos os direitos reservados"
        },
        'en-US': {
            title: "© Brendon L. Olivier. All rights reserved"
        }
    };

    return (
        <Container>
            <Links>
                <a href="https://www.linkedin.com/in/brendon-olivier/" target="_blank">
                    <li style={{ background: '#086ba4' }}>
                        <span className="icon"><FaLinkedin className='icon-center' /></span>
                        <span className="text">LinkedIn</span>
                    </li>
                </a>

                <a href="https://github.com/BrendonOlivier" target="_blank">
                    <li style={{ background: '#011927' }}>
                        <span className="icon"><FaGithub className='icon-center' /></span>
                        <span className="text">GitHub</span>
                    </li>
                </a>

                <a href="https://www.instagram.com/be_olivierr/" target="_blank">
                    <li style={{ background: '#F7016D' }}>
                        <span className="icon"><FaInstagram className='icon-center' /></span>
                        <span className="text">Instagram</span>
                    </li>
                </a>
            </Links>

            <p>{texts[language].title}</p>
        </Container>
    )
}