import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import PrivateRoute from "./components/PrivateRoute";
import Home from './pages/Home';
import PublicRoute from './components/PublicPoute';
import { ProfileProvider } from './context/profile.context';
import { ErrorBoundary } from './components/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
    </ErrorBoundary>
  );
}

export default App;
