import { createRoot } from 'react-dom/client'
import "./styles/main.scss";
import App from './App.jsx'
import { FormProvider } from './context/FormContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
    <FormProvider>
        <LanguageProvider>
            <App/>
        </LanguageProvider>
    </FormProvider>
)
