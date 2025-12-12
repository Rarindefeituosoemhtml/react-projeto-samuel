import './CardProduto.css'
import roupa_default from "../../assets/img/banner_02.png"
import type { CardProdutosProps } from '../../Types/CardProdutosProps'
import { FormatosService } from '../../Services/FormatosService'

export default function CardProduto({nome, descricao, preco, imagens} : CardProdutosProps) {
    return (
        <div>
            <div className='card_produto'>
                <img src={(imagens[0].length > 0) ? `http://localhost:5174/produtos/${imagens[0]}` : roupa_default} alt='camisa' />
                <h2> {nome} </h2>
                <p>{(descricao.length > 0) ? descricao : "Descriçao nao informada"} </p>
                <span> {preco} </span>
                <span> {FormatosService.PrecoBR(preco) } </span> //falta uma barra
            </div>
        </div>
    )
}