import React, { Component } from 'react';
import FriendsHeader from './FriendsHeader';
import FriendsList from './FriendsList';

export default class FriendsSection extends Component {
    render () {
       return (
           <section>
               <FriendsHeader />
               <FriendsList />
           </section>
       ) 
    }
}