import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Footer from './Footer';
import 'rc-banner-anim/assets/index.css';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { Badge, Descriptions, Input, Checkbox, DatePicker, Space } from 'antd';
// import type { DatePickerProps } from 'antd';
import { Radio } from 'antd3';

export default function Home() {
  const [organizationTypeValue, setOrganizationTypeValue] = useState('')
  const [signUpTypeValue, setSignUpTypeValue] = useState('')
  const [signUpTypeSubValue, setSignUpTypeSubValue] = useState('')
  const [companyStockControlValue, setCompanyStockControlValue] = useState('')
  const [belongRelationValue, setBelongRelationValue] = useState('')
  const [runningStatusValue, setRunningStatusValue] = useState('')
  const [executeAccountingTypeValue, setExecuteAccountingTypeValue] = useState('')
  const [executeAccountingRuleConditionValue, setExecuteAccountingRuleConditionValue] = useState('')

  const HKTWInvestSituation = [
    { label: '港商投资', value: '港商投资' },
    { label: '台商投资', value: '台商投资' },
    { label: '暂未投资', value: '暂未投资' },
  ];

  const items = [
    {
      key: '1',
      label: '统一社会信用代码',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '2',
      label: '单位名称',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '3',
      label: '单位曾用名',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '4',
      label: '行业类别',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '5',
      label: '行业性质',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '6',
      label: '主要业务活动',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3,
    },
    {
      key: '7',
      label: '行业代码',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '8',
      label: '经营范围',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '9',
      label: '工商登记有效期限（年）',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '10',
      label: '组织机构代码',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '11',
      label: '单位所在地区划及详细地址',
      children: 
        <>
          <Input addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/>
        </>,
      span: 3
    },
    {
      key: '12',
      label: '区划代码',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '13',
      label: '单位注册地区划及详细地址',
      children: (
        <>
          <span>
            是否与单位所在地区划及详细地址一致：
            <Radio.Group style={{marginTop: '10px' }}>
              <Radio value={1}>是</Radio>
              <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
            </Radio.Group>
          </span>
          <Input addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="详细地址" style={{ width: '1070px', marginTop: '10px' }}/>
        </>
      ),
      span: 3
    },
    {
      key: '14',
      label: '单位规模',
      children: (
        <>
          <Radio.Group style={{marginTop: '10px' }}>
            <Radio value={'大型'}>大型</Radio>
            <Radio value={'中型'} style={{ marginLeft: '10px'}}>中型</Radio>
            <Radio value={'小型'} style={{ marginLeft: '10px'}}>小型</Radio>
            <Radio value={'微型'} style={{ marginLeft: '10px'}}>微型</Radio>
          </Radio.Group>
        </>
      ),
      span: 3
    },
    {
      key: '15',
      label: '法定代表人（单位负责人）',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '16',
      label: '法人证件类型',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '17',
      label: '法人证件号码',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '18',
      label: '法人联系电话',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '19',
      label: '企业负责人',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '20',
      label: '联系电话',
      children: <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3,
    },
    {
      key: '21',
      label: '成立时间（所有单位填报）',
      children: <DatePicker placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      key: '22',
      label: '联系方式',
      children: 
        <>
          <Input addonBefore="长途区号" style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="固定电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="通信地址" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="电子邮箱" style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="移动电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="传真号码" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="邮政编码" style={{ width: '350px', marginTop: '10px' }}/>
        </>,
      span: 3
    },
    {
      key: '23',
      label: '机构类型',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setOrganizationTypeValue(e.target.value)} value={organizationTypeValue}>
          <Radio value={'企业'}>企业</Radio>
          <Radio value={'事业单位'} style={{ marginLeft: '10px'}}>事业单位</Radio>
          <Radio value={'机关'} style={{ marginLeft: '10px'}}>机关</Radio>
          <Radio value={'社会团体'} style={{ marginLeft: '10px'}}>社会团体</Radio>
          <Radio value={'民办非企业单位'} style={{ marginLeft: '10px'}}>民办非企业单位</Radio>
          <Radio value={'基金会'} style={{ marginLeft: '10px'}}>基金会</Radio>
          <Radio value={'居委会'} style={{ marginLeft: '10px'}}>居委会</Radio>
          <Radio value={'村委会'} style={{ marginLeft: '10px'}}>村委会</Radio>
          <Radio value={'农民专业合作社'} style={{ marginLeft: '10px'}}>农民专业合作社</Radio>
          <Radio value={'农村集体经济组织'} style={{ marginLeft: '10px'}}>农村集体经济组织</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {organizationTypeValue === '其他' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '24',
      label: '登记注册类型',
      children: 
      <>
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeValue(e.target.value)} value={signUpTypeValue}>
          <Radio value={'内资'}>内资</Radio>
          <Radio value={'港澳台商投资'} style={{ marginLeft: '10px'}}>港澳台商投资</Radio>
          <Radio value={'外商投资'} style={{ marginLeft: '10px'}}>外商投资</Radio>
        </Radio.Group>
        {signUpTypeValue === '内资' ? 
          <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
            <Radio value={'国有'} style={{ marginLeft: '20px'}}>国有</Radio>
            <Radio value={'其他有限责任公司'} style={{ marginLeft: '20px'}}>其他有限责任公司</Radio>
            <Radio value={'集体'} style={{ marginLeft: '20px'}}>集体</Radio>
            <Radio value={'股份合作'} style={{ marginLeft: '20px'}}>股份合作</Radio>
            <Radio value={'国有联营'} style={{ marginLeft: '20px'}}>国有联营</Radio>
            <Radio value={'国有与集体联营'} style={{ marginLeft: '20px'}}>国有与集体联营</Radio>
            <Radio value={'其他联营'} style={{ marginLeft: '20px'}}>其他联营</Radio>
            <Radio value={'国有独资公司'} style={{ marginLeft: '20px'}}>国有独资公司</Radio>
            <Radio value={'股份有限公司'} style={{ marginLeft: '20px'}}>股份有限公司</Radio>
            <Radio value={'私营独资'} style={{ marginLeft: '20px'}}>私营独资</Radio>
            <Radio value={'私营合伙'} style={{ marginLeft: '20px'}}>私营合伙</Radio>
            <Radio value={'私营有限责任公司'} style={{ marginLeft: '20px'}}>私营有限责任公司</Radio>
            <Radio value={'私营股份有限公司'} style={{ marginLeft: '20px'}}>私营股份有限公司</Radio>
            <Radio value={'其他'} style={{ marginLeft: '20px'}}>
              其他
              {signUpTypeSubValue === '其他' ? <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : 
          signUpTypeValue === '港澳台商投资' ? 
          <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
            <Radio value={'与港澳台商合资经营'} style={{ marginLeft: '20px'}}>与港澳台商合资经营</Radio>
            <Radio value={'与港澳台商合作经营'} style={{ marginLeft: '20px'}}>与港澳台商合作经营</Radio>
            <Radio value={'港澳台商独资'} style={{ marginLeft: '20px'}}>港澳台商独资</Radio>
            <Radio value={'港澳台商投资股份有限公司'} style={{ marginLeft: '20px'}}>港澳台商投资股份有限公司</Radio>
            <Radio value={'其他港澳台投资'} style={{ marginLeft: '20px'}}>
            其他港澳台投资
              {signUpTypeSubValue === '其他港澳台投资' ? <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : 
          signUpTypeValue === '外商投资' ? 
          <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
            <Radio value={'中外合资经营'} style={{ marginLeft: '20px'}}>中外合资经营</Radio>
            <Radio value={'中外合作经营'} style={{ marginLeft: '20px'}}>中外合作经营</Radio>
            <Radio value={'外资企业'} style={{ marginLeft: '20px'}}>外资企业</Radio>
            <Radio value={'外商投资股份有限公司'} style={{ marginLeft: '20px'}}>外商投资股份有限公司</Radio>
            <Radio value={'其他外商投资'} style={{ marginLeft: '20px'}}>
            其他外商投资
              {signUpTypeSubValue === '其他外商投资' ? <Input style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : null}
      </>,
      span: 3
    },
    {
      key: '25',
      label: '港澳台商投资情况（仅限港澳台商投资企业填报）（可多选）',
      children: <Checkbox.Group options={HKTWInvestSituation} />,
      span: 3
    },
    {
      key: '26',
      label: '企业控股情况',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setCompanyStockControlValue(e.target.value)} value={companyStockControlValue}>
          <Radio value={'国有控股'}>国有控股</Radio>
          <Radio value={'集体控股'} style={{ marginLeft: '10px'}}>集体控股</Radio>
          <Radio value={'私人控股'} style={{ marginLeft: '10px'}}>私人控股</Radio>
          <Radio value={'港澳台控股'} style={{ marginLeft: '10px'}}>港澳台控股</Radio>
          <Radio value={'外商控股'} style={{ marginLeft: '10px'}}>外商控股</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {companyStockControlValue === '其他' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '27',
      label: '隶属关系',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setBelongRelationValue(e.target.value)} value={belongRelationValue}>
          <Radio value={'中央'}>中央</Radio>
          <Radio value={'地方'} style={{ marginLeft: '10px'}}>地方</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {belongRelationValue === '其他' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '28',
      label: '注册资本',
      children: <Input addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '27',
      label: '运营状态',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setRunningStatusValue(e.target.value)} value={runningStatusValue}>
          <Radio value={'正常运营'}>正常运营</Radio>
          <Radio value={'停业（歇业）'} style={{ marginLeft: '10px'}}>停业（歇业）</Radio>
          <Radio value={'筹建'} style={{ marginLeft: '10px'}}>筹建</Radio>
          <Radio value={'当年关闭'} style={{ marginLeft: '10px'}}>当年关闭</Radio>
          <Radio value={'当年破产'} style={{ marginLeft: '10px'}}>当年破产</Radio>
          <Radio value={'当年注销'} style={{ marginLeft: '10px'}}>当年注销</Radio>
          <Radio value={'当年撤（吊）销'} style={{ marginLeft: '10px'}}>当年撤（吊）销</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {runningStatusValue === '其他' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '28',
      label: '执行会计标准类别',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setExecuteAccountingTypeValue(e.target.value)} value={executeAccountingTypeValue}>
          <Radio value={'企业会计准则制度'}>企业会计准则制度</Radio>
          <Radio value={'政府会计准则制度'} style={{ marginLeft: '10px'}}>政府会计准则制度</Radio>
          <Radio value={'民间非盈利组织会计制度'} style={{ marginLeft: '10px'}}>民间非盈利组织会计制度</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {executeAccountingTypeValue === '其他' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '29',
      label: '执行企业会计准则情况',
      children: 
        <Radio.Group style={{marginTop: '10px' }} onChange={(e) => setExecuteAccountingRuleConditionValue(e.target.value)} value={executeAccountingRuleConditionValue}>
          <Radio value={'执行《企业会计准则》'}>执行《企业会计准则》</Radio>
          <Radio value={'执行《小企业会计准则》'} style={{ marginLeft: '10px'}}>执行《小企业会计准则》</Radio>
          <Radio value={'执行其他企业会计制度'} style={{ marginLeft: '10px'}}>
            执行其他企业会计制度
            {executeAccountingRuleConditionValue === '执行其他企业会计制度' ? <Input style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
  ];

  return (
    <>
      <Header key="header" className='show-shadow' />
      <div className="banner page-wrapper" >
        <div className="page" style={{maxWidth: 1400}}>
          <div className="logo" />
          <div style={{height: 600, padding: 50, overflow:'auto'}} class="banner-anim">
            <Descriptions title="单位基本信息" bordered items={items} />
          </div>
        </div>
      </div>
      <Footer key="footer" />
      <DocumentTitle title="统一报表报送系统" key="title" />
    </>
  );
}