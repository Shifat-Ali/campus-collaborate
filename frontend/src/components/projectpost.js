import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import yourImage from "../media/ayush.jpeg";
import { LoremIpsum } from "lorem-ipsum";
import RefreshIcon from '@mui/icons-material/Refresh';
import CachedIcon from '@mui/icons-material/Cached';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ProjectCard from "./Projectheader";

// import { Link } from 'react-router-dom';
import Link from "@mui/material/Link";
import { useState } from "react";
import { Padding } from "@mui/icons-material";

const lorem = new LoremIpsum();

const loremText = lorem.generateParagraphs(1);



export default function PostCard1(props) {

  const project = {
    "name": props.data.project.project_name,
    "tagline": props.data.project.tagline,
    "body": props.data.project.description,
    "url": props.data.project.url,
    "username": props.data.project.username,
    "profile_photo": props.data.project.profile_photo,
  }
  // let numOfLikes = props.data.project.votes;
  let collaborators = props.data.collaborators;
  let tags = props.data.tags;
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  function VariantButtonGroup() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup style={{ width: '100%' }} color="secondary" variant="outlined" aria-label="Basic button group">
          <Button style={{ flex: 1, borderColor: 'black', color: 'black' }}> <LikesButton /></Button>
          <Button style={{ flex: 1, borderColor: 'black', color: 'black' }}> <CommentButton /></Button>
          <Button style={{ flex: 1, borderColor: 'black', color: 'black' }}><Refresh /> </Button>



        </ButtonGroup>

      </Box>
    );
  }

  const handleImageClick = () => {
    console.log('Image clicked');
    // Add your onClick logic here
  };

  const Refresh = () => {
    const handleRefreshClick = () => {
      // Add your refresh logic here
      console.log('Refresh button clicked');
    };

    return (
      <div>
        <IconButton onClick={handleRefreshClick} color="primary">
          <CachedIcon color="action" />
        </IconButton>
        <span style={{ fontSize: 14 }}>Repost</span>
      </div>
    );
  };


  const Tag = ({ text, color }) => {
    const tagStyle = {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: color || '#8febb7', // Default color is blue
      fontWeight: 'bold',
      marginRight: '8px',
      marginBottom: '8px',
      fontSize: '14px',
      color: "black",
    };

    return <div style={tagStyle}>{text}</div>;
  };


  //   const Comments = () => {
  //     return <Button startIcon={<ChatIcon color="action" />}></Button>;
  //   };

  const containerStyle = {
    display: "flex",
    // backgroundColor:"gray",
    justifyContent: "space-between", // Adjust as needed
    alignItems: "flex-end", // Adjust as needed
    marginLeft: "75px",
    marginRight: "75px",
  };

  const itemStyle = {
    // backgroundColor: "gray",
    flex: "1", // This makes the item flexible and take up remaining space
    // Additional styles for the items
  };

  const LikesButton = () => {
    const [likes, setLikes] = useState(0);
    const handleLikeClick = () => {
      // if (likes > numOfLikes) {
      //   setLikes(likes - 1);
      // }
      // else if (likes === numOfLikes) {
      //   setLikes(likes + 1);
      // }
      // console.log('clikced likes');
    };



    return (
      <div>
        {/* <Button
          //  variant="outlined"
          startIcon={<ThumbUpIcon color="action" />}
          onClick={handleLikeClick}
        ></Button> */}
        <ThumbUpIcon color="action" onClick={handleLikeClick} />

        <span style={{ marginLeft: "5px", fontSize: 20 }}>{likes}</span>
      </div>
    );
  };

  const CommentButton = () => {
    const [likes, setLikes] = useState(0);

    const handleLikeClick = () => {
      setLikes(likes + 1);
    };



    return (
      <div>

        <ChatIcon color="action" onClick={handleLikeClick} />

        <span style={{ marginLeft: "5px", fontSize: 20 }}>{likes}</span>
      </div>
    );
  };

  return (
    <div>
      <ProjectCard />
      <Card sx={{ maxWidth: "none", border: "none" }} elevation={0} >
        <CardHeader
          avatar={
            // {
            //   comment.userIcon == null ? (
            //     <AccountCircleIcon style={{ marginRight: '10px' }} />
            //   ) : (
            //     <img src={comment.userIcon} alt="" style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }} />
            //   )
            // }
            <img
              src={project.profile_photo}
              style={{ height: "60px", borderRadius: "30px", cursor: 'pointer' }}
              alt="Your Image"
              onClick={handleImageClick}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={project.name}
          subheader={project.tagline}
        />

        <div style={containerStyle}>
          <CardContent>
            <Typography variant="body2" color="text.primary" >
              {loremText}
            </Typography>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </Link>

          </CardContent>
        </div>
        <div style={{ flex: 1, marginLeft: "90px" }}>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
          {/* <Tag text={"SOFTWARE"} />
        <Tag text={"A.I."} />
        <Tag text={"REACT"} /> */}
        </div>

        <div style={{ marginLeft: "75px", marginRight: "75px", marginBottom: "30px" }}>
          {/* <VariantButtonGroup></VariantButtonGroup> */}
        </div>

      </Card>
    </div>
  );
}
