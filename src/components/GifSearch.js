import React, {Component} from 'react'

export default class GifSearch extends Component{

  state={
    query: ""
  }

  handleSubmit=e=>{
    e.preventDefault()
    this.props.fetchGif(this.state.query)
    this.setState({query:''})
  }
  render(){
    return(
      <div style={{marginLeft:"10px"}}>
        <form onSubmit={this.handleSubmit}>
          <p>Enter a Search Term: </p>
          <input type="text" value={this.state.query} onChange={e=>this.setState({query:e.target.value})}/>
          <button type="submit">Submit</button>
          <hr/>
        </form>
      </div>
    )
  }
}
