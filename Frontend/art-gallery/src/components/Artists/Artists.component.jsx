import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { getArtist } from "../../redux/actions/actions";
import ArtistCard from '../ArtistCard/ArtistCard.component'
import './Artists.css'

export default function Artists(){

    const artists = useSelector(state => state.artist)
    const [sort, setSort] = useState('az');

    const dispatch = useDispatch()

    useEffect(() => {
        if(sort === 'az'){
            artists.sort((a, b) => {
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                else return 0
            })
        }
        if(sort === 'za'){
            artists.sort((a, b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                else return 0
            })
        }
    },[sort,artists])

    useEffect(() => {
      dispatch(getArtist())
    }, [dispatch])

    return(
        <div className="artists-container">
            <div className="artists-header">
                <h1>Artists</h1>
                <div className="artist-sort">
                    <label htmlFor="sort">Sort by name: </label>
                    <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)} >
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                    </select>
                </div>
            </div>
            {
                artists.map(artist => {
                    return(
                        <Link className="card-link" to={`/artists/${artist.id}`} key={artist.id}>
                            <ArtistCard
                                id={artist.id}
                                img={artist.photo}
                                name={artist.name}
                                location={artist.location}
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}