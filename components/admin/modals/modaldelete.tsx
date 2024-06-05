import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleClose: () => void;
  handleSubmit: () => void;
}

export default function BasicModal({ open, setOpen, handleClose, handleSubmit }: BasicModalProps) {
  const router = useRouter();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Estás seguro de eliminar este producto?
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Esta acción no se puede deshacer.
          </Typography>
          <div className='flex justify-start mt-6'>
            <button
              type='button'
              onClick={() => handleSubmit()}
              className='px-8 py-2.5 mx-5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Cargar
            </button>
            <button
              onClick={() => setOpen(false)}
              className='px-8 py-2.5 mx-5 leading-5 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
