import { Check, Trash } from '@phosphor-icons/react'
import styles from './Item.module.css'
import { TaskProps } from '../../App'

interface Props{
    data: TaskProps
    checkTask: ({id, value}: {id: number; value: boolean}) => void
    onDeleteTask: ({ id }: {id: number}) => void 
}

export function TaskList({ data, checkTask, onDeleteTask}:Props){

    function handleCheckTask(){
        checkTask({ id: data.id, value: !data.isChecked })
    }

    function handleDeleteTask(){
        onDeleteTask({id: data.id})
    }

    const checkboxCheckedClassname = data.isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : ''

    return(
        <article className={styles.taskbox}>
            <div className={styles.contentBox}>
                <label htmlFor="checkbox" onClick={handleCheckTask}>
                    <input readOnly type="checkbox" checked={data.isChecked} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isChecked && <Check size={12} />}
                    </span>
                    <p className={`${styles.paragraph}  ${paragraphCheckedClassname}`}>
                        {data.content}
                    </p>
                </label>
            </div>
            <button>
                <Trash size={16} onClick={handleDeleteTask}/>
            </button>
        </article>
    )
}