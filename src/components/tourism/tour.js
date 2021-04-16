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
import { green } from "@material-ui/core/colors";
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
    backgroundColor: green[400],
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

export default function TourReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
      <h1>Туризъм</h1>
      <h3 className="ml-2">Маршрути</h3>
      <div className="row align-items-center">
        <div className="col-sm-4">
          {/* Card 1 */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="tour" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Покорете средногорския първенец вр. Богдан"
            />
            <CardMedia
              className={classes.media}
              image="http://patekite.info/wp-content/uploads/2019/08/vryh-bogdan-marshrut.jpeg"
              title="tour"
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
                  Връх Богдан (Голям Богдан) е най-високият връх в Средна гора.
                  Той е покрит със стара букова гора, обявена за резерват през
                  1972 г. Върхът е сред 100-те национални туристически обекта.
                  След опожаряването на х.Богдан, печат може да се намери само в
                  гр.Копривщица - в туристическия информационен център и
                  тур.спалня Войводенец. С височината на вр.Богдан от 1604 м.
                  планината се нарежда на 10-то място в България. Маршрути: Връх
                  Богдан може да бъде изкачен от гр.Копривщица по няколко
                  маршрута. Най-популярен е вариантът по долината на Крива река,
                  десен приток на р.Тополница, маркиран в жълт цвят
                  (маркировката е неподдържана). В края на долината при малък
                  заслон с чешма пътеката завива на юг и се изкачва през гъста
                  смесена гора на Плачкова поляна. Там се появяват колове от
                  зимна маркировка, които водят до останките на х.Богдан. Оттам
                  до върха остават 30 минути изкачване през резервата. Общо
                  маршрутът отнема около 3 часа.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="col-sm-4">
          {/* Card 2  */}
          <Card raised className={classes.root} className="my-3">
            <CardHeader
              avatar={
                <Avatar aria-label="tour" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="По стария път за Пловдив"
            />
            <CardMedia
              className={classes.media}
              image="http://www.entusiasti.net/app/uploads/2019/01/4.Capra-waterfall.jpg"
              title="tour"
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
                  Копривщица – м. Кемера – м. Късо бърдо – р. Меде дере -
                  Копривщица Отправяте се в посока Стрелча и след 4 км завивате
                  на изток в посока м. Барикадите. След 2 км (200 м след Бобева
                  чешма) пътят се отклонява вдясно и продължава през букова
                  гора, сред която ромолят водопадчетата на Бъзьово дере. По
                  пътя, който води на юг, все още личат калдъръмени плочи. Това
                  е старият път за Пловдив. Пътят отвежда до красива поляна – м.
                  Кемера и Меде дере. Тук ще откриете останки от стар каменен
                  мост. Продължавате през букова гора по стръмен каменист път до
                  м. Късо бърдо. В югоизточна посока, на един час път пеша,
                  отстои х. Бунтовна. От м. Късо бърдо в североизточна посока,
                  през вековна букова гора се спускате отново към долината на
                  Меде дере. Пресичате планинския поток на две места и след
                  около час стигате до Хаджи Вълчовата чешма. По дървено мостче
                  пресичате Меде дере на север и по асфалтирания път край
                  паметнина на Шестнайсетте (заслон) и Бобева чешма (заслон) се
                  връщате в Копривщица.
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
                <Avatar aria-label="tour" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Хайдушките пътеки"
            />
            <CardMedia
              className={classes.media}
              image="https://anteni.eu/wp-content/uploads/2020/10/%D0%A5%D0%B0%D0%B9%D0%B4%D1%83%D1%88%D0%BA%D0%B8-%D0%BF%D1%8A%D1%82%D0%B5%D0%BA%D0%B8.jpg"
              title="tour"
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
                  Копривщица – вр. Св. Димитър – вр. Св. Лука – Хайдушки
                  кладенец м. Равна поляна – Бяла река - Копривщица Маршрутът
                  минава покрай моста Първата пушка, пресича Бяла река, завива
                  надясно и по асфалтиран път продължава до м. Войводенец. По
                  горски път, през борова и букова гора, и през открита местност
                  се стига до отклонението за вр. Св. Лука. Продължавате наляво,
                  на югозапад по стръмен път през букова гора, който ви отвежда
                  до Хайдушкия кладенец (заслон). Преминавате през открита
                  местност и стигате до Вододела (Билото) между Копривщица и с.
                  Душанци (беседка). Маршрутът продължава на юг в посока м.
                  Равна поляна. Спускате се през борова гора и по долината на
                  Бяла река се връщате в Копривщица. Община Копривщица.
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
                <Avatar aria-label="tour" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="В сърцето на Средна гора - м. Сополиви камъни"
            />
            <CardMedia
              className={classes.media}
              image="https://static.pochivka.bg/sights.bgstay.com/images/02/2752/5a65b853c70f2.jpeg"
              title="tour"
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
                  Маршрутът води по асфалтирания път на юг в посока Стрелча.
                  След паметника на Аврелиан (на 5 км. от града), пътят се
                  отклонява в югозападна посока към м. Сополивите камъни. Оттам
                  на запад, през открита местност и букова гора (Боев шамак),
                  стигате до м. Черньови бачии. Надясно от върха, през борова
                  гора, излизате на седловината Шамаците и стигате до м.
                  Чемериките. Връх Стръмонос отстои на 10 минути. На север се
                  издига вр. Буная (вторият по височина връх в Средна гора –
                  1572 м). На връщане покрай скална фигура, наподобяваща слон
                  (малък заслон), през м. Боев шамак за около 1 час, стигате до
                  Кривото дърво, 200 годишен плачещ бук, обявен за природна
                  забележителност (заслон). По асфалтирания път се връщате в
                  Копривщица (7 км).
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
                <Avatar aria-label="tour" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Чакащата майка"
            />
            <CardMedia
              className={classes.media}
              image="https://imgrabo.com/pics/guide/900x600/20160209100344_43962.jpeg"
              title="tour"
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
                  Копривщица – м. Рейница – Копривщица Тръгвате по пътя за
                  Стрелча. На 200 - 300 м. и след разклона за м. Барикадите,
                  завивате на юг и по стръмен коларски път стигате до м. Рейница
                  (беседка), откъдето се открива неповторима гледка към
                  копривщенското землище и Централен Балкан. Тук природата е
                  изваяла причудливи форми от скали. Една от тях наподобява
                  паметника на майката на нежния лирик Димчо Дебелянов.
                  Продължавате по билото на югоизток, завивате на запад и се
                  спускате към м. Нови ливади. По асфалтирания път се връщате в
                  Копривщица.
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
                <Avatar aria-label="tour" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Пътека на здравето"
            />
            <CardMedia
              className={classes.media}
              image="https://www.10te.bg/wp-content/uploads/2017/03/ecoputeki_8.jpg"
              title="tour"
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
                  Копривщица – вр. Св. Димитър – Копривщица Тръгвате в посока
                  площад 20-ти Април, минавате покрай паметника на Найден Геров,
                  по Доганова улица и по стръмна пътека излизате на поляните на
                  м. Войводенец – мястото, където се провеждат Националните
                  събори на народното творчество. От поляните се разкрива
                  величествена гледка към Стара планина и Копривщица. На изток е
                  вр. Св. Димитър, около който минава пътеката на здравето, с
                  изградени уреди за спорт сред природата. В близост блика
                  студено изворче. Връщането е по заобиколен път на дясно, който
                  отново отвежда към Доганова улица. С превозно средство
                  маршрутът минава покрай моста Първата пушка, по десния бряг
                  срещу течението на Бяла река, завива надясно, после наляво и
                  по асфалтиран път продължава до м. Войводенец.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
  );
}
