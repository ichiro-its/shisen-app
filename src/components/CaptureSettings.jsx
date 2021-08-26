import { Box, Grid, TextField, Typography } from "@material-ui/core";

import {
  BoxedCircularProgress,
  TitledCard,
  useNode,
  useSubscription,
} from "kumo-app";

import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function CaptureSettings() {
  const [config, setConfig] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    hue: 0,
    gain: 0,
  });

  const node = useNode("img_topic_subscription");

  const [messages, setMessages] = useState([]);

  const [topicName, setTopicName] = useState("camera/capture_setting_event");

  const subscription = useSubscription(
    node,
    "shisen_interfaces/msg/CaptureSetting",
    topicName,
    (message) => {
      setMessages((prevMessages) => {
        const newMessages = prevMessages.slice();
        newMessages.unshift({
          id: uuid(),
          brightness: message.brightness,
          contrast: message.contrast,
          saturation: message.saturation,
          temperature: message.temperature,
          hue: message.hue,
          gain: message.gain,
        });

        return newMessages;
      });
    }
  );

  const onTopicNameChange = (event) => {
    setTopicName(event.target.value);
  };

  const handleChange = (event) => {
    setConfig({
      ...config,
      [event.target.name]: event.target.value,
    });
  };

  const Content = () => {
    if (subscription == null) {
      return <BoxedCircularProgress />;
    }

    const ConfigSettings = () => {
      if (messages.length <= 0) {
        return (
          <Box
            display="flex"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>No Data</Typography>
          </Box>
        );
      }
      return (
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
      );
    };
    return (
      <Box height={200} overflow="auto">
        <ConfigSettings />
      </Box>
    );
  };

  return (
    <TitledCard title="Camera Settings" overflow="auto" raised disablePadding>
      <Box m={2} pt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Topic Name"
              value={topicName}
              variant="outlined"
              onChange={onTopicNameChange}
              disabled={subscription}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Content />
          </Grid>
        </Grid>
      </Box>
    </TitledCard>
  );
}

export default CaptureSettings;
