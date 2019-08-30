import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import './Message.css'

class MessageCard extends Component {
  render() {
    return (
      <div className="message__card">
          <h3>Username</h3>
          <p>Message</p>
      </div>
    );
  }
}

export default MessageCard