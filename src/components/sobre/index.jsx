import React from 'react';

export const Apresentacao = () => {
    return(
        <div>
            <section class='section-base sobre'>
                <section class='texto-borda'>
                    <p>&emsp; Olá mundo! Meu nome é <strong>Milena</strong>, sou técnica em desenvolvimento de sistemas e estudante de engenharia de software na FIAP. Minha paixão pela tecnologia, junto com sua constante evolução, aumenta minha vontade de aprender novas coisas para melhorar a eficiência e qualidade de tudo que faço.</p>
                    <p>&emsp; Meus objetivos são estudar cada vez mais para me tornar uma <strong>Desenvolvedora Full-Stack</strong>.</p>
                </section>
                <img src="img/foto-perfil-bolhas.svg" alt="foto de perfil" height='330px' />
            </section>
            <section class="seta">
                <a href="#ref-form"><img id='botao-sobre' src="img/seta-para-baixo.svg" alt="seta para baixo" /></a>
            </section>
        </div>
    )
}
export default Apresentacao;
