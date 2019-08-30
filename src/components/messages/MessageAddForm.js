import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MessageManager from '../../modules/MessageManager';
// import './MessageForm.css'

class AddMessageForm extends Component {
  state = {
    message: "",
    loadingStatus: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  };

  createNewMessage = event => {
    event.preventDefault();
    if (this.state.message === "") {
      window.alert("Please type a message before submitting.");
    } else {
      this.setState({ loadingStatus: true });
      const userId = parseInt(sessionStorage.getItem("activeUser"))
      const date = new Date()
      const messageObj = {
        userId: userId,
        message: this.state.message,
        date: date
      };

      MessageManager.addNewMessageToDatabase(messageObj)
        .then(() => {
          this.setState({
            message: "",
            loadingStatus: false,
          })
          this.props.history.push("/messages")
        });
    }
  };

  render() {

    return (
      <>
        <form>
            <div className="addMessageForm">
              <input
                type="text" required onChange={this.handleChange} id="message"
                placeholder="Your message here"
                value={this.state.message}
              />
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.createNewMessage}
              >Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default withRouter(AddMessageForm)