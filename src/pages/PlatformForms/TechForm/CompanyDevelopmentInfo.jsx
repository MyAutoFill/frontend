import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function CompanyDevelopmentInfo() {

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
      label: '人员查询',
      children: 
        <Select
          showSearch
          style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
          size='large'
          placeholder="选择或搜索您想要查找的对象"
          optionFilterProp="label"
          onChange={peopleSearchOnChange}
          onSearch={peopleSearchOnSearch}
          options={[
            {
                value: '张三',
                label: '张三',
            },
            {
                value: '李四',
                label: '李四',
            },
            {
                value: '王五',
                label: '王五',
            },
          ]}
        />,
      span: 3
    },
    {
      key: '2',
      label: '证件类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '3',
      label: '证件号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '4',
      label: '个人基本信息',
      children: '-',
      span: 3
    },
    {
      key: '5',
      label: '证件号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '6',
      label: '姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '7',
      label: '性别',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '8',
      label: '民族',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '9',
      label: '户口性质',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '10',
      label: '联系电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '11',
      label: '户籍地地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '12',
      label: '常住地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '13',
      label: '就业登记信息',
      children: '-',
      span: 3
    },
    {
      key: '14',
      label: '业务办理区',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '15',
      label: '业务办理街道',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '16',
      label: '用工形式',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '17',
      label: '人员类别一类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '18',
      label: '人员类别二类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '19',
      label: '人员类别三类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '20',
      label: '工资待遇',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '21',
      label: '是否企业法人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '22',
      label: '工种',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '23',
      label: '劳动合同类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '24',
      label: '合同开始日期',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '25',
      label: '合同终止日期',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '26',
      label: '是否创业',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '27',
      label: '单位所在区县',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5,
    },
    {
      key: '28',
      label: '单位所在街道（镇）',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5,
    },
    {
      key: '29',
      label: '单位所在社区（村）',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '30',
      label: '备注',
      children: <Input disabled={disableVar} size='large' style={{ width: '870px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '31',
      label: '就失业登记证领取信息',
      children: '-',
      span: 3
    },
    {
      key: '32',
      label: '是否领取',
      children:
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
          <Radio value={1}>是</Radio>
          <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
        </Radio.Group>,
      span: 1
    },
    {
      key: '33',
      label: '证书领取方式',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '34',
      label: '收件人姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '35',
      label: '收件人电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '36',
      label: '收件人地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '870px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="研究开发项目状况信息" bordered items={items} />
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