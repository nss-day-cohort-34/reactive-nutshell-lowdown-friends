import React, { Component } from 'react'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import AddMessageForm from './MessageAddForm'
import MessageManager from '../../modules/MessageManager'
import './MessageSection.css'

class Messages extends Component {
  state = {
    message: "",
    loadingStatus: false,
    messages: [],
    messageEdit: ""
  }


  componentDidMount() {
    this.getMessagesAndSetState()
  }

  // Get messages array from database and set 'messages' in state equal to the returned messages array, triggering render function
  getMessagesAndSetState = () => {
    MessageManager.getAllMessages()
      .then((messagesArr) => {
        this.setState({
          message: "",
          loadingStatus: false,
          messages: messagesArr
        })
      })
  }

  // Handler for add new message form inputs
  handleAddChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  // Handler for button to post new message
  handlePostNewMessageButton = event => {
    event.preventDefault();
    if (this.state.message === "") {
      window.alert("Please type a message before submitting.")
    } else {
      this.setState({ loadingStatus: true })
      const userId = parseInt(sessionStorage.getItem("activeUser"))
      const date = new Date()
      const messageObj = {
        userId: userId,
        message: this.state.message,
        date: date
      }
      MessageManager.addNewMessageToDatabase(messageObj)
        .then(() => {
          this.getMessagesAndSetState()
        })
    }
  }

  // Function for editing process - updates the messages array in state with the edited message text and triggers re-render of cards
  updateSingleCard = (editedMessageObj) => {
    const messages = this.state.messages
    this.state.messages.forEach(msg => {
      if (msg.id === editedMessageObj.id) {
        msg.message = editedMessageObj.message
      }
    })
    this.setState({ messages: messages })
  }

  // Render message header, message list, and add message form
  render() {
    return (
      <div className="message__section">
        <MessageHeader />
        <MessageList
          messages={this.state.messages}
          updateSingleCard={this.updateSingleCard}
          friendData={this.props.friendData}
          getAllFriendData={this.props.getAllFriendData}
        />
        <AddMessageForm
          message={this.state.message}
          handleAddChange={this.handleAddChange}
          handlePostNewMessageButton={this.handlePostNewMessageButton} />
      </div>
    )
  }
}

export default Messages
