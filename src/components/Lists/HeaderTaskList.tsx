import styles from './HeaderTaskList.module.css'

interface HeaderProps{
    totalTasks: number
    checkedTasksNumber: number
}

export function HeaderList({ totalTasks, checkedTasksNumber }:HeaderProps){
    return(
        <header className={styles.header}>
            <p>Tarefas criadas <span>{totalTasks}</span></p>
            <footer>
                Concluídas <span>{checkedTasksNumber}</span>
            </footer>
        </header>
    )
}