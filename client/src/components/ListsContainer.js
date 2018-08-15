import React, { Component } from 'react';
import axios from 'axios';

class ListsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    // https://stackoverflow.com/questions/44932650/running-a-react-rails-app-locally
    axios.get('api/v1/lists.json')
    .then(response => {
      console.log(response)
      this.setState({
        lists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Lists-container">
        Lists
      </div>
    )
  }
}
export default ListsContainer;
