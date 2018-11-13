import React, { Component } from 'react';
import {API_BASE_URL} from '../config';
import List from './List';




class People extends Component {

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
    let body;
    if (this.state.error) {
      body = (
        <div className="message message-error">{this.state.error}</div>
      );
    } else if (this.state.loading) {
      body = (
        <div className="message message-default">Loading...</div>
      );
    } else if (this.state.people.data) {
      const people = this.state.people.data.map((person, index) => (
        <tr className="list-wrapper" key={index}>
            <List
                index={index}
                {...person}
            />
        </tr>
      ));
      body = (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>

          </thead>
          <tbody className="lists">
              {people}
          </tbody>
        </table>
      );
    } else {
      body = (
        <p>No data was found</p>
      )
    }
      return (

        <div className="body">{body}</div>
      )
    }
}

export default People;

