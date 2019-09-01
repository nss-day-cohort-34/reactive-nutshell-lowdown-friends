import React, { Component } from 'react';

class EditMessageForm extends Component {
  render() {

    return (
      <>
        <form>
            <div className="addMessageForm">
              <input
                type="text" required onChange={this.props.handleEditChange} id="message"
                value={this.props.editMessageObj.message}
              />
              <button
                type="button"
                disabled={!this.props.editMessageObj.editing}
                onClick={this.props.handleSaveChangesButton}
              >Save Changes</button>
            </div>
        </form>
      </>
    )
  }
}

export default EditMessageForm