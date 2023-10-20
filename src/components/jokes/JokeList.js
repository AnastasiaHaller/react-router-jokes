import JokeItem from './JokeItem';
import styles from './JokeList.module.css';

const JokeList = (props) => {
  return (
    <>
      <ul className={styles.list}>
        {props.jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </>
  );
};

export default JokeList;
