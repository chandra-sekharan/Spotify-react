import React,{useEffect} from "react";
import './styles/album.css'



const Album = ({album ,setUri,setimg})=>{

    const handleAlbum = (data)=>{
        setUri(data.preview_url)
        setimg('')    
    }
    return(
           <div className="albums_container">
            <div className="title_section">
            <img src={album.images ? album.images[0].url: ''} alt=""/>
            <div className="titles">
            <h1>{album.name ? album.name :''}</h1>
            <h3>{album.artists ? album.artists[0].name:''} . {album.total_tracks} Songs</h3>
            
            </div>
            </div>
            
            <div className="songs_section">
                <div className="songs_sub">
                <div className="headers">
                <h1>#</h1>    
                <h1>Title</h1>
                </div>
                <hr/>
                <div className="songs_list">
                 {album.tracks ? album.tracks.items.map((data)=>
                  <div onClick={()=>handleAlbum(data)} className="track_sec">
                    <h2>{data.track_number}</h2>
                    <div className="track_art">
                    <h2>{data.name}</h2>
                    <h3>{data.artists[0].name}</h3>
                    </div>
                  </div>
                 ):null}
                </div>
                <footer>copyrights &copy;<span> @chandra shekar</span></footer>    
                </div>
            </div>
         </div>  
         
        )
}

export default Album