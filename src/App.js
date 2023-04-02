import {  useState } from "react";
import Particle from "./Particle.js"

function App() {
  const [ imgSrc, setImgSrc] = useState();
  (() => {
    if(!imgSrc) {
      setImgSrc(true)
fetch("https://api.thecatapi.com/v1/images/search").then(r => r.json()).then((json) => {
  setImgSrc(json[0].url)
})
    }
  })()
  return (
    <>
    <div>
      <Particle />
    </div>
<div className="hero min-h-screen z-1">
  <div className="hero-content flex-col lg:flex-row-reverse">
{
  imgSrc ? 
  <img src={imgSrc} className="max-w-md rounded-lg shadow-2xl" />
: null
}    <div>
      <h1 className="text-5xl font-bold">Cute Cat</h1>
      <p className="py-6">A cat picture should be on the side of this text. <br /> this is also a project requested by a friend</p>
      <button className="btn btn-primary" onClick={() => window.location.reload()}>See another one</button>
    </div>
  </div>
</div>
<footer className="footer footer-center p-4 text-base-content">
  <div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a target="_blank" href="https://saahild.com">Saahil</a></p>
  </div>
</footer>
</>
  );
}

export default App;
