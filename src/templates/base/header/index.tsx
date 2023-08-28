import React from 'react'
import css from './header.module.scss'
import { Link } from 'react-router-dom'
import { IconSearch, IconCart } from 'src/assets/icons'

import logoImg from 'src/assets/imgs/logo.png'

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <Link to='/'><img src={logoImg} alt="" /></Link>


        <div className={css['header-left']}>
          <div className={css['icon-search']}>
            <IconSearch />
            <span>Search</span>
          </div>
          <div className={css['icon-cart']}>
            <IconCart />
            <span>(1)</span>
          </div>
          <div className={css['author']}>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Resigter</Link>

          </div>
        </div>
      </header>

      <nav>
        <ul className={css['nav']}>
          <li>
            <Link className={css['active']} to='/'>Home </Link>
          </li>
          <li>
            <Link to='#'>Men </Link>
          </li>
          <li>
            <Link to='#'>Woman </Link>
          </li>
          <li>
            <Link to='#'>Kid</Link>
          </li>
          <li>
            <Link to='#'>Sport</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
