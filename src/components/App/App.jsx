import React from 'react';
import Header from '../Header/Header';
import APIClient from '../APIClient/APIClient';
import { APIClientProvider } from '../../hooks/APIClientProvider';

export default function App() {
  return (
    <APIClientProvider>
      <Header />
      <APIClient />
    </APIClientProvider>
  );
}
