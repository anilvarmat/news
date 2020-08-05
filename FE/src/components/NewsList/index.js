import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsCard from './NewsCard';
import axios from 'axios';

import { END_POINT } from '../../constants/apiConsts';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function NewsList() {
    const classes = useStyles();
    const [newsList, setNewsState] = useState({});

    useEffect(() => {
        axios.get(END_POINT)
            .then(response => {
                setNewsState(response.data);
            });
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={3} className={classes.container} alignItems="stretch">
                {newsList && newsList.news && newsList.news.articles ?
                    newsList.news.articles.map((news) => <Grid item xs={3}><NewsCard title={news.title} urlToImage={news.urlToImage} description={news.description} publishedAt={news.publishedAt} url={news.url} source={news.source.name} />  </Grid>)
                    : ""}
            </Grid>
        </React.Fragment>
    );
}