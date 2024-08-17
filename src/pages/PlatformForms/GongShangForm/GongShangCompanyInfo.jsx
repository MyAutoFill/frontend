import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function GongShangCompanyInfo() {

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
      label: '报告年度',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择报告年度' picker="year" style={{ width: '250px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      key: '2',
      label: '企业名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '3',
      label: '统一社会信用代码/注册号',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '4',
      label: '企业通信地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '5',
      label: '邮政编码',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '6',
      label: '企业联系电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '7',
      label: '电子邮箱',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '8',
      label: '企业经营状态',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '9',
      label: '企业控股',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '10',
      label: '企业主营业务活动',
      children: <Input disabled={disableVar} size='large' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '11',
      label: '特种设备信息',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='办理使用登记特种设备总台数' addonAfter='台' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='检验有效期内特种设备总台数' addonAfter='台' style={{ width: '500px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 3
    },
    {
      key: '12',
      label: '股东发起人出资情况表',
      children: 
        <>
          <span>币种应与注册资本币种一致</span>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='股东' addonAfter='万元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='认缴出资额' addonAfter='万元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <br></br>
          <span size='large'>认缴出资时间</span>
          <br></br>
          <DatePicker disabled={disableVar} size='large' placeholder='请选择认缴出资时间' picker="year" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='认缴出资方式' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <br></br>
          <span size='large'>实缴出资时间</span>
          <br></br>
          <DatePicker disabled={disableVar} size='large' placeholder='请选择实缴出资时间' picker="year" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='实缴出资额' addonAfter='万元' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='实缴出资方式' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 1.5
    },
    {
      key: '13',
      label: '有限责任公司本年度是否有股权转让',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='股东' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='变更前股权比例' addonAfter='%' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='变更后股权比例' addonAfter='%' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <br></br>
          <span size='large'>股权变更日期</span>
          <br></br>
          <DatePicker disabled={disableVar} size='large' placeholder='请选择股权变更日期' picker="year" style={{ width: '300px', marginLeft: '10px', marginTop: '10px'}}/>
        </>,
      span: 1.5
    },
    {
      key: '14',
      label: '有限责任公司本年度是否有股权转让',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='投资设立企业或购买股权企业名称' style={{ width: '800px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='统一社会信用代码/注册号' style={{ width: '800px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 3
    },
    {
      key: '15',
      label: '是否有网站或网店',
      children: 
        <>
          <Input disabled={disableVar} size='large' addonBefore='类型' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <Input disabled={disableVar} size='large' addonBefore='名称' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input>
          <br></br>
          <Input disabled={disableVar} size='large' addonBefore='网站' style={{ width: '810px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </>,
      span: 3
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="企业基本信息" bordered items={items} />
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