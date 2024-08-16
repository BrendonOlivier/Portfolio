import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './Home.jsx'
import GlobalStyle from './styles/globalStyles.js'
import { LanguageProvider } from './hooks/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  </StrictMode>,
)
