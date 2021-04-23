import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";

import {
  BoxedCircularProgress,
  TitledCard,
  useNode,
  useSubscription,
} from "kumo-app";

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function SubscriptionImageTopic() {
  const node = useNode("img_topic_subscription");

  const [messages, setMessages] = useState([]);

  const [topicName, setTopicName] = useState("camera/raw_image");

  const subscription = useSubscription(
    node,
    "shisen_interfaces/msg/RawImage",
    topicName,
    (message) => {
      setMessages((prevMessages) => {
        const newMessages = prevMessages.slice();
        newMessages.unshift({
          id: uuid(),
          data: message.data,
        });

        return newMessages;
      });
    }
  );

  const Content = () => {
    if (subscription === null) {
      return <BoxedCircularProgress />;
    }

    const MessageList = () => {
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

      const messageItems = messages.map((message) => {
        return (
          <ListItem key={message.id} button divider>
            <ListItemText primary={message.data} />
          </ListItem>
        );
      });

      return <List disablePadding>{messageItems}</List>;
    };

    return (
      <Box height={200} overflow="auto">
        <MessageList />
      </Box>
    );
  };

  const onTopicNameChange = (event) => {
    setTopicName(event.target.value);
  };

  return (
    <TitledCard title="Subscription Image Topic" raised disablePadding>
      <Box m={2} pt={2}>
        <Grid spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Topic Name"
              value={topicName}
              onChange={onTopicNameChange}
              disabled={subscription}
              variant="outlined"
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

export default SubscriptionImageTopic;
