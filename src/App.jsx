import { useState } from 'react';
import DragItem from './components/DragItem';
import './App.scss';

function App() {
  const [showItem, setShowItem] = useState(0);

  return (
    <div className="App">
      {[...Array(5)].map((_, index) => (
        <DragItem
          key={index}
          index={index}
          showItem={showItem}
          setShowItem={setShowItem}
        />
      ))}
    </div>
  );
}

export default App;
