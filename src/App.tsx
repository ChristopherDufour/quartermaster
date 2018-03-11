import * as React from 'react';
import QMAppBar from './QMAppBar';
import QMList from './QMList';
import { CircularProgress } from 'material-ui/Progress';
import * as FirebaseConf from './FirebaseConf';
import * as Firebase from 'firebase';

class App extends React.Component<{}, QMAppState> {

  constructor(props: object) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      lists: new Array<QMListProps>()
    };
  }

  componentDidMount() {
    var self = this;
    var db = FirebaseConf.db;
    // Handle no app initialization
    if (!FirebaseConf.auth || !FirebaseConf.db) {
      this.setState({
        loading: true,
        error: true
      });
    } else if (FirebaseConf.auth.currentUser === null) {
      this.setState({
        loading: true,
      });
      FirebaseConf.auth.signInAnonymously().catch(function (error: Firebase.FirebaseError) {
        // Handle Errors here.
        self.setState({
          error: true,
        });
      });

      FirebaseConf.auth.onAuthStateChanged(function (user: Firebase.User) {
        if (user) {
          db.collection('lists').get()
            .then((listsSnapshot) => {
              var lists = new Array<QMListProps>();
              listsSnapshot.forEach((doc) => {
                var docData = doc.data();
                lists.push({
                  id: doc.id,
                  title: docData.title
                });
              });
              self.setState({
                lists: lists,
                loading: false,
              });
            })
            .catch((err) => {
              self.setState({ error: err });
            });
        } else {
          // User is signed out.

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
          <div>
            {
              this.state.lists.map(value => (
                <QMList
                  id={value.id}
                  title={value.title}
                  key={value.id}
                />
              ))
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
