import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';
import { FilterTagData } from '../Dashboard';

interface FilterTagsProps {
  filterTagDelete: (filterTagToDelete: string) => void;
  filterTags: FilterTagData[];
}

export const FilterTags = ({
  filterTagDelete,
  filterTags
}: FilterTagsProps) => {
  const classes = useStyles();
  console.log(filterTags);
  return (
    <Box component="ul" className={classes.root}>
      {filterTags.map((data, index) => {
        return (
          <li key={data.label + index}>
            <Chip
              label={data.label}
              onDelete={() => filterTagDelete(data.label)}
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
