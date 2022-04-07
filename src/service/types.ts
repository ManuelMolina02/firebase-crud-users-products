//Definindo tipagem dos dados

export type user = {
  key: string,
  username: string,
  password: string,
  produtos: productProps[]
}

export type productProps = {
  key: string,
  codigoCliente: string;
  descricao: string;
  pesoBruto: number;
  pesoLiquido: number;
  grupo: string;
  um: string;
}