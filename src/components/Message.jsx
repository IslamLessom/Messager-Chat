import React from "react";

function Message() {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
      </div>
    </div>
  );
}

export default Message;
