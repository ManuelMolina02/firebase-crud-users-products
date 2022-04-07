import { Button } from "../../Globals/Buttons/Buttons";
import styles from './buttonsForm.module.scss'


interface buttonsFormProps {

  functions: {
    clearInputs: () => void
    userLogin: () => void
  }
}

export function ButtonsForm({ functions }: buttonsFormProps) {


  return (
    <>
      <div className={styles.formButtons}>
        {
          <Button
            theme='clear'
            action={() => functions.clearInputs()}
          />
        }
        {
          <Button
            theme='login'
            action={functions.userLogin}
          />

        }
      </div>
    </>
  )
}