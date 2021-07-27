import React from 'react';

import s from './Home.module.scss';

export default function Home() {
  return (
    <div className="container">
      <div className={s.home_departments}>
        <h2 className={s.home_title}>Title</h2>
      </div>
    </div>
  );
}
