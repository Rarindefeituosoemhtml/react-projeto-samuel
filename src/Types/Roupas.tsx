export type Roupas = {
  id: number;
  nome: string;
  tipo: 'camisa' | 'calca' | 'bone' | string;
  imagens: string;
  preco?: number;
  descricao: string
}