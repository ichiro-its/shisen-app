import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ROSLIB from 'roslib';

import AppBar from './components/AppBar';
import Snackbar from './components/Snackbar';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [url, setURL] = useState('ws://localhost:9090');
  const [connected, setConnected] = useState(false);

  const showMessage = (msg, type) => {
    ReactDOM.render(<Snackbar type={type} message={msg} />, document.getElementById('snackbar'));
  };

  const ros = new ROSLIB.Ros();

  ros.on('connection', () => {
    setConnected(true);
    showMessage('Connected', 'success');
  });

  ros.on('error', () => {
    setConnected(false);
    showMessage('Error', 'error');
  });

  ros.on('close', () => {
    setConnected(false);
    showMessage('Close', 'warning');
  });

  const handleConnect = () => {
    try {
      ros.connect(url);
    } catch (err) {
      showMessage('URL not valid', 'info');
    }
  };

  const onChangeHandler = (event) => {
    setURL(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar />
      <Card>
        <CardContent>
          { (!connected) ? <TextField label="URL WebSocket" variant="filled" value={url} onChange={onChangeHandler} /> : ''}
        </CardContent>
        <CardActions>
          { (!connected) ? <Button variant="outlined" onClick={handleConnect}>Connect</Button> : '' }
          <div id="snackbar" />
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
