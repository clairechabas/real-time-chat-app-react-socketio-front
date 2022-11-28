import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h1>{`👩‍💻 DevTalks 🧑‍💻`}</h1>
        <input
          className={styles.input}
          placeholder="🙋‍♀️ Who should we announce?"
        />

        <select className={styles.input}>
          <option>-- 🛋 Get a Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>

        <button className="btn">Join Room</button>
      </form>
    </div>
  );
};

export default Home;
