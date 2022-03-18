import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    // console.log(props)

    return (
        <div>
            < ul >
                {props.todos.map((todo) => (

                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodoDone={() => props.toggleTodoDone(todo.id, todo.done)}
                        removeTodo={() => props.removeTodo(todo.id)}
                    />
                ))
                }
            </ul>
        </div>
    )
}

export default TodoList
