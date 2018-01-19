import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");

    return (
      <div id="message-list">
        {
          this.props.messages.map( (message) => {
            return (
              <Message key={message.id} username={message.username} content={message.content} userColor={message.style} />
            )
          })
        }
      </div>
    )
  }
}

export default MessageList;