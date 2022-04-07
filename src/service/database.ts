import { firebaseApp } from "./firebase";
import { getDatabase, ref, set, remove, update } from "firebase/database";
import { v4 as uuid } from 'uuid'
import { productProps } from "./types";
const key = '416c442b-1e63-4567-a561-125a4f4e392a'

//iniciando firebase e banco de dados
firebaseApp()
export const db = getDatabase();

// -> Queries banco de dados

interface props {
  productKey?: string,
  produto?: productProps
}

//Criar produto
export function setNewProduct({ produto }) {
  const productKey = uuid() as string

  update(ref(db, `users/${key}/produtos`), {
    [productKey]: {
      codigoCliente: produto.codigoCliente,
      descricao: produto.descricao,
      pesoBruto: Number(produto.pesoBruto),
      pesoLiquido: Number(produto.pesoLiquido),
      grupo: produto.grupo,
      um: produto.um,
    }
  })
}

//Editar um produto
export function updateProduct(produto, productKey) {
  update(ref(db, `users/${key}/produtos`), {
    [productKey]: {
      codigoCliente: produto.codigoCliente,
      descricao: produto.descricao,
      pesoBruto: Number(produto.pesoBruto),
      pesoLiquido: Number(produto.pesoLiquido),
      grupo: produto.grupo,
      um: produto.um,
    }
  })
}

//Deletar produto
export function deleteProduct(productKey: string) {
  remove(ref(db, `users/${key}/produtos/${productKey}`))

  window.location.href = '/home'

}

