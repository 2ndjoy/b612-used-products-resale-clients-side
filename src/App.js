import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { DarkLightContext } from './Context/DarkandLightModeProvider';

function App() {
  const { theme } = useContext(DarkLightContext);

  return (
    <div data-theme={theme ? "cupcake" : 'dark'} className='max-w mx-auto' >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
