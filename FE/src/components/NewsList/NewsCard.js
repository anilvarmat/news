import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    title: {
        fontSize: 14,
    },
    source: {
        fontSize: 12,
    },
    publishedAt: {
        fontSize: 10,
    }
});

export default function NewsCard(props) {
    const classes = useStyles();

    const { title, urlToImage, description, publishedAt, url, source } = props;

    const handleClick = () => {
        window.open(url, "_blank");
    };
    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={urlToImage}
                    title={title}
                />
                <CardContent>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                    <Typography className={classes.source}>
                        {source}
                    </Typography>
                    <Typography className={classes.publishedAt}>
                        {publishedAt}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClick}>
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}