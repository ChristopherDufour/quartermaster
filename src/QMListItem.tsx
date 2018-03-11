/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Input from 'material-ui/Input';

class QMListItem extends React.Component<QMListItemProps, QMListItemState> {

  constructor(props: QMListItemProps) {
    super(props);
    this.state = {
      id: props.id as string,
      checked: props.checked as boolean,
      value: props.value as string,
    };
  }

  handleToggleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      checked: event.target.checked,
    });
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <ListItem dense={true} button={true} key={this.props.id}>
        <Checkbox
          onChange={this.handleToggleCheckbox}
          checked={this.state.checked}
        />
        <Input
          value={this.state.value}
          onChange={this.handleInputChange}
          margin="dense"
          disableUnderline={true}
        />
      </ListItem>
    );
  }
}

export default QMListItem;
