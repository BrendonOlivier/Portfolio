import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useLanguage } from '../../hooks/LanguageContext.jsx';

import { Container, MainContatos, Contatos, Formulario } from './styles'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLongArrowAltRight, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { language } = useLanguage(); // Obetendo as linguagens

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            title: "Entre em contato",
            introduction: "Fale comigo",
            contact: "Entrar em contato",
            introduction2: "Deixe uma mensagem",
            name: "Nome",
            message: "Deixe uma mensagem",
            textArea: "Escreva sua mensagem",
            button: "Enviar mensagem"
        },
        'en-US': {
            title: "Get in touch",
            introduction: "Talk to me",
            contact: "Get in touch",
            introduction2: "Leave a message",
            name: "Name",
            message: "Leave a message",
            textArea: "Write your message",
            button: "Send message"
        }
    };


    const onSubmit = async (data) => {
        // Aqui você pode usar EmailJS ou um outro serviço de envio de email  
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: 'gmailMessage',
                template_id: 'template_zpeqb2f',
                user_id: '3JVnr8i0M0kVQYTPg',
                template_params: {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
            }),
        });

        if (response.ok) {
            toast.success('Mensagem enviada com sucesso!'); // Exibindo mensagem de sucesso  
            reset(); // Resetando os campos do formulário 
        } else {
            toast.error('Erro ao enviar a mensagem. Tente novamente.');
        }
    };

    return (
        <Container id='contato'>
            <ToastContainer />
            <h4>{texts[language].title}</h4>

            <MainContatos>
                <Contatos>
                    <h5>{texts[language].introduction}</h5>

                    <div className='cont-contato'>
                        <MdMarkEmailUnread className='icon' />
                        <p className="name-contato">
                            E-mail
                        </p>
                        <p>contatobrendonolivier@gmail.com</p>

                        <div className='redes'>
                            <p>{texts[language].contact}</p>
                            <a href={`mailto:contatobrendonolivier@gmail.com`} target="_blank" rel="noopener noreferrer">
                                <FaLongArrowAltRight className='icon2' />
                            </a>
                        </div>
                    </div>

                    <div className='cont-contato'>
                        <FaLinkedinIn className='icon' style={{ color: '#086ba4' }} />
                        <p className="name-contato" style={{ color: '#086ba4' }}>
                            Linkedin
                        </p>
                        <p>Brendon Lira Olivier</p>

                        <div className='redes'>
                            <p>{texts[language].contact}</p>
                            <a href="https://www.linkedin.com/in/brendon-olivier/" target="_blank">
                                <FaLongArrowAltRight className='icon2' />
                            </a>
                        </div>
                    </div>

                    <div className='cont-contato'>
                        <FaInstagram className='icon' style={{ color: '#F7016D' }} />
                        <p className="name-contato" style={{ color: '#F7016D' }}>
                            Instagram
                        </p>
                        <p>be_olivier</p>

                        <div className='redes'>
                            <p>{texts[language].contact}</p>
                            <a href="https://www.instagram.com/be_olivierr/" target="_blank">
                                <FaLongArrowAltRight className='icon2' />
                            </a>
                        </div>
                    </div>
                </Contatos>

                <Formulario>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>{texts[language].introduction2}</h5>

                        <div className='cont-inputs'>
                            <label>{texts[language].message}</label>
                            <input
                                type="text"
                                placeholder="Escreva seu nome"
                                {...register('name', { required: 'Nome é obrigatório' })}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>

                        <div className='cont-inputs'>
                            <label>Email</label>
                            <input
                                type="Escreva seu e-mail"
                                placeholder="Email"
                                {...register('email', { required: 'Email é obrigatório' })}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className='cont-inputs'>
                            <label>{texts[language].introduction2}</label>
                            <textarea className='mensagem-texto'
                                placeholder={texts[language].textArea}
                                {...register('message', { required: 'Mensagem é obrigatória' })}
                            />
                            {errors.message && <span>{errors.message.message}</span>}
                        </div>
                        <button type="submit" className='Btn' style={{ '--btn-content': `'${texts[language].button}'` }}>
                            <span className="button-text">{texts[language].button}</span>
                        </button>
                    </form>
                </Formulario>

            </MainContatos>

        </Container>
    )
}