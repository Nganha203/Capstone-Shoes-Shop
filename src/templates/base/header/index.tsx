import React from 'react'
import css from './header.module.scss'
import { Link } from 'react-router-dom'
import { IconSearch, IconCart } from 'src/assets/icons'
import logoImg from 'src/assets/imgs/logo.png'
import { useCartContext } from 'src/components/context/cartContext'

export default function Header() {
  const { cartQuantity } = useCartContext();
  return (
    <>
      <header className={css.header}>
        <Link to='/'><img src={logoImg} alt="" /></Link>


        <div className={css['header-left']}>
          <div className={css['icon-search']}>
            <Link to='/search'><IconSearch /></Link> 
            <Link to='/search'><span style={{color: 'white'}}>Search</span></Link> 
          </div>
          <div className={css['icon-cart']}>
            <Link to='/carts'><IconCart /></Link>
            <span>({cartQuantity})</span>
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
