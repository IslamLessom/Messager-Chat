import ChatList from "../../entities/chatList/ChatList"
import "./list.css"
import Userinfo from "../../entities/userInfo/Userinfo"

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
    </div>
  )
}

export default List