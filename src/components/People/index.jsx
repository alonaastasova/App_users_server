import React from 'react';
import s from './style.module.css';

export default function People({first_name, last_name, email}) {
  return (
    <div className={s.card}>
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        <p>{first_name} {last_name}</p>
        <a href = {`mailto:${email}`}>{email}</a>
    </div>
  )
}
