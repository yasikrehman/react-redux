import React from 'react';

import { Counterview } from './components/counterView';
import { Updatetext } from './components/Updatetext';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Counterview />
      <Updatetext />
    </div>
  );
}
