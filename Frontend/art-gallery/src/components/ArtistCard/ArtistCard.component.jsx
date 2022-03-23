import React from "react";
import './ArtistCard.css'
import {AiOutlineEnvironment} from "react-icons/ai";

export default function ArtistCard({id, img, name, location}){
    return(
        <div className="artist-card">
            <div className="artist-img">
                <img src={img} alt={id} />
            </div>
            <div className="artist-data">
                <h3>{name}</h3>
                <span><AiOutlineEnvironment className='iconsDetailArtist'/>{location}</span>
               
            </div>
        </div>
    )
}