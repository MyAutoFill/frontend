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
      children: 'GQ-001',
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
      span: 13
    },
    {
      label: '',
      children: '',
      span: 3
    },
    {
      key: '6',
      label: '指标名称',
      children: '已进区企业被批准入区时间',
      span: 1
    },
    {
      key: '7',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb08'></Input>,
      span: 1
    },
    {
      key: '8',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '9',
      label: '指标名称',
      children: '企业隶属关系',
      span: 1
    },
    {
      key: '10',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb101'></Input>,
      span: 1
    },
    {
      key: '11',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '12',
      label: '指标名称',
      children: '主要业务活动或主要产品',
      span: 1
    },
    {
      key: '13',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb03_0'></Input>,
      span: 1
    },
    {
      key: '14',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '15',
      label: '指标名称',
      children: '行业代码',
      span: 1
    },
    {
      key: '16',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb03_1'></Input>,
      span: 1
    },
    {
      key: '17',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '18',
      label: '指标名称',
      children: '企业执行会计标准类别',
      span: 1
    },
    {
      key: '19',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb20_1'></Input>,
      span: 1
    },
    {
      key: '20',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '21',
      label: '指标名称',
      children: '企业执行会计准则情况',
      span: 1
    },
    {
      key: '22',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb20'></Input>,
      span: 1
    },
    {
      key: '23',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '24',
      label: '指标名称',
      children: '企业注册时间',
      span: 1
    },
    {
      key: '25',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb04'></Input>,
      span: 1
    },
    {
      key: '26',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择企业注册时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '27',
      label: '指标名称',
      children: '注册资金',
      span: 1
    },
    {
      key: '28',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb04_0'></Input>,
      span: 1
    },
    {
      key: '29',
      label: '内容',
      children: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '30',
      label: '指标名称',
      children: '登记注册类型',
      span: 1
    },
    {
      key: '31',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb06'></Input>,
      span: 1
    },
    {
      key: '32',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      label: '企业投资信息填报',
      children: '限港澳台商和外商投资企业填报，主要外资来源国或地区的国别（地区）名称代码及外资出资比例',
      span: 3
    },
    {
      key: '33',
      label: '指标名称',
      children: '国别或地区代码',
      span: 1
    },
    {
      key: '34',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb06_1'></Input>,
      span: 1
    },
    {
      key: '35',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '36',
      label: '指标名称',
      children: '出资比例',
      span: 1
    },
    {
      key: '37',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb06_2'></Input>,
      span: 1
    },
    {
      key: '38',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '39',
      label: '指标名称',
      children: '企业控股情况',
      span: 1
    },
    {
      key: '40',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb18'></Input>,
      span: 1
    },
    {
      key: '41',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '42',
      label: '指标名称',
      children: '企业集团情况',
      span: 1
    },
    {
      key: '43',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb09'></Input>,
      span: 1
    },
    {
      key: '44',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '45',
      label: '指标名称',
      children: 'QB09如为2，请填直接上级法人',
      span: 1
    },
    {
      key: '46',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb10'></Input>,
      span: 1
    },
    {
      key: '47',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '48',
      label: '指标名称',
      children: '单位统一社会信用代码',
      span: 1
    },
    {
      key: '49',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb10'></Input>,
      span: 1
    },
    {
      key: '50',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '51',
      label: '指标名称',
      children: '或上级法人组织机构代码',
      span: 1
    },
    {
      key: '52',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb10'></Input>,
      span: 1
    },
    {
      key: '53',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '54',
      label: '指标名称',
      children: '是否为经过认定的高新技术企业',
      span: 1
    },
    {
      key: '55',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb11'></Input>,
      span: 1
    },
    {
      key: '56',
      label: '内容',
      children:         
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
          <Radio value={'是'}>是</Radio>
          <Radio value={'否'} style={{ marginLeft: '10px'}}>否</Radio>
        </Radio.Group>,
      span: 1
    },
    {
      key: '57',
      label: '指标名称',
      children: 'QB11如为是，高企认定证书编号',
      span: 1
    },
    {
      key: '58',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb13'></Input>,
      span: 1
    },
    {
      key: '59',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '60',
      label: '指标名称',
      children: '企业被认定为高新技术企业的时间',
      span: 1
    },
    {
      key: '61',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb12'></Input>,
      span: 1
    },
    {
      key: '62',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '63',
      label: '指标名称',
      children: '与科技企业孵化器关系',
      span: 1
    },
    {
      key: '64',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb14'></Input>,
      span: 1
    },
    {
      key: '65',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '66',
      label: '指标名称',
      children: '入孵时间',
      span: 1
    },
    {
      key: '67',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb14_1'></Input>,
      span: 1
    },
    {
      key: '68',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择入孵时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '69',
      label: '指标名称',
      children: '毕业时间',
      span: 1
    },
    {
      key: '70',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb14_2'></Input>,
      span: 1
    },
    {
      key: '71',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择毕业时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '72',
      label: '指标名称',
      children: '境外上市情况',
      span: 1
    },
    {
      key: '73',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb15'></Input>,
      span: 1
    },
    {
      key: '74',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '75',
      label: '指标名称',
      children: '证券代码',
      span: 1
    },
    {
      key: '76',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb15_1'></Input>,
      span: 1
    },
    {
      key: '77',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '78',
      label: '指标名称',
      children: '上市时间',
      span: 1
    },
    {
      key: '79',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb15_2'></Input>,
      span: 1
    },
    {
      key: '80',
      label: '内容',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择上市时间' picker="year" style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '81',
      label: '指标名称',
      children: '年末市值',
      span: 1
    },
    {
      key: '82',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb15_5'></Input>,
      span: 1
    },
    {
      key: '83',
      label: '内容',
      children: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '84',
      label: '指标名称',
      children: '企业所属技术领域',
      span: 1
    },
    {
      key: '85',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb16'></Input>,
      span: 1
    },
    {
      key: '86',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '87',
      label: '指标名称',
      children: '企业核心技术所属',
      span: 1
    },
    {
      key: '88',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb16_1'></Input>,
      span: 1
    },
    {
      key: '89',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '90',
      label: '指标名称',
      children: '《国家重点支持的高新技术领域》',
      span: 1
    },
    {
      key: '91',
      label: '代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='qb16_1'></Input>,
      span: 1
    },
    {
      key: '92',
      label: '内容',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },  
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="企业概况信息" bordered items={items} />
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