import React, { useState }  from 'react';

const App = () => {
  const initialStates = {
    name: '',
    price: 1000,
  }

  const [name, setName] = useState(initialStates.name)
  const [price, setPrice] = useState(initialStates.price)

  return (
    <>
      <p>現在の{name}は、{price}円です</p>
    </>
  )
}

export default App;
