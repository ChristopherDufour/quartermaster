import * as React from 'react';
import QuartermasterAppBar from './QuartermasterAppBar';
import QuartermasterList from './QuartermasterList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <QuartermasterAppBar />
        <QuartermasterList />
      </div>
    );
  }
}

export default App;
