import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    marginBottom: 15,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    width: 60,
    backgroundColor: purple[400],
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  list: {
    width: 200,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-4">
          {/* Card 1 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="event" className={classes.avatar}>
                  Н
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Инициатива на Aгенция по горите"
            />
            <CardMedia
              className={classes.media}
              image="https://koprivshtitsa-bg.com/images/articles/365/thmb/3__26112020113601-800.jpg"
              title="Инициатива на Изпълнителната агенция по горите"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Повече:</Typography>
                <Typography paragraph></Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="col-sm-4">
          {/* Card 2 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="event" className={classes.avatar}>
                  Н
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Празник на картофа 2020"
            />
            <CardMedia
              className={classes.media}
              image="https://koprivshtitsa-bg.com/images/articles/362/thmb/plakat2-800.jpg"
              title="Празник на картофа 2020"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Повече:</Typography>
                <Typography paragraph></Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="col-sm-4">
          {/* Card 3 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="event" className={classes.avatar}>
                  Н
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Бизнес-ориентирано обучение"
            />
            <CardMedia
              className={classes.media}
              image="https://koprivshtitsa-bg.com/images/articles/360/thmb/Plakat-Koprivshtitsa.pdf_page_1-800.jpg"
              title="Бизнес-ориентирано обучение"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Повече:</Typography>
                <Typography paragraph>
                  Технически университет - Габрово, с подкрепата и седействието
                  на община Копривщица, предлага за учебната 2020-2021г.за
                  образователно - квалификационна степен "бакалавър" две
                  специланости.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
  );
}
