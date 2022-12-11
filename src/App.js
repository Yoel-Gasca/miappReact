import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';

/* -Instalacion de react en consola-
-> npm instal -g npx --force -> instalar npx
-> npx-clear-npx-cache -> limpiar cache
-> npx create-react-app "nombre de app"
-> npm i gh-pages
-> npm run build
-> npm start
-> npm run deploy*/

function App() {

  let localtime = new Date();
  let qatar = localtime.getTime() + (localtime.getTimezoneOffset());
  let horaqatar = new Date(qatar + (3600000*9));

  const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = (
      <div className="App">
        <header className="App-header">
          <h1>La hora es:</h1>
          <h2>En México {new Date().toLocaleTimeString('es-MX')}</h2>
          <h2>En Qatar: {horaqatar.toLocaleTimeString('es-MX')}</h2>
        </header>
      </div>
    );

    root.render(element)
}

export default App;
