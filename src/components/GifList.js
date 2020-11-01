import React from 'react'

export default class GifList extends React.Component{

  renderGif = () => {
    return this.props.result.map(data => {
        return <li key={data.id}><img src={data.images.original.url} alt="" /></li>
      }
    )
  }

  render(){
    return(<ul>{this.renderGif()}</ul>)
  }
}
