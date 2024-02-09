import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import ProfilePage from './FeedPage';

export default function Carousel() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <div style={{ background: '#ECECEC', borderRadius: '12px',paddingLeft:'10px', maxWidth: '520px', margin: 'auto' }}>
        <MDBTabs pills justify className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick('tab1')}
              active={justifyActive === 'tab1'}
              style={{ backgroundColor: justifyActive === 'tab1' ? 'white' : '#ECECEC',borderRadius: justifyActive === 'tab1' ? '8px':'0px'}}
            >
              Posts
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick('tab2')}
              active={justifyActive === 'tab2'}
              style={{ backgroundColor: justifyActive === 'tab2' ? 'white' : '#ECECEC' ,borderRadius: justifyActive === 'tab2' ? '8px':'0px'}}
            >
              Projects
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick('tab3')}
              active={justifyActive === 'tab3'}
              style={{ backgroundColor: justifyActive === 'tab3' ? 'white' : '#ECECEC' ,borderRadius: justifyActive === 'tab3' ? '8px':'0px'}}
            >
              Requests
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>
      <MDBTabsContent>
        <MDBTabsPane open={justifyActive === 'tab1'}><ProfilePage/></MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}