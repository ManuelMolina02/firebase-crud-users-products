const key = '4c61a797-97c2-48a6-a1be-e592b3426e54'
import { firebaseApp } from "./firebase";
import { getDatabase, ref, remove, update } from "firebase/database";
import { v4 as uuid } from 'uuid'
import { productProps } from "./types";

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