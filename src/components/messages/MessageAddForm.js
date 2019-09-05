// Author: Jacquelyn McCray
// Purpose: Component allows user to post a new message to the message list.

import React, { Component } from 'react';
import './MessageAddForm.css'

class AddMessageForm extends Component {
  render() {
    return (
      <>
        <form>
          <div className="addMessage__form input-group">
            <input
              type="text"
              onChange={this.props.handleAddChange}
              id="message"
              placeholder="Your message here"
              value={this.props.message}
              className="addMessage__input form-control"
            />
            <div className="input-group-append">
              <button
                type="button"
                className="addMessage__button btn btn-outline-primary"
                disabled={this.props.loadingStatus}
                onClick={this.props.handlePostNewMessageButton}
              >Post New Message</button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default AddMessageForm