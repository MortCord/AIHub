import Header from "./Header";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import { useState } from "react";
import OpenAI from "openai";

const Chat = () =>{
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const API_KEY = 'Your api key';

    const handleInpMessg = async(event) =>{
        event.preventDefault();
        const newUserMessage = { messageType: 'user', text: userMessage };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
      
        try {
          const msg = await generate(userMessage);
          const newBotMessage = { messageType: 'bot', text: msg };
          setMessages(prevMessages => [...prevMessages, newBotMessage]);
        } catch (error) {
          console.log("Error: ", error);
        }
    }

    const openai = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true
      });
      
      const generate = async(message) =>{
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": message + '(Воєнна галузь)'}],
          });
          setUserMessage('');
          return chatCompletion.choices[0].message.content;
      }
    



    return(
        <div>
            <Header pageName={"Conversation"} arrow={true} />
            <div id="chat-field" className="chat-field">
            <div className="d-flex flex-column messages">
            {
                messages.map((message, index) => (
                    <div
                    key={index}
                    className={message.messageType === 'user' ? 'left' : 'right'}
                  >
                    {message.messageType === 'user' ? (
                      <UserMessage message={message.text} />
                    ) : (
                      <BotMessage message={message.text} />
                    )}
                  </div>
                  ))
            }
            
            </div>
            </div>
            <form onSubmit={handleInpMessg}>
                <input onChange={(e) => setUserMessage(e.target.value)} value={userMessage} className="input-field" type="text" placeholder="Ask something..." />
            </form>
        </div>
    )
}

export default Chat;

