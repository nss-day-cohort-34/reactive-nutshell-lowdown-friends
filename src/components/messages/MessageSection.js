import React, { Component } from 'react'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import AddMessageForm from './MessageAddForm'
import MessageManager from '../../modules/MessageManager'
import MessageData from '../../modules/MessageManager';

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

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  createNewMessage = event => {
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

  saveEditedMessage = event => {
    event.preventDefault();
    MessageData.getSingleMessage()
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

  render() {

    return (
      <div className="message__section">
        <MessageHeader />
        <MessageList messages={this.state.messages} />
        <AddMessageForm
          message={this.state.message}
          handleChange={this.handleChange}
          createNewMessage={this.createNewMessage} />
      </div>
    )
  }
}

export default Messages
