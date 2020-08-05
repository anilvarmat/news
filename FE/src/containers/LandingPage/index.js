import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsList from '../../components/NewsList';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: '24px 0px 24px 0px'
    },
    header: {
        backgroundColor: '#1976d2',
        color: '#FEFEFE',
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    News List
                </Grid>
                <Grid item xs={12}>
                    <NewsList />
                </Grid>
            </Grid>
        </div>
    );
}