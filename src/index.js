import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { ModeProvider } from './contexts/ModeContext';
import { AuthProvider } from './contexts/AuthContext';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ModeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ModeProvider>
  </BrowserRouter>
);
