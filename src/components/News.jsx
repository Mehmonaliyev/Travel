import React, {  useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import defaut from '../img/defaut.png'

function News() {

    const [news, setNews] = useState([]);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '834255280dmshdf2cc4da880e0d6p198602jsnf6b74b2fd6cd',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };

        fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
            .then(response => response.json())
            .then(response => setNews(response.value))
            .catch(err => console.error(err));
    }, [])

    // console.log(news);
    return (
        <>
            <div className="main">
                <div className="row container mx-auto my-2">
                    {
                        news?.length ? news.map((val, idx) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 colsm-12" key={idx}>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-6">
                                                    <img src={
                                                        val.image.thumbnail.contentUrl ? 
                                                    val.image.thumbnail.contentUrl :
                                                     defaut
                                                    
                                                    } className="img-fluid w-100 rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <span className='text-muted'>{val.datePublished}</span>
                                                        <h5 className="card-title">{val.provider[0].name}</h5>
                                                        <p className="card-text">{val.description.slice(0, 45)}...</p>

                                                        <div className="text-end">
                                                            <a href={val.url} className='color' target='_blank'>See More {'>>>'}  </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : <Loading />
                    }
                </div>
            </div>
        </>
    )
}

export default News
