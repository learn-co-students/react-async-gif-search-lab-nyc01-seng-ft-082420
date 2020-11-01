import React, {Component} from 'react'
import GiftList from '../components/GifList'
import GifSearch from'../components/GifSearch'
export default class GifListContainer extends Component{

  state={
    api:[]
  }

  fetchGif = (query="huksy") =>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp=>resp.json())
    .then(gif => {
      this.setState({api:gif.data})
    })
  }
  componentDidMount(){
    this.fetchGif()
  }

  renderData = () =>{
    return this.state.api.map(gif=> <GiftList gif={gif}/>)
  }

  render(){
    return(
      <div>
        <ul>
        <GifSearch fetchGif={this.fetchGif}/>
        {this.renderData()}
        </ul>
      </div>
    )
  }
}
