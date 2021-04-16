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
import { blue } from "@material-ui/core/colors";
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
    backgroundColor: blue[400],
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
                <Avatar aria-label="museum" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title='Къща-музей „Георги Бенковски"'
            />
            <CardMedia
              className={classes.media}
              image="https://static.pochivka.bg/sights.bgstay.com/images/01/1902/547e43e692c0c.jpg"
              title="Museum"
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
                  Родният дом на известния български революционер, организатор и
                  ръководител на Априлското въстание - Георги Бенковски. Къщата
                  е построена от дърво през 1831 година. Музейните експонати
                  разказват за живота и революционната дейност на свободолюбивия
                  българин.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="col-sm-4">
          {/* Card 2 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="museum" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title='Къща-музей „Димчо Дебелянов"'
            />
            <CardMedia
              className={classes.media}
              image="https://photo-forum.net/static/site_pics/2012-05/1337532045_DSC_0042.jpg"
              title="Museum"
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
                  Построена през 1830 година и днес превърната в музей, къщата
                  предизвиква жив интерес и лирично настроение сред всички
                  посетители на града. Тук на 25.03.1887 година е роден
                  поетът-лирик Димчо Дебелянов. Възстановена е семейно-битовата
                  наредба на къщата. Музейната експозиция разказва за живота и
                  литературната дейност на поета. Адрес: ул. "Димчо Дебелянов"
                  №6
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="col-sm-4">
          {/* Card 3 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="museum" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title='Къща-музей „Любен Каравелов"'
            />
            <CardMedia
              className={classes.media}
              image="https://rezervaciq.com/img/objects/sights_1496_1500682865%D0%BB%D1%8E%D0%B1%D0%B5%D0%BD-%D0%BA%D0%B0%D1%80%D0%B0%D0%B2%D0%B5%D0%BB%D0%BE%D0%B2.jpg"
              title="Museum"
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
                  Комплекс от три постройки, изградени в период от 25 години:
                  зимна къща - 1810 г., стопанска сграда - 1820 г., лятна къща -
                  1835 г. Сградите са служили за нуждите на семейството на
                  джелепина Стойчо Каравела и съпругата му Неделя Доганова. Днес
                  и в трите къщи е разположена музейна експозиция, посветена на
                  живота и делото на двамата братя Любен и Петко Каравелови.
                  Адрес: бул. Х. Н. Палавеев 39
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="col-sm-4">
          {/* Card 4 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="museum" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title='Къща-музей „Тодор Каблешков"'
            />
            <CardMedia
              className={classes.media}
              image="https://drumivdumi.com/wp-content/uploads/2019/05/5kyshta_todor_kableshkov_9465.jpg"
              title="Museum"
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
                  Къщата е изградена през 1845 г. от копривщенски майстор. със
                  своята импознтна фасада, богат интериор и дърворезба тя
                  представлява извънредно ценен паметник на възрожденската ни
                  архитектура. Възстановената битова обстановка е такава,
                  каквато е била в средата на XIX век. Направена е експозиция,
                  отразяваща революционната дейност на Тодор Каблешков и
                  Априлското въстание в Копривщица. Адрес: ул. "Тодор Каблешков"
                  №8
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="col-sm-4">
          {/* Card 5 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="museum" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title='Къща-музей „Лютова къща"'
            />
            <CardMedia
              className={classes.media}
              image="http://perfecthouse.bg/wp-content/uploads/2017/05/%D0%BB%D1%8E%D1%82%D0%BE%D0%B2%D0%B0-%D0%BA%D1%8A%D1%89%D0%B0-1024x680.jpg"
              title="Museum"
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
                  Уникален архитектурен възрожденски паметник. Построена е през
                  1854 година от пловдивски майстори. Собственикът Петко Лютов е
                  търгувал в Египет. Къщата предизвиква интерес със своята
                  красива архитектура и богата стенописна украса. Вътрешната
                  наредба илюстрира обстановката на заможния копривщенски дом от
                  средата на XIX век. Адрес: Ул. "Никола Беловеждов" 2
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="col-sm-4">
          {/* Card 6 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="museum" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title='Църква „Успение Богородично"'
            />
            <CardMedia
              className={classes.media}
              image="https://drumivdumi.com/wp-content/uploads/2019/05/4cyrkva_uspenie_bogorodichno_9460.jpg"
              title="Museum"
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
                  Построена е през 1817 година и е наречена от местното
                  население Старата църква. Нейните камбани известяват
                  избухването на Априлското въстание. Ценно произведение на
                  изкуството е иконостасът, изработен през 1821 година. Голяма
                  стойност имат и иконите, рисувани през 1837-1838 г. от Захари
                  Зограф. В двора на църквата се намира надгробния паметник на
                  Димчо Дебелянов / 1934 г. / Скулптор - проф. Иван Лазаров. Тук
                  е и гробницата на хаджи Ненчо Палавеев - дарил значителни
                  средства за изграждането на местното читалище и други културни
                  сгради. Адрес: ул. "Димчо Дебелянов" 26А
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
  );
}
