import React, { createContext, ReactNode } from 'react';

interface AppContextData { }

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextData>({} as AppContextData)

export function AppProvider({ children }: AppProviderProps) {

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}
