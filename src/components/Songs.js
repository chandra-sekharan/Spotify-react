import React from "react";
import './styles/songs.css'
import {Link} from 'react-router-dom'

const Songs = ({telugu,tamil,hindi,setAlbum})=>{

 const handleAlbum = (data)=>{
  setAlbum(data)
  localStorage.setItem('spotify-album' , JSON.stringify(data));     
 }

    return(
    <div className="songs">
          <div className="album_sec">
             <h1>Popular Telugu</h1>
             <div className="albums_layout">
                {telugu ? telugu.map((data) =>(
                  <div className="album_card">
                    <Link to="/album"><img onClick={()=>handleAlbum(data)}  key={data.id} src={data.images[0].url} alt="" /></Link>
                  </div>
                  )):null}
              </div>       
            </div>
           <div className="album_sec">
              <h1>Popular Tamil</h1>
               <div className="albums_layout">
                 {tamil ? tamil.map((data) =>(
                  <div className="album_card">
                    <Link to="/album"><img onClick={()=>handleAlbum(data)} key={data.id} src={data.images[0].url} alt="" /></Link>
                    </div>       
                  )):null}
                </div>       
              </div>
           <div className="album_sec">
                <h1>Popular Hindi</h1>
              <div className="albums_layout">
                {hindi ? hindi.map((data) =>(
                 <div className="album_card">
                  <Link to="/album"><img onClick={()=>handleAlbum(data)}  key={data.id} src={data.images[0].url}  alt="" /></Link>
                  </div>
                )):null}
               <footer>copyrights &copy;<span> @chandra shekar</span></footer>    
              </div>       
           </div>
               
    </div>

    )
}

export default Songs