/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import List from 'material-ui/List';
import QMListItem from './QMListItem';

class QMList extends React.Component<QMListProps, QMListState> {

    constructor(props: QMListItemProps) {
        super(props);

        this.state = {
            checked: new Array<number | string>(),
        };
    }

    handleToggle = (value: number | string) => {
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
                {[0, 1, 2, 3, 4].map(value => (
                    <QMListItem textValue={'Test ' + value} id={this.props.id + '~' + value} />
                ))}
            </List>
        );
    }
}

export default QMList;
