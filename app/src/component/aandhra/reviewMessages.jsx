import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ sl , city, img , userId, rating, titles, caption, date }) {
  const [expanded, setExpanded] = React.useState(false);

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
// console.log("userId35" , userId)
  return (
<div style={{marginTop:'20px ' , display:'flex',justifyContent:'center'}}>
    <Card sx={{  width: ['60%', '80%', '100%','120%'] }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <p id='rating' style={{marginRight:'50px' }}>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
          </IconButton>
        }
        title={userId?.first_name}
        subheader={<div>{new Date(date).toLocaleDateString("en-GB")}</div>}

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{marginRight:'750px' }}>
          {caption}
        </Typography>
        <Typography paragraph style={{marginRight:'750px' }}>
           {caption}
          </Typography>
          <Typography paragraph style={{marginRight:'750px' }}>
           {titles}
          </Typography>
          
      </CardContent>
      <div style={{padding:'10px' ,overflowX:'scroll'  ,width:'900px' , display:'flex'}}>
      {!img[1] && !img[0].endsWith('.mp4')  && (
  
   <img style={{ width:200, height: 194}}  src={`http://192.34.63.158:4000/review/${img}`} />
    
)}

{/* Render videos if present */}
{img.map((x, index) => {
  if (x.endsWith('.mp4')) {
    return (
      <div key={index}>
        <video
          style={{ width: '', padding: 5 }}
          height="194"
          controls
        >
          <source src={`http://192.34.63.158:4000/review/${x}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  return null; // Skip non-video elements
})}
 
      {img[1] && !img[1].endsWith('.mp4')&&
  img.map((x, index) => (
    <div key={index} style={{padding:10 }}>
      <img style={{ width:200, height: 194}} src={`http://192.34.63.158:4000/review/${x}`} />
   
      {/* Render video if the file extension suggests it's a video */}
      {x.endsWith('.mp4') && (
        <video
          style={{ width: '32%', padding: 10  }}
          height="194"
          controls
        >
          <source src={`http://192.34.63.158:4000/review/${x}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  ))
}

     </div>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
           {caption}
          </Typography>
          <Typography paragraph>
           {titles}
          </Typography>
          <Typography>
            {date}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
    </div>
    
  );
}
