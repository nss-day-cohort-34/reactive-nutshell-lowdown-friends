import React, { Component } from 'react';

import './MessageEditForm.css'

class EditMessageForm extends Component {
  render() {

    return (
      <>
        <form>
            <div className="editMessage__form">
              <input
                type="text" required onChange={this.props.handleEditChange}
                id="message"
                className="editMessage__input"
                value={this.props.editMessageObj.message}
              />
              <button
                type="button"
                className="saveMessageChanges__btn"
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