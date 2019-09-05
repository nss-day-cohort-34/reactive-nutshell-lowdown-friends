// Author: Jacquelyn McCray
// Purpose: Component includes message header.

import React, { Component } from 'react'

import './MessageHeader.css'

class MessageHeader extends Component {
  render() {

    return (
      <div className="message__header text-center my-4">
        <h1>Messages</h1>
      </div>
    )
  }
}

export default MessageHeader
