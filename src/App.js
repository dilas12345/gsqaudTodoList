import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoList from './reducers';
import ScreenTodoList from './screens/ScreenTodoList';

const store = createStore(todoList);

function App() {
  return(
    <Provider store={store}>
      <ScreenTodoList/>
    </Provider>
  )
}

export default App;