import './index.css';
import reportWebVitals from './reportWebVitals';
import createContainer from './di.config';
import { runApp } from './App';

const container = createContainer();

runApp(container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
