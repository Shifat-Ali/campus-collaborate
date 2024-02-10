import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sorry! The page you are looking for does not exist 😞</h1>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  heading: {
    color: 'red',
    fontSize: '24px'
  }
};

export default PageNotFound;
