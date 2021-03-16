import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';

interface ChipData {
  key: number;
  label: string;
}

export const FilterTags = () => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'Filter Tag 1' },
    { key: 1, label: 'Filter Tag 2' },
    { key: 2, label: 'Filter Tag 3' },
    { key: 3, label: 'Filter Tag 4' },
    { key: 4, label: 'Filter Tag 5' },
    { key: 5, label: 'Filter Tag 6' },
    { key: 6, label: 'Filter Tag 7' },
    { key: 7, label: 'Filter Tag 8' },
    { key: 8, label: 'Filter Tag 9' },
    { key: 9, label: 'Filter Tag 10' }
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Box component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              onDelete={handleDelete(data)}
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
