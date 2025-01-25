import { Stack } from "@/components";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog as MuiDialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { Breakpoint, styled } from "@mui/material/styles";
import { ReactNode } from "react";

const BootstrapDialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export function Dialog(props: {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  width?: string;
  maxWidth?: false | Breakpoint | undefined;
}) {
  return (
    <BootstrapDialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="customized-dialog-title"
      maxWidth={props.maxWidth ? props.maxWidth : false}
      sx={{
        "& .MuiDialog-paper": {
          width: props.width ? props.width : "auto",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack>{props.title}</Stack>

          <IconButton
            aria-label="close"
            onClick={props.onClose}
            sx={(theme) => ({
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent dividers>{props.content}</DialogContent>
      <DialogActions>{props.footer}</DialogActions>
    </BootstrapDialog>
  );
}
