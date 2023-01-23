import React from 'react';
import People from '../People';
import { useEffect } from "react";
import { useState } from "react";
import s from './style.module.css';

function App() {

  

  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://fakestoreapi.com/users");
      const data = await resp.json();
      const new_people = data.map(({id, name, email}) => ({
        id,
        first_name: name.firstname,
        last_name: name.lastname,
        email: email
      }));
      setPeople(new_people);
    })();
  }, []);


  return (
    <div>
      <h1>Users</h1>
      <div className={s.card_container}>
        {
          people.map(person => 
            <People 
                  key={person.id}
                  {...person}
            />)
        }
      </div>
    </div>
  );
}

export default App;
