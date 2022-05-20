
import { StreamChat } from 'stream-chat';


// LogBox.ignoreAllLogs(true);

const chatClient = StreamChat.getInstance('bw8596mv3hte');
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieWFrdXphIn0.yAbrr92x6IhDfNEm6Lwt21fa-i-s8JXOqQnPpNxY0No';
const user = { id: 'yakuza' };

const filters = {
    members: { $in: ['yakuza','ashir' ] },
    type: 'messaging',
  };
  
const sort = { last_message_at: -1 };

export default [chatClient, userToken, user, filters, sort ];
  
