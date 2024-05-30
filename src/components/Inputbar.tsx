import styles from './Inputbar.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export function Inputbar({...rest}: InputProps){
    return(
        <input
            className={styles.newtask}
            placeholder='Adicione uma nova tarefa'
            {...rest}
        />
    )
}