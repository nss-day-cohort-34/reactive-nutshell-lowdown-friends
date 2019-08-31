import React, { Component } from 'react';

class EditMessageForm extends Component {
  render() {

    return (
      <>
        <form>
            <div className="addMessageForm">
              <input
                type="text" required onChange={this.props.handleChange} id="messageEdit"
                value={this.props.messageEdit}
              />
              <button
                type="button"
                disabled={this.props.loadingStatus}
                onClick={this.props.saveEditedMessage}
              >Save Changes</button>
            </div>
        </form>
      </>
    )
  }
}

export default EditMessageForm