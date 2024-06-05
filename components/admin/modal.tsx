import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Loading from "@/components/Loading";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleClose: () => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function BasicModal({
  open,
  setOpen,
  handleClose,
  handleSubmit,
  loading,
}: BasicModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Estás seguro que deseas eliminar este producto?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Esta acción no se puede deshacer!
          </Typography>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <div>
                <button
                  type="button"
                  className="px-8 mx-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  onClick={() => handleSubmit()}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="px-8 mx-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
