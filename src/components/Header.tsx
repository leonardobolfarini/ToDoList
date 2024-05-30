import styles from './Header.module.css'
import ToDoLogotipo from '../assets/rocket.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={ToDoLogotipo} alt="ToDoLogotipo" />
            <h1>todo</h1>
        </header>
    )
}