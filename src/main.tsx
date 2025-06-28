import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ModalProvider } from './Components/Modal/useContext/ModalContext.tsx'
import { AppRouter } from './AppRouter.tsx';
//import { GlobalProvider } from './UseContext/global.provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App>
        {/* <GlobalProvider> */}
        <AppRouter />
        {/* </GlobalProvider> */}
      </App>
    </ModalProvider>
  </StrictMode>,
);
