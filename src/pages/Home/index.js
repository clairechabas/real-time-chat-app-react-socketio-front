import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', { username, room });
    }

    // Redirecting user to his room
    navigate('/room', { replace: true });
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={joinRoom}>
        <h1>{`👩‍💻 DevTalks 🧑‍💻`}</h1>
        <input
          className={styles.input}
          placeholder="🙋‍♀️ Who should we announce?"
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- 🛋 Get a Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>

        <button type="submit" className="btn">
          Join Room
        </button>
      </form>
    </div>
  );
};

export default Home;
