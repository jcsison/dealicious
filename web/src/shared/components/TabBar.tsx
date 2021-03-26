import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography
} from '@material-ui/core';
import '../../pages/dashboard/components/AddTopicDialog';
import { AddTopicDialog } from '../../pages/dashboard/components/AddTopicDialog';

interface TabBarProps {
  addTopic: (topicToAdd: string) => void;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  topics: string[];
}

export const TabBar = ({
  addTopic,
  open,
  handleOpen,
  handleClose,
  topics
}: TabBarProps) => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (e, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box className={classes.box} pr={5.5}>
        <Tabs value={currentTab} onChange={handleChangeTab}>
          {topics?.map((data, index) => {
            return <Tab key={index + data} label={data} />;
          })}
        </Tabs>
        <Box>
          <Button variant="contained" onClick={handleOpen}>
            New Topic
          </Button>
          <AddTopicDialog
            open={open}
            handleClose={handleClose}
            addTopic={addTopic}
          />
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  box: { display: 'flex', justifyContent: 'space-between' }
}));
