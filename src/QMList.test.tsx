import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QMList from './QMList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QMList id="Test_QMListTest" />, div);
});
