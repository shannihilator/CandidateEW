import React, { Component } from 'react';
import {API_BASE_URL} from '../config';
import List from './List';
import Frequency from './Frequency'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: null,
      count: null,
      displayFrequency: false
    }

    this.handleClick = this.handleClick.bind(this);
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

  getFrequency() {
    let emails;
    if (!this.state.people.data) {
      return null;
    } else {
      emails = []
      this.state.people.data.map((item) => (
        emails.push(item.email_address)
      ));
    }
    let frequency = emails.join();
    let count = {};
    for (let i=0; i<frequency.length;i++) {
        var character = frequency.charAt(i);
        if (count[character]) {
            count[character]++;
        } else {
            count[character] = 1;
        }
    }
     this.setState({count})

  }

  handleClick() {
    this.getFrequency();
    this.setState({
      displayFrequency:!this.state.displayFrequency,
    })

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
    let frequency;
    if(this.state.displayFrequency) {
      frequency = (
        <Frequency frequency={this.state.count}/>
      )
    }
      return (
        <React.Fragment>
          <h1>SalesLoft Technical Evaluation</h1>
          <div className="body">{body}</div>
          <div className="button-container">
            <button onClick={this.handleClick}>Frequency Table</button>
          </div>
          <div className="frequency-container">{frequency}</div>
        </React.Fragment>

      )
    }
}

export default App;

