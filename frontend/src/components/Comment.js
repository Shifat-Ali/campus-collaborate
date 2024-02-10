import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CommentBox from './commentbox';
const CommentCard = ({ userIcon, name, username, timestamp, comment }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '10px', position: 'relative' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
          <img src={userIcon} alt="" style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }} />
          <div>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="body2" color="textSecondary">@{username} • {timestamp}</Typography>
          </div>
        </div>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {comment}
        </Typography>
      </CardContent>
      {/* Three dots icon */}
      <IconButton style={{ position: 'absolute', top: '5px', right: '5px' }} size="small">
        <MoreVertIcon />
      </IconButton>
    </Card>
  );
};

const CommentSection = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      userIcon: '', // Hardcoded user icon, you can fetch this from backend
      name: 'John Doe',
      username: 'johndoe',
      timestamp: '2 hours ago',
      comment: 'This is the first comment.',
    },
    {
      userIcon: '',
      name: 'Jane Smith',
      username: 'janesmith',
      timestamp: '1 hour ago',
      comment: 'This is the second comment.',
    },
    {
      userIcon: '',
      name: 'Alice Johnson',
      username: 'alicejohnson',
      timestamp: '30 minutes ago',
      comment: 'This is the third comment.',
    },
    {
      userIcon: '',
      name: 'Bob Brown',
      username: 'bobbrown',
      timestamp: '10 minutes ago',
      comment: 'This is the fourth comment.',
    },
    {
      userIcon: '',
      name: 'Emma Watson',
      username: 'emmawatson',
      timestamp: '5 minutes ago',
      comment: 'This is the fifth comment.',
    },
  ]);

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        userIcon: '', // Hardcoded user icon, you can fetch this from backend
        name: 'Current User', // Hardcoded for now, you can replace it with actual user data
        username: 'currentuser', // Hardcoded for now, you can replace it with actual user data
        timestamp: 'Just now', // Hardcoded for now, you can replace it with actual timestamp
        comment: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <CommentBox/> 
      {comments.map((comment, index) => (
        <CommentCard key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
