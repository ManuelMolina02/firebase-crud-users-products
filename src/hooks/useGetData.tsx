import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../service/database";
import { productProps, user } from "../service/types";

export function useGetData() {
  const [users, setUsers] = useState<user[]>([])
  const [productsData, setProducts] = useState<productProps[]>([])

  useEffect(() => {
    const users = ref(db, 'users');

    //Listando informações do banco de dados
    onValue(users, results => {
      const dataUsers = Object.entries<user>(results.val() ?? {})
        //criando obj de retorno 
        .map(([key, value]) => {

          return {
            key: key,
            username: value.username,
            password: value.password,
            produtos: value.produtos
          }

        })

      const productsData = Object.entries<productProps>(dataUsers[0].produtos ?? {})
        //criando obj de retorno 
        .map(([key, value]) => {
          return {
            key,
            ...value
          }
        })

      setUsers(dataUsers)
      setProducts(productsData)
    })

  }, [])

  return { users, productsData }


}

