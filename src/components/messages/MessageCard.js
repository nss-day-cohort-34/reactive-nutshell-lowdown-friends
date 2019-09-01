import React, { Component } from 'react';
import EditMessageForm from './MessageEditForm'
import MessageManager from '../../modules/MessageManager'

import './MessageCard.css'

class MessageCard extends Component {
  state = {
    editing: false,
    userId: 0,
    message: "",
    date: "",
    id: 0
  }

  activeUser = parseInt(sessionStorage.getItem("activeUser"))
  userIdInMessageObj = this.props.message.userId

  handleEditButton = (event) => {
    const idNum = event.target.id.split("--")[1]
    MessageManager.getSingleMessage(idNum)
      .then(messageObj => {
        this.setState({
          userId: messageObj.userId,
          message: messageObj.message,
          date: messageObj.date,
          id: messageObj.id,
          editing: true
        })
      })
  }

  handleEditChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSaveChangesButton = event => {
    event.preventDefault();
    const editedMessageObj = {
      userId: this.state.userId,
      message: this.state.message,
      date: this.state.date,
      id: this.state.id
    }
    MessageManager.saveEditedMessageToDatabase(editedMessageObj)
      .then(editedMessageObj => {
        this.setState({ editing: false })
        this.props.updateSingleCard(editedMessageObj)
      })


  }

  returnMessageAndEditBtnRep = (messageText) => {
    return <>
      <p>{messageText}</p>
      {
        // Ternary expression determines whether edit button will render based on userId
        this.activeUser === this.userIdInMessageObj ?
          <button
            type="button"
            disabled={this.state.editing}
            onClick={this.handleEditButton}
            id={"edit-message-btn--" + this.props.message.id}
          >Edit Message</button>
          :
          null
      }
    </>
  }

  render() {
    return (
      <div className={
        // Ternary expression determines class to be added to card based on userId
        this.activeUser === this.userIdInMessageObj
          ?
          "activeUserMessage__card message__card"
          :
          "nonActiveUserMessage__card message__card"
      }>
        <h3>{this.props.message.user.username}</h3>
        <>
          {
            // Ternary expression determines whether message or edit form will render
            this.state.editing === false
              ?
              this.returnMessageAndEditBtnRep(this.props.message.message)
              :
              <EditMessageForm
                handleEditChange={this.handleEditChange}
                handleSaveChangesButton={this.handleSaveChangesButton}
                editMessageObj={this.state}
              />
          }
        </>
      </div>
    );
  }
}

export default MessageCard