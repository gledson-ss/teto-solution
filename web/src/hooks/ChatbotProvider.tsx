import React, { useContext, SetStateAction, Dispatch } from "react";
import { createContext, useState } from "react";

interface contextProps{
  hasVoice: boolean;
  setHasVoice: Dispatch<SetStateAction<boolean>>;
}

const DataProvider = createContext({} as contextProps);

const ChatbotProvider = ({children}: any) =>{
  const [hasVoice, setHasVoice] = useState<boolean>(true);

  return (
    <DataProvider.Provider value={{hasVoice, setHasVoice}}>
      {children}
    </DataProvider.Provider>
  )
};

function useChatbotProps(){
  const chatbotContext = useContext(DataProvider);
  return chatbotContext;
}

export {useChatbotProps};

export default ChatbotProvider;
