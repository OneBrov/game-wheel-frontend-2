import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    
  } from "react-router-dom";
import { AppLayout } from '../components/pages/AppLayout';
import { AuthPage } from '../components/pages/AuthPage';
import { HistoryPage } from '../components/pages/HistoryPage';
import { LibraryPage } from '../components/pages/LibraryPage';
import { WheelPage } from '../components/pages/WheelPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
          <Route path="/wheel" element={<WheelPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path='/library' element={<LibraryPage />} />
          <Route path='/auth' element={<AuthPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/wheel' />}/>
    </Routes>
  </BrowserRouter>
  )
}
