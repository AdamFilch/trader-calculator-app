import {
  createContext,
  createElement,
  PropsWithChildren,
  useState,
} from "react";

const DiaryCtx = createContext({});

export const DiaryContextProvider = ({ children }: PropsWithChildren) => {
  const [diaryState, setDiaryState] = useState({
    nextHoliday: {},
    selectedDiary: {},
    selectedMarket: {},
  });

  return (
    <DiaryCtx.Provider value={{ diaryState }}>{children}</DiaryCtx.Provider>
  );
};
