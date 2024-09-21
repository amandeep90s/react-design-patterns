import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000070;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Show Modal</button>
      {show && (
        <ModalBackground onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClose}>Close</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
