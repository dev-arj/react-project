import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App({number, lake}) {
return (
<>
  <li>Lake</li>
  <li>River</li>
  <li>{number}</li>
  <li>{lake}</li>
</>
);
}
ReactDOM.render(
<>
  <App number={3} lake="Kaveri"/>
</>,
document.getElementById('root')
);

