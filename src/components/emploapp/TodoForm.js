import React from 'react'
import './TodoForm.css'
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

const TodoForm = (props) => {
    
    return (
        <div className='main-app'>
            <form
                onSubmit={(event) => 
                props.handleSubmit(event)}
            >
                <div>
                    <label htmlFor=""></label>
                    
                    <div className="form1">
                        <TextField
                            id="filled-basic" 
                            label="First Name" 
                            variant="filled"
                            type="text"
                            name="todo" 
                            value={props.name1}
                            onChange={(e) => 
                            props.handleOnChange(e, 'name1')}
                        />
                    </div>
                    <br />
                    <div className="form2">
                        <TextField
                            id="filled-basic" 
                            label="Last Name" 
                            variant="filled"
                            type="text"
                            name="todo"  
                            placeholder="Enter todo"
                            value={props.name2}
                            onChange={(e) => 
                            props.handleOnChange(e, 'name2')}
                        />
                    </div>
                    <br />
                    <div className="form3">
                        <FormControl fullWidth>
                            <InputLabel 
                                id="demo-simple-select-label">
                                Department
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.name3}
                                label="Department" 
                                onChange={(e) => 
                                props.handleOnChange(e, 'name3')}
                            >
                                <MenuItem value="IT">
                                    IT
                                </MenuItem>
                                <MenuItem value="Sales">
                                    Sales
                                </MenuItem>
                                <MenuItem value="Administration">
                                    Administration
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <br />
                    <div className='form4'>
                        <TextField
                            id="filled-basic" 
                            label="Salary" 
                            variant="filled" 
                            type="number" 
                            value={props.name4}
                            onChange={(e) => 
                            props.handleOnChange(e, 'name4')} 
                        />
                    </div>
                    <br />
                    <div className='form5'>              
                        <Button 
                        variant="outlined"
                        type="submit"
                        >
                            ADD
                        </Button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default TodoForm