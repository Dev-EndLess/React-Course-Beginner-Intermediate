import React from 'react'
import { useState } from 'react'

function ChallengeFive() {
      /**
     * Challenge: Connect the form to local state
     * 
     * 1. Crea un oggetto nello state che immagazzina i 4 valori da salvare
     * 
     * 2. Crea una funzione handleChange che puo' maneggiare
     *    lo state di tutti gli input
     * 3. Quando l'utente clicca "Sing up" controlla che la 
     *    password e il confirmPassword corrispondano.
     *    Se corrispondono manda in console "Successfully signed up"
     *    altrimenti manda in console "passwords do not match"
     * 4. Controlla anche che la spunta del checkbox "newsletter"
     *    se e' stata spuntanta manda in console 
     *    "Thanks for signingup for our newsletter!"
     */

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    newsLetter: false
  })  
  
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setUserData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))

  }

  function handleSubmit(event) {
    event.preventDefault()
    if(userData.password === userData.passwordConfirm) {
      console.log('Successfully signed up')
    } else if (userData.password !== userData.passwordConfirm) {
      console.log('Passwords do not match')
      return
    }

    if(userData.newsLetter) {
      console.log('Thanks for signing up for our newsletter')
    }

  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <input 
        type="email"
        name='email'
        placeholder='Email address'
        className='form--input'
        value={userData.email}
        onChange={handleChange}
        />
        <input 
        type="password"
        name='password'
        placeholder='Password'
        className='form--input'
        value={userData.password}
        onChange={handleChange}
        />
        <input 
        type="password"
        name='passwordConfirm'
        placeholder='Password Confirm'
        className='form--input'
        value={userData.passwordConfirm}
        onChange={handleChange}
        />

        <div className='form--marketing'>
          <input
          name='newsLetter'
          id='okayToEmail' 
          type="checkbox"
          checked={userData.newsLetter}
          onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button 
        className='form--submit'>Sing up
        </button>
      </form>
    </div>
  )
}

export default ChallengeFive