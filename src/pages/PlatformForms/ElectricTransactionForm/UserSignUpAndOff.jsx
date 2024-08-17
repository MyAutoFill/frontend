import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Upload, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function UserSignUpandOff() {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(true)

  const props = {
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
      key: '2',
      label: '参与交易开始时间',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择交易开始时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '3',
      label: '参与交易结束时间',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择交易结束时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '4',
      label: '电力批发用户参与山东省电力现货市场承诺书（模板）',
      children: 
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
        </Upload>,
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
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
        </Upload>,
      span: 3
    },
    {
      key: '7',
      label: '注销申请表（模板）',
      children: 
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
        </Upload>,
      span: 3
    },
    { 
      key: '8',
      label: '其他',
      children: 
        <Upload {...props} >
          <Button disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传文件</Button>
        </Upload>,
      span: 1
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="用户申请/注销信息" bordered items={items} />
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '330px', marginTop: '30px' }}
          onClick={() => setDisableVar(false)}
        >修改</Button>
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}
          onClick={() => setDisableVar(true)}
        >保存</Button>
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}
          onClick={() => setDisableVar(true)}
        >取消</Button>
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}>检查</Button>
      </div>
    </>
  );
}