import React from 'react';
import ReactLoading from 'react-loading';
import { Box } from '@mui/material'; // Import Box component



const Loading = () => {
 
  return (
    <Box
      sx={{ // Use sx prop for inline styles
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px', // Adjust width as needed
        bgcolor: 'Background.paper' ,
        //border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',
      }}
    >
      <ReactLoading type='spokes' color='#000000' height={'10%'} width={'10%'} />
    </Box>
  );
};

export default Loading;

/* import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='relative w-screen h-screen bg-black bg-opacity-25'>
      <div className='absolute inset-y-0 left-0 z-10 w-full h-full'>
        <ReactLoading 
        type='spokes' 
        color='#000000' 
        height={'10%'} 
        width={'10%'} />
      </div>
    </div>
  );
};

export default Loading; */