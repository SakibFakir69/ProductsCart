
import React from 'react'
import { Outlet } from 'react-router-dom'
import Product from '../Product'
import Footer from '../Footer/Footer'

function Mainlayouts() {

  return (
    <div>

        <header>


        </header>
        {/* outlet */}
        <main>
            <Outlet/>
            

        </main>
        <footer className='mt-20'>
            <Footer/>

        </footer>


    </div>
  )
}

export default Mainlayouts

