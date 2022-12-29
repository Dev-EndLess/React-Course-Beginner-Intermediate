import React from "react";
import { useState } from "react";
import Stars from './shared/Stars'
import userIcon from '../images/user-icon.png'
import red from '../images/red-star.jpg'
import black from '../images/black-star.jpg'

function ContactCard() {
    /**
   * Challenge: Creare uno state con un oggetto 
   * f.name/l.name/phone/email e una propriety switchabile
   * creare un ternary operator sulla proprieta' switchabile
   * e metterlo in una variabile ( in un componente a parte)
   * passare i props delle 2 icone, la funzione e lo switch
   * creare la funzione del pulsante 
   */

    const [user, setUser] = useState({
      firstName: 'Vagisil',
      lastName: 'Crema',
      phone: '329 7384926',
      email: 'vagisilcrema9999@gmail.com',
      icons: false
    })

    function toggle() {
      setUser(prevState => ({
        ...prevState,
        icons: !prevState.icons
      }))
    }


  return (
    <div>
      <main>
        <article className="card">
          <img src={userIcon}
          className="card--image"
          />
          <div className="card--info">
            <Stars
            red={red}
            black={black}
            star={user.icons}
            handleClick={toggle}
            />
            <h2 className="card--name">{user.firstName}{user.lastName}</h2>
            <p className="card--contact">{user.phone}</p>
            <p className="card--contact">{user.email}</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default ContactCard;
