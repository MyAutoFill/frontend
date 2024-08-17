import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function PaymentSignUpInfo() {

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
      label: '信息录入',
      children: '-',
      span: 3
    },
    {
      key: '2',
      label: '单位名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '3',
      label: '单位账号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '4',
      label: '缴款类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '5',
      label: '缴至年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择缴至年月' picker="month" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '6',
      label: '未分配余额',
      children: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '7',
      label: '缴费方式',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '8',
      label: '账户机构',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '9',
      label: '开始年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择开始年月' picker="month" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '10',
      label: '终止年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择终止年月' picker="month" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '11',
      label: '汇缴人数',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '12',
      label: '月缴存额',
      children: <Input disabled={disableVar}  addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '13',
      label: '缴存月数',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '14',
      label: '划入银行',
      children: <Input disabled={disableVar} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="汇缴登记信息" bordered items={items} />
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