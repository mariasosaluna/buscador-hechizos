import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
      <footer>Hecho con ❤ por María</footer>
    </div>
  );
}

export default App;
