import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Quartermaster
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default App;
