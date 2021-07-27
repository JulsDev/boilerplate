import React from 'react';

import Menu from 'components/Menu';

// import logoPath from 'assets/Zero.png';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header__wrapper}>
      <div className="container">
        <div className={s.header__content}>
          <a href="/">
            <img src="" alt="logo" className={s.header__logo} />
          </a>
          <Menu />
        </div>
      </div>
    </header>
  );
}
