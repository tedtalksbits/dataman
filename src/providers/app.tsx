import React from 'react';
import { ReactQueryProvider } from './tanstack';

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
