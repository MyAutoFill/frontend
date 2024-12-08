import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Select, Checkbox, DatePicker, Radio, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { requestCompanyData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

const { TextArea } = Input;

export default function BasicCompanyInfo(props) {
  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  const dateFormat = 'YYYY-MM-DD';

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill_test/user/login')
    }
    requestCompanyData(uuid)
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
    request('/api_test/get_ratio_config?table=BasicCompanyInfo', {
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
      const uuid = JSON.parse(exist).uuid;
      if (uuid == undefined || uuid == null || uuid === '') {
        history.push('/auto_fill_test/user/login')
      }
      request('/api_test/save_company_data', {
        method: 'POST',
        data: {
          data: new_res,
          uuid: uuid
        }
      })
    })
  };

  const [form] = Form.useForm();

  const [signUpTypeValue, setSignUpTypeValue] = useState('')
  const [signUpTypeSubValue, setSignUpTypeSubValue] = useState('')

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
      label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
      children: <Form.Item name="company_basicinfo_1" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>单位名称</span>,
      children: <Form.Item name="company_basicinfo_2" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>单位曾用名</span>,
      children: <Form.Item name="company_basicinfo_3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>行业类别</span>,
      children: <Form.Item name="company_basicinfo_4" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>行业性质</span>,
      children: <Form.Item name="company_basicinfo_5"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>主要业务活动</span>,
      children: <Form.Item name="company_basicinfo_6" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>行业代码</span>,
      children: <Form.Item name="company_basicinfo_7" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>经营范围</span>,
      children: <Form.Item name="company_basicinfo_8" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>工商登记有效期限（年）</span>,
      children: <Form.Item name="company_basicinfo_9" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>组织机构代码</span>,
      children: <Form.Item name="company_basicinfo_10" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '600px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>公司介绍</span>,
      children: <Form.Item name="company_basicinfo_47"><TextArea rows={4} placeholder="请输入公司介绍" /></Form.Item>,
      span: 3
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>单位所在地区划及详细地址</span>,
      children: 
        <>
          <Form.Item name="company_basicinfo_11" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input size='large' addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input size='large' addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 3
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>区划代码</span>,
      children: <Form.Item name="company_basicinfo_18"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>单位注册地区划及详细地址</span>,
      children: (
        <>
          <Form.Item name="company_basicinfo_r1">
            <span style={{ width: '200px', marginLeft: '10px', marginTop: '10px', fontSize: '16px' }}>是否与单位所在地区划及详细地址一致：</span>
            <Select
              allowClear
              style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
              size='large'
              placeholder="是/否"
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
          <br></br>
          <Form.Item name="company_basicinfo_11" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="省（自治区、直辖市）" style={{ width: '350px', marginLeft: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_12" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="市（地、州、盟)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_13" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="县（市、区、旗)" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_14"><Input size='large' addonBefore="乡（镇、街道办事处）" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_15"><Input size='large' addonBefore="村（居）委会" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_16" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="街（路）、门牌" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_17" rules={[{required: true, message: '该项必填'}]}><Input size='large' addonBefore="详细地址" style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
        </>
      ),
      span: 3
    },
    {
      key: '14',
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
      key: '15',
      label: <span style={{fontSize: '16px'}}>法定代表人（单位负责人）</span>,
      children: <Form.Item name="company_basicinfo_26" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '',
      label: <span style={{fontSize: '16px'}}>民族</span>,
      children: <Form.Item name="company_basicinfo_43" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '',
      label: <span style={{fontSize: '16px'}}>出生日期</span>,
      children: <Form.Item name="company_basicinfo_41"><DatePicker format={dateFormat} onChange={(date, dateString) => {console.log(date, dateString)}} size='large' placeholder='请选择出生日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 3
    },
    {
      key: '',
      label: <span style={{fontSize: '16px'}}>文化程度</span>,
      children: <Form.Item name="company_basicinfo_44" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>国别或地区代码</span>,
      children: <Form.Item name="company_basicinfo_c1" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '94',
      label: <span style={{fontSize: '16px'}}>法人证件类型</span>,
      children: 
        <Form.Item name="company_basicinfo_27">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择法人证件类型"
            optionFilterProp="label"
            options={[
              {
                value: '居民身份证（户口簿）',
                label: '居民身份证（户口簿）',
              },
              {
                value: '中国人民解放军军官证',
                label: '中国人民解放军军官证',
              },
              {
                value: '中国人民武装警察警官证',
                label: '中国人民武装警察警官证',
              },
              {
                value: '香港特区护照/港澳居民往来内地通行证',
                label: '香港特区护照/港澳居民往来内地通行证',
              },
              {
                value: '澳门特区护照/港澳居民往来内地通行证',
                label: '澳门特区护照/港澳居民往来内地通行证',
              },
              {
                value: '台湾居民往来大陆通行证',
                label: '台湾居民往来大陆通行证',
              },
              {
                value: '外国人永久居留身份',
                label: '外国人永久居留身份',
              },
              {
                value: '护照',
                label: '护照',
              },
              {
                value: '残疾人证',
                label: '残疾人证',
              },
              {
                value: '军烈属证明',
                label: '军烈属证明',
              },
              {
                value: '外国人工作许可证',
                label: '外国人工作许可证',
              },
              {
                value: '外国常驻记者证',
                label: '外国常驻记者证',
              },
              {
                value: '回国（来华）定居专家证',
                label: '回国（来华）定居专家证',
              },
              {
                value: '港澳居民居住证',
                label: '港澳居民居住证',
              },
              {
                value: '台湾居民居住证',
                label: '台湾居民居住证',
              },
              {
                value: '社会保障卡',
                label: '社会保障卡',
              },
              {
                value: '其他身份证件',
                label: '其他身份证件',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>法人证件号码</span>,
      children: <Form.Item name="company_basicinfo_28" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '',
      label: <span style={{fontSize: '16px'}}>证件有效期至</span>,
      children: <Form.Item name="company_basicinfo_42"><DatePicker format={dateFormat} onChange={(date, dateString) => {console.log(date, dateString)}} size='large' placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>法人联系电话</span>,
      children: <Form.Item name="company_basicinfo_29" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>企业负责人</span>,
      children: <Form.Item name="company_basicinfo_30" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>联系电话</span>,
      children: <Form.Item name="company_basicinfo_31" rules={[{required: true, message: '该项必填'}]}><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>成立时间（所有单位填报）</span>,
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker format={dateFormat} onChange={(date, dateString) => {console.log(date, dateString)}} size='large' placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 3
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>联系方式</span>,
      children: 
        <>
          <Form.Item name="company_basicinfo_32"><Input size='large' addonBefore="长途区号" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_33"><Input size='large' addonBefore="固定电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_34"><Input size='large' addonBefore="通信地址" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_35"><Input size='large' addonBefore="电子邮箱" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_36"><Input size='large' addonBefore="移动电话" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_37"><Input size='large' addonBefore="传真号码" style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/></Form.Item>
          <Form.Item name="company_basicinfo_38"><Input size='large' addonBefore="邮政编码" style={{ width: '350px', marginTop: '10px' }}/></Form.Item>
        </>,
      span: 3
    },
    {
      key: '23',
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
      key: '24',
      label: <span style={{fontSize: '16px'}}>登记注册类型</span>,
      children: 
        <>
          <Form.Item name="company_basicinfo_r4">
            <span style={{ width: '200px', marginLeft: '10px', fontSize: '16px' }}>先选择登记注册类型后再选择注册类型子类</span>
            <Select
              allowClear
              style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
              size='large'
              placeholder="请选择对应登记注册类型"
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
              <span style={{ width: '200px', marginLeft: '10px' }}>请选择对应内资机构类型子类</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px' }}
                size='large'
                placeholder="请选择内资对应登记注册类型"
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
              <span style={{ width: '200px', marginLeft: '10px' }}>请选择对应港澳台商投资机构类型子类</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px' }}
                size='large'
                placeholder="请选择港澳台商投资对应登记注册类型"
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
              <span style={{ width: '200px', marginLeft: '10px' }}>请选择对应外商投资机构类型子类</span>
              <Select
                allowClear
                style={{ width: '200px', marginLeft: '10px' }}
                size='large'
                placeholder="请选择外商投资对应登记注册类型"
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
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>企业控股情况</span>,
      children: 
        <Form.Item name="company_basicinfo_r8">
          {/* <span style={{ width: '200px', marginLeft: '10px' }}>请选择对应外商投资机构类型子类</span> */}
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="请选择企业控股情况"
            optionFilterProp="label"
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
      key: '27',
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
      key: '28',
      label: <span style={{fontSize: '16px'}}>注册资本</span>,
      children: <Form.Item name="company_basicinfo_45"><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>运营状态</span>,
      children: 
        <Form.Item name="company_basicinfo_r27">
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
      key: '28',
      label: <span style={{fontSize: '16px'}}>执行会计标准类别</span>,
      children: 
        <Form.Item name="company_basicinfo_r10">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
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
      span: 1
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>执行企业会计准则情况</span>,
      children: 
        <Form.Item name="company_basicinfo_r11">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px' }}
            size='large'
            placeholder="选择执行企业会计准则情况"
            optionFilterProp="label"
            options={[
              {
                value: '执行《企业会计准则》',
                label: '执行《企业会计准则》',
              },
              {
                value: '执行《小企业会计准则》',
                label: '执行《小企业会计准则》',
              },
              {
                value: '执行其他企业会计制度',
                label: '执行其他企业会计制度',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>产业活动单位数</span>,
      children: <Form.Item name="company_basicinfo_46"><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>公司介绍</span>,
      children: <Form.Item name="company_basicinfo_47"><TextArea rows={4} placeholder="请输入公司介绍" /></Form.Item>,
      span: 3
    },
  ];

  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 950, width: 'auto', padding: 20, overflow:'auto'}} >
        <Form onFinish={onFinish} form={form}>
          <Descriptions style={{width: '1300px' }} title="单位基本信息" bordered items={items} />
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