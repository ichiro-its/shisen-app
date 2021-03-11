import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function CustomAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Shisen App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;
