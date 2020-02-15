import { useState, useEffect } from "react";
import Modal from "react-modal";

import { FormRelayLaunch } from "@forms";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

/* --- Component --- */
const EthDenverModal = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = props => setModalIsOpen(true);
  const closeModal = props => setModalIsOpen(false);
  useEffect(() => {
    Modal.setAppElement("#root");
  });
  return (
    <>
      <Atom.Span pointer onClick={openModal}>
        {props.children}
      </Atom.Span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Atom.Box sx={{ maxWidth: 500 }}>
          <Atom.Box sx={{ flex: 5, p: 3 }}>
            <Atom.Heading
              as="h2"
              giga
              sx={{ color: "pinkish", fontSize: [3, 3, 5] }}
            >
              Relay Contract
            </Atom.Heading>
            <Atom.Heading
              xxl
              normal
              sx={{
                color: "blue",
                fontSize: [2, 2, 3]
              }}
            >
              Deploy Your First Relay Smart Contract
            </Atom.Heading>
            <FormRelayLaunch />
            <Atom.Paragraph>
              Quisque tincidunt molestie enim vel ullamcorper. Mauris nec erat
              iaculis mi molestie pellentesque. In eu pretium quam. Fusce
              pellentesque fringilla volutpat. Proin a hendrerit libero, id
              aliquam nisl. Donec porttitor ligula lacus, eget blandit elit
              pellentesque id. Suspendisse tincidunt nec leo vitae dictum.
            </Atom.Paragraph>
          </Atom.Box>
        </Atom.Box>
      </Modal>
    </>
  );
};
export default EthDenverModal;
