import { createContext, createElement, PropsWithChildren, useState } from "react";

const DiaryCtx = createContext({});

export const DiaryContextProvider = ({ children }: PropsWithChildren) => {
  const [diaryState, setDiaryState] = useState(null);
  
  return (
    <DiaryCtx.Provider value={{diaryState}}>
      {children}
    </DiaryCtx.Provider>
  )
}
