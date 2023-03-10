/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TableForm from '../forms/TableForm';

export default function AddTableModal({
  table, restaurant, onUpdate, setEditMode,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IconButton aria-label="add table" onClick={handleShow}>
        {table.id ? <EditIcon /> : <Button variant="contained" className="layout-btns">Add Table</Button>}
      </IconButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title><h4 className="text-black mt-5">{table.id ? 'Update' : 'Add'} Table</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body className="tracklist-modal">
          <TableForm table={table} restaurant={restaurant} onUpdate={onUpdate} handleClose={handleClose} setEditMode={setEditMode} />
        </Modal.Body>
      </Modal>
    </>
  );
}

AddTableModal.propTypes = {
  table: PropTypes.shape({
    id: PropTypes.number,
  }),
};

AddTableModal.defaultProps = {
  table: {},
};
