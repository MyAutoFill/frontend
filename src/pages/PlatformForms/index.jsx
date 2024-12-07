import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
 
const savedDateConfirmModal = () => {
  const [showModal, setShowModal] = useState(false);
 
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      setShowModal(true);
      // 设置返回的字符串，这样浏览器就会显示确认对话框
      (event.returnValue = '您有未保存的更改！')
    };
 
    window.addEventListener('beforeunload', handleBeforeUnload);
 
    return () => {
      // 组件卸载时移除监听器
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
 
  return (
    <>
      <Button onClick={() => window.location.href = "/"}>离开页面</Button>
      <Modal
        title="确认离开"
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        您有未保存的更改，确定要离开此页面吗？
      </Modal>
    </>
  );
};
 
export default savedDateConfirmModal;