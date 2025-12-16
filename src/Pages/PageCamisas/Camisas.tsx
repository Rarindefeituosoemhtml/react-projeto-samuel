import "./Camisas.css";
// import banner_01 from "../../assets/img/banner_02.png"
// import banner2 from "../../assets/img/camisa_1920x800 (1).jpg";
import camisa01 from "../../assets/img/CamisaAngels.webp"
import camisa02 from "../../assets/img/camisaMaskFrente.webp"
import camisa03 from  "../../assets/img/camisaMaskCostas.webp"
import Banner from "./../../Components/Banner/Banner"


function Camisas() {
  return (
    <>

      <main>

       <section className="banner">
    <Banner />
        
       </section>

        <section className="container">

            <div className="titulo">
                <span>OVERSIZED</span>
            </div>

            <section className="cards">

                <div className="card">

                    <img src={camisa01} alt=""/>

                    <h2>drop lock</h2>

                </div>

                <div className="card">

                    <img src={camisa02} alt=""/>

                    <h2>mask off
                        black
                    </h2>

                </div>

                <div className="card">

                    <img src={camisa03} alt=""/>

                    <h2>skull drop
                        white
                    </h2>

                </div>

              

            </section>

        </section>

    </main>
    
    </>
  );
}

export default Camisas;
