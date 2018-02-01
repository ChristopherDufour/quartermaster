import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class QuartermasterAppBar extends React.Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Quartermaster
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default QuartermasterAppBar;
