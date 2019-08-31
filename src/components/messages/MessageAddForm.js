import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import './MessageForm.css'

class AddMessageForm extends Component {
  render() {

    return (
      <>
        <form>
            <div className="addMessageForm">
              <input
                type="text" required onChange={this.props.handleChange} id="message"
                placeholder="Your message here"
                value={this.props.message}
              />
              <button
                type="button"
                disabled={this.props.loadingStatus}
                onClick={this.props.createNewMessage}
              >Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default withRouter(AddMessageForm)