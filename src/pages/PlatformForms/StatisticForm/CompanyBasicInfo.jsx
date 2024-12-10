import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Select, Descriptions, Input, Button, FloatButton, message, DatePicker, Radio, Checkbox, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
// 此处要根据不同表格定制
const today = new Date();
const fillRequiredDate = '每月15日'
// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

const countDownDays = 15-day

export default function StatisticCompanyBasicInfo(props) {
  const [signUpTypeValue, setSignUpTypeValue] = useState('')
  const [signUpTypeSubValue, setSignUpTypeSubValue] = useState('')
  const [HaveStore, setHaveStore] = useState('')
  const [HaveStoreType, setHaveStoreType] = useState('')
  const [NoStoreType, setNoStoreType] = useState('')
  const [HaveUpperOwner, setHaveUpperOwner] = useState('')

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
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('StatisticCompanyBasicInfo')
        .then(function (config) {
          const new_res = JSON.parse(JSON.stringify(res));
          Object.keys(config).forEach(key => {
            if (key in new_res) {
              if (new_res[key] !== '') {
                let a = BigNumber(new_res[key])
                let b = BigNumber(config[key])
                new_res[key] = a.times(b).toString();
              }
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
      label: <span style={{fontSize: '16px'}}>是否为“视同法人单位”</span>,
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
      label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>单位名称</span>,
      children: <Form.Item name="company_basicinfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>行业类别</span>,
      children: <Form.Item name="company_basicinfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>行业性质</span>,
      children: <Form.Item name="company_basicinfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>主要业务活动</span>,
      children: <Form.Item name="company_basicinfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>税务登记证号</span>,
      children: <Form.Item name="Statistic_CompanyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>报表类别</span>,
      children: 
        <Form.Item name="Statistic_CompanyInfo_8">
          {/* <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择对应外商投资机构类型子类</span> */}
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择报表类别"
            optionFilterProp="label"
            options={[
              {
                value: '农业',
                label: '农业',
              },
              {
                value: '规模以上工业',
                label: '规模以上工业',
              },
              {
                value: '规模以下工业',
                label: '规模以下工业',
              },
              {
                value: '建筑业',
                label: '建筑业',
              },
              {
                value: '批发和零售业',
                label: '批发和零售业',
              },
              {
                value: '住宿和餐饮业',
                label: '住宿和餐饮业',
              },
              {
                value: '房地产开发经营业',
                label: '房地产开发经营业',
              },
              {
                value: '规模以上服务业',
                label: '规模以上服务业',
              },
              {
                value: '投资',
                label: '投资',
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
      key: '9',
      label: <span style={{fontSize: '16px'}}>单位所在地区划及详细地址</span>,
      children: 
        <> 
          <Form.Item name="company_basicinfo_11"><Input size='large' addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12"><Input size='large' addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13"><Input size='large' addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input size='large' addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input size='large' addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16"><Input size='large' addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17"><Input size='large' addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 3
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>区划代码</span>,
      children: <Form.Item name="Statistic_CompanyInfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>城乡代码</span>,
      children: <Form.Item name="Statistic_CompanyInfo_18"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>单位注册地区划及详细地址</span>,
      children: (
        <>
          <span>
            <Form.Item name="company_basicinfo_r1">
              <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px', marginTop: '10px' }}>是否与单位所在地区划及详细地址一致：</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
                size='large'
                placeholder="是/否"
                optionFilterProp="label"
                options={[
                  {
                    value: '请选择',
                    label: '请选择',
                  },
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
            </Form.Item>
          </span>
          <br></br>
          <Form.Item name="company_basicinfo_11"><Input size='large' addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12"><Input size='large' addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13"><Input size='large' addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input size='large' addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input size='large' addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16"><Input size='large' addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17"><Input size='large' addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>
      ),
      span: 3
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>区划代码</span>,
      children: <Form.Item name="Statistic_CompanyInfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>城乡代码</span>,
      children: <Form.Item name="Statistic_CompanyInfo_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>单位规模</span>,
      children: 
        <Form.Item name="company_basicinfo_r2">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择对应单位规模"
            optionFilterProp="label"
            options={[
              {
                value: '大型',
                label: '大型',
              },
              {
                value: '中型',
                label: '中型',
              },
              {
                value: '小型',
                label: '小型',
              },
              {
                value: '微型',
                label: '微型',
              }
            ]}
          />
        </Form.Item>,
      span: 3
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>企业主要经济指标</span>,
      children: <span style={{fontSize: '16px', marginLeft: '10px'}}>以下为企业主要经济指标</span>,
      span: 3
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>营业收入</span>,
      children: <Form.Item name="company_runningsum_1"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>其中：主营业务收入</span>,
      children: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>资产总计</span>,
      children: <Form.Item name="FinanceStatusInfo_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>其他基本信息</span>,
      children: <span style={{fontSize: '16px', marginLeft: '10px'}}>以下为其他基本信息</span>,
      span: 3
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>法定代表人</span>,
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>成立时间（所有单位填报）</span>,
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>开业时间（仅限企业填报）</span>,
      children: <Form.Item name="company_basicinfo_open_date"><DatePicker format="YYYY-MM-DD" disabled={disableVar} size='large' placeholder='请选择开业时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1.5
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>联系方式</span>,
      children: 
        <>
          <Form.Item name="company_basicinfo_32"><Input size='large' addonBefore="长途区号" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_33"><Input size='large' addonBefore="固定电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_34"><Input size='large' addonBefore="通信地址" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_35"><Input size='large' addonBefore="电子邮箱" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_36"><Input size='large' addonBefore="移动电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_37"><Input size='large' addonBefore="传真号码" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_38"><Input size='large' addonBefore="邮政编码" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>        </>,
      span: 3
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>机构类型</span>,
      children: 
        <Form.Item name="company_basicinfo_r3">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择对应机构类型"
            optionFilterProp="label"
            options={[
              {
                value: '企业',
                label: '企业',
              },
              {
                value: '事业单位',
                label: '事业单位',
              },
              {
                value: '机关',
                label: '机关',
              },
              {
                value: '社会团体',
                label: '社会团体',
              },
              {
                value: '民办非企业单位',
                label: '民办非企业单位',
              },
              {
                value: '基金会',
                label: '基金会',
              },
              {
                value: '居委会',
                label: '居委会',
              },
              {
                value: '村委会',
                label: '村委会',
              },
              {
                value: '农民专业合作社',
                label: '农民专业合作社',
              },
              {
                value: '农村集体经济组织',
                label: '农村集体经济组织',
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
      key: '26',
      label: <span style={{fontSize: '16px'}}>登记注册类型</span>,
      children: 
        <>
          <Form.Item name="company_basicinfo_r4">
            <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>先选择登记注册类型后再选择注册类型子类</span>
            <Select
              allowClear
              style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
              size='large'
              placeholder="请选择对应机构类型"
              optionFilterProp="label"
              onChange={(value, option) => setSignUpTypeValue(value)} 
              defaultValue={signUpTypeValue}
              options={[
                {
                  value: '内资',
                  label: '内资',
                },
                {
                  value: '港澳台商投资',
                  label: '港澳台商投资',
                },
                {
                  value: '外商投资',
                  label: '外商投资',
                }
              ]}
            />
          </Form.Item>
          <br></br>
          {signUpTypeValue === '内资' ? 
            <Form.Item name="company_basicinfo_r5">
              <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择对应内资机构类型子类</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px' }}
                size='large'
                placeholder="请选择对应机构类型"
                optionFilterProp="label"
                onChange={(value, option) => setSignUpTypeSubValue(value)} 
                defaultValue={signUpTypeSubValue}
                options={[
                  {
                    value: '国有',
                    label: '国有',
                  },
                  {
                    value: '其他有限责任公司',
                    label: '其他有限责任公司',
                  },
                  {
                    value: '集体',
                    label: '集体',
                  },
                  {
                    value: '股份合作',
                    label: '股份合作',
                  },
                  {
                    value: '国有联营',
                    label: '国有联营',
                  },
                  {
                    value: '国有与集体联营',
                    label: '国有与集体联营',
                  },
                  {
                    value: '其他联营',
                    label: '其他联营',
                  },
                  {
                    value: '国有独资公司',
                    label: '国有独资公司',
                  },
                  {
                    value: '股份有限公司',
                    label: '股份有限公司',
                  },
                  {
                    value: '私营独资',
                    label: '私营独资',
                  },
                  {
                    value: '私营合伙',
                    label: '私营合伙',
                  },
                  {
                    value: '私营有限责任公司',
                    label: '私营有限责任公司',
                  },
                  {
                    value: '私营股份有限公司',
                    label: '私营股份有限公司',
                  },
                  {
                    value: '其他',
                    label: '其他',
                  }
                ]}
              />
            </Form.Item> : 
            signUpTypeValue === '港澳台商投资' ? 
            <Form.Item name="company_basicinfo_r6">
              <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择对应港澳台商投资机构类型子类</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px' }}
                size='large'
                placeholder="请选择对应机构类型"
                optionFilterProp="label"
                onChange={(value, option) => setSignUpTypeSubValue(value)} 
                options={[
                  {
                    value: '与港澳台商合资经营',
                    label: '与港澳台商合资经营',
                  },
                  {
                    value: '与港澳台商合作经营',
                    label: '与港澳台商合作经营',
                  },
                  {
                    value: '港澳台商独资',
                    label: '港澳台商独资',
                  },
                  {
                    value: '港澳台商投资股份有限公司',
                    label: '港澳台商投资股份有限公司',
                  },
                  {
                    value: '其他港澳台投资',
                    label: '其他港澳台投资',
                  }
                ]}
              />
            </Form.Item> : 
            signUpTypeValue === '外商投资' ? 
            <Form.Item name="company_basicinfo_r7">
              <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择对应外商投资机构类型子类</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px' }}
                size='large'
                placeholder="请选择对应机构类型"
                optionFilterProp="label"
                onChange={(value, option) => setSignUpTypeSubValue(value)} 
                options={[
                  {
                    value: '中外合资经营',
                    label: '中外合资经营',
                  },
                  {
                    value: '中外合作经营',
                    label: '中外合作经营',
                  },
                  {
                    value: '外资企业',
                    label: '外资企业',
                  },
                  {
                    value: '外商投资股份有限公司',
                    label: '外商投资股份有限公司',
                  },
                  {
                    value: '其他外商投资',
                    label: '其他外商投资',
                  }
                ]}
              />
            </Form.Item> : null}
        </>,
      span: 3
    },
    // {
    //   key: '27',
    //   label: '港澳台商投资情况',
    //   children: 
    //   <>
    //     （可多选）（仅限港澳台商投资企业填报）
    //     <Checkbox.Group disabled={disableVar} options={HKTWInvestSituation} />
    //   </>,
    //   span: 3
    // },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>企业控股情况</span>,
      children: 
        <Form.Item name="company_basicinfo_r8">
          {/* <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择对应外商投资机构类型子类</span> */}
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择企业控股情况"
            optionFilterProp="label"
            onChange={(value, option) => setSignUpTypeSubValue(value)} 
            options={[
              {
                value: '国有控股',
                label: '国有控股',
              },
              {
                value: '集体控股',
                label: '集体控股',
              },
              {
                value: '私人控股',
                label: '私人控股',
              },
              {
                value: '港澳台控股',
                label: '港澳台控股',
              },
              {
                value: '外商控股',
                label: '外商控股',
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
      key: '29',
      label: <span style={{fontSize: '16px'}}>隶属关系</span>,
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
      label: <span style={{fontSize: '16px'}}>运营状态</span>,
      children: 
        <Form.Item name="company_basicinfo_r13">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="请选择企业运营状态"
            optionFilterProp="label"
            options={[
              {
                value: '正常运营',
                label: '正常运营',
              },
              {
                value: '停业（歇业）',
                label: '停业（歇业）',
              },
              {
                value: '筹建',
                label: '筹建',
              },
              {
                value: '当年关闭',
                label: '当年关闭',
              },
              {
                value: '当年破产',
                label: '当年破产',
              },
              {
                value: '当年注销',
                label: '当年注销',
              },
              {
                value: '当年撤（吊）销',
                label: '当年撤（吊）销',
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
      key: '31',
      label: <span style={{fontSize: '16px'}}>执行会计标准类别</span>,
      children: 
        <Form.Item name="company_basicinfo_r10">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择企业执行会计标准类别"
            optionFilterProp="label"
            options={[
              {
                value: '企业会计准则制度',
                label: '企业会计准则制度',
              },
              {
                value: '政府会计准则制度',
                label: '政府会计准则制度',
              },
              {
                value: '民间非盈利组织会计制度',
                label: '民间非盈利组织会计制度',
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
      label: '企业集团情况',
      children: 
        <Form.Item name="Statistic_CompanyInfo_58">
          <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>（限企业集团母公司及成员企业填写）本企业是</span>
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="请选择企业控股情况"
            optionFilterProp="label"
            options={[
              {
                value: '集团母公司',
                label: '1.集团母公司（核心企业或集团总部）',
              },
              {
                value: '成员企业',
                label: '2.成员企业——请填直接上级法人统一社会信用代码（尚未领取统一社会信用代码的填原组织机构代码）',
              }
            ]}
          />
        </Form.Item>,
      span: 3
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>建筑业企业资质登记编码</span>,
      children: <Form.Item name="Statistic_CompanyInfo_59"><Input disabled={disableVar} size='large' style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>建筑业企业新资质等级编码</span>,
      children: 
        <Form.Item name="Statistic_CompanyInfo_60">
          <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>若已更换最新资质证书，按新资质再次填写</span>
          <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>
        </Form.Item>,
      span: 3,
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>房地产开发经营业企业资质等级</span>,
      children: 
        <Form.Item name="Statistic_CompanyInfo_61">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px' }}
            size='large'
            placeholder="选择房地产开发经营业企业资质等级"
            optionFilterProp="label"
            options={[
              {
                value: '一级',
                label: '一级',
              },
              {
                value: '二级',
                label: '二级',
              },
              {
                value: '三级',
                label: '三级',
              },
              {
                value: '四级',
                label: '四级',
              },
              {
                value: '五级',
                label: '五级',
              },
              {
                value: '暂定',
                label: '暂定',
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
      key: '36',
      label: <span style={{fontSize: '16px'}}>批发和零售业、住宿和餐饮业单位经营形式</span>,
      children: 
        <Form.Item name="Statistic_CompanyInfo_63">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px' }}
            size='large'
            placeholder="选择房地产开发经营业企业资质等级"
            optionFilterProp="label"
            options={[
              {
                value: '独立门店',
                label: '独立门店',
              },
              {
                value: '连锁总店(总部)',
                label: '连锁总店(总部)',
              },
              {
                value: '连锁直营店',
                label: '连锁直营店',
              },
              {
                value: '连锁加盟店',
                label: '连锁加盟店',
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
      key: '37',
      label: <span style={{fontSize: '16px'}}>有无店铺</span>,
      children: 
      <>
        <Form.Item name="Statistic_CompanyInfo_68">
          <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>先选择有无店铺后再选择具体店铺类型</span>
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="选择有无店铺"
            optionFilterProp="label"
            onChange={(value, option) => setHaveStore(value)} 
            defaultValue={HaveStore}
            options={[
              {
                value: '有店铺零售',
                label: '有店铺零售',
              },
              {
                value: '无店铺零售',
                label: '无店铺零售',
              }
            ]}
          />  
        </Form.Item>
        <br></br>
        {HaveStore === '有店铺零售' ? 
          <Form.Item name="Statistic_CompanyInfo_69">
            <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择有店铺零售店铺类型</span>
            <Select
              allowClear
              style={{ width: '200px', marginLeft: '10px' }}
              size='large'
              placeholder="选择有店铺零售店铺类型"
              optionFilterProp="label"
              onChange={(value, option) => setHaveStoreType(value)} 
              defaultValue={HaveStoreType}
              options={[
                {
                  value: '便利店',
                  label: '便利店',
                },
                {
                  value: '超市',
                  label: '超市',
                },
                {
                  value: '折扣店',
                  label: '折扣店',
                },
                {
                  value: '仓储会员店',
                  label: '仓储会员店',
                },
                {
                  value: '百货店',
                  label: '百货店',
                },
                {
                  value: '购物中心',
                  label: '购物中心',
                },
                {
                  value: '专业店',
                  label: '专业店',
                },
                {
                  value: '品牌专卖店',
                  label: '品牌专卖店',
                },
                {
                  value: '集合店',
                  label: '集合店',
                },
                {
                  value: '无人值守商店',
                  label: '无人值守商店',
                },
                {
                  value: '其他',
                  label: '其他',
                }
              ]}
            />  
          </Form.Item> : 
          HaveStore === '无店铺零售' ? 
          <Form.Item name="Statistic_CompanyInfo_71">
            <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>请选择无店铺零售零售方式</span>
            <Select
              allowClear
              style={{ width: '200px', marginLeft: '10px' }}
              size='large'
              placeholder="选择无店铺零售零售方式"
              optionFilterProp="label"
              onChange={(value, option) => setNoStoreType(value)} 
              defaultValue={NoStoreType}
              options={[
                {
                  value: '网络零售',
                  label: '网络零售',
                },
                {
                  value: '电视/广播零售',
                  label: '电视/广播零售',
                },
                {
                  value: '邮寄零售',
                  label: '邮寄零售',
                },
                {
                  value: '无人售货设备零售',
                  label: '无人售货设备零售',
                },
                {
                  value: '电话零售',
                  label: '电话零售',
                },
                {
                  value: '直销',
                  label: '直销',
                },
                {
                  value: '流动货摊零售',
                  label: '流动货摊零售',
                },
                {
                  value: '其他',
                  label: '其他',
                }
              ]}
            />  
          </Form.Item> : null}
        </>,
      span: 3
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>住宿业单位星级评定情况</span>,
      children:
        <Form.Item name="Statistic_CompanyInfo_73">
          <Select
            allowClear
            style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择住宿业单位星级评定情况"
            optionFilterProp="label"
            options={[
              {
                value: '一星',
                label: '一星',
              },
              {
                value: '二星',
                label: '二星',
              },
              {
                value: '三星',
                label: '三星',
              },
              {
                value: '四星',
                label: '四星',
              },
              {
                value: '五星',
                label: '五星',
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
      key: '39',
      label: <span style={{fontSize: '16px'}}>单位组织结构情况</span>,
      children: <span style={{fontSize: '16px', marginLeft: '10px'}}>以下为单位组织结构情况</span>,
      span: 3
    },
    {
      key: '40',
      label: <span style={{fontSize: '16px'}}>本法人单位是否有上一级法人</span>,
      children: 
        <>
          <Form.Item name="Statistic_CompanyInfo_75">
            <span style={{ width: '200px', fontSize: '16px', marginLeft: '10px' }}>先选择本法人单位是否有上一级法人，若选择是请填写上一级法人信息</span>
            <Select
              showSearch
              allowClear
              style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
              size='large'
              placeholder="本法人单位是否有上一级法人"
              optionFilterProp="label"
              onChange={(value, option) => setHaveUpperOwner(value)} 
              defaultValue={HaveUpperOwner}
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
          </Form.Item>
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
      label: <span style={{fontSize: '16px'}}>本法人单位是否有下属产业活动单位</span>,
      children:
        <>
          <span style={{marginLeft: '10px', fontSize: '16px'}}>分支机构、派出机构、分公司、分部、分厂、分店等</span>
          <br></br>
          <Form.Item name="Statistic_CompanyInfo_78">
            <Select
              allowClear
              style={{ width: '300px', marginLeft: '10px', marginTop: '10px' }}
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
          </Form.Item>
        </>,
      span: 3
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}></span>,
      children: <Form.Item name="Statistic_CompanyInfo_79"><Input size='large' addonBefore='本法人单位所属产业活动单位共' addonAfter='个' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '42',
      label: <span style={{fontSize: '16px'}}>连锁品牌（商标或商号名称）</span>,
      children: <Form.Item name="Statistic_CompanyInfo_80"><Input size='large' addonAfter='个' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
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
          if (new_res[key] !== '') {
            let a = BigNumber(new_res[key])
            let b = BigNumber(config[key])
            new_res[key] = a.div(b).toString();
          }
        }
      });
      const exist = localStorage.getItem("currentUser");
      const uuid = JSON.parse(exist).uuid;
      if (uuid == undefined || uuid == null || uuid === '') {
        history.push('/auto_fill/user/login')
      }
      request('/api/save', {
        method: 'POST',
        data: {
          date: props.date,
          data: new_res,
          uuid: uuid
        }
      })
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <span style={{ fontSize: '17px' }}>【填报日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1300px'}} title="【报表名称】单位基本信息" bordered items={items} />
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
              onClick={() => {window.location.href = '/auto_fill/input?tab=4'}}
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}