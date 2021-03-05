import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import ROSLIB from 'roslib';

const ros = new ROSLIB.Ros();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'ws://localhost:9090',
      connected: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleConnect = this.handleConnect.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleConnect(event) {
    event.preventDefault();
    ros.connect(this.state.value);

    ros.on('connection', () => {
      this.setConnected(true);
    });
  
    ros.on('error', () => {
      this.setConnected(false);
      alert('error');
    });
  
    ros.on('close', () => {
      this.setConnected(false);
      alert('close');
    });
  }

  setConnected(bool) {
    this.setState({connected: bool})
  }

  render () {
    if (this.state.connected) {
      // main interface
      return (
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6">
                Shisen App
              </Typography>
            </Toolbar>
          </AppBar>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ICHIRO-ITS - Connected {this.state.value}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      // connection interface
      return (
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6">
                Shisen App
              </Typography>
            </Toolbar>
          </AppBar>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ICHIRO-ITS - Disconnect
              </Typography>
              <TextField label="URL WebSocket" variant="filled" value={this.state.value} onChange={(e) => this.handleChange(e)} />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" onClick={(e) => this.handleConnect(e)}>
                Connect
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }
}

export default App;
