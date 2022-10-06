import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const AppWorks = () => {
  const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How It Works</h2>
          <p>
            Obcaecati consequatur libero repudiandae, aperiam itaque laborum!
          </p>
        </div>
        <div className="contentHolder">
          <Button type="primary" onClick={showModal}>
            <PlayCircleOutlined />
          </Button>
          <Modal
            title="Dunya Gul Bana"
            open={open}
            // confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
          >
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/LU5FrAKJmYQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AppWorks;
