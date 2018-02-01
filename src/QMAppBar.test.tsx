import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QMAppBar from './QMAppBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QMAppBar />, div);
});
