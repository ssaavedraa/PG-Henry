import React from "react";
import ArtistCard from '../ArtistCard/ArtistCard.component'
import './Artists.css'

const {artists} = require('../../assets/Json/artists.json')

export default function Artists(){
    return(
        <div className="artists-container">
            <div className="artist-sort">
                <label htmlFor="sort">Sort by name: </label>
                <select name="sort" id="sort">
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
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