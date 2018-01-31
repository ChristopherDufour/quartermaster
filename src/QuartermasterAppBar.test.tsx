import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QuartermasterAppBar from './QuartermasterAppBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuartermasterAppBar />, div);
});
