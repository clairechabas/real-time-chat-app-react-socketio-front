import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Home from './pages/Home';

const socket = io.connect('http://localhost:4000');

function App() {
  const [userName, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Router>
      <div class="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={userName}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
