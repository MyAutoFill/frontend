import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function JoinedSecurityInfo() {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(true)

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
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="参保信息" bordered items={items} />
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