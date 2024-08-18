import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function ProjectBasicInfo() {

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
      label: '项目所属行政区划',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '2',
      label: '投资项目行业分类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '3',
      label: '行业核准项目',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '4',
      label: '项目类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '5',
      label: '建设性质',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '6',
      label: '项目名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '7',
      label: '项目负责人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '8',
      label: '负责人联系电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '9',
      label: '拟开工时间',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择拟开工时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '10',
      label: '拟建成时间',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择拟建成时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '11',
      label: '总投资',
      children: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '12',
      label: '建设地点',
      children: <Input disabled={disableVar} size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '13',
      label: '建设地点详情',
      children: <Input disabled={disableVar} size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '14',
      label: '建设地点详细地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '15',
      label: '国标行业',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '16',
      label: '产业结构调整知道目录',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '17',
      label: '所属行业',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '18',
      label: '申报日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择申报日期' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '19',
      label: '建设规模及内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '20',
      label: '项目阶段',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '21',
      label: '项目属性',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '22',
      label: '拟向民间资本推介项目',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '23',
      label: '项目性质',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="项目基本信息" bordered items={items} />
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