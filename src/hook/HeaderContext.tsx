import { ReactNode, createContext, useContext, useState } from "react";

interface PageContext {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const CurrentPageContext = createContext<PageContext | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<string>("menu1");

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error("usePage must be used within a HeaderProvider");
  }
  return context;
};
