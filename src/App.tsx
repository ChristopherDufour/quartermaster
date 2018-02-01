import * as React from 'react';
import QMAppBar from './QMAppBar';
import QMList from './QMList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <QMAppBar />
        <QMList />
      </div>
    );
  }
}

export default App;
