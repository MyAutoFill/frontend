import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Button, FloatButton, message, DatePicker, Form, Upload } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, transferDate, saveDateAsString } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

export default function UserSignUpandOff(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('UserSignUpandOff')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              if (new_res[key] !== '') {
                let a = BigNumber(new_res[key])
                let b = BigNumber(config[key])
                new_res[key] = a.times(b).toString();
              }
            }
          });
          var after = transferDate(new_res);
          form.resetFields();
          form.setFieldsValue(after);
        })
      })
  }

  const [form] = Form.useForm();

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

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
    form.validateFields()
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

  const uploadprops = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== '上传') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === '完成') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  const items = [
    {
      key: '1',
      label: '用户申请',
      children: '-',
      span: 3
    },
    {
      key: '4',
      label: '电力批发用户参与山东省电力现货市场承诺书（模板）',
      children: 
        <Form.Item name="Electric_SignUpAndOff_3">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
          </Upload>
        </Form.Item>,
      span: 3
    },
    {
      key: '5',
      label: '注销申请',
      children: '-',
      span: 3
    },
    {
      key: '6',
      label: '注销声明（模板）',
      children: 
        <Form.Item name="Electric_SignUpAndOff_4">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
          </Upload>
        </Form.Item>,
      span: 3
    },
    {
      key: '7',
      label: '注销申请表（模板）',
      children: 
        <Form.Item name="Electric_SignUpAndOff_5">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
          </Upload>
        </Form.Item>,
      span: 3
    },
    { 
      key: '8',
      label: '其他',
      children: 
        <Form.Item name="Electric_SignUpAndOff_6">
          <Upload {...uploadprops} >
            <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
          </Upload>
        </Form.Item>,
      span: 1
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=UserSignUpandOff', {
      method: 'GET',
    })
    .then(function (config) {
      var after = saveDateAsString(values);
      const new_res = JSON.parse(JSON.stringify(after));
      Object.keys(config).forEach(key => {
        if (key in new_res) {
          if (new_res[key] !== '') {
            let a = BigNumber(new_res[key])
            let b = BigNumber(config[key])
            new_res[key] = a.div(b).toString();
          }
        }
      });
      const exist = localStorage.getItem("currentUser");
      const uuid = JSON.parse(exist).uuid;
      if (uuid == undefined || uuid == null || uuid === '') {
        history.push('/auto_fill/user/login')
      }
      request('/api/save', {
        method: 'POST',
        data: {
          date: props.date,
          data: new_res,
          uuid: uuid
        }
      })
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <Descriptions style={{width: '1300px'}} title="用户申请/注销信息" bordered items={items} />
          <FloatButton.Group
            open={defaultOpen}
            trigger="click"
            style={{
              insetInlineEnd: 0,
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
              onClick={() => {window.location.href = '/auto_fill/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}