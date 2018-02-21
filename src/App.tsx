import * as React from 'react';
import QMAppBar from './QMAppBar';
import QMList from './QMList';
import * as firebase from 'firebase';

import { CircularProgress } from 'material-ui/Progress';

class App extends React.Component<{}, QMAppState> {

  constructor() {
    super({});
    this.state = {
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    var self = this;
    if (firebase.auth().currentUser === null) {
      this.setState({
        loading: true,
      });
      firebase.auth().signInAnonymously().catch(function (error: firebase.FirebaseError) {
        // Handle Errors here.
        self.setState({
          error: true,
        });
      });

      firebase.auth().onAuthStateChanged(function (user: firebase.User) {
        if (user) {
          // User is signed in.
          self.setState({
            loading: false,
          });
        } else {
          // User is signed out.
          self.setState({
            loading: false,
          });
        }
      });
    } else {
      self.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <QMAppBar />
        {this.state.error &&
          <h1>An error has occured :(</h1>
        }
        {!this.state.error && this.state.loading &&
          <CircularProgress />
        }
        {!this.state.error && !this.state.loading &&
          <QMList id="Test_Id_for_testing" />
        }
      </div>
    );
  }
}

export default App;
