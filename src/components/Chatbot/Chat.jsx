import { useState } from "react";
import { getChatGPT } from "./chatgpt";

const SendMessageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-send"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 14l11 -11"></path>
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
    </svg>
  );
};

const DEFAULT_CONVERSATION = [
  {
    id: "1",
    type: "bot",
    text: "Hola estoy hecho con ChatGPT, un placer hablar contigo!  👋",
  },
  {
    id: "2",
    type: "bot",
    text: "Puedes hacerme cualquier pregunta sobre mi para conocerme.",
  },
];

const ChatBot = () => {
  const [messages, setMessages] = useState(DEFAULT_CONVERSATION);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText || loading) return;

    setLoading(true);
    setInputText("");
    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "user",
        text: inputText,
      })
    );
    getChatGPT(inputText)
      .then((response) => {
        setMessages((messages) => messages.concat(response));
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className={`center open`}>
      <div className="chat">
        <div className="chat-contact bar">
          {/* <img className="pic bot" src="/img/contact/me.jpeg" alt="" /> */}
          <div className="info">
            <div>
              <span className="name">Cristian Arando</span>
              <div className="seen">en linea</div>
            </div>
          </div>
        </div>

        <div className="messages" id="chat">
          <div className="time">Hoy</div>
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
          {loading ? (
            <div className="message bot">
              <div className="typing typing-1"></div>
              <div className="typing typing-2"></div>
              <div className="typing typing-3"></div>
            </div>
          ) : (
            ""
          )}
        </div>
        <form className="input" onSubmit={handleSubmit}>
          <input
            placeholder="Hazme una pregunta"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            disabled={loading}
            type="sumbit"
            className={`send-btn ${loading ? "disabled" : ""}`}
          >
            <SendMessageIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
