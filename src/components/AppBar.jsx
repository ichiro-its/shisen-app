import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiTypography from '@material-ui/core/Typography';

function AppBar() {
  return (
    <div>
      <MuiAppBar position="static">
        <MuiToolbar>
          <MuiTypography variant="h6">
            Shisen App
          </MuiTypography>
        </MuiToolbar>
      </MuiAppBar>
    </div>
  );
}

export default AppBar;
