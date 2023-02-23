import React, { Component } from 'react';

export default class Overscroller extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    token: ""
  };

  componentDidMount() {
    this.getData()
  }

  getData() {

  }

  render() {
    return (
      <div class="refresher">
        
      </div>
    )
  }
}
