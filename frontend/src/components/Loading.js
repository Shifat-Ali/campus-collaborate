// import React from 'react';

// const LoadingScreen = () => {
//   return (
//     <>
//       {(
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             color: 'white',
//             fontSize: '24px'
//           }}
//         >
//           <div
//             style={{
//               width: '50px',
//               height: '50px',
//               border: '5px solid #fff',
//               borderTop: '5px solid transparent',
//               borderRadius: '50%',
//               animation: 'spin 1s linear infinite',
//             }}
//           ></div>
//           <span style={{ marginLeft: '10px' }}>Loading...</span>
//         </div>
//       )}
//       {/* Define the spin animation */}
//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default LoadingScreen;


const Loading = () => {
  return (
    <div>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
