import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    const [toggleTheme, setToggleTheme] = useState(true);

    function handleTheme() {
        setToggleTheme(!toggleTheme);
    }

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

            <button type="button" onClick={handleTheme}>
                {
                    toggleTheme ? (
                        <img src="/moon.svg" alt="Tema escuro" />
                    ) : (
                        <img src="/sun.svg" alt="Tema claro" />
                    )
                }
            </button>
        </header>
    );
}