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
  handleTopicRemove: (topicNumber: number) => void;
  topics: string[];
}

export const TabBar = ({
  addTopic,
  open,
  handleOpen,
  handleClose,
  handleTopicRemove,
  topics
}: TabBarProps) => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (e, value) => {
    setCurrentTab(value);
  };

  const removeTabAction = () => {
    handleTopicRemove(currentTab);
    setCurrentTab(0);
  };

  return (
    <>
      <Box className={classes.box} pr={1}>
        <Tabs value={currentTab} onChange={handleChangeTab}>
          {topics?.map((data, index) => {
            return <Tab key={index + data} label={data} />;
          })}
        </Tabs>
        <Box className={classes.box}>
          <Box>
            <Button variant="contained" onClick={handleOpen}>
              New Topic
            </Button>
          </Box>
          <Box pl={2}>
            <Button variant="contained" onClick={removeTabAction}>
              Remove Topic
            </Button>
          </Box>
        </Box>
      </Box>
      <AddTopicDialog
        open={open}
        handleClose={handleClose}
        addTopic={addTopic}
      />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  box: { display: 'flex', justifyContent: 'space-between' }
}));
