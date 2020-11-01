import React from 'react'

export default class GifSearch extends React.Component{
  state={
    search: ''
  }

  changeHandler = (e) => {
    this.setState({search: e.target.value})
  }

  submitHandler = (e) => {
    this.props.searchFunction(this.state.search)
    e.preventDefault();
  }

  render(){
    return <form onSubmit={this.submitHandler}><input name="search" type="text" onChange={this.changeHandler} value={this.state.search} /></form>
  }
}
