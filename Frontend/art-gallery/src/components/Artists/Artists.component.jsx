import React from "react";
import ArtistCard from '../ArtistCard/ArtistCard.component'
import './Artists.css'

const {artists} = require('../../assets/Json/artists.json')

export default function Artists(){
    return(
        <div className="artists-container">
            {
                artists.map(artist => {
                    return(
                        <ArtistCard
                            key={artist.id}
                            id={artist.id}
                            img={artist.photo}
                            name={artist.name}
                            location={artist.location}
                        />
                    )
                })
            }
        </div>
    )
}