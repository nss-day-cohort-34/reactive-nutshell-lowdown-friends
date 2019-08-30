import React, { Component } from 'react';
import MessageManager from '../../modules/MessageManager';
import { networkInterfaces } from 'os';
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

      // Create the animal and redirect user to animal list
      MessageManager.addNewMessageToDatabase(messageObj)
        .then(() => this.props.history.push("/messages"));
    }
  };

  render() {

    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text" required onChange={this.handleFieldChange} id="message"
                placeholder="Your message here"
              />
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewAnimal}
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    )
  }
}

export default AddMessageForm