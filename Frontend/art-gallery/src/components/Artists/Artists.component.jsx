import React, {useState, useEffect} from "react";
import ArtistCard from '../ArtistCard/ArtistCard.component'
import './Artists.css'

const {artists} = require('../../assets/Json/artists.json')

export default function Artists(){

    const [artistList, setArtistList] = useState(artists);
    const [sort, setSort] = useState('az');
    console.log(artistList)

    useEffect(() => {
        if(sort === 'az'){
            setArtistList(artistList.sort((a, b) => {
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                else return 0
            }))
        }
        if(sort === 'za'){
            setArtistList(artistList.sort((a, b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                else return 0
            }))
        }
    },[sort,artistList])

    return(
        <div className="artists-container">
            <div className="artist-sort">
                <label htmlFor="sort">Sort by name: </label>
                <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)} >
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            {
                artistList.map(artist => {
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