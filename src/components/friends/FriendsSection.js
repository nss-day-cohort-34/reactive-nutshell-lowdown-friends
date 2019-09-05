// Author: Will Wilkinson, Sarah Fleming, Jacquelyn McCray
// Purpose: Component displays friends header and friends list.

import React, { Component } from 'react';
import FriendsHeader from './FriendsHeader';
import FriendsList from './FriendsList';

export default class FriendsSection extends Component {
    render() {
        return (
            <section>
                <FriendsHeader {...this.props} />
                <FriendsList
                    friendData={this.props.friendData}
                    getAllFriendData={this.props.getAllFriendData}
                />
            </section>
        )
    }
}