import React from 'react';
import { Counterview } from './components/counterView';
import { Updatetext } from './components/Updatetext';
import { UsingReduce } from './components/UsingReduce';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Counterview />
      <Updatetext />
      <UsingReduce />
    </div>
  );
}
