import React from 'react';
import FirstComponent from './FirstComponent';
import ArrayComponent from './ArrayComponent';  // Importando também o outro componente

const App = () => {
  return (
    <div>
      <FirstComponent />
      <ArrayComponent />
    </div>
  );
};

export default App;