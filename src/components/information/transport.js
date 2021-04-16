import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Transp = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-2">
          <Button color="primary" onClick={toggle}>
            Разписания на влаковете
          </Button>
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={className}
            data-dismiss="modal"
            data-toggle="modal"
          >
            <ModalHeader toggle={toggle}>
              Разписания на влаковете от и за гара Копривщица - в сила от
              16.01.2021г.
            </ModalHeader>
            <ModalBody>
              <img src="https://i.ibb.co/17nCBBM/Capture.jpg" width="100%" />
              <br />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Transp;
