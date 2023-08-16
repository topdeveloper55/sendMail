import { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [gmail, setGmail] = useState('');
  const [text, setText] = useState('');
  function handleChangeEmail(event) {
    setGmail(event.target.value);
  }
  function handleChangeText(event) {
    setText(event.target.value);
  }
  const sendEmail = async () => {
    console.log("gmail, text------->", gmail, text)
    try {
      const response = await axios.post(
        "http://localhost:1337/api/sendEmail",
        {
          data: {
            gmail: gmail,
            text:text
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <h1>Contact us</h1>
      <p>Please input mail</p>
      <input
        onChange={handleChangeEmail}
      />
      <p>Please input text</p>
      <input
        onChange={handleChangeText}
      />
      <button
        onClick={sendEmail}
      >
        Submit
      </button>
      
    </div>
  );
}

export default App;
