import React from 'react';
import Headers from './Header';

let renderCount = 0;

function App() {
  renderCount++;

  return (
    <div className="App">
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
    </div>
  );
}

export default App;
