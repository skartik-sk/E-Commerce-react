import React from 'react'
import ProductCard from '../ComponentsForPages/ShoppingComponets/ProductCard'
import ProductPage from '../ComponentsForPages/ShoppingComponets/ProductPage'
import SideMenu from '../ComponentsForPages/ShoppingComponets/SideMenu'

  import 'react-toastify/dist/ReactToastify.css';
  
const Shopping = () => {
  
  return (
    <>
    <div className='w-full flex'>

    <SideMenu/>
    <ProductPage/>
   
    
    </div>
    </>
  )
}

export default Shopping