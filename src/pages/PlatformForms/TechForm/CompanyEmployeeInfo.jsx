import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Space, Radio } from 'antd';


export default function TechCompanyInfo() {

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
      label: '表号',
      children: 'GQ-003',
      span: 3
    },
    {
      key: '2',
      label: '制定机关',
      children: '科学技术部',
      span: 1
    },
    {
      key: '3',
      label: '批准机关',
      children: '国家统计局',
      span: 3
    },
    {
      key: '4',
      label: '批准文号',
      children: '国统制〔2022〕11号',
      span: 1
    },
    {
      key: '5',
      label: '有效期至',
      children: <DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      label: '一、从业人员数',
      children: '',
      span: 3
    },
    {
      key: '6',
      label: '指标名称',
      children: '从业人员期末人数',
      span: 1
    },
    {
      key: '7',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd01'></Input>,
      span: 1
    },
    {
      key: '8',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '9',
      label: '指标名称',
      children: '其中：留学归国人员',
      span: 1
    },
    {
      key: '10',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd03'></Input>,
      span: 1
    },
    {
      key: '11',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '12',
      label: '指标名称',
      children: '其中：外籍常驻人员',
      span: 1
    },
    {
      key: '13',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd25'></Input>,
      span: 1
    },
    {
      key: '14',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '15',
      label: '指标名称',
      children: '其中：引进外籍专家',
      span: 1
    },
    {
      key: '16',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd21'></Input>,
      span: 1
    },
    {
      key: '17',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '18',
      label: '指标名称',
      children: '其中：当年新增从业人员',
      span: 1
    },
    {
      key: '19',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd26'></Input>,
      span: 1
    },
    {
      key: '20',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '21',
      label: '指标名称',
      children: '其中：吸纳高校应届毕业生',
      span: 1
    },
    {
      key: '22',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd14'></Input>,
      span: 1
    },
    {
      key: '23',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '24',
      label: '指标名称',
      children: '其中：从事科研或科研辅助工作的应届毕业生',
      span: 1
    },
    {
      key: '25',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd14_0'></Input>,
      span: 1
    },
    {
      key: '26',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '27',
      label: '指标名称',
      children: '从业人员平均人数',
      span: 1
    },
    {
      key: '28',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd05'></Input>,
      span: 1
    },
    {
      key: '29',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      label: '二、从业人员构成',
      children: '',
      span: 3
    },
    {
      label: '（一）按学历、学位及技能分',
      children: '',
      span: 3
    },
    {
      key: '30',
      label: '指标名称',
      children: '具有研究生学历（位）人员',
      span: 1
    },
    {
      key: '31',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd18'></Input>,
      span: 1
    },
    {
      key: '32',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '33',
      label: '指标名称',
      children: '其中：博士',
      span: 1
    },
    {
      key: '34',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd06'></Input>,
      span: 1
    },
    {
      key: '35',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '36',
      label: '指标名称',
      children: '其中：硕士',
      span: 1
    },
    {
      key: '37',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd07'></Input>,
      span: 1
    },
    {
      key: '38',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '39',
      label: '指标名称',
      children: '具有大学本科学历（位）人员',
      span: 1
    },
    {
      key: '40',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd08'></Input>,
      span: 1
    },
    {
      key: '41',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '42',
      label: '指标名称',
      children: '具有大学专科学历人员',
      span: 1
    },
    {
      key: '43',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd09'></Input>,
      span: 1
    },
    {
      key: '44',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '45',
      label: '指标名称',
      children: '技能人员',
      span: 1
    },
    {
      key: '46',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd31'></Input>,
      span: 1
    },
    {
      key: '47',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '48',
      label: '指标名称',
      children: '其中：高级技师（国家职业资格一级）',
      span: 1
    },
    {
      key: '49',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd32'></Input>,
      span: 1
    },
    {
      key: '50',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '51',
      label: '指标名称',
      children: '其中：技师（国家职业资格二级）',
      span: 1
    },
    {
      key: '52',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd33'></Input>,
      span: 1
    },
    {
      key: '53',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '54',
      label: '指标名称',
      children: '其中：高级技能人员（国家职业资格三级）',
      span: 1
    },
    {
      key: '55',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd34 '></Input>,
      span: 1
    },
    {
      key: '56',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '57',
      label: '指标名称',
      children: '其中：中级技能人员（国家职业资格四级）',
      span: 1
    },
    {
      key: '58',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd35'></Input>,
      span: 1
    },
    {
      key: '59',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '60',
      label: '指标名称',
      children: '其中：初级技能人员（国家职业资格五级）',
      span: 1
    },
    {
      key: '61',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd36'></Input>,
      span: 1
    },
    {
      key: '62',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      label: '（二）按职业类型分',
      children: '',
      span: 3
    },
    {
      key: '63',
      label: '指标名称',
      children: '中层及以上管理人员',
      span: 1
    },
    {
      key: '64',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd27'></Input>,
      span: 1
    },
    {
      key: '65',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '66',
      label: '指标名称',
      children: '研发费用',
      span: 1
    },
    {
      key: '67',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qc236'></Input>,
      span: 1
    },
    {
      key: '68',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '69',
      label: '指标名称',
      children: '专业技术人员',
      span: 1
    },
    {
      key: '70',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qd28'></Input>,
      span: 1
    },
    {
      key: '71',
      label: '数量',
      children: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="企业人员概况信息" bordered items={items} />
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