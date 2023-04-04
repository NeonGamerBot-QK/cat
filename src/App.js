import {  useCallback, useState } from "react";
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
<Particle />

<div className="hero min-h-screen z-1">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img src={imgSrc  || "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Cute Cat</h1>
      <p className="py-6">A cat picture should be on the side of this text. <br /> this is also a project requested by a friend</p>
      <button className="btn btn-primary" onClick={() => window.location.reload()}>See another one</button>
      <button className="btn btn-primary" onClick={() => setImgSrc("https://media.discordapp.net/attachments/765669027552559149/1092591958913990677/IMG_7610.jpg?width=256&height=324")}>See a big orange cat (the cats also buff)</button>
    </div>
  </div>
</div>
<footer className="footer footer-center p-4 text-base-content bg-base-200">
  <div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a target="_blank" href="https://saahild.com">Saahil</a></p>
  </div>
</footer>

</>
  );
}

export default App;
