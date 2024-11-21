import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Checkbox, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';


export default function StatisticCompanyBasicInfo(props) {
  const [FormType, setFormType] = useState('')
  const [organizationTypeValue, setOrganizationTypeValue] = useState('')
  const [signUpTypeValue, setSignUpTypeValue] = useState('')
  const [signUpTypeSubValue, setSignUpTypeSubValue] = useState('')
  const [companyStockControlValue, setCompanyStockControlValue] = useState('')
  const [belongRelationValue, setBelongRelationValue] = useState('')
  const [runningStatusValue, setRunningStatusValue] = useState('')
  const [executeAccountingTypeValue, setExecuteAccountingTypeValue] = useState('')
  const [HouseRunningLevel, setHouseRunningLevel] = useState('')
  const [RunningType, setRunningType] = useState('')
  const [HaveStore, setHaveStore] = useState('')
  const [HaveStoreType, setHaveStoreType] = useState('')
  const [NoStoreType, setNoStoreType] = useState('')
  const [HospitalityStarLevel, setHospitalityStarLevel] = useState('')
  const [HaveUpperOwner, setHaveUpperOwner] = useState('')
  const [UpperOwnerInfo, setUpperOwnerInfo] = useState('')

  const dateFormat = 'YYYY-MM-DD';

  const HKTWInvestSituation = [
    { label: '港商投资', value: '港商投资' },
    { label: '台商投资', value: '台商投资' },
    { label: '暂未投资', value: '暂未投资' },
  ];

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('StatisticCompanyBasicInfo')
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

  const [form] = Form.useForm();

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

  const items = [
    {
      key: '1',
      label: '是否为“视同法人单位”',
      children:
        <Form.Item name="HumanSocial_CompanyInfo_29">
          <Select
            showSearch
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否为“视同法人单位”"
            optionFilterProp="label"
            options={[
              {
                value: '是',
                label: '是',
              },
              {
                value: '否',
                label: '否',
              }
            ]}
          />
        </Form.Item>,
      span: 3
    },
    {
      key: '2',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '单位名称',
      children: <Form.Item name="company_basicinfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: '行业类别',
      children: <Form.Item name="company_basicinfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: '行业性质',
      children: <Form.Item name="company_basicinfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: '主要业务活动',
      children: <Form.Item name="company_basicinfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: '税务登记证号',
      children: <Form.Item name="Statistic_CompanyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '报表类别',
      children:             
        <Form.Item name="Statistic_CompanyInfo_8">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setFormType(e.target.value)} value={FormType}>
            <Radio value={'农业'}>农业</Radio>
            <Radio value={'规模以上工业'} style={{ marginLeft: '10px'}}>规模以上工业</Radio>
            <Radio value={'规模以下工业'} style={{ marginLeft: '10px'}}>规模以下工业</Radio>
            <Radio value={'建筑业'} style={{ marginLeft: '10px'}}>建筑业</Radio>
            <Radio value={'批发和零售业'} style={{ marginLeft: '10px'}}>批发和零售业</Radio>
            <Radio value={'住宿和餐饮业'} style={{ marginLeft: '10px'}}>住宿和餐饮业</Radio>
            <Radio value={'房地产开发经营业'} style={{ marginLeft: '10px'}}>房地产开发经营业</Radio>
            <Radio value={'规模以上服务业'} style={{ marginLeft: '10px'}}>规模以上服务业</Radio>
            <Radio value={'投资'} style={{ marginLeft: '10px'}}>投资</Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
                其他
                {FormType === '其他' ? <Form.Item name="Statistic_CompanyInfo_9"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
              </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '9',
      label: '单位所在地区划及详细地址',
      children: 
        <> 
          <Form.Item name="company_basicinfo_11"><Input disabled={disableVar} addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12"><Input disabled={disableVar} addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13"><Input disabled={disableVar} addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input disabled={disableVar} addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input disabled={disableVar} addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16"><Input disabled={disableVar} addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 3
    },
    {
      key: '10',
      label: '区划代码',
      children: <Form.Item name="Statistic_CompanyInfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: '城乡代码',
      children: <Form.Item name="Statistic_CompanyInfo_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: '单位注册地区划及详细地址',
      children: (
        <>
          <span>
            是否与单位所在地区划及详细地址一致：
            <Form.Item name="Statistic_CompanyInfo_19">
              <Select
                showSearch
                allowClear
                style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
                size='large'
                placeholder="是否与单位所在地区划及详细地址一致"
                optionFilterProp="label"
                options={[
                  {
                    value: '是',
                    label: '是',
                  },
                  {
                    value: '否',
                    label: '否',
                  }
                ]}
              />
            </Form.Item>,
          </span>
          <br></br>
          <Form.Item name="company_basicinfo_11"><Input disabled={disableVar} addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12"><Input disabled={disableVar} addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13"><Input disabled={disableVar} addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input disabled={disableVar} addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input disabled={disableVar} addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16"><Input disabled={disableVar} addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>
      ),
      span: 3
    },
    {
      key: '13',
      label: '区划代码',
      children: <Form.Item name="Statistic_CompanyInfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '14',
      label: '城乡代码',
      children: <Form.Item name="Statistic_CompanyInfo_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '15',
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
      key: '16',
      label: '企业主要经济指标',
      children: '-',
      span: 3
    },
    {
      key: '17',
      label: '营业收入',
      children: <Form.Item name="company_runningsum_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '其中：主营业务收入',
      children: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: '资产总计',
      children: <Form.Item name="FinanceStatusInfo_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: '其他基本信息',
      children: '-',
      span: 3
    },
    {
      key: '21',
      label: '法定代表人',
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: '成立时间（所有单位填报）',
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker disabled={disableVar} size='large' placeholder='请选择成立时间' defaultValue={dayjs('2013/12/23', dateFormat)} style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: '开业时间（仅限企业填报）',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择开业时间' defaultValue={dayjs('2013/12/23', dateFormat)} style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '24',
      label: '联系方式',
      children: 
        <>
          <Form.Item name="company_basicinfo_32"><Input disabled={disableVar} addonBefore="长途区号" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_33"><Input disabled={disableVar} addonBefore="固定电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_34"><Input disabled={disableVar} addonBefore="通信地址" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_35"><Input disabled={disableVar} addonBefore="电子邮箱" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_36"><Input disabled={disableVar} addonBefore="移动电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_37"><Input disabled={disableVar} addonBefore="传真号码" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} addonBefore="邮政编码" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>        </>,
      span: 3
    },
    {
      key: '25',
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
      key: '26',
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
      key: '27',
      label: '港澳台商投资情况',
      children: 
      <>
        （可多选）（仅限港澳台商投资企业填报）
        <Checkbox.Group disabled={disableVar} options={HKTWInvestSituation} />
      </>,
      span: 3
    },
    {
      key: '28',
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
      key: '29',
      label: '隶属关系',
      children: 
				<Form.Item name="company_basicinfo_r9">
					<Select
            allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择隶属关系"
						optionFilterProp="label"
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
      span: 1
    },
    {
      key: '30',
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
      key: '31',
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
      key: '32',
      label: '企业集团情况',
      children: 
        <>
        （限企业集团母公司及成员企业填写）本企业是
          <Form.Item name="Statistic_CompanyInfo_58">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} defaultValue={'成员企业'}>
              <Radio value={'集团母公司'}>1.集团母公司（核心企业或集团总部）</Radio>
              <Radio value={'成员企业'} style={{ marginLeft: '10px'}}>2.成员企业——请填直接上级法人统一社会信用代码（尚未领取统一社会信用代码的填原组织机构代码）</Radio>
            </Radio.Group>
          </Form.Item>
        </>,
      span: 3
    },
    {
      key: '33',
      label: '建筑业企业资质登记编码',
      children: <Form.Item name="Statistic_CompanyInfo_59"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '34',
      label: '建筑业企业新资质等级编码（若已更换最新资质证书，按新资质再次填写）',
      children: <Form.Item name="Statistic_CompanyInfo_60"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '35',
      label: '房地产开发经营业企业资质等级',
      children: 
        <Form.Item name="Statistic_CompanyInfo_61">
          <Radio.Group disabled={disableVar} size='large' style={{marginTop: '10px' }} onChange={(e) => setHouseRunningLevel(e.target.value)} value={HouseRunningLevel}>
            <Radio value={'一级'}>一级</Radio>
            <Radio value={'二级'} style={{ marginLeft: '10px'}}>二级</Radio>
            <Radio value={'三级'} style={{ marginLeft: '10px'}}>三级</Radio>
            <Radio value={'四级'} style={{ marginLeft: '10px'}}>四级</Radio>
            <Radio value={'五级'} style={{ marginLeft: '10px'}}>五级</Radio>
            <Radio value={'暂定'} style={{ marginLeft: '10px'}}>暂定</Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {HouseRunningLevel === '其他' ? <Form.Item name="Statistic_CompanyInfo_62"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '36',
      label: '批发和零售业、住宿和餐饮业单位经营形式',
      children: 
        <Form.Item name="Statistic_CompanyInfo_63">
          <Radio.Group disabled={disableVar} size='large' style={{marginTop: '10px' }} onChange={(e) => setRunningType(e.target.value)} value={RunningType}>
            <Radio value={'独立门店'}>独立门店</Radio>
            <Radio value={'连锁总店(总部)'} style={{ marginLeft: '10px'}}>
              连锁总店(总部)
              {RunningType === '连锁总店(总部)' ? <Form.Item name="Statistic_CompanyInfo_64"><Input disabled={disableVar} addonBefore='连锁品牌（商标或商号名称）：' style={{ width: '500px', marginLeft: '10px', marginTop: '0px' }}></Input></Form.Item> : null}
            </Radio>
            <Radio value={'连锁直营店'} style={{ marginLeft: '10px'}}>
              连锁直营店
              {RunningType === '连锁直营店' ? <Form.Item name="Statistic_CompanyInfo_64"><Input disabled={disableVar} addonBefore='连锁品牌（商标或商号名称）：' style={{ width: '500px', marginLeft: '10px', marginTop: '0px' }}></Input></Form.Item> : null}
            </Radio>
            <Radio value={'连锁加盟店'} style={{ marginLeft: '10px'}}>
              连锁加盟店
              {RunningType === '连锁加盟店' ? <Form.Item name="Statistic_CompanyInfo_64"><Input disabled={disableVar} addonBefore='连锁品牌（商标或商号名称）：' style={{ width: '500px', marginLeft: '10px', marginTop: '0px' }}></Input></Form.Item> : null}
            </Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {RunningType === '其他' ? <Form.Item name="Statistic_CompanyInfo_67"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '37',
      label: '有无店铺',
      children: 
      <>
        <Form.Item name="Statistic_CompanyInfo_68">
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setHaveStore(e.target.value)} value={HaveStore}>
            <Radio value={'有店铺零售'}>有店铺零售</Radio>
            <Radio value={'无店铺零售'} style={{ marginLeft: '10px'}}>无店铺零售</Radio>
          </Radio.Group>
        </Form.Item>
        <br></br>
        {HaveStore === '有店铺零售' ? 
          <Form.Item name="Statistic_CompanyInfo_69">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setHaveStoreType(e.target.value)} value={HaveStoreType}>
              <Radio value={'便利店'} style={{ marginLeft: '20px'}}>便利店</Radio>
              <Radio value={'超市'} style={{ marginLeft: '20px'}}>超市</Radio>
              <Radio value={'折扣店'} style={{ marginLeft: '20px'}}>折扣店</Radio>
              <Radio value={'仓储会员店'} style={{ marginLeft: '20px'}}>仓储会员店</Radio>
              <Radio value={'百货店'} style={{ marginLeft: '20px'}}>百货店</Radio>
              <Radio value={'购物中心'} style={{ marginLeft: '20px'}}>购物中心</Radio>
              <Radio value={'专业店'} style={{ marginLeft: '20px'}}>专业店</Radio>
              <Radio value={'品牌专卖店'} style={{ marginLeft: '20px'}}>品牌专卖店</Radio>
              <Radio value={'集合店'} style={{ marginLeft: '20px'}}>集合店</Radio>
              <Radio value={'无人值守商店'} style={{ marginLeft: '20px'}}>无人值守商店</Radio>
              <Radio value={'其他'} style={{ marginLeft: '20px'}}>
                其他
                {HaveStoreType === '其他' ? <Form.Item name="Statistic_CompanyInfo_70"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item> : null}
              </Radio>
            </Radio.Group>
          </Form.Item> : 
          HaveStore === '无店铺零售' ? 
          <Form.Item name="Statistic_CompanyInfo_71">
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setNoStoreType(e.target.value)} value={NoStoreType}>
              <Radio value={'网络零售'} style={{ marginLeft: '20px'}}>网络零售</Radio>
              <Radio value={'电视/广播零售'} style={{ marginLeft: '20px'}}>电视/广播零售</Radio>
              <Radio value={'邮寄零售'} style={{ marginLeft: '20px'}}>邮寄零售</Radio>
              <Radio value={'无人售货设备零售'} style={{ marginLeft: '20px'}}>无人售货设备零售</Radio>
              <Radio value={'电话零售'} style={{ marginLeft: '20px'}}>电话零售</Radio>
              <Radio value={'直销'} style={{ marginLeft: '20px'}}>直销</Radio>
              <Radio value={'流动货摊零售'} style={{ marginLeft: '20px'}}>流动货摊零售</Radio>
              <Radio value={'其他'} style={{ marginLeft: '20px'}}>
              其他
                {NoStoreType === '其他' ? <Form.Item name="Statistic_CompanyInfo_72"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item> : null}
              </Radio>
            </Radio.Group>
          </Form.Item> : null}
        </>,
      span: 3
    },
    {
      key: '38',
      label: '住宿业单位星级评定情况',
      children:
        <Form.Item name="Statistic_CompanyInfo_73">
          <Radio.Group disabled={disableVar} size='large' style={{marginTop: '10px' }} onChange={(e) => setHospitalityStarLevel(e.target.value)} value={HospitalityStarLevel}>
            <Radio value={'一星'}>一星</Radio>
            <Radio value={'二星'} style={{ marginLeft: '10px'}}>二星</Radio>
            <Radio value={'三星'} style={{ marginLeft: '10px'}}>三星</Radio>
            <Radio value={'四星'} style={{ marginLeft: '10px'}}>四星</Radio>
            <Radio value={'五星'} style={{ marginLeft: '10px'}}>五星</Radio>
            <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {HospitalityStarLevel === '其他' ? <Form.Item name="Statistic_CompanyInfo_74"><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input></Form.Item> : null}
            </Radio>
          </Radio.Group>
        </Form.Item>,
      span: 3
    },
    {
      key: '39',
      label: '单位组织结构情况',
      children: '-',
      span: 3
    },
    {
      key: '40',
      label: '本法人单位是否有上一级法人',
      children: 
        <>
          <Form.Item name="Statistic_CompanyInfo_75">
            <Select
              showSearch
              allowClear
              style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
              size='large'
              placeholder="本法人单位是否有上一级法人"
              optionFilterProp="label"
              options={[
                {
                  value: '是',
                  label: '是',
                },
                {
                  value: '否',
                  label: '否',
                }
              ]}
            />
          </Form.Item>,
          <br></br>
          {HaveUpperOwner === '是' ? 
            <>
              <Form.Item name="Statistic_CompanyInfo_76"><Input disabled={disableVar} size='large' addonBefore='上一级法人统一社会信用代码' addonAfter='尚未领取统一社会信用代码的填写原组织机构代码' style={{ width: '1030px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
              <br></br>
              <Form.Item name="Statistic_CompanyInfo_77"><Input disabled={disableVar} size='large' addonBefore='上一级法人单位详细名称' style={{ width: '1030px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>
            </>
            : null}
          </>,
      span: 3
    },
    {
      key: '41',
      label: '本法人单位是否有下属产业活动单位',
      children:
        <>
          <span>分支机构、派出机构、分公司、分部、分厂、分店等</span>
          <br></br>
          <Form.Item name="Statistic_CompanyInfo_78">
            <Select
              showSearch
              allowClear
              style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
              size='large'
              placeholder="本法人单位是否有下属产业活动单位"
              optionFilterProp="label"
              options={[
                {
                  value: '是',
                  label: '是',
                },
                {
                  value: '否',
                  label: '否',
                }
              ]}
            />
          </Form.Item>,
        </>,
      span: 3
    },
    {
      key: '42',
      label: '',
      children: <Form.Item name="Statistic_CompanyInfo_79"><Input disabled={disableVar} addonBefore='本法人单位所属产业活动单位共' addonAfter='个' size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    }
  ];

  
  const onFinish = (values) => {
    request('/api/get_ratio_config?table=StatisticCompanyBasicInfo', {
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
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
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