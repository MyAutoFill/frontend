import React, { useContext } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Button, ConfigProvider, Modal, Table, message } from 'antd';
import { CloudSyncOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { request } from 'umi';

export default function SyncCompanyInfoButton(props) {
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
  
  return <>
    <span style={{fontSize: '20px'}}>点击按钮进行企业基本信息同步</span>
    <ConfigProvider
      button={{
        className: linearGradientButton,
      }}
    >
      <br />
      <Button 
        type="primary" 
        icon={<CloudSyncOutlined />} 
        autoInsertSpace 
        size='large' 
        style={{
          fontSize: '20px',
          marginTop: '20px',
          marginLeft: '10px'
        }}
        onClick={() => {
          const exist = localStorage.getItem("currentUser");
          const real_id = JSON.parse(exist).uuid;
          const uuid = JSON.parse(exist).cornumber;
          if (real_id == undefined || real_id == null || real_id === '') {
            history.push('/auto_fill/user/login')
          }
          if (uuid == undefined || uuid == null || uuid === '') {
            history.push('/auto_fill/user/login')
          }
          request('/api/sync_data', {
            method: 'POST',
            data: {
              real_id: real_id,
              uuid: uuid
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
                    title: '新值（来自接口）',
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
                const exist = localStorage.getItem("currentUser");
                const uuid = JSON.parse(exist).uuid;
                if (uuid == undefined || uuid == null || uuid === '') {
                  history.push('/auto_fill/user/login')
                }
                request('/api/save_from_excel', {
                  method: 'POST',
                  data: {
                    data: data,
                    uuid: uuid
                  }
                })
                .then(function (res) {
                  message.success(`上传成功`, 3, () => {window.location.reload()});
                })
              }
            });
          })
        }}
      >企业基本信息数据同步</Button>
    </ConfigProvider>
  </>
}