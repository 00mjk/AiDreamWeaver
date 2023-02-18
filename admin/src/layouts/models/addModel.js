/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import { Container } from 'reactstrap';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MDButton from 'components/MDButton';
import CustomSnackbar from "components/MDSnackbar/customSnackbar"

import { useDispatch, useSelector } from 'react-redux'
import { addModel, updateModel } from '../../actions/modelAction'

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const AddModel = ({ setOpen, open, currentId, setCurrentId }) => {
  const snapbarRef = useRef();
  const dispatch = useDispatch()

  const [modelData, setModelData] = useState({ name: '', value: '' })
  console.log(modelData)

  const model = useSelector((state) => currentId ? state.models.models.find((c) => c._id === currentId) : null)

  useEffect(() => {
    if (model) {
      setModelData(model)
    }
  }, [model])

  const handleSubmitModel = (e) => {
    e.preventDefault()
    const { name, value } = modelData;

    if (name === '') {
      snapbarRef.current.showSnackbar({
        show: true,
        type: 'warning',
        message: "Type model name..."
      });
      return;
    }

    if (value === '') {
      snapbarRef.current.showSnackbar({
        show: true,
        type: 'warning',
        message: "Type value name..."
      });
      return;
    }

    if (currentId) {
      const updateData = {
        _id: modelData._id,
        name: name,
        value: value
      }
      dispatch(updateModel(updateData, snapbarRef))
    } else {
      console.log(modelData)
      dispatch(addModel(modelData, snapbarRef))
    }

    clear()
    handleClose()
  }

  const clear = () => {
    setCurrentId(null)
    setModelData({ name: '', value: '' })
  }

  const handleClose = () => {
    clear()
    setOpen(false)
  };

  const inputStyle = {
    marginBottom: "14px",
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth="sm">
      <Container style={{ padding: '16px' }}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {currentId ? 'Edit Model' : "Add New Model"}
        </BootstrapDialogTitle>

        <MuiDialogContent>
          <MDBox mt={3}>
              <MDInput
                label="Type model name..."
                style={inputStyle}
                value={modelData.name}
                onChange={(e) => setModelData({ ...modelData, name: e.target.value })}
                fullWidth />
              <MDInput
                label="Type value content..."
                style={inputStyle}
                value={modelData.value}
                onChange={(e) => setModelData({ ...modelData, value: e.target.value })}
                fullWidth
                multiline rows={5} />
          </MDBox>
        </MuiDialogContent>
        <MuiDialogActions>
              <MDButton variant="contained" color="success" size="small" onClick={handleSubmitModel}>
                <SaveIcon>add</SaveIcon>
                &nbsp;SAVE
              </MDButton>
            </MuiDialogActions>
      </Container>
      <CustomSnackbar ref={snapbarRef} />
    </Dialog>
  );
}

export default AddModel