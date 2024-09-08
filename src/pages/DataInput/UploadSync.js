import { Upload, Button, Descriptions, message, ConfigProvider, Space, Table, Modal } from 'antd';
import { UploadOutlined, FileSyncOutlined, ForwardOutlined } from '@ant-design/icons';
import { request } from 'umi';
import React, { useContext } from 'react';
import { css } from '@emotion/css';

export default function UploadSyncPage() {

  const [messageApi, contextHolder] = message.useMessage();

  const clickFunction = (url, name) => {
    request('', {
      method: 'POST',
      data: {
        url: url,
        select_name: name
      }
    })
  }

  const SaveSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本次修改保存成功',
    });
  }

  const SaveError = () => {
    messageApi.open({
      type: 'error',
      content: '保存失败',
    });
  }

  const EditSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本次修改取消成功',
    });
  }

  const EditError = () => {
    messageApi.open({
      type: 'error',
      content: '本次修改取消失败',
    });
  }

  const CheckSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '表单检查完成',
    });
  }
  
  const CheckError = () => {
    messageApi.open({
      type: 'error',
      content: '表单检查失败',
    });
  };

  const zcfzProps = {
    name: 'file',
    action: '/excelAnalysis/excel/convert',
    data: {
      type: 'zcfz'
    },
    onChange(info) {
      if (info.file.status === 'done') {
        request('/api/parse_table', {
          method: 'POST',
          data: {
            parse_data: info.file.response.data,
            type: 'zcfz'
          }
        })
        .then(function (res) {
          var data = res;
          const modal = Modal.confirm({
            width: 1000,
            title: '确认填充项',
            destroyOnClose: true,
            content: <>
            <Table
              bordered
              dataSource={res}
              columns={[
                {
                  title: '名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '现有值',
                  dataIndex: 'old_value',
                  key: 'old_value',
                },
                {
                  title: '新值（来自文件）',
                  dataIndex: 'new_value',
                  key: 'new_value',
                },
              ]}
            />
            </>,
            okText: '确认',
            cancelText: '取消',
            onCancel:()=>{},
            onOk:(res)=>{
              request('/api/save_from_excel', {
                method: 'POST',
                data: {
                  date: '2024-09',
                  data: data
                }
              })
              .then(function (res) {
                message.success(`资产负债表 上传成功`);
                modal.destroy()
              })
            }
          });
        })
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  const lrProps = {
    name: 'file',
    action: '/excelAnalysis/excel/convert',
    data: {
      type: 'lr'
    },
    onChange(info) {
      if (info.file.status === 'done') {
        request('/api/parse_table', {
          method: 'POST',
          data: {
            parse_data: info.file.response.data,
            type: 'lr'
          }
        })
        .then(function (res) {
          var data = res;
          const modal = Modal.confirm({
            width: 1000,
            title: '确认填充项',
            destroyOnClose: true,
            content: <>
            <Table
              bordered
              dataSource={res}
              columns={[
                {
                  title: '名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '现有值',
                  dataIndex: 'old_value',
                  key: 'old_value',
                },
                {
                  title: '新值（来自文件）',
                  dataIndex: 'new_value',
                  key: 'new_value',
                },
              ]}
            />
            </>,
            okText: '确认',
            cancelText: '取消',
            onCancel:()=>{},
            onOk:(res)=>{
              request('/api/save_from_excel', {
                method: 'POST',
                data: {
                  date: '2024-09',
                  data: data
                }
              })
              .then(function (res) {
                message.success(`利润表 上传成功`);
                modal.destroy()
              })
            }
          });
        })
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  const xjllProps = {
    name: 'file',
    action: '/excelAnalysis/excel/convert',
    data: {
      type: 'xjll'
    },
    onChange(info) {
      if (info.file.status === 'done') {
        request('/api/parse_table', {
          method: 'POST',
          data: {
            parse_data: info.file.response.data,
            type: 'xjll'
          }
        })
        .then(function (res) {
          var data = res;
          const modal = Modal.confirm({
            width: 1000,
            title: '确认填充项',
            destroyOnClose: true,
            content: <>
            <Table
              bordered
              dataSource={res}
              columns={[
                {
                  title: '名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '现有值',
                  dataIndex: 'old_value',
                  key: 'old_value',
                },
                {
                  title: '新值（来自文件）',
                  dataIndex: 'new_value',
                  key: 'new_value',
                },
              ]}
            />
            </>,
            okText: '确认',
            cancelText: '取消',
            onCancel:()=>{},
            onOk:(res)=>{
              request('/api/save_from_excel', {
                method: 'POST',
                data: {
                  date: '2024-09',
                  data: data
                }
              })
              .then(function (res) {
                message.success(`现金流量表 上传成功`);
                modal.destroy()
              })
            }
          });
        })
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;

  const items = [
    {
      key: '1',
      label: '利润表',
      children: 
        <Upload {...lrProps} >
          <Button size='large' type='primary' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击利润表excel文件</Button>
        </Upload>,
      span: 3
    },
    {
      key: '2',
      label: '现金流量表',
      children: 
        <Upload {...xjllProps} >
          <Button size='large' type='primary' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击现金流量表excel文件</Button>
        </Upload>,
      span: 3
    },
    {
      key: '3',
      label: '资产负债表',
      children: 
        <Upload {...zcfzProps} >
          <Button size='large' type='primary' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击资产负债表excel文件</Button>
        </Upload>,
      span: 3
    },
  ]

  return (
    <>
      {contextHolder}
      <div style={{height: 1200, overflow: 'scroll'}}>
        <br></br>
        <span style={{fontSize:'24px'}}><b>点击下列对应按钮上传对应文件，上传完成后点击开始同步按钮开始数据同步</b></span>
        <div style={{ textAlign: 'center', margin: 'auto', marginTop: '50px', width: '1200px' }}>
          <Descriptions title="数据文件上传" bordered items={items} />
          <ConfigProvider
            button={{
              className: linearGradientButton,
            }}
          >
            <Space style={{marginTop: '50px'}}>
              <Button onClick={() => {window.location.href = '/input?tab=2'}} size="large" type='primary' style={{marginLeft: '50px'}} icon={<ForwardOutlined />}>下一步</Button>
            </Space>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}