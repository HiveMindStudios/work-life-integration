const Message = ({via, img, nick, time, msg}) => {
  return (
    <div className="message-bubble">
      <div className="message-img">
        <img src={img} className="message-avatar" alt="profile-pic" />
      </div>
      <div className="message-right">
        <div className='message-header'>
          <div className="message-author">
            <span>{nick}</span>
          </div>
          <div className="message-timestamp">
            <span>at {time}</span>
          </div>
          <div className="message-via">
            <span>via {via}</span>
          </div>

        </div>
        <div className="message-content">
          <span>{msg}</span>
        </div>
      </div>
    </div>
  )
}

export default Message