import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundImage:"url(https://www.omgubuntu.co.uk/wp-content/uploads/2018/06/github-logo.jpeg)",
    width:200,
    height:200
  },
  cardContent:{
    position:"relative",
    height:"inherit"
  },
  text:{
    color:"white",
    fontSize:20,
    position:"absolute",
    bottom:10,
    right:10
  },
  title: {
    fontSize: 30,
    color:"white"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ActivityCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="title" component="h2" gutterBottom>
          {props.title}
        </Typography>
        <Typography className={classes.text} variant="body2" component="p">
          {props.status}
        </Typography>
      </CardContent>
    </Card>
  );
}
