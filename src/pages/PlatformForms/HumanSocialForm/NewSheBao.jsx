import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function NewSheBao() {

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
      label: '姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '2',
      label: '性别',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '3',
      label: '民族',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '4',
      label: '证件类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '5',
      label: '证件号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '6',
      label: '手机号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '7',
      label: '通讯地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '830px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '8',
      label: '邮政编码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '9',
      label: '出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '10',
      label: '档案出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择档案出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '11',
      label: '文化程度',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '12',
      label: '所学专业',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '13',
      label: '健康状况',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '14',
      label: '婚姻状况',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '15',
      label: '户口性质',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '16',
      label: '户口所在地',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '17',
      label: '户口所在地省级',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '18',
      label: '户口所在地市级',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '19',
      label: '户口所在地县级',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '20',
      label: '户口所在地补充信息',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '21',
      label: '用工形式',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '22',
      label: '专业技术职务级别',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '23',
      label: '宗教信仰',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '24',
      label: '国家职业资格等级',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '25',
      label: '个人身份',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '26',
      label: '行政职务',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '27',
      label: '联系人姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '28',
      label: '联系人电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      label: '新增人员参保信息',
      children: '-',
      span: 3,
    },
    {
      key: '29',
      label: '个人编号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '30',
      label: '增员年月',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '31',
      label: '缴费工资',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '32',
      label: '参加工作日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择参加工作日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '33',
      label: '街道编号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '34',
      label: '街道名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '35',
      label: '社区编号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '36',
      label: '社区名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '37',
      label: '险种标志',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '38',
      label: '缴费人员类别',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '39',
      label: '参保日期',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '40',
      label: '缴费工资',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '41',
      label: '缴费基数',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      label: '人员信息变更',
      children: '-',
      span: 3
    },
    {
      label: '个人关键信息',
      children: '-',
      span: 3
    },
    {
      key: '42',
      label: '社会保障号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '43',
      label: '姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '44',
      label: '证件类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '45',
      label: '有效证件号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      label: '非关键信息',
      children: '-',
      span: 3
    },
    {
      key: '46',
      label: '性别',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '47',
      label: '出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '48',
      label: '档案出生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择档案出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '49',
      label: '民族',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '50',
      label: '政治面貌',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '51',
      label: '手机号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '52',
      label: '联系人姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5,
    },
    {
      key: '53',
      label: '联系人电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5,
    },
    {
      label: '减员',
      children: '-',
      span: 3
    },
    {
      key: '54',
      label: '姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '55',
      label: '社会保障号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '56',
      label: '减员年月',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择减员年月' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1.5
    },
    {
      key: '57',
      label: '减员原因',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '58',
      label: '状态发生日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态发生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      key: '59',
      label: '单位信息变更',
      children: '-',
      span: 3
    },
    {
      key: '60',
      label: '统一社会信用代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '61',
      label: '单位名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '62',
      label: '所属行政区划',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '63',
      label: '行业代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '64',
      label: '行业代码小类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '65',
      label: '工商登记执照种类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '66',
      label: '工商登记证发证日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态发证日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '67',
      label: '工商登记有效期（开始时间）',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '68',
      label: '工商登记有效期限（年）',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '69',
      label: '工商营业执照号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '70',
      label: '执照有效起始日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态起始日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1,
    },
    {
      key: '71',
      label: '执照有效终止日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态终止日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1,
    },
    {
      key: '72',
      label: '批准文号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '73',
      label: '批准日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1,
    },
    {
      key: '74',
      label: '组织机构代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '75',
      label: '经营范围',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '76',
      label: '隶属关系',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '77',
      label: '经济类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '78',
      label: '经济类型明细',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '79',
      label: '单位类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '80',
      label: '注册资本',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '81',
      label: '其他登记证件种类',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '82',
      label: '其他登记证件号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '83',
      label: '单位成立日期',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态单位成立日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '84',
      label: '地税机构',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '85',
      label: '地税税号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '86',
      label: '批准成立单位',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '87',
      label: '电子邮箱',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '88',
      label: '单位地址',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '89',
      label: '邮政编码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '90',
      label: '联系人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '91',
      label: '联系电话',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1,
    },
    {
      key: '92',
      label: '法人单位ID',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '93',
      label: '法人姓名',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '94',
      label: '法人证件类型',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '95',
      label: '法人证件号码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '96',
      label: '法人联系电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1,
    },
    {
      key: '97',
      label: '法人所任职务',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '98',
      label: '投资国家或地区',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '99',
      label: '特殊情况说明',
      children: <Input disabled={disableVar} size='large' style={{ width: '830px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3,
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="新增社保参保人员信息" bordered items={items} />
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