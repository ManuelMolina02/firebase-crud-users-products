import { Button } from "../../../Globals/Buttons/Buttons";
import styles from './buttonsForm.module.scss'


interface buttonsFormProps {
  stateButtons: {
    updateUserBtn: boolean,
    newAdressBtn: boolean
  }
  functions: {
    updateProducts?: () => void
    clearInputs: () => void
    cancelUserEdit?: () => void
    addNewProduct?: () => void
    cancelProductEdit?: () => void
    handleInputsNewAddress?: () => void
  }
}

export function ButtonsForm({ stateButtons, functions }: buttonsFormProps) {


  return (
    <>
      <div className={styles.formButtons}>
        {
          !stateButtons.updateUserBtn ?
            <Button
              theme='clear'
              action={() => functions.clearInputs()}
            />

            :
            <Button
              theme='delete'
              action={() => functions.cancelProductEdit()}
            />
        }
        {
          !stateButtons.updateUserBtn ?
            <Button
              theme='create'
              action={functions.addNewProduct}
            />

            :
            <>
              <Button
                theme='update'
                action={functions.updateProducts}
              />
              {
                !stateButtons.newAdressBtn ?
                  <div className={styles.btnUpdateAddress}>

                    <Button
                      title="Inserir Outro Produto"
                      theme='updateAddress'
                      action={functions.handleInputsNewAddress}
                    />

                  </div>

                  :
                  <div className={styles.btnUpdateAddress}>
                    <Button
                      theme='delete'
                    // action={() => functions.cancelProductEdit()}
                    />

                    <Button
                      title="Realizar Cadastro"
                      theme='updateAddress'
                    // action={functions.addNewAddress}
                    />
                  </div>
              }

            </>
        }
      </div>


    </>
  )
}