import React, {Component} from 'react'

export default class GiftList extends Component{
  render(){
    return(
      <li><img src={this.props.gif.images.original.url} key={this.props.gif.id}/></li>
    )
  }
}
