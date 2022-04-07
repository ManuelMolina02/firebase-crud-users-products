// Filtros e validações
export function selectProductByKey(listUsers, userKey) {
  const user = listUsers?.find(data => data.key === userKey)

  return user
}



export function validateCodCliente(codCliente) {
  const codClienteAlreadyExists = codCliente.some(user => user.codigoCliente === codCliente)

  return codClienteAlreadyExists
}