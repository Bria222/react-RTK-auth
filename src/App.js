import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import BarLayout from "./components/layout/Layout";
import SplashScreen from "./components/Splash/Splash";
import Login from "./components/auth/Login";
import ProtectedRoute from './routing/ProtectedRoute';
import Activate from './components/pages/Activate';



function App() {
  const [theme, colorMode] = useMode();
 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      
        <CssBaseline />
        <div className="app">
        
          <main className="content">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/activate" element={<Activate />} />
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                         <Route element={<BarLayout />}>
                            <Route path="/home" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} />
                        </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
