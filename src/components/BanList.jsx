import './BanList.css'
import Discovery from './Discovery.jsx'
import { useState } from 'react';

const BanList = () => {

    console.log(Discovery.origin)
    console.log(Discovery.newBan)

    return (

        <div className='BanList'>

            <h2>Ban List</h2>
            <h3>Select an attribute in your listing to ban it.</h3>
            <div className='attributes'>
                <button className='attribute'>Somali</button>

                    {Discovery.newBan && <button className='attribute'>{Discovery.origin}</button>}

            </div>

        </div>

    )

}

export default BanList;