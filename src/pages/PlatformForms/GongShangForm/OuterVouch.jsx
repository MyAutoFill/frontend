import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'


export default function OuterVouch() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData()
      .then(function (res) {
        reqRatioConfig('OuterVouch')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              let a = BigNumber(new_res[key])
              let b = BigNumber(config[key])
              new_res[key] = a.times(b).toString();
            }
          });
          form.setFieldsValue(new_res);
        })
      })
  }

  const [form] = Form.useForm();

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

  const items = [
    {
      key: '1',
      label: '债权人',
      children: <Form.Item name="GongShang_OuterVouch_1"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: '债务人',
      children: <Form.Item name="GongShang_OuterVouch_2"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: '主债权种类',
      children: <Form.Item name="GongShang_OuterVouch_3"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '主债权种类额',
      children: <Form.Item name="GongShang_OuterVouch_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '履行债务的期限',
      children: <Form.Item name="GongShang_OuterVouch_5"><DatePicker disabled={disableVar} size='large' placeholder='请选择履行债务的期限' style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '保证的周期',
      children: <Form.Item name="GongShang_OuterVouch_6"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '保证的方式',
      children: <Form.Item name="GongShang_OuterVouch_7"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: '公示状态',
      children: <Form.Item name="GongShang_OuterVouch_8"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=OuterVouch', {
      method: 'GET',
    })
    .then(function (config) {
      const new_res = JSON.parse(JSON.stringify(values));
      Object.keys(config).forEach(key => {
        if (key in new_res) {
          let a = BigNumber(new_res[key])
          let b = BigNumber(config[key])
          new_res[key] = a.div(b).toString();
        }
      });
      request('/api/save', {
        method: 'POST',
        data: {
          date: '2024-09',
          data: new_res
        }
      })
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <Descriptions title="对外提供保证担保信息" bordered items={items} />
          <FloatButton.Group
          open={defaultOpen}
          trigger="click"
          style={{
            insetInlineEnd: 120,
          }}
          shape='square'
          description="操作按钮"
          tooltip={<div>点击展示操作按钮</div>}
          type='primary'
          onOpenChange={(open) => setDefaultOpen(open)}
          icon={<ExpandAltOutlined />}
        >
          <Button 
            type="primary" 
            icon={<SaveFilled />} 
            autoInsertSpace 
            size='large' 
            style={{
              position: 'absolute',
              right: 0,
              bottom: 210
              }}
              htmlType='submit'
            onClick={
              SaveSuccess
            }
          >保存数据</Button>
          <Button 
            type="primary" 
            icon={<StopFilled />} 
            autoInsertSpace 
            size='large' 
            style={{
              position: 'absolute',
              right: 0,
              bottom: 140,
            }}
            onClick={
              EditSuccess
            }
          >取消编辑</Button>
          <Button 
            type="primary" 
            icon={<CheckSquareFilled />} 
            autoInsertSpace 
            size='large'
            style={{
              position: 'absolute',
              right: 0, 
              bottom: 70,
            }}
            onClick={
              CheckSuccess
            }
          >检查表单</Button>
          <Button 
            type="primary" 
            icon={<FastForwardOutlined />} 
            autoInsertSpace 
            size='large'
            style={{
              position: 'absolute',
              right: 0, 
              bottom: 0,
            }}
          >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}