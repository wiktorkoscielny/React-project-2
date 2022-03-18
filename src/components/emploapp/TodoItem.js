import React from 'react'
import './EmployeeTodo.css'
import Button from '@mui/material/Button';

const TodoItem = (props) => {

    return (
        <div className='worker-list'>
            
            
                <span 
                className={props.todo.done ? "done" : 'not-done'}>
                    
                    <div className='list-el-1'> 
                        <p className='worker-title'>
                            Number: {props.todo.id}
                        </p>
                    
                    </div>

                    <br />

                    <div className='list-el-1'>  

                        <p className='worker-title'>
                            First Name: {props.todo.firstName}
                        </p> 

                    </div>   
                        <br />
                    <div className='list-el-1'>  
                        
                        <p className='worker-title'>
                            Last Name: {props.todo.lastName}
                        </p>

                    </div>
                        <br />
                    <div className='list-el-1'>

                        <p className='worker-title'>
                            Department: {props.todo.department}
                        </p>
                    
                    </div>
                        <br />
                    <div className='list-el-1'> 

                        <p className='worker-title'>
                            Salary: {props.todo.salary}
                        </p>
                    </div>
                        <br />  
                    <Button
                                
                        variant="outlined"
                        onClick={(event) => props.removeTodo()}
                    >
                        Delete
                    </Button>    
                        <br />
                </span>
                <br />
        </div>
    )
}

export default TodoItem