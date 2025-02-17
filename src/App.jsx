import { useState } from "react"
function App() {
  const [todoList, setTodoList] = useState([
    {id:1, taskName:"Learn UseRef", status:"pending"},
    {id:2, taskName:"Go to GYM", status:"pending"},
    {id:3, taskName:"Build to do web app", status:"pending"},
  ])

  const [newTask, setNewTask] = useState("")

  // addTask
  const addTask = (e) => {
    e.preventDefault()
    if(!newTask){
      alert("Enter a Task...")
    }else{
      let newId = todoList.length + 1
      let newEntry = {id:newId, taskName:newTask, status:"Pending"}
      setTodoList([...todoList, newEntry])
      setNewTask("")

    }
  }

  // remove task
  const removeTask = (id) =>{
    setTodoList(todoList.filter((item) => {
      return item.id !== id
    }))

  }

  // updateTask
  const updateTask = (id) => {
    setTodoList(todoList.map((item) => {
      return item.id === id ? {...item, status:"Completed"}: item
    }))
  }

  return (
   <div className="min-h-screen bg-gradient-to-b from-fuchsia-900 to-violet-950 text-white">
      <div className="flex justify-center py-36">
        <form className="bg-white py-6 px-6 rounded-lg w-[400px] flex justify-between">
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="Learn UseRef" className="text-black border-none outline-none tracking-wider" />
            <button onClick={addTask} className="bg-fuchsia-900 hover:bg-fuchsia-950 px-10 py-2 rounded-lg">Add</button>
        </form>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {
          todoList.map((item, index) => {
            return (
              <div key={item.id} className="bg-zinc-800 w-[250px] h-[250px] py-10 px-4">
                <h1 className="text-lg font-bold">{index + 1} {item.taskName}</h1>
                <p className="py-4">Status: {item.status}</p>
                <div className="flex flex-col gap-2 mt-6">
                  <button className="bg-blue-800 py-2 rounded-md" onClick={() => {updateTask(item.id)}}>Update Status</button>
                  <button className="bg-blue-800 py-2 rounded-md" onClick={() => {removeTask(item.id)}}>Remove</button>
                </div>
              </div>
            )
          })

        }
      </div>
   </div>
  )
}

export default App
