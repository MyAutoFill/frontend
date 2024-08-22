import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Upload } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';


export default function JoinedSecurityInfo() {

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
      label: '从业人数',
      children: <Input disabled={disableVar} size='large' addonAfter='人' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '2',
      label: '其中：女性从业人数',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '3',
      label: '参保各险种人数',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='城镇职工基本养老保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='失业保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='职工基本医疗保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='工伤保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='生育保险' addonAfter='人' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1.5
    },
    {
      key: '4',
      label: '单位缴费基数',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='单位参加城镇职工基本养老保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加失业保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加职工基本医疗保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加生育保险缴费基数' addonAfter='万元' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1.5
    },
    {
      key: '5',
      label: '本期实际缴费金额',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='参加城镇职工基本养老保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='参加失业保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='参加职工基本医疗保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='参加工伤保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='参加生育保险本期实际缴费金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 3
    },
    {
      key: '6',
      label: '姓名',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='单位参加城镇职工基本养老保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加失业保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加职工基本医疗保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加工伤保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='单位参加生育保险累计欠缴金额' addonAfter='万元' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 3 
    }
  ];
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Descriptions title="参保信息" bordered items={items} />
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
      </div>
    </>
  );
}