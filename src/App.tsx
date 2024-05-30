import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Inputbar } from './components/Inputbar'
import { Button } from './components/Button'
import { HeaderList } from './components/Lists/HeaderTaskList.tsx'
import { TaskList } from './components/Lists/Item.tsx'
import { useState } from 'react'
import { Empty } from './components/Lists/Empty.tsx'
import { PlusCircle } from '@phosphor-icons/react' 


export interface TaskProps{
  id: number;
  content: string;
  isChecked: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [inputValue, setInputValue] = useState('')

  const checkedTaskCounter = tasks.reduce((valorTotal, taskAtual) =>{
    if (taskAtual.isChecked){
      return valorTotal + 1
    }
    return valorTotal
  }, 0)

  function handleAddTask(){
    if (!inputValue){
      return
    }

    const newTask: TaskProps = {
      id: new Date().getTime(),
      content: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleCheckTask({id, value}: {id: number; value:boolean}){
    const updatedTasks = tasks.map((task)=>{
      if (task.id === id){
        return {...task, isChecked: value}
      }

      return {...task}
    })
    setTasks(updatedTasks)
  }

  function deleteTask({id}: {id: number}){
    const tasksWithouTheDeletedOne = tasks.filter(task =>{
      if (task.id != id){
        return task
      }
    })
    setTasks(tasksWithouTheDeletedOne)
  }

  return(
    <main>
      <Header />
        <section className={styles.content}>
          <div className={styles.taskBar}>
            <Inputbar
              onChange={(element) => setInputValue(element.target.value)}
              value={inputValue}
            />
            <Button onClick={handleAddTask}>
              Criar
              <PlusCircle/>
            </Button>
          </div>

          <div className={styles.tasks}>
          <HeaderList
            totalTasks={tasks.length}
            checkedTasksNumber={checkedTaskCounter} 
          />

          {tasks.length > 0 ?(
            <div>
            {tasks.map((task) =>(
                <TaskList
                  key={task.id}
                  data={task}
                  checkTask={handleCheckTask}
                  onDeleteTask={deleteTask}
                />
            ))}
            </div>
          ) : (
            <Empty />
          )}
          </div>
    
        </section>
    </main>
  )
}

export default App
