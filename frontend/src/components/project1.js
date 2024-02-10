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
import { useNavigate } from "react-router";
import { useParams } from "react-router";

// import { Link } from 'react-router-dom';
import Link from "@mui/material/Link";
import { useState } from "react";
import { Padding } from "@mui/icons-material";

const lorem = new LoremIpsum();

const loremText = lorem.generateParagraphs(1);



export default function PostCard2(props) {
    const navigate = useNavigate();
    // const [expanded, setExpanded] = React.useState(false);
    // console.log('props', props.data);
    const date = new Date(props.data.created_at);
    let tags = props.data.tags;
    let project = {
        "id": props.data.id,
        "title": props.data.project_name,
        "subtitle": props.data.tagline,
        "url": props.data.url,
        "body": props.data.description,
        "date": date.toLocaleDateString(),
        "time": date.toLocaleTimeString(),
        "user_id": props.data.user_id,
        "profile_photo": props.data.profile_photo,

    }
    let numOfLikes = parseInt(props.data.upvotes);
    let numOfComments = props.data.numOfComments;


    const handleExpandClick = () => {
        // setExpanded(!expanded);
        console.log('exoanded click');
        navigate(`/project/${project.id}`);
    };

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
        navigate('/profile');
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
        const [likes, setLikes] = useState(numOfLikes);
        const handleLikeClick = () => {
            if (likes > numOfLikes) {
                setLikes(likes - 1);
            }
            else if (likes === numOfLikes) {
                setLikes(likes + 1);
            }
            console.log('clikced likes');
        };

        return (
            <div onClick={handleLikeClick}>
                {/* <Button
          //  variant="outlined"
          startIcon={<ThumbUpIcon color="action" />}
          onClick={handleLikeClick}
        ></Button> */}
                <ThumbUpIcon color="action" />

                <span style={{ marginLeft: "5px", fontSize: 20 }}>{likes}</span>
            </div>
        );
    };

    const CommentButton = () => {
        // const [likes, setLikes] = useState(0);

        const handleLikeClick = () => {
            // setLikes(likes + 1);
            console.log('comment clicked');
            navigate(`/project/${project.id}`);
        };



        return (
            <div onClick={handleLikeClick}>

                <ChatIcon color="action" />

                <span style={{ marginLeft: "5px", fontSize: 20 }}>{numOfComments}</span>
            </div>
        );
    };

    return (
        <Card sx={{ maxWidth: "none" }} elevation={0} style={{ border: '1px solid #ccc' }}>
            <CardHeader
                avatar={
                    <img
                        src={project.profile_photo || yourImage}
                        style={{ height: "60px", borderRadius: "30px", cursor: 'pointer' }}
                        alt="Your Image"
                        onClick={handleImageClick}
                    />
                }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={project.title}
                subheader={project.date + ' ' + project.time}
            />

            <div style={containerStyle}>
                <CardContent onClick={handleExpandClick}>
                    <Typography variant="body2" color="text.primary" >
                        {/* {loremText} */}
                        {project.body}
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

            <div style={{ marginLeft: "75px", marginRight: "75px" }}>
                <VariantButtonGroup></VariantButtonGroup>
            </div>

        </Card>
    );
}
