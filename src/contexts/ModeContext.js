import { createContext, useEffect, useState } from 'react';

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

  const toggleMode = () => {
    mode === 'dark' ? setMode(() => 'light') : setMode(() => 'dark');
  };

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
