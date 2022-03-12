import React from 'react'
import { Storefront } from '@mui/icons-material'
import { ShoppingBasket } from '@mui/icons-material'

const Header = () => {
  return (
    <div>
        <div className="header_logo">
            <Storefront className='header_logoImage' fontSize='large'/>
            <h2 className='header_logoTitle'>Josh'eShop</h2> 
        </div>
        <div className="header_search">
            inputs
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

              <div className="nav_item">
                  <ShoppingBasket fontSize='large'/>
                  <span className="nav_itemLineTwo">0</span>
              </div>
          
        </div>
    </div>
  )
}

export default Header