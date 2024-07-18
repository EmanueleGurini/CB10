import { Link } from "react-router-dom";
import Modal from "./Modal";

import { useState } from "react";

function ItemUser({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {" "}
      <p onClick={() => setIsModalOpen(true)}>{user.name}</p>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Link className="font-bold" to={`user/${user.id}`}>
          {user.name}
        </Link>
      </Modal>
    </>
  );
}

export default ItemUser;
