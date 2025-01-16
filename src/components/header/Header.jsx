import React from 'react'
import "./Header.css"
import kyrgyznature from "../../assets/img/kyrgyzNature.png"
import { MdLanguage } from "react-icons/md";

function Header() {
  return (
    <div className='HeaderContainer'>
        <div className='header'>
            <div className='logo'>
                <div className='nature'>
            <img src={kyrgyznature} alt="logo"  />
            </div>
            <h1 className='title'>KyrgyzNature</h1>

            </div>
            <ul className='nav'>
                <li>О сайте</li>
                <li>Туристические маршруты</li>
                <li>Достопримечательности</li>
                <li>Бронирование</li>
                <li>Контакты</li>
            </ul>
            <div className='regis'>

            <button className='login'>Войти </button>
            <button className='login'>Регистрация </button>
            </div>
            <div className='language-con'>
                <MdLanguage />
            </div>
        </div>
    </div>
  )
}

export default Header
