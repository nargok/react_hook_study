import React, { useEffect, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './eventForm';
import Events from '../components/events';
import OperationLogs from '../components/operationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers/index';


const APP_KEY = 'appWithRedux'

const App = () => {
  const appState= localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : { events: [], operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

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
