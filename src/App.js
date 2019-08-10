import React, { useState }  from 'react';

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setName(props.name)
    setPrice(props.price)
  }

  return (
    <>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={() => reset()}>reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
