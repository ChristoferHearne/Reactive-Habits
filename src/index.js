import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class ToDoList extends React.Component{
  render(){
    return(
      <div className="shopping-list">
        <h1> Shopping List for {this.props.name}</h1>
        <ul>
          <li>WhatsApp</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <ToDoList name="HabitCruncher"/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
