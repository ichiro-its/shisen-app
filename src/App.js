import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import ShisenAppBar from './components/ShisenAppBar';
import ShisenSnackbar from './components/ShisenSnackbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import ROSLIB from 'roslib';

const useStyles = makeStyles((theme) => ({
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
  const ros = new ROSLIB.Ros();

  ros.on('connection', () => {
    setConnected(true);
    showMessage("Connected", "success");
  });
  
  ros.on('error', () => {
    setConnected(false);
    showMessage("Error", "error");
  });
  
  ros.on('close', () => {
    setConnected(false);
    showMessage("Close", "warning");
  });

  const handleConnect = () => {
    ros.connect(url);
  };

  const onChangeHandler = event => {
    setURL(event.target.value);
  };

  return (
    <div className={classes.root}>
      <ShisenAppBar></ShisenAppBar>
      <Card>
        <CardContent>
          { (!connected)  ? <TextField label="URL WebSocket" variant="filled" value={url} onChange={onChangeHandler} /> : ''}
        </CardContent>
        <CardActions>
          { (!connected) ? <Button variant="outlined" onClick={handleConnect}>Connect</Button> : ''} 
          <div id="snackbar"/>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;

function showMessage(message, type) {
  ReactDOM.render(<ShisenSnackbar type={type} message={message}/>, document.getElementById('snackbar'));
}