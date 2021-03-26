import Head from 'next/head';
import React, { useEffect } from 'react';
import { Box, Button, makeStyles, Paper, Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar } from '../../shared/components/NavBar';
import { ProductCard } from './components/ProductCard';
import { FilterTags } from './components/FilterTags';
import { AddFilterDialog } from './components/AddFilterDialog';
import { RootState } from '../../redux/store';
import { getProductsThunk } from '../../redux/thunk/thunks';

export interface TagData {
  label: string;
}

export const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);
  const [openTopicDialog, setOpenTopicDialog] = React.useState(false);
  const [tagData, setTagData] = React.useState<TagData[]>([
    { label: 'Filter Tag 1' },
    { label: 'Filter Tag 2' },
    { label: 'Filter Tag 3' }
  ]);

  const [topics, setTopics] = React.useState<string[]>([
    'Topic One',
    'Topic Two',
    'Topic Three'
  ]);

  const products = useSelector(
    (state: RootState) => state.DATA_REDUCER.dashboardProducts
  );
  console.log(products);

  const handleClickOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  const handleFilterAdd = (tagToAdd: string) => {
    setOpenFilterDialog(false);
    setTagData(tagData.concat({ label: tagToAdd } as TagData));
  };

  const handleDelete = (tagToDelete: string) => {
    setTagData(tagData.filter((tags) => tags.label !== tagToDelete));
  };

  const handleTabAdd = (tabToAdd: string) => {
    setOpenTopicDialog(false);
    setTopics(topics.concat(tabToAdd as string));
  };

  const handleOpenTopicDialog = () => {
    setOpenTopicDialog(true);
  };

  const handleCloseTopicDialog = () => {
    setOpenTopicDialog(false);
  };

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard | Dealicious</title>
      </Head>

      <NavBar
        tabBar
        addTopic={handleTabAdd}
        open={openTopicDialog}
        handleOpen={handleOpenTopicDialog}
        handleClose={handleCloseTopicDialog}
        topics={topics}
      >
        <Box className={classes.filterBox} border={2.5} mb={2.5}>
          <FilterTags tagDelete={handleDelete} tags={tagData} />
          <Box mt={1}>
            <Button variant="contained" onClick={handleClickOpenFilterDialog}>
              Add Filter
            </Button>
          </Box>
          <AddFilterDialog
            open={openFilterDialog}
            close={handleCloseFilterDialog}
            addFilter={handleFilterAdd}
          />
        </Box>
        <Paper elevation={3} variant="outlined">
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            overflow="auto"
            maxHeight="70vh"
          >
            {products?.map((data, index) => {
              return (
                <Box key={index + data.name} p={2}>
                  <ProductCard product={data} />
                </Box>
              );
            })}
          </Box>
        </Paper>
      </NavBar>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  filterBox: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

export default Dashboard;
