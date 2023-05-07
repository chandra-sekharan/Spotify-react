import React,{useState,useEffect} from 'react';
import './styles/App.css';
import Login from './Login';
import Home from './Home';





const App = () => {
  /*********************Token Code *******************************/
    const [tokenn, setToken] = useState('');
         console.log(tokenn)

      useEffect(()=>{
      const hash = window.location.hash;
      const token = window.localStorage.getItem("token")
      alert("token found")
      setToken(token)
      if(!token && hash){
         let token = hash.substring(1).split("&")[0].split("=")[1];
          window.location.hash ="";
          window.localStorage.setItem("token", token);
      }
      
  },[]);
 /*******************Logout handler *******************/
  const logouthandler = (e) =>{
    setToken("");
    window.localStorage.removeItem("token");
    alert("Logout success")
  }
  
   /*********************Main content*********************************/
       return (
           <div className="App">
            {!tokenn ? 
            <Login/>:<Home logouthandler={logouthandler} tokenn={tokenn}/>
            }
            </div>
            
          );
}

export default App;
