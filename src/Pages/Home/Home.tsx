import "./Home.css"

// import amostraCamisa from "../../assets/img/bannerCamisaHome.png" 
// import amostraCalca from "../../assets/img/bannerCalcaHome.png" 
// import amostraBone from "../../assets/img/DropMaskFrente.png" 


export default function Home() {
  return (
    <>
    <section className="container_main">
      <main>
      <h2 className="titulo_modelos">confira nossos modelos</h2>

      <div className="modelos">
        
        <a className="camisa" href="">
          <div>
            <p>Camisas</p>
          </div>
           {/* <img src={amostraCamisa} alt="categoria de camisas"/> */}
        </a>

        <a className="calca" href="">
           {/* <img src={amostraCalca} alt="categoria de calças"/>  */}
          <div>
          <p>Calças</p>
          </div>
        </a>


        <a className="bone" href="">
           {/* <img src={amostraBone} alt="categoria de bonés"> </img> */}
          <div>
          <p className="span_bone">Boné</p>
        </div>
        </a>



      </div>
      </main>


    </section>
    <footer>
          <p className="wearrarinlogo">Wear Rarin</p>
  </footer>
    </>
  )
}
