import React, { Component } from 'react';

import {API_BASE_URL} from '../config';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.loadPeopleList()
  }



  loadPeopleList() {
    this.setState({
      loading: true
    });
    return fetch(`${API_BASE_URL}/people`)
      .then(res => {
        console.log(res.body);
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(people =>
        this.setState({
          people,
          loading: false
        })
      )
      .catch(err =>
        this.setState({
          error: 'Could not load people list',
          loading: false
        })
      );
  }

  render() {
    let name;
    if(this.state.people.data){
      name = this.state.people.data[0].display_name;
    }

      return (
        <p>{name}</p>
      )
    }
}

export default App;
