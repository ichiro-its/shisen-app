import { Box, Grid, TextField } from "@material-ui/core";
import { TitledCard } from "kumo-app";

import { React, useState } from "react";

function CaptureSettings() {
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [hue, setHue] = useState(0);
  const [gain, setGain] = useState(0);

  const onBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  const onContrastChange = (event) => {
    setContrast(event.target.value);
  };

  const onSaturationChange = (event) => {
    setSaturation(event.target.value);
  };

  const onTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const onHueChange = (event) => {
    setHue(event.target.value);
  };

  const onGainChange = (event) => {
    setGain(event.target.value);
  };

  return (
    <TitledCard title="Camera Settings" overflow="auto">
      <Box>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <TextField
              label="Brightness"
              value={brightness}
              type="number"
              variant="outlined"
              onChange={onBrightnessChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Contrast"
              value={contrast}
              type="number"
              variant="outlined"
              onChange={onContrastChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Saturation"
              value={saturation}
              type="number"
              variant="outlined"
              onChange={onSaturationChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Temperature"
              value={temperature}
              type="number"
              variant="outlined"
              onChange={onTemperatureChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Hue"
              value={hue}
              type="number"
              variant="outlined"
              onChange={onHueChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Gain"
              value={gain}
              type="number"
              variant="outlined"
              onChange={onGainChange}
            />
          </Grid>
        </Grid>
      </Box>
    </TitledCard>
  );
}

export default CaptureSettings;
