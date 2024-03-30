import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NewCard(props) {
  return (
    <Card sx={{ width: 345,height:350, position:"relative", margin:10, boxShadow: "10px 10px 10px gray", }}>
      <CardMedia
        component="img"
        alt={props?.project?.title}
        height="150"
        image={props?.project?.coverImg}
      />
      <CardContent sx={{ height: 'auto', }}>
        <Typography gutterBottom variant="h5" component="div">
          {props?.project?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ }}>
          {props?.project?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ }}>
          {props?.project?.techstack}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props?.project?.github} size="small">Github</Button>
        <Button href={props?.project?.live} size="small">See Live</Button>
      </CardActions>
    </Card>
  );
}
