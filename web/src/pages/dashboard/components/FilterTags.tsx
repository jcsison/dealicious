import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';
import { TagData } from '../Dashboard';

interface FilterTagsProps {
  tagDelete: (tagToDelete: string) => void;
  tags: TagData[];
}

export const FilterTags = ({ tagDelete, tags }: FilterTagsProps) => {
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      {tags.map((data, index) => {
        return (
          <li key={data.label + index}>
            <Chip
              label={data.label}
              onDelete={() => tagDelete(data.label)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      maxWidth: '80vw',
      padding: theme.spacing(0.5),
      margin: 0
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  })
);
