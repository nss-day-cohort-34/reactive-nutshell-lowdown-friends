import React, { Component } from 'react'
import MessageHeader from './MessageHeader'
import MessageList from './MessageList'
import AddMessageForm from './MessageAddForm'
import MessageManager from '../../modules/MessageManager'
import './Message.css'

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

  handleAddChange = (event) => {
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

  updateSingleCard = (messageObj) => {
    const messages = this.state.messages
    this.state.messages.forEach(msg => {
      if (msg.id === messageObj.id) {
        msg.message = messageObj.message
      }
    })
    this.setState({messages: messages})
  }

  render() {

    return (
      <div className="message__section">
        <MessageHeader />
        <MessageList
        messages={this.state.messages}
        updateSingleCard={this.updateSingleCard}
        />
        <AddMessageForm
          message={this.state.message}
          handleAddChange={this.handleAddChange}
          createNewMessage={this.createNewMessage} />
      </div>
    )
  }
}

export default Messages
