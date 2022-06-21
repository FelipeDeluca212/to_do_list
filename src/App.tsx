import { useState } from 'react'
import * as C from './App.styles'
import { item } from './types/item'
import { ListItem } from './components/ListItem/Index'
import { AddArea } from './components/AddArea/Index'

const App = () => {
  const [list, setlist] = useState<item[]>([
    {id: 1, name: 'Aprender react com ts', done: true},
    {id: 2, name: 'Aprender ts', done: true}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setlist(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App