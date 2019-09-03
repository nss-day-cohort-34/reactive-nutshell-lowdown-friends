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

  // Store id for active user and user id from props in variables
  activeUser = parseInt(sessionStorage.getItem("activeUser"))
  userIdInMessageObj = this.props.messageObj.userId

  // Handle edit button for a single message
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

  // Handle change to input field in the edit form and set state based on user input
  handleEditChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  // Handle button for saving edit changes - create new object based on state and save it to the database
  // Call function 'updateSingleCard' to trigger re-render
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

  // JSX for the message text and 'edit message' button. Receives the message text as an argument.
  returnMessageAndEditBtnRep = (messageText) => {
    return <>
      <p>{messageText}</p>
      {
        // Ternary expression determines whether edit button will render based on userId
        this.activeUser === this.userIdInMessageObj
          ?
          <button
            type="button"
            disabled={this.state.editing}
            onClick={this.handleEditButton}
            id={"edit-message-btn--" + this.props.messageObj.id}
            className="editMessage__btn"
          >Edit Message</button>
          :
          null
      }
    </>
  }

  // Render an individual message card, based on conditions described below
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
        <h3>{this.props.messageObj.user.username}</h3>
        <>
          {
            // Ternary expression determines whether message text or edit form will render
            this.state.editing === false
              ?
              this.returnMessageAndEditBtnRep(this.props.messageObj.message)
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