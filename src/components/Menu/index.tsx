import React from 'react';

import s from './Menu.module.scss';

export default function Menu() {
  return (
    <nav>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <a href="#" className={s.nav__link}>
            About
          </a>
        </li>
        <li className={s.nav__item}>
          <a href="#" className={s.nav__link}>
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}
