import { Box, Grid, TextField } from "@material-ui/core";
import { TitledCard } from "kumo-app";

import { React, useState } from "react";

function CaptureSettings() {
  const [config, setConfig] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    hue: 0,
    gain: 0,
  });

  const handleChange = (event) => {
    setConfig({
      ...config,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TitledCard title="Camera Settings" overflow="auto">
      <Box>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <TextField
              label="Brightness"
              name="brightness"
              value={config.brightness}
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Contrast"
              name="contrast"
              value={config.contrast}
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Saturation"
              name="saturation"
              value={config.saturation}
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Temperature"
              name="temperature"
              value={config.temperature}
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Hue"
              name="hue"
              value={config.hue}
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Gain"
              name="gain"
              value={config.gain}
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </TitledCard>
  );
}

export default CaptureSettings;
