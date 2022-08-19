import React, { SyntheticEvent, useEffect, useState } from 'react';

import { MessageController } from 'networking/controllers/message-controller';
import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import styles from './home.module.scss';

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState<string | null>(null);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [isComplete, setIsComplete] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await MessageController.getMessages();
      setMessages(data);
    };
    fetchData();
  }, []);

  const createMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const newMessage = await MessageController.createMessage({
        content: content!,
        dueDate: dueDate!,
        isComplete: isComplete!,
      });
      setMessages([...messages, newMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={globalStyles.genericContainer}>
      <h1 className={styles.title}>
        My messages!
      </h1>
      <div>
        {!!messages && messages.map((m) => (
          <React.Fragment key={m.id}>
            <p>
              <input type="checkbox" checked={m.isComplete} readOnly />
              {m.content}
              {' '}
              {m.dueDate.toString()}
            </p>
            <hr />
          </React.Fragment>
        ))}
      </div>
      <form onSubmit={createMessage}>
        <label htmlFor="content">
          Content
          {' '}
          <input type="text" id="content" onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <label htmlFor="due-date">
          Due Date
          {' '}
          <input type="date" id="due-date" onChange={(e) => setDueDate(new Date(e.target.value))} />
        </label>
        <br />
        <label htmlFor="is-complete">
          Complete?
          {' '}
          <input type="checkbox" id="is-complete" onChange={(e) => setIsComplete(e.target.checked)} />
        </label>
        <br />
        <button type="submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export { Home };
