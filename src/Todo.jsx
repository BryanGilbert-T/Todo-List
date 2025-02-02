import React, {useState, useRef, useEffect} from 'react'

function Todo(){
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);

    // const [newTask, setNewTask] = useState("");
    const newTodo = useRef();
    const newDoing = useRef();
    const newDone = useRef();

    function addTodo(){
        if(newTodo.current.value.trim() === ""){
            return;
        }
        const oldTodo = newTodo.current.value
        setTodo(t => [...t, oldTodo]);
        newTodo.current.value = "";
    }
    function addDoing(){
        if(newDoing.current.value.trim() === ""){
            return;
        }
        const oldDoing = newDoing.current.value;
        setDoing(d => [...d, oldDoing]);
        newDoing.current.value = "";
    }
    function addDone(){
        if(newDone.current.value.trim() === ""){
            return;
        }
        const oldDone = newDone.current.value;
        setDone(d => [...d, oldDone]);
        newDone.current.value = "";
    }

    function removeTodo(idx){
        setTodo(todo.filter((_, i) => i !== idx));
    }
    function removeDoing(idx){
        setDoing(doing.filter((_, i) => i !== idx));
    }
    function removeDone(idx){
        setDone(done.filter((_, i) => i !== idx));
    }

    return(
        <div className="todo">
            <h1 className="main-title">To Do List</h1>
            <div className="cards">
                <div className='todo-card'>
                    <h2>Todo</h2>
                    <div className='list list-todo'>
                        <ol className='bigChild'>
                            {todo.map((elem, index) => {
                                return(
                                    <li 
                                    key={index}
                                    className="child">
                                        <span className="task">{elem}</span>
                                        <span className="trashcan" onClick={() => removeTodo(index)}>🗑️</span>
                                    </li>
                                )
                            })}
                            {
                                (todo.length < 5) ?
                                (
                                <li
                                className="child child-add">
                                    <span>
                                        <input type="text" className="input-task"
                                        placeholder="New Task" ref={newTodo}
                                        onChange={(e) => handleTodo(e)}/>
                                    </span>
                                    <span className="trashcan" onClick={addTodo}>
                                        ➕
                                    </span>
                                </li>
                                ) :
                                <></>
                            }
                        </ol>
                    </div>
                </div>
                <div className='doing-card'>
                    <h2>Doing</h2>
                    <div className='list list-doing'>
                        <ol className='bigChild'>
                            {doing.map((elem, index) => {
                                return(
                                    <li 
                                    key={index}
                                    className="child">
                                        <span className="task">{elem}</span>
                                        <span className="trashcan" onClick={() => removeDoing(index)}>🗑️</span>
                                    </li>
                                )
                            })}
                            {
                                doing.length < 5 ?
                                (
                                    <li
                                    className="child child-add">
                                        <span>
                                            <input type="text" className="input-task"
                                            placeholder="New Task" ref={newDoing}
                                            onChange={(e) => handleDoing(e)}/>
                                        </span>
                                        <span className="trashcan" onClick={addDoing}>
                                            ➕
                                        </span>
                                    </li>
                                ):
                                <></>
                            }
                        </ol>
                    </div>
                </div>
                <div className='done-card'>
                    <h2>Done</h2>
                    <div className='list list-done'>
                        <ol className='bigChild'>
                            {done.map((elem, index) => {
                                return(
                                    <li 
                                    key={index}
                                    className="child">
                                        <span className="task">{elem}</span>
                                        <span className="trashcan" onClick={() => removeDone(index)}>🗑️</span>
                                    </li>
                                )
                            })}
                            {
                                done.length < 5 ?
                                (
                                    <li
                                    className="child child-add">
                                        <span>
                                            <input type="text" className="input-task"
                                            placeholder="New Task" ref={newDone}
                                            onChange={(e) => handleDone(e)}/>
                                        </span>
                                        <span className="trashcan" onClick={addDone}>
                                            ➕
                                        </span>
                                    </li>
                                ):
                                <></>
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Todo;