import './Produtos.css';
import banner_01 from "../../assets/img/banner_02.png"
import { useEffect, useState } from 'react';
import type { Roupas } from '../../Types/Roupas';
import { getRoupas } from '../../Services/RoupasService';
import CardProduto from '../../Components/Card/CardProduto';

export default function Produtos() {

  const [roupas, setRoupas] = useState<Roupas[]>([]); // estado para armazenar os produtos  


  const fetchRoupas = async () => {
    try {
      const dados = await getRoupas();
      console.log("Lista de dados vinda da API: ", dados);
      setRoupas(dados);
    } catch (error) {
      console.error("Erro ao executar getRoupas: ", error)
    }
  }

  useEffect(() => {
    fetchRoupas();
  }, []
  )

  return (
    <main>
      <section className="banner">
        <img src={banner_01} alt="Banner Demonstrativo" />
      </section>

      <section className="container">
        <div className="titulo">
          <span>OVERSIZED</span>
        </div>

        <section className="cards">
        {roupas.map ((r: Roupas)=>(
          <CardProduto
            key={r.id}
            nome={r.nome}
            descricao={r.descricao}
            imagens={r.imagens[0] ?? ""}
            id={''}
            tipo={''} preco={0} />
        ) )
        }

        </section>
      </section>
    </main>
  )
}