import React from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare  } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <a className='social-links' href="https://twitter.com">
      <FaTwitterSquare />
      </a>
      <a className='social-links' href="https://www.facebook.com/">
      <FaFacebookSquare />
      </a>
      <a className='social-links' href="https://www.instagram.com/">
      <FaInstagramSquare />
      </a>
      <a className='social-links' href="https://github.com">
      <FaGithubSquare />
      </a>
    </div>
  )
}

export default Footer