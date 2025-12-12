import axios from "axios"; 
import type { Roupas } from "../Types/Roupas";


export const getRoupas = async (): Promise<Roupas[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/camisas");
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}