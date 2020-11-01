import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
  state={
    searchResult: []
  }

  searchFunction = (e) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${e}&api_key=bJYB13Wf2QxcYF4GZuqofXFJk41Dl0xx&rating=g`)
    .then(resp => resp.json())
    .then(gif => this.setState({searchResult: [gif.data[0],gif.data[1] ,gif.data[2]]}))
  }

  render(){
    return(<div>
            <GifSearch searchFunction={this.searchFunction}/>
            <GifList result={this.state.searchResult} />
          </div>)
  }

  // bJYB13Wf2QxcYF4GZuqofXFJk41Dl0xx

  // componentDidMount(){
  //   fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=bJYB13Wf2QxcYF4GZuqofXFJk41Dl0xx&rating=g')
  //   .then(resp => resp.json())
  //   .then(gif => this.setState({searchResult: [gif.data[0],gif.data[1] ,gif.data[2]]}))
  // }
}
