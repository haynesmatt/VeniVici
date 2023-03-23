import './Discovery.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

const Discovery = () => {

    const URL = 'https://api.thecatapi.com/v1/images/search';

    axios.get(URL).then((response)=> console.log(response) ).catch(error => console.error(error));

    const [image, setImage] = useState('https://cdn2.thecatapi.com/images/4hb.gif');

    const handleDiscoverClick = () => {
        axios.get(URL)
            .then(response => {
                setImage(response.data[0].url);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (

        <div className='Discovery'>

          <h1>Veni Vici!</h1>
          <h2>Cat</h2>
          <div className='attributes'>
            <button className='attribute'>Somali</button>
          </div>
          <img src={image}></img>

          <button onClick={handleDiscoverClick} className='discover'>Discover!</button>

        </div>

    )

}

export default Discovery;