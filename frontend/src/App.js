
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
