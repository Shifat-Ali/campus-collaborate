import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CommentBox = ({ userIcon, onPostComment }) => {
  const [comment, setComment] = useState('');

  const handlePostComment = () => {
    if (comment.trim() !== '') {
      onPostComment(comment);
      setComment('');
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '10px', marginTop: '10px', alignItems: 'center' }}>
      <AccountCircleIcon style={{ marginRight: '10px', color: 'gray', height: '40px', width: '40px' }} />
      <TextField
        variant="outlined"
        label="Add a comment"
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ marginRight: '10px', flex: 1 }}
        InputProps={{ style: { height: '40px' } }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostComment}
        style={{ height: '40px', borderRadius: '0', marginRight: '10px' }}
      >
        <AddCircleOutlineIcon style={{ marginRight: '5px' }} />
        Post Comment
      </Button>
    </div>
  );
};

export default CommentBox;
