import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/48893970?s=460&u=3a27eac4f8d8a208cb43e2b2950031ad03ff82cb&v=4" alt="avatar"/>
                <div>
                    <strong>Wagner Lemos</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tortor eros, at semper eros pretium eu. Etiam bibendum interdum hendrerit. Aenean eu dolor nec tortor dapibus malesuada. Aliquam erat volutpat. Morbi nec sem porttitor, bibendum risus at, tincidunt est. Suspendisse venenatis magna vitae interdum luctus.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;