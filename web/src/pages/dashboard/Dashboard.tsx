import Head from 'next/head';
import React, { useEffect } from 'react';
import { Box, Button, makeStyles, Paper, Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar } from '../../shared/components/NavBar';
import { ProductCard } from './components/ProductCard';
import { FilterTags } from './components/FilterTags';
import { AddFilterDialog } from './components/AddFilterTagDialog';
import { RootState } from '../../redux/store';
import { getProductsThunk } from '../../redux/thunk/thunks';
import { TabContext, TabPanel } from '@material-ui/lab';

export interface FilterTagData {
  label: string;
}

export const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////////
  //
  // States
  //
  //////////////////////////////////////////////////////////////////////////
  const [currentTab, setCurrentTab] = React.useState(0);
  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);
  const [openTopicDialog, setOpenTopicDialog] = React.useState(false);
  const [topicFilterTagData, setTopicFilterTagData] = React.useState<{
    [tab: string]: FilterTagData[];
  }>({
    'Topic One': [
      { label: 'Filter Tag 1' },
      { label: 'Filter Tag 2' },
      { label: 'Filter Tag 3' }
    ],
    'Topic Two': [
      { label: 'Filter Tag 1' },
      { label: 'Filter Tag 2' },
      { label: 'Filter Tag 3' }
    ],
    'Topic Three': [
      { label: 'Filter Tag 1' },
      { label: 'Filter Tag 2' },
      { label: 'Filter Tag 3' }
    ]
  });

  const [topics, setTopics] = React.useState<string[]>([
    'Topic One',
    'Topic Two',
    'Topic Three'
  ]);
  const [currentTabFilterTags, setCurrentTabFilterTags] = React.useState<
    FilterTagData[]
  >(topicFilterTagData[topics[0]]);

  const products = useSelector(
    (state: RootState) => state.DATA_REDUCER.dashboardProducts
  );
  console.log(products);

  //////////////////////////////////////////////////////////////////////////
  //
  // Filter Dialog state mutators
  //
  //////////////////////////////////////////////////////////////////////////
  const handleClickOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  //////////////////////////////////////////////////////////////////////////
  //
  // Filter Tag state mutators
  //
  //////////////////////////////////////////////////////////////////////////
  const handleFilterTagAdd = (filterTagToAdd: string) => {
    // Validating that the tag to add is not empty
    if (filterTagToAdd.trim() != '') {
      setOpenFilterDialog(false);
      setTopicFilterTagData({
        ...topicFilterTagData,
        [topics[currentTab]]: topicFilterTagData[topics[currentTab]].concat({
          label: filterTagToAdd
        } as FilterTagData)
      });

      setCurrentTabFilterTags(
        topicFilterTagData[topics[currentTab]].concat({
          label: filterTagToAdd
        } as FilterTagData)
      );
    }
  };

  const handleFilterTagDelete = (filterTagToDelete: string) => {
    setTopicFilterTagData({
      ...topicFilterTagData,
      [topics[currentTab]]: topicFilterTagData[topics[currentTab]].filter(
        (tags) => tags.label !== filterTagToDelete
      )
    });

    setCurrentTabFilterTags(
      topicFilterTagData[topics[currentTab]].filter(
        (tags) => tags.label !== filterTagToDelete
      )
    );
  };

  //////////////////////////////////////////////////////////////////////////
  //
  // Tab state mutators
  //
  //////////////////////////////////////////////////////////////////////////
  const handleTabAdd = (tabToAdd: string) => {
    // Validating that the tag to add is not empty
    if (tabToAdd.trim() != '') {
      setOpenTopicDialog(false);
      setTopics(topics.concat(tabToAdd as string));
      setTopicFilterTagData({
        ...topicFilterTagData,
        [tabToAdd]: []
      });
    }
  };

  const handleTabChange = (tab: number) => {
    setCurrentTabFilterTags(topicFilterTagData[topics[tab]] ?? []);
    setCurrentTab(tab);
  };

  //////////////////////////////////////////////////////////////////////////
  //
  // Topic state mutators
  //
  //////////////////////////////////////////////////////////////////////////
  const handleOpenTopicDialog = () => {
    setOpenTopicDialog(true);
  };

  const handleCloseTopicDialog = () => {
    setOpenTopicDialog(false);
  };

  const handleTopicRemove = (topicNumber: number) => {
    let topicNameToRemove = topics[topicNumber];
    setTopics(topics.filter((topic) => topic !== topicNameToRemove));
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
        activeTab={currentTab}
        addTopic={handleTabAdd}
        open={openTopicDialog}
        handleOpen={handleOpenTopicDialog}
        handleClose={handleCloseTopicDialog}
        handleTabChange={handleTabChange}
        handleTopicRemove={handleTopicRemove}
        topics={topics}
      >
        <TabContext value={currentTab.toString()}>
          <TabPanel value={currentTab.toString()}>
            <Paper
              className={classes.filterBox}
              elevation={3}
              variant="outlined"
            >
              <FilterTags
                filterTagDelete={handleFilterTagDelete}
                filterTags={currentTabFilterTags}
              />
              <Box my={1}>
                <Button
                  variant="contained"
                  onClick={handleClickOpenFilterDialog}
                >
                  Add Filter
                </Button>
              </Box>
            </Paper>
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
          </TabPanel>
        </TabContext>
      </NavBar>
      <AddFilterDialog
        open={openFilterDialog}
        close={handleCloseFilterDialog}
        addFilterTag={handleFilterTagAdd}
      />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  filterBox: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}));

export default Dashboard;
