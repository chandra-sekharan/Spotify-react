import React, { useEffect, useState } from "react";
import './styles/App.css';
import axios from 'axios';
import Player from "./Player";
import Search from "./Search";
import Songs from "./Songs";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Album from "./Album";

const Home = ({logouthandler,tokenn}) =>{

  

   const [image, setimg] = useState('');
   const [uri ,setUri] = useState('');
   const [telugu, setTelugu] = useState([]);
   const [tamil, setTamil] = useState([]);
   const [hindi,  setHindi] = useState([]);
   const [album ,setAlbum]  = useState([]);
 
   
   
   useEffect(()=>{    
    
    if(album.length < 1)    
    {
     const albumData = localStorage.getItem('spotify-album'); 
   
      if(albumData)
      {
        setAlbum(JSON.parse(albumData));
      }
    } 
   
})
   


   
 
 /************************Api call***********************/
const albumIds = ["3lnOgTbiGMIvcZhvqBkHDa","6HD7XO3XdXS9x8m5ioTLff","6RsL60SSZTVwigjfyY8mD2","7B0qsVSWw3Cn8pngsHYNVQ","3kBrgReuEedduqXf27qgn9","3JdE4IkqObXwTWzYKieCUv","4Z3OH7wgqG7rLBZVVdTEcD","4iFurFyAPhOlzwQTc5aXN2","0FIP7MeIO3yqL8K6uTz3b1","70cftH7NeXGgJYH3iyos0m","5G0ShngTfASzTfVDOSOM5p","2ooWY7xriwwyj23dAI32C2","4kIPlpwEZBK9JaI9pZHe79","1t1gWslYejaaqicumEbdKU","0Rkv5iqjF2uenfL0OVB8hg","5xjaz957o6YGSXmlfd2tex"]    

 useEffect(() => {
  
    const fetchAlbums = async () => {
      try {
        const promises = albumIds.map(albumId =>
          axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
              Authorization: `Bearer ${tokenn}`
            }
          })
        );
        const responses = await Promise.all(promises);
        const albumData = responses.map(response => response.data);
        
        setTelugu(albumData.slice(0,6));
        setTamil(albumData.slice(6,11));
        setHindi(albumData.slice(11,16));
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  });
  
  /*************************************************/
  
  
   return(
    <BrowserRouter>
      <div className="home">
          <Header logouthandler={logouthandler}/>
           <div className="main">
            <Sidebar/>
               <Routes>
                 <Route path="/" element={<Songs telugu={telugu} tamil={tamil} hindi={hindi} setAlbum={setAlbum }/>} />
                 <Route path='/search' element={<Search  tokenn={tokenn} setUri={setUri} setimg={setimg} />} />
                 <Route path ="/album" element={<Album album={album} setUri={setUri} setimg={setimg} setAlbum={setAlbum} />} />
               </Routes>
            </div>             
        {/*Player*/}
          <div className="bottom">
           <Player uri={uri} image={image}  /> {/*uri and image */}
          </div>   
       </div>
        </BrowserRouter>
    );
}

export default Home;