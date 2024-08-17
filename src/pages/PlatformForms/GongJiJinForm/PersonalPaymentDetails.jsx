import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function PersonalPaymentDetails() {

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
      label: '行号',
      children: <Input disabled={disableVar} size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '2',
      label: '个人账号',
      children: <Input disabled={disableVar} size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '3',
      label: '姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '4',
      label: '开始年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择开始年月' picker="month" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '5',
      label: '截止年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择截止年月' picker="month" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '6',
      label: '缴存基数',
      children: <Input disabled={disableVar} size='large' addonAfter='元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '7',
      label: '单位应缴',
      children: <Input disabled={disableVar} size='large' addonAfter='元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '8',
      label: '个人应缴',
      children: <Input disabled={disableVar} size='large' addonAfter='元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '9',
      label: '缴交额',
      children: <Input disabled={disableVar} size='large' addonAfter='元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="个人缴存明细信息" bordered items={items} />
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