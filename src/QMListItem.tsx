/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Input from 'material-ui/Input';

class QMListItem extends React.Component<QMListItemProps, QMListItemState> {

  constructor(props: QMListItemProps) {
    super(props);
    this.state = {
      checked: typeof this.props.checked === 'boolean' ? this.props.checked : false,
      textValue: this.props.textValue,
    };
  }

  handleToggleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      checked: event.target.checked,
    });
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      textValue: event.target.value
    });
  }

  render() {
    return (
      <ListItem key={this.props.id} dense={true} button={true}>
        <Checkbox
          onChange={this.handleToggleCheckbox}
          checked={this.state.checked}
        />
        <Input
          value={this.state.textValue}
          onChange={this.handleInputChange}
          margin="dense"
          disableUnderline={true}
        />
      </ListItem>
    );
  }
}

export default QMListItem;
