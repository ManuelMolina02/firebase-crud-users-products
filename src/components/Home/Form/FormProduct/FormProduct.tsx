import Form from "react-bootstrap/Form";
import { Input } from "../../../Globals/Input/Input";
import styles from './formAddress.module.scss'

interface Product {
  values: {
    codigoCliente: string,
    descricao: string,
    pesoBruto: number,
    pesoLiquido: number,
    grupo: string,
    um: string,
  }

  setValues: {
    setCodigoCliente: (data: string) => void,
    setDescricao: (data: string) => void,
    setPesoBruto: (data: number) => void,
    setPesoLiquido: (data: number) => void,
    setGrupo: (data: string) => void,
    setUm: (data: string) => void,
  }

}

export function FormProduct({ values, setValues }: Product) {
  return (
    <div className={styles.formProduct}>
      <div>
        <div>
          <Input
            title={'Código Cliente'}
            value={values.codigoCliente}
            setData={setValues.setCodigoCliente}
            maxLength={10}
            require={false}
          />

          <Input
            title={'Descrição'}
            value={values.descricao}
            setData={setValues.setDescricao}
            maxLength={40}
            require={false}
          />

          <Input
            title={'Peso Bruto'}
            value={values.pesoBruto}
            setData={setValues.setPesoBruto}
            maxLength={5}
            require={false}
            type={'number'}
          />
        </div>


        <div>
          <Input
            title={'Peso Liquido'}
            value={values.pesoLiquido}
            setData={setValues.setPesoLiquido}
            maxLength={5}
            require={false}
            type={'number'}

          />

          <div>
            <label>Grupo</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => setValues.setGrupo(event.target.value)}

            >
              <option>Selecione um grupo</option>
              <option value="SPRI">SPRI</option>
              <option value="RITR">RITR</option>
              <option value="MINE">MINE</option>
              <option value="SOVE">SOVE</option>
              <option value="SUMI">SUMI</option>
            </Form.Select>
          </div>


          <div>
            <label>Um</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => setValues.setUm(event.target.value)}

            >
              <option>Selecione uma unidade</option>
              <option value="UN">UN</option>
              <option value="KG">KG</option>
              <option value="AP">AP</option>
              <option value="CX">CX</option>
            </Form.Select>
          </div>

        </div>
      </div>
    </div>
  )
}