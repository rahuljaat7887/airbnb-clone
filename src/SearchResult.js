import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import "./SearchResult.css"
import Star from '@mui/icons-material/Star';

function searchResult({
    img, location, title, description, star, price, total,
}) {
  return (
    <div className='searchResult'>
        <img src={img} alt="" />
        <FavoriteBorderIcon className='searchResult_heart'/>
        <div className='searchResult_info'>
                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult_infoBottom">
                    <div className="searchResult_ stars">
                        <Star className="searchResult_star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults_price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default searchResult