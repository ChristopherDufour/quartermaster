/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import List from 'material-ui/List';
import ListSubheader from 'material-ui/List';
import QMListItem from './QMListItem';
import * as FirebaseConf from './FirebaseConf';
import 'firebase';

class QMList extends React.Component<QMListProps, QMListState> {

  constructor(props: QMListProps) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      items: new Array<QMListItemProps>(),
    };
  }

  componentDidMount() {
    var self = this;
    var db = FirebaseConf.db;

    db.collection('items').where('listId', '==', self.state.id).get()
      .then((listItemsSnapshot) => {
        var listItems = new Array<QMListItemProps>();

        listItemsSnapshot.forEach((doc) => {

          var docData = doc.data();
          listItems.push({
            id: doc.id,
            checked: docData.checked,
            value: docData.value
          });
        });

        self.setState({
          items: listItems
        });

      })
      .catch((err) => {
        self.setState({
          items: new Array<QMListItemProps>()
        });
      });
  }

  render() {
    return (
      <List>
        <ListSubheader>{this.state.title}</ListSubheader>
        {this.state.items.map(value => (
          <QMListItem
            id={value.id}
            value={value.value}
            checked={value.checked}
            key={this.props.id + 'Input'}
          />
        ))}
      </List>
    );
  }
}

export default QMList;
