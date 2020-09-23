import React from 'react';
import ChatBot from 'react-simple-chatbot';
/* import * as St from './styles' */

const Chatbot: React.FC = () => {
    return (
        <ChatBot
            steps={[
                {
                    id: 'hello-world',
                    message: 'Hello World!',
                    end: true,
                },
            ]}
        />
    )
}

export default Chatbot;