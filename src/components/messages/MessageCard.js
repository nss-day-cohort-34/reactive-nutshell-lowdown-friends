import React, { Component } from 'react';
// import './Message.css'

class MessageCard extends Component {
  activeUser = parseInt(sessionStorage.getItem("activeUser"))
  userIdInMessage = this.props.message.userId

  render() {
    return (
      <div className="message__card">
        <h3>{this.props.message.user.username}</h3>
        <p>{this.props.message.message}</p>
        {/* Ternary expression determines whether edit button will render based on userId */}
        {this.activeUser === this.userIdInMessage ?
          <button
            type="button"
            disabled={this.props.loadingStatus}
            onClick={this.props.renderEditMessageForm}
            id={"edit-message-btn-" + this.props.message.id}
          >Edit Message</button>
          :
          <>
          </>
        }
      </div>
    );
  }
}

export default MessageCard