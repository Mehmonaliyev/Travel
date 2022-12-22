import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/search-card.css'
import defaut from '../img/defaut.png'
import Loading from '../loading/Loading';

function Search() {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const [apiSearch, setApiSearch] = useState([])

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
        if (apiSearch.length == 0) {
            alert("Davlat nomini to'g'ri kiritdingizmi? ")
        }

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '834255280dmshdf2cc4da880e0d6p198602jsnf6b74b2fd6cd',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };
        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=` + message, options)
            .then(response => response.json())
            .then(response =>
                setApiSearch(response),
            )
            .catch(err => console.error(err));
    };


    const mapOnclick = ()=>{
       
    }

    return (
        <div className='main'>
            <div className='container d-flex mt-2'>
                <input
                    className="form-control me-2" type="search" placeholder="Loacation..." aria-label="Search"
                    name="message"
                    onChange={handleChange}
                    value={message}
                />
                <button
                    className="btn btn-outline-warning"
                    onClick={handleClick}
                >Search</button>
            </div>



            {
                updated ?
                    <div className='row container mx-auto'>
                        {
                            apiSearch?.length ? apiSearch.map((val, idx) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6 mx-auto " key={idx}>
                                        <div className="card search-card mx-auto mt-5">
                                            <img src={
                                                val.image_url ?
                                                    val.image_url
                                                    :
                                                    defaut
                                            } className="card-img-top search-card" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title"><span className='color'>Country: </span>
                                                    {val.country}
                                                </h5>
                                                <h5 className="card-title"><span className='color'>City name: </span>
                                                    {val.city_name ? val.city_name : <></>}
                                                </h5>
                                                {
                                                    val.timezone ?
                                                        <>
                                                            <h5><span className='color'>Timezone: </span>{val.timezone}</h5>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                                }
                                                <div className='d-flex justify-content-between'>
                                                    <h4>
                                                        <span className='color'> Hotel:</span> {val.nr_hotels}</h4>
                                                    <button className='btn btn-outline-warning' onClick={mapOnclick}>
                                                        Map
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                                : <Loading />

                        }
                    </div>
                    :
                    <>
                        <div className='text-center'>
                            <marquee className="marqu color"
                                direction="down"
                                behavior="alternate"
                            >
                                <marquee behavior="alternate" >Davlat nomi kiritilmagan</marquee>
                            </marquee>
                        </div>
                    </>
            }

        </div>
    )
}

export default Search
