import * as React from 'react';
import List, { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Input from 'material-ui/Input';

class QMList extends React.Component {
    state = {
        checked: new Array<number|string>(),
    };

    handleToggle = (value: number|string) => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    }

    render() {
        return (
            <List>
                {[0, 1, 2, 4].map(value => (
                    <ListItem key={value} dense={true} button={true}>
                        <Checkbox
                            onChange={this.handleToggle.bind(this, value)}
                            checked={this.state.checked.indexOf(value) !== -1}
                        />
                        <Input
                            defaultValue={value}
                            margin="dense"
                            disableUnderline={true}
                        />
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default QMList;
