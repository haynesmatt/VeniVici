import './Discovery.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

const Discovery = () => {

    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const URL = 'https://api.thecatapi.com/v1/images/';
    const FLAGS = '?has_breeds=1&api_key=' + API_KEY;

    const [image, setImage] = useState(null);
    const [imageID, setImageID] = useState('cSzaNCgq2');
    const [showElement, setShowELement] = useState(false);
    const [name, setName] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [lifeSpan, setLifeSpan] = useState(null);


    const handleDiscoverClick = () => {
        axios.get(URL + "search" + FLAGS + API_KEY)
            .then(response => {
                setShowELement(true);
                setImage(response.data[0].url);
                setImageID(response.data[0].id);
            })

        axios.get(URL + imageID)
            .then(response => {
                setName(response.data.breeds[0].name)
                setOrigin(response.data.breeds[0].origin)
                setLifeSpan(response.data.breeds[0].life_span)
            })
    };

    return (

        <div className='Discovery'>

          <h1>Veni Vici!</h1>
          <h2 style={{ display: showElement ? 'block' : 'none' }}>{name}</h2>
          <div className='attributes'>
            <button className='attribute' style={{ display: showElement ? 'block' : 'none' }}>{origin}</button>
            <button className='attribute' style={{ display: showElement ? 'block' : 'none' }}>{lifeSpan}</button>
          </div>
          <img src={image}></img>

          <button onClick={handleDiscoverClick} className='discover'>Discover!</button>

        </div>

    )

}

export default Discovery;