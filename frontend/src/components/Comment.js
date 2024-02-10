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
const CommentCard = (props) => {
  const date = new Date(props.data.created_at);
  const comment = {
    "userIcon": props.data.profile_photo,
    "name": props.data.username,
    "email": props.data.email,
    "timestamp": date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
    "body": props.data.body,
  }
  return (
    <Card variant="outlined" style={{ marginBottom: '10px', position: 'relative' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {comment.userIcon == null ? (
            <AccountCircleIcon style={{ marginRight: '10px' }} />
          ) : (
            <img src={comment.userIcon} alt="" style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }} />
          )}
          <div>
            <Typography variant="subtitle1">{comment.name}</Typography>
            <Typography variant="body2" color="textSecondary">@{comment.email} • {comment.timestamp}</Typography>
          </div>
        </div>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {comment.body}
        </Typography>
      </CardContent>
      {/* Three dots icon */}
      <IconButton style={{ position: 'absolute', top: '5px', right: '5px' }} size="small">
        <MoreVertIcon />
      </IconButton>
    </Card>
  );
};

const CommentSection = (props) => {
  // console.log('shifat', props.data);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(props.data);
  // console.log('asc', comments);
  // const [comments, setComments] = useState([
  //   {
  //     userIcon: '', // Hardcoded user icon, you can fetch this from backend
  //     name: 'John Doe',
  //     email: 'johndoe',
  //     timestamp: '2 hours ago',
  //     comment: 'This is the first comment.',
  //   },
  //   {
  //     userIcon: '',
  //     name: 'Jane Smith',
  //     email: 'janesmith',
  //     timestamp: '1 hour ago',
  //     comment: 'This is the second comment.',
  //   },
  //   {
  //     userIcon: '',
  //     name: 'Alice Johnson',
  //     email: 'alicejohnson',
  //     timestamp: '30 minutes ago',
  //     comment: 'This is the third comment.',
  //   },
  //   {
  //     userIcon: '',
  //     name: 'Bob Brown',
  //     email: 'bobbrown',
  //     timestamp: '10 minutes ago',
  //     comment: 'This is the fourth comment.',
  //   },
  //   {
  //     userIcon: '',
  //     name: 'Emma Watson',
  //     email: 'emmawatson',
  //     timestamp: '5 minutes ago',
  //     comment: 'This is the fifth comment.',
  //   },
  // ]);

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        userIcon: '', // Hardcoded user icon, you can fetch this from backend
        name: 'Current User', // Hardcoded for now, you can replace it with actual user data
        email: 'currentuser', // Hardcoded for now, you can replace it with actual user data
        timestamp: 'Just now', // Hardcoded for now, you can replace it with actual timestamp
        comment: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <CommentBox />
      {comments.map((comment, index) => (
        <CommentCard key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
