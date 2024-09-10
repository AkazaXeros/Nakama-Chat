import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced';

import styles from './ChatsPage.module.css';

const ChatsPage = ({ user }) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    user.username,
    user.secret
  );

  return (
    <div className={styles.chatsContainer}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} className={styles.chatWindows} />
    </div>
  );
};
export default ChatsPage;
