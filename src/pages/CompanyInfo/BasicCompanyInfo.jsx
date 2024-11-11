import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Checkbox, DatePicker, Radio, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';

export default function BasicCompanyInfo(props) {
  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  const dateFormat = 'YYYY-MM-DD';

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('BasicCompanyInfo')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              let a = BigNumber(new_res[key])
              let b = BigNumber(config[key])
              new_res[key] = a.times(b).toString();
            }
          });
          form.resetFields();
          form.setFieldsValue(new_res);
        })
      })
  }

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=BasicCompanyInfo', {
      method: 'GET',
    })
    .then(function (config) {
      const new_res = JSON.parse(JSON.stringify(values));
      Object.keys(config).forEach(key => {
        if (key in new_res) {
          let a = BigNumber(new_res[key])
          let b = BigNumber(config[key])
          new_res[key] = a.div(b).toString();
        }
      });
      request('/api/save', {
        method: 'POST',
        data: {
          date: props.date,
          data: new_res
        }
      })
    })
  };

  const [form] = Form.useForm();

  const [organizationTypeValue, setOrganizationTypeValue] = useState('')
  const [signUpTypeValue, setSignUpTypeValue] = useState('')
  const [signUpTypeSubValue, setSignUpTypeSubValue] = useState('')
  const [companyStockControlValue, setCompanyStockControlValue] = useState('')
  const [belongRelationValue, setBelongRelationValue] = useState('')
  const [runningStatusValue, setRunningStatusValue] = useState('')
  const [executeAccountingTypeValue, setExecuteAccountingTypeValue] = useState('')
  const [executeAccountingRuleConditionValue, setExecuteAccountingRuleConditionValue] = useState('')

  const SaveSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本次修改保存成功',
    });
  }

  const SaveError = () => {
    messageApi.open({
      type: 'error',
      content: '保存失败',
    });
  }

  const EditSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本次修改取消成功',
    });
  }

  const EditError = () => {
    messageApi.open({
      type: 'error',
      content: '本次修改取消失败',
    });
  }

  const CheckSuccess = () => {
    form.validateFields()
    messageApi.open({
      type: 'success',
      content: '表单检查完成',
    });
  }
  
  const CheckError = () => {
    messageApi.open({
      type: 'error',
      content: '表单检查失败',
    });
  };

  const HKTWInvestSituation = [
    { label: '港商投资', value: '港商投资' },
    { label: '台商投资', value: '台商投资' },
    { label: '暂未投资', value: '暂未投资' },
  ];

  const items = [
    {
      key: '1',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: '单位名称',
      children: <Form.Item name="company_basicinfo_2" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '单位曾用名',
      children: <Form.Item name="company_basicinfo_3"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: '行业类别',
      children: <Form.Item name="company_basicinfo_4" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: '行业性质',
      children: <Form.Item name="company_basicinfo_5"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: '主要业务活动',
      children: <Form.Item name="company_basicinfo_6" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: '行业代码',
      children: <Form.Item name="company_basicinfo_7" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '经营范围',
      children: <Form.Item name="company_basicinfo_8" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '工商登记有效期限（年）',
      children: <Form.Item name="company_basicinfo_9" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '组织机构代码',
      children: <Form.Item name="company_basicinfo_10" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '11',
      label: '单位所在地区划及详细地址',
      children: 
        <>
          <Form.Item name="company_basicinfo_11" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input disabled={disableVar} addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input disabled={disableVar} addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 3
    },
    {
      key: '12',
      label: '区划代码',
      children: <Form.Item name="company_basicinfo_18"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '13',
      label: '单位注册地区划及详细地址',
      children: (
        <>
          <span>
            是否与单位所在地区划及详细地址一致：
            <Form.Item name="company_basicinfo_r1">
              <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
                <Radio value={1}>是</Radio>
                <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
              </Radio.Group>
            </Form.Item>
          </span>
          <br></br>
          <Form.Item name="company_basicinfo_11" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input disabled={disableVar} addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input disabled={disableVar} addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>
      ),
      span: 3
    },
    {
      key: '14',
      label: '单位规模',
      children: (
        <>
          <Form.Item name="company_basicinfo_r2">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
              <Radio value={'大型'}>大型</Radio>
              <Radio value={'中型'} style={{ marginLeft: '10px'}}>中型</Radio>
              <Radio value={'小型'} style={{ marginLeft: '10px'}}>小型</Radio>
              <Radio value={'微型'} style={{ marginLeft: '10px'}}>微型</Radio>
            </Radio.Group>
          </Form.Item>
        </>
      ),
      span: 3
    },
    {
      key: '15',
      label: '法定代表人（单位负责人）',
      children: <Form.Item name="company_basicinfo_26" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '法人证件类型',
      children: <Form.Item name="company_basicinfo_27" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '法人证件号码',
      children: <Form.Item name="company_basicinfo_28" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '法人联系电话',
      children: <Form.Item name="company_basicinfo_29" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '企业负责人',
      children: <Form.Item name="company_basicinfo_30" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '联系电话',
      children: <Form.Item name="company_basicinfo_31" rules={[{required: true, message: '该项必填'}]}><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: '成立时间（所有单位填报）',
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker size='large' placeholder='请选择成立时间' defaultValue={dayjs('2013/12/23', dateFormat)} style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 3
    },
    {
      key: '22',
      label: '联系方式',
      children: 
        <>
          <Form.Item name="company_basicinfo_32"><Input disabled={disableVar} addonBefore="长途区号" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_33"><Input disabled={disableVar} addonBefore="固定电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_34"><Input disabled={disableVar} addonBefore="通信地址" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_35"><Input disabled={disableVar} addonBefore="电子邮箱" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_36"><Input disabled={disableVar} addonBefore="移动电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_37"><Input disabled={disableVar} addonBefore="传真号码" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} addonBefore="邮政编码" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 3
    },
    {
      key: '23',
      label: '机构类型',
      children: 
        <Form.Item name="company_basicinfo_r3">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setOrganizationTypeValue(e.target.value)} value={organizationTypeValue}>
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
              {organizationTypeValue === '其他' ? <Form.Item name="company_basicinfo_39"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '24',
      label: '登记注册类型',
      children: 
      <>
        <Form.Item name="company_basicinfo_r4">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeValue(e.target.value)} value={signUpTypeValue}>
            <Radio value={'内资'}>内资</Radio>
            <Radio value={'港澳台商投资'} style={{ marginLeft: '10px'}}>港澳台商投资</Radio>
            <Radio value={'外商投资'} style={{ marginLeft: '10px'}}>外商投资</Radio>
          </Radio.Group>
        </Form.Item>
        <br></br>
        {signUpTypeValue === '内资' ? 
          <Form.Item name="company_basicinfo_r5">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
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
                {signUpTypeSubValue === '其他' ? <Form.Item name="company_basicinfo_40"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item> : null}
              </Radio>
            </Radio.Group>
          </Form.Item> : 
          signUpTypeValue === '港澳台商投资' ? 
          <Form.Item name="company_basicinfo_r6">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
              <Radio value={'与港澳台商合资经营'} style={{ marginLeft: '20px'}}>与港澳台商合资经营</Radio>
              <Radio value={'与港澳台商合作经营'} style={{ marginLeft: '20px'}}>与港澳台商合作经营</Radio>
              <Radio value={'港澳台商独资'} style={{ marginLeft: '20px'}}>港澳台商独资</Radio>
              <Radio value={'港澳台商投资股份有限公司'} style={{ marginLeft: '20px'}}>港澳台商投资股份有限公司</Radio>
              <Radio value={'其他港澳台投资'} style={{ marginLeft: '20px'}}>
              其他港澳台投资
                {signUpTypeSubValue === '其他港澳台投资' ? <Form.Item name="company_basicinfo_41"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item> : null}
              </Radio>
            </Radio.Group>
          </Form.Item> : 
          signUpTypeValue === '外商投资' ? 
          <Form.Item name="company_basicinfo_r7">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
              <Radio value={'中外合资经营'} style={{ marginLeft: '20px'}}>中外合资经营</Radio>
              <Radio value={'中外合作经营'} style={{ marginLeft: '20px'}}>中外合作经营</Radio>
              <Radio value={'外资企业'} style={{ marginLeft: '20px'}}>外资企业</Radio>
              <Radio value={'外商投资股份有限公司'} style={{ marginLeft: '20px'}}>外商投资股份有限公司</Radio>
              <Radio value={'其他外商投资'} style={{ marginLeft: '20px'}}>
              其他外商投资
                {signUpTypeSubValue === '其他外商投资' ? <Form.Item name="company_basicinfo_42"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item> : null}
              </Radio>
            </Radio.Group>
          </Form.Item> : null}
      </>,
      span: 3
    },
    {
      key: '25',
      label: '港澳台商投资情况（仅限港澳台商投资企业填报）（可多选）',
      children: 
        <Form.Item name="company_basicinfo_c1">
          <Checkbox.Group disabled={disableVar} options={HKTWInvestSituation} />
        </Form.Item>,
      span: 3
    },
    {
      key: '26',
      label: '企业控股情况',
      children: 
        <Form.Item name="company_basicinfo_r8">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setCompanyStockControlValue(e.target.value)} value={companyStockControlValue}>
            <Radio value={'国有控股'}>国有控股</Radio>
            <Radio value={'集体控股'} style={{ marginLeft: '10px'}}>集体控股</Radio>
            <Radio value={'私人控股'} style={{ marginLeft: '10px'}}>私人控股</Radio>
            <Radio value={'港澳台控股'} style={{ marginLeft: '10px'}}>港澳台控股</Radio>
            <Radio value={'外商控股'} style={{ marginLeft: '10px'}}>外商控股</Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {companyStockControlValue === '其他' ? <Form.Item name="company_basicinfo_43"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '27',
      label: '隶属关系',
      children: 
				<Form.Item name="company_basicinfo_r9">
					<Select
            allowClear
						style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择隶属关系"
						optionFilterProp="label"
						onChange={peopleSearchOnChange}
						onSearch={peopleSearchOnSearch}
						options={[
							{
								value: '中央',
								label: '中央',
							},
							{
								value: '省',
								label: '省',
							},
							{
								value: '市、地区',
								label: '市、地区',
							},
							{
								value: '区',
								label: '区',
							},
							{
								value: '县',
								label: '县',
							},
							{
								value: '街道',
								label: '街道',
							},
							{
								value: '镇',
								label: '镇',
							},
							{
								value: '乡',
								label: '乡',
							},
							{
								value: '居民委员会',
								label: '居民委员会',
							},
							{
								value: '村民委员会',
								label: '村民委员会',
							},
							{
								value: '军队',
								label: '军队',
							},
							{
								value: '其他',
								label: '其他',
							}
						]}
					/>
				</Form.Item>,
      span: 3
    },
    {
      key: '28',
      label: '注册资本',
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '27',
      label: '运营状态',
      children: 
        <Form.Item name="company_basicinfo_r9">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setRunningStatusValue(e.target.value)} value={runningStatusValue} defaultValue={'正常运营'}>
            <Radio value={'正常运营'}>正常运营</Radio>
            <Radio value={'停业（歇业）'} style={{ marginLeft: '10px'}}>停业（歇业）</Radio>
            <Radio value={'筹建'} style={{ marginLeft: '10px'}}>筹建</Radio>
            <Radio value={'当年关闭'} style={{ marginLeft: '10px'}}>当年关闭</Radio>
            <Radio value={'当年破产'} style={{ marginLeft: '10px'}}>当年破产</Radio>
            <Radio value={'当年注销'} style={{ marginLeft: '10px'}}>当年注销</Radio>
            <Radio value={'当年撤（吊）销'} style={{ marginLeft: '10px'}}>当年撤（吊）销</Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {runningStatusValue === '其他' ? <Form.Item name="company_basicinfo_46"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '28',
      label: '执行会计标准类别',
      children: 
        <Form.Item name="company_basicinfo_r10">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setExecuteAccountingTypeValue(e.target.value)} value={executeAccountingTypeValue}>
            <Radio value={'企业会计准则制度'}>企业会计准则制度</Radio>
            <Radio value={'政府会计准则制度'} style={{ marginLeft: '10px'}}>政府会计准则制度</Radio>
            <Radio value={'民间非盈利组织会计制度'} style={{ marginLeft: '10px'}}>民间非盈利组织会计制度</Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {executeAccountingTypeValue === '其他' ? <Form.Item name="company_basicinfo_47"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '29',
      label: '执行企业会计准则情况',
      children: 
        <Form.Item name="company_basicinfo_r11">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setExecuteAccountingRuleConditionValue(e.target.value)} value={executeAccountingRuleConditionValue}>
            <Radio value={'执行《企业会计准则》'}>执行《企业会计准则》</Radio>
            <Radio value={'执行《小企业会计准则》'} style={{ marginLeft: '10px'}}>执行《小企业会计准则》</Radio>
            <Radio value={'执行其他企业会计制度'} style={{ marginLeft: '10px'}}>
              执行其他企业会计制度
              {executeAccountingRuleConditionValue === '执行其他企业会计制度' ? <Form.Item name="company_basicinfo_48"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
  ];

  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 700, width: 'auto', padding: 20, overflow:'auto'}} >
        <Form onFinish={onFinish} form={form}>
          <Descriptions title="单位基本信息" bordered items={items} />
          <FloatButton.Group
            open={defaultOpen}
            trigger="click"
            style={{
              insetInlineEnd: 120,
            }}
            shape='square'
            description="操作按钮"
            tooltip={<div>点击展示操作按钮</div>}
            type='primary'
            onOpenChange={(open) => setDefaultOpen(open)}
            icon={<ExpandAltOutlined />}
          >
            <Button 
              type="primary" 
              icon={<SaveFilled />} 
              autoInsertSpace 
              size='large' 
              style={{
                position: 'absolute',
                right: 0,
                bottom: 210
              }}
              htmlType='submit'
              onClick={
                SaveSuccess
              }
            >保存数据</Button>
            <Button 
              type="primary" 
              icon={<StopFilled />} 
              autoInsertSpace 
              size='large' 
              style={{
                position: 'absolute',
                right: 0,
                bottom: 140,
              }}
              onClick={
                EditSuccess
              }
            >取消编辑</Button>
            <Button 
              type="primary" 
              icon={<CheckSquareFilled />} 
              autoInsertSpace 
              size='large'
              style={{
                position: 'absolute',
                right: 0, 
                bottom: 70,
              }}
              onClick={
                CheckSuccess
              }
            >检查表单</Button>
            <Button 
              type="primary" 
              icon={<FastForwardOutlined />} 
              autoInsertSpace 
              size='large'
              style={{
                position: 'absolute',
                right: 0, 
                bottom: 0,
              }}
              onClick={() => {window.location.href = '/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}