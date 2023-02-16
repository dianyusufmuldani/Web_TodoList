import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconDelete from "../assets/modal-delete-icon.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 490,
  bgcolor: "background.paper",
  p: 4,
  height: 355,
  textAlign: "center",
  borderWidth: 0,
};

export default function AlertConfirm({ open, onClose, onDelete }) {
  return (
    <div data-cy="alertConfirm">
      <Modal
        open={open}
        // onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={IconDelete}
            z
            width={"63px"}
            height={"56px"}
            alt={"IconDelete"}
          />
          <br />
          <br />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Apakah anda yakin menghapus activity
            <br />
            <strong>“Meeting dengan Client”?</strong>
          </Typography>
          <br />
          <br />
          <div className="containerButtonDelete">
            <button className="buttonCancel" onClick={onClose}>
              Batal
            </button>
            <button className="buttonSecondary" onClick={onDelete}>
              Hapus
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
