import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import type { CommonModalProps } from "../types/types";
import { UI_TEXTS } from "./../consts/consts";
import Button from "./Button";

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default function CommonModal({
  isOpen,
  handleCloseModal,
  modalHeader,
  primaryButtonText,
  secondaryButtonText,
  children,
  footerClassName,
  handlePrimaryButton = () => {},
  handleSecondaryButton = () => {},
}: CommonModalProps) {
  const isRenderFooter = primaryButtonText && secondaryButtonText;
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalBoxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalHeader}
          </Typography>
          {children}
          {isRenderFooter ? (
            <Box className={footerClassName}>
              {primaryButtonText && (
                <Button
                  className="saveButton"
                  text={UI_TEXTS.button.save}
                  onClick={handlePrimaryButton}
                />
              )}
              {secondaryButtonText && (
                <Button
                  className="cancelButton"
                  text={UI_TEXTS.button.cancel}
                  onClick={handleSecondaryButton}
                />
              )}
            </Box>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
