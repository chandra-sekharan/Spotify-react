import AudioPlayer from 'react-h5-audio-player';
import './styles/App.css';
import 'react-h5-audio-player/lib/styles.css';




const Player = ({uri,image}) =>{
  console.log(uri)
  return(
    <>
    <div className='poster'>
    <img src={image} alt=""  />
    </div>
    <AudioPlayer
    src={uri}
    onPlay={e=>console.log("onPlay")}
    autoPlay
   />
   </>
  );

}
 export default Player