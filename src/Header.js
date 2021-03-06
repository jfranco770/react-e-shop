import React from 'react'
import './Header.css';
import { Storefront } from '@mui/icons-material'
import { ShoppingBasket } from '@mui/icons-material'
import { Search } from '@mui/icons-material'

const Header = () => {
  return (
    <div className='header'> 
        <div className="header_logo">
            <Storefront className='header_logoImage' fontSize='large'/>
            <h2 className='header_logoTitle'>Josh's eShop</h2> 
        </div>
        <div className="header_search">
            <input type="text" className='header_search' />
            <Search className= 'header_searchIcon'/>
        </div>
        <div className="header_nav">
              <div className="nav_item">
                  <span className="nav_itemLineOne">Hello Josh!</span>
                  <span className="nav_itemLineTwo">Sign In</span>
              </div>

              <div className="nav_item">
                  <span className="nav_itemLineOne">Your</span>
                  <span className="nav_itemLineTwo">Shop</span>
              </div>

              <div className="nav_itemBasket">
                  <ShoppingBasket />
                  <span className="nav_itemLineTwo nav_basketCount ">0</span>
              </div>
          
        </div>
    </div>
  )
}

export default Header