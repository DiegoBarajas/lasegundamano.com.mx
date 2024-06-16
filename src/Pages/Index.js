import React from 'react'
import '../Styles/Index.css'
import LogoSrc from '../Assets/Images/logo.svg';

const Index = () => {
    return (
        <main className='body-index'>
            <img src={LogoSrc} alt='Logotipo' title="Proximamente 'La segunda mano.com.mx'"/>
        </main>
    )
}

export default Index