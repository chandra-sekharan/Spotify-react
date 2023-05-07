import React,{useState} from "react";
import './styles/search.css'
import axios from "axios";

const Search = ({tokenn ,setUri,setimg})=>{
   const [search,setSearch] = useState('');
   const [Data,setData] = useState([]);
   
   
   
   const searchhandler = async (e) =>{
    e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
       headers:{
        Authorization:`Bearer ${tokenn}`
       },
       params:{
        q:search,
        type:"track",
        market:"US",
        limit:13,
        offset:0
       }
    })
    setData(data.tracks.items)
 }
 
    return(
        <div className="search_sec">
            <form onSubmit={searchhandler}>
                <input type="text" placeholder="Search song/artist.." value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                <svg onClick={searchhandler} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path></svg>
              </form>
            <div className="tracks">
              {Data.map(song=>
              <div onClick={(e)=>setUri(song.preview_url)} onClickCapture={(e)=>setimg(song.album.images[0].url)} className="card">
              <button onClick={(e)=>setUri(song.preview_url)} onClickCapture={(e)=>setimg(song.album.images[0].url)}><img src={song.album.images[0].url} alt="" /></button>
              <h3>{song.name}</h3>
              <h4>{song.artists[0].name}</h4>
             </div>
              )}
            </div>              
              <div className="empty"></div>
              
              
        </div>
    )
}

export default Search