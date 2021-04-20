import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextField } from '@material-ui/core';

interface AddTopicDialogProps {
  open: boolean;
  handleClose: () => void;
  addTopic: (topicToAdd: string) => void;
}

export const AddTopicDialog = ({
  open,
  handleClose,
  addTopic
}: AddTopicDialogProps) => {
  const classes = useStyles();
  let textBoxTopic = '';

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    textBoxTopic = event.target.value;
  };

  const handleAddTopicItem = (value: string) => {
    addTopic(value);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add topic</DialogTitle>
        <TextField variant="outlined" onChange={handleTextFieldChange} />
        <Button onClick={() => handleAddTopicItem(textBoxTopic)}>Add</Button>
      </Dialog>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default AddTopicDialog;
