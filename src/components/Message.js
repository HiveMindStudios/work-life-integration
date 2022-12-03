import { faker } from '@faker-js/faker';

const Message = () => {
  return (
    <div className="message-bubble">
      <div className="message-img">
        <img src={faker.image.image(64, 64)} className="message-avatar" alt="profile-pic" />
      </div>
      <div className="message-right">
        <div className='message-header'>
          <div className="message-author">
            <span>{faker.name.fullName()}</span>
          </div>
          <div className="message-timestamp">
            <span>at 8:15</span>
          </div>
          <div className="message-via">
            <span>via Discord</span>
          </div>

        </div>
        <div className="message-content">
          <span>{faker.lorem.paragraph()}</span>
        </div>
      </div>
    </div>
  )
}

export default Message