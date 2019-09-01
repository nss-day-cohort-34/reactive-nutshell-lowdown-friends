import React, { Component } from 'react';
import './MessageAddForm.css'

class AddMessageForm extends Component {
  render() {
    return (
      <>
        <form>
          <div className="addMessage__form">
            <input
              type="text"
              onChange={this.props.handleAddChange}
              id="message"
              placeholder="Your message here"
              value={this.props.message}
              className="addMessage__input"
            />
            <button
              type="button"
              className="addMessage__button"
              disabled={this.props.loadingStatus}
              onClick={this.props.handlePostNewMessageButton}
            >Post New Message</button>
          </div>
        </form>
      </>
    )
  }
}

export default AddMessageForm