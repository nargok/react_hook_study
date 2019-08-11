import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './eventForm';
import Events from '../components/events';
import reducer from '../reducers/index';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fruid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
