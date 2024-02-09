import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', padding: '10px' ,borderRadius:'16px',marginRight:'20px'}}>
      <div style={{ marginBottom: '10px', color: '#333', fontSize: '12px' ,textAlign:'left'}}>Search posts, people, projects, and more...</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        <div style={{ background: 'blue', borderRadius: '5px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
          <SearchIcon style={{ color: '#fff' }} />
        </div>
        <input
          type="text"
          placeholder="Start Typing..."
          style={{
            paddingLeft: '10px',
            borderRadius: '5px',
            border: '1px solid white',
            height: '40px',
            width: '200px', // Adjust the width as needed
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
