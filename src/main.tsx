import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ModalProvider } from './Components/Modal/useContext/ModalContext.tsx'
import { AppRouter } from './AppRouter.tsx';
import { BrowserRouter } from 'react-router-dom';
//import { GlobalProvider } from './UseContext/global.provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App>
          {/* <GlobalProvider> */}
          <AppRouter />
          {/* </GlobalProvider> */}
        </App>
      </BrowserRouter>
    </ModalProvider>
  </StrictMode>,
);
