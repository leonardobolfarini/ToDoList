import styles from './Empty.module.css'
import clipBoardIcon from '../../assets/Clipboard.svg'

export function Empty(){
    return(
        <article>
            <div className={styles.emptyList}>
                <img src={clipBoardIcon} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <footer>
                    Crie tarefas e organize seus itens a fazer
                </footer>
            </div>
        </article>
    )
}