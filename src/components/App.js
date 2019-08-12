import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './eventForm';
import Events from '../components/events';
import OperationLogs from '../components/operationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers/index';

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fruid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
  </AppContext.Provider>
  );
}

export default App;
