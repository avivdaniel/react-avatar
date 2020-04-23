import React from 'react';
import './App.css';
import { Avatar } from './Components/Avatar/Avatar';


function App() {
  return (
    <div className="App">
      < Avatar
        url="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80"
        shape='rounded-circle'
        width={300}
      />

      < Avatar
        url="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80"
        shape='rounded'
        width={300}
      />

      < Avatar
        url="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
        shape='rounded-circle'
        width={300}
      />

    </div>
  );
}

export default App;
