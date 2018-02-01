import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QuartermasterList from './QuartermasterList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuartermasterList />, div);
});
