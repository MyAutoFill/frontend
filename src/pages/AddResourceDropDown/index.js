import { useEffect, useState } from 'react';
import { Modal, Button, Dropdown, Empty, Upload, Select, Input, Table, Space, Typography, Col, Row, Badge, Spin } from 'antd';
import { InboxOutlined, PlusOutlined, DeleteOutlined, EditOutlined, RedoOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
const { Dragger } = Upload;
const { TextArea } = Input;
const { Text, Title } = Typography;
const { confirm } = Modal;
import { request } from 'umi';


function AddModal(props) {

  const knowledgeTypeOptions = [
    {
      value: '商品知识',
      label: '商品知识',
    },
    {
      value: '售后服务',
      label: '售后服务',
    },
    {
      value: '活动类型',
      label: '活动类型',
    }
  ];
  const updateFreqOptions = [
    {
      value: '按小时更新',
      label: '按小时更新',
    },
    {
      value: '按天更新',
      label: '按天更新',
    },
    {
      value: '按月更新',
      label: '按月更新',
    },
    {
      value: '按年更新',
      label: '按年更新',
    }
  ];
  const [fileList, setFileList] = useState([]);
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadProps = {
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
    onChange: handleChange,
    listType: "text",
    maxCount: 1
  };

  const handleInputValueChange = (value) => {
    props.updateModalData({
      'inputValue': value
    });
  };

  const handleKnowledgeTypeChange = (value) => {
    props.updateModalData({
      'knowledgeType': value
    });
  };

  const handleUpdateFreqChange = (value) => {
    props.updateModalData({
      'updateFreq': value
    });
  };

  const modalSubmit = () => {
    if (props.modalData['uploadType'] === 'upload') {
      const formData = new FormData();
      formData.append('file', fileList[0].originFileObj);
      formData.append('category', 'goods');
      fetch('/online/aisales/api/v1/document/createfromfile', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: localStorage.getItem('token'),
        }
      })
        .then((res) => {
          props.getNewResource();
        })
        .catch(() => {
          console.log('test')
        })
        .finally(() => {
        });
    } else {
      props.getNewResource();
    }
    props.clearModalData();
  }

  return (
    <>
      <Modal
        open={props.modalData['modalVisible']}
        destroyOnClose={true}
        onOk={() => { modalSubmit() }}
        onCancel={props.clearModalData}
        title={props.modalData['modalTitle']}
      >
        {
          (props.modalData['uploadType'] === 'text') && (
            <>
              <div style={{ marginTop: '20px' }}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>文本内容</Text>
                    <TextArea
                      rows={4}
                      style={{ width: '100%', }}
                      placeholder="请输入内容"
                      value={props.modalData['inputValue']}
                      onChange={(e) => { handleInputValueChange(e.target.value) }} />
                  </Space>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>业务类型</Text>
                    <Select
                      defaultValue={props.modalData['knowledgeType']}
                      style={{
                        width: '100%',
                      }}
                      onChange={handleKnowledgeTypeChange}
                      options={knowledgeTypeOptions}
                    />
                  </Space>
                </Space>
              </div>
            </>
          )
        }
        {
          (props.modalData['uploadType'] == 'upload') && (
            <>
              <div style={{ marginTop: '20px' }}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>文档</Text>
                    <Dragger {...uploadProps}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">把文件拖拽到此处上传</p>
                    </Dragger>
                    <span style={{ color: 'gray', marginTop: '50px' }}>
                      支持文件&lt;10mb的pdf，txt，docx
                    </span>
                  </Space>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>业务类型</Text>
                    <Select
                      defaultValue={props.modalData['knowledgeType']}
                      style={{
                        width: '100%',
                      }}
                      onChange={handleKnowledgeTypeChange}
                      options={knowledgeTypeOptions}
                    />
                  </Space>
                </Space>
              </div>
            </>
          )
        }
        {
          (props.modalData['uploadType'] == 'url') && (
            <>
              <div style={{ marginTop: '20px' }}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>输入URL</Text>
                    <Input placeholder="输入URL链接" onChange={(e) => { handleInputValueChange(e.target.value) }} />
                  </Space>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>更新频率</Text>
                    <Select
                      defaultValue={props.modalData['updateFreq']}
                      style={{
                        width: '100%',
                      }}
                      onChange={handleUpdateFreqChange}
                      options={updateFreqOptions}
                    />
                  </Space>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>业务类型</Text>
                    <Select
                      defaultValue={props.modalData['knowledgeType']}
                      style={{
                        width: '100%',
                      }}
                      onChange={handleKnowledgeTypeChange}
                      options={knowledgeTypeOptions}
                    />
                  </Space>
                </Space>
              </div>
            </>
          )
        }
        {
          (props.modalData['uploadType'] == 'map') && (
            <>
              <div style={{ marginTop: '20px' }}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>输入网站地图</Text>
                    <Input placeholder="输入地图链接" onChange={(e) => { handleInputValueChange(e.target.value) }} />
                  </Space>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>更新频率</Text>
                    <Select
                      defaultValue={props.modalData['updateFreq']}
                      style={{
                        width: '100%',
                      }}
                      onChange={handleUpdateFreqChange}
                      options={updateFreqOptions}
                    />
                  </Space>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>业务类型</Text>
                    <Select
                      defaultValue={props.modalData['knowledgeType']}
                      style={{
                        width: '100%',
                      }}
                      onChange={handleKnowledgeTypeChange}
                      options={knowledgeTypeOptions}
                    />
                  </Space>
                </Space>
              </div>
            </>
          )
        }
        {
          (props.modalData['uploadType'] == 'edit') && (
            <>
              <div style={{ marginTop: '20px' }}>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                  <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text strong>数据源名称</Text>
                    <Input defaultValue={props.modalData['dataName']} onChange={(e) => { handleInputValueChange(e.target.value) }} />
                  </Space>
                  {
                    (props.modalData['updateFreq'] != '') && (
                      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                        <Text strong>更新频率</Text>
                        <Select
                          defaultValue={props.modalData['updateFreq']}
                          style={{
                            width: '100%',
                          }}
                          onChange={handleUpdateFreqChange}
                          options={updateFreqOptions}
                        />
                      </Space>
                    )
                  }
                </Space>
              </div>
            </>
          )
        }
      </Modal>
    </>
  )
}

export default function AddResourceDropDown() {
  const defaultModalData = {
    'uploadType': '',
    'modalTitle': '',
    'modalVisible': false,
    'knowledgeType': '商品知识',
    'updateFreq': '按小时更新',
    'inputValue': '',
    'dataName': '商品链接',
    'key': ''
  };
  const [modalData, setModalData] = useState(defaultModalData);
  const items = [
    {
      key: 'text',
      label: '纯文本',
    },
    {
      key: 'upload',
      label: '上传文档',
    },
    {
      key: 'url',
      label: '链接URL',
    },
    {
      key: 'map',
      label: '网站地图',
    },
  ];

  const getNewResource = () => {
    // 如果在里面处理的话，只需要关闭弹窗即可
    updateModalData(defaultModalData)
  };

  const updateModalData = (data) => {
    let cur_data = JSON.parse(JSON.stringify(modalData));
    for (let key in data) {
      cur_data[key] = data[key];
    }
    setModalData(cur_data);
  }

  const clearModalData = () => {
    updateModalData(defaultModalData)
  }

  const onClick = (item) => {
    updateModalData({
      'uploadType': item.key,
      'modalTitle': item.domEvent.target.innerText,
      'modalVisible': true
    })
  };

  return (
    <>
      <Dropdown
        menu={{ items, onClick, }}
        trigger={['click']}
        placement="bottom"
      >
        <Button type='primary' icon={<PlusOutlined />}>添加数据源</Button>
      </Dropdown>
      <AddModal modalData={modalData} updateModalData={updateModalData} clearModalData={clearModalData} getNewResource={getNewResource} />
    </>
  );
}
