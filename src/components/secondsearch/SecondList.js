import React, { Component } from 'react'
import './Search.css'
import axios from 'axios'
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';



class LiveSearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Profile: [],
    }
    this.cancelToken = ''
    this.getVal = this.getVal.bind(this)
    this.node = React.createRef()
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.getVal)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.getVal)
  }
  getVal = (e) => {
    if (this.node.current.contains(e.target)) {
      return
    }
    this.setState({
      todos: [],
    })
  }
  onChange = async (e) => {
    if (this.cancelToken) {
      this.cancelToken.cancel()
    }
    this.cancelToken = axios.CancelToken.source()
    await axios
      .get('http://localhost:3000/todos', {
        cancelToken: this.cancelToken.token,
      })
      .then((res) => {
        this.setState({
          Profile: res.data,
        })
      })
      .catch((e) => {
        if (axios.isCancel(e) || e) {
          console.log('Data not found.')
        }
      })
    let stringKwd = e.target.value.toLowerCase()
    let filterData = this.state.Profile.filter((item) => {
      return item.firstName.toLowerCase().indexOf(stringKwd) !== -1
    })
    this.setState({
      Profile: filterData,
    })
    
  }
  
  

  render() {
    
    return (
      <>
        <h2 className='search-title'>SEARCH USER</h2>
        <div className="search-box">
        <TextField
            id="filled-basic" 
            label="Search name..." 
            variant="filled"
            type="text"   
            ref={this.node}
            onClick={this.getVal}
            onChange={this.onChange}
          />
        </div>
        <div className="search-list-box">
          {this.state.Profile.map((item) => {
            return (
              <a
                className="search-list"
                key={item.id}
              >
                {item.firstName}{"\n"}{item.lastName}<br />
              </a>
            )
          })}
        </div>
      </>
    )
  }
}
export default LiveSearchFilter;

/*
          <input
            type="text"
            className="form-control"
            placeholder="Find ..."
            ref={this.node}
            onClick={this.getVal}
            onChange={this.onChange}
          />
*/