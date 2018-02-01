import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QMListItem from './QMListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QMListItem id="TestKey1" textValue="Test" />, div);
});

it('renders without crashing using optional paramater', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QMListItem id="QMListItemTestKey" textValue="Test" checked={true} />, div);
});
