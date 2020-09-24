import React, { useContext, SetStateAction, Dispatch } from "react";
import { createContext, useState } from "react";

interface contextProps{
  hasVoice: Boolean;
  setHasVoice: Dispatch<SetStateAction<Boolean>>;
}

const DataProvider = createContext({} as contextProps);

const ChatbotProvider = ({children}: any) =>{
  const [hasVoice, setHasVoice] = useState<Boolean>(true);

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
