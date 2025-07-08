import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1>Argentina Football Team</h1>
      <Image src="/argentina-flag.png" alt="Argentina Flag" width={200} height={100} />
      <p>Welcome to the official website of the Argentina Football Team!</p>
    </div>
  );
}

export default Home;