import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form, Select, DatePicker, Modal} from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, transferDate, saveDateAsString } from '@/pages/Utils'
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

export default function BasicInfoHumanResource(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();
  const [changed, setChanged] = useState(false)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showConfirmationModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log(isModalVisible)
  };
 
  const handleConfirm = () => {
    window.location.href = 'https://www.baidu.com'; // 替换为目标页面的URL
  };
 
  useEffect(() => {
    load_data(props.date);
    console.log("changed", changed)

    function handleBeforeUnload(event) {
      if(changed) {
        setIsModalVisible(true);
      }else{
        setIsModalVisible(false);
      }
      event.preventDefault();
      event.returnValue = '';
    };
 
    window.addEventListener('beforeunload', handleBeforeUnload);
 
    // return () => {
    //   window.removeEventListener('beforeunload', handleBeforeUnload);
    // };
  }, [props.date]);

  // useEffect(() => {
  //   load_data(props.date);
  // }, [props.date]);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('BasicInfoHumanResource')
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
          var after = transferDate(new_res);
          form.resetFields();
          form.setFieldsValue(after);
        })
      })
  }

  const [form] = Form.useForm();

  const SaveSuccess = () => {
    setChanged(false)
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
      label: <span style={{fontSize: '16px'}}>统一社会信用代码</span>,
      children: <Form.Item name="company_basicinfo_1" ><Input onChange={() => setChanged(true)} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>单位名称</span>,
      children: <Form.Item name="company_basicinfo_2" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>所属行政区划</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_61"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>行业小类</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_63"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>行业中类</span>,
      children: <Form.Item name="hs_basic_2"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>行业大类</span>,
      children: <Form.Item name="hs_basic_3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>行业代码</span>,
      children: <Form.Item name="company_basicinfo_7"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>工商登记执照种类</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_64"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>工商营业执照号码</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_68"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>组织机构代码</span>,
      children: <Form.Item name="company_basicinfo_10"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
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
      key: '12',
      label: <span style={{fontSize: '16px'}}>经济类型</span>,
      children: 
        <Form.Item name="CompanyInfoChange_4">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择经济类型"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '内资',
                label: '内资',
              },
              {
                value: '国有全资',
                label: '国有全资',
              },
              {
                value: '集体全资',
                label: '集体全资',
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
                value: '集体联营',
                label: '集体联营',
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
                value: '国有独资（公司）',
                label: '国有独资（公司）',
              },
              {
                value: '其他有限责任公司（公司）',
                label: '其他有限责任公司（公司）',
              },
              {
                value: '股份有限（公司）',
                label: '股份有限（公司）',
              },
              {
                value: '私有独资',
                label: '私有独资',
              },
              {
                value: '私有合伙',
                label: '私有合伙',
              },
              {
                value: '私营有限责任（公司）',
                label: '私营有限责任（公司）',
              },
              {
                value: '私营股份有限（公司）',
                label: '私营股份有限（公司）',
              },
              {
                value: '个体经营',
                label: '个体经营',
              },
              {
                value: '其他私有',
                label: '其他私有',
              },
              {
                value: '其他内资',
                label: '其他内资',
              },
              {
                value: '内地和港、澳。台合资',
                label: '内地和港、澳。台合资',
              },
              {
                value: '内地和港、澳。台合作',
                label: '内地和港、澳。台合作',
              },
              {
                value: '港、澳。台独资',
                label: '港、澳。台独资',
              },
              {
                value: '港、澳。台投资股份有限（公司）',
                label: '港、澳。台投资股份有限（公司）',
              },
              {
                value: '其他港、澳。台投资',
                label: '其他港、澳。台投资',
              },
              {
                value: '中外合资',
                label: '中外合资',
              },
              {
                value: '中外合作',
                label: '中外合作',
              },
              {
                value: '外资',
                label: '外资',
              },
              {
                value: '国外投资股份有限（公司）',
                label: '国外投资股份有限（公司）',
              },
              {
                value: '其他国外投资',
                label: '其他国外投资',
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
      key: '13',
      label: <span style={{fontSize: '16px'}}>经济类型明细</span>,
      children: 
        <Form.Item name="HumanSocial_NewSheBao_77">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择经济类型明细"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '内资',
                label: '内资',
              },
              {
                value: '国有全资',
                label: '国有全资',
              },
              {
                value: '集体全资',
                label: '集体全资',
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
                value: '集体联营',
                label: '集体联营',
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
                value: '国有独资（公司）',
                label: '国有独资（公司）',
              },
              {
                value: '其他有限责任公司（公司）',
                label: '其他有限责任公司（公司）',
              },
              {
                value: '股份有限（公司）',
                label: '股份有限（公司）',
              },
              {
                value: '私有独资',
                label: '私有独资',
              },
              {
                value: '私有合伙',
                label: '私有合伙',
              },
              {
                value: '私营有限责任（公司）',
                label: '私营有限责任（公司）',
              },
              {
                value: '私营股份有限（公司）',
                label: '私营股份有限（公司）',
              },
              {
                value: '个体经营',
                label: '个体经营',
              },
              {
                value: '其他私有',
                label: '其他私有',
              },
              {
                value: '其他内资',
                label: '其他内资',
              },
              {
                value: '内地和港、澳。台合资',
                label: '内地和港、澳。台合资',
              },
              {
                value: '内地和港、澳。台合作',
                label: '内地和港、澳。台合作',
              },
              {
                value: '港、澳。台独资',
                label: '港、澳。台独资',
              },
              {
                value: '港、澳。台投资股份有限（公司）',
                label: '港、澳。台投资股份有限（公司）',
              },
              {
                value: '其他港、澳。台投资',
                label: '其他港、澳。台投资',
              },
              {
                value: '中外合资',
                label: '中外合资',
              },
              {
                value: '中外合作',
                label: '中外合作',
              },
              {
                value: '外资',
                label: '外资',
              },
              {
                value: '国外投资股份有限（公司）',
                label: '国外投资股份有限（公司）',
              },
              {
                value: '其他国外投资',
                label: '其他国外投资',
              },
              {
                value: '其他',
                label: '其他',
              },
              {
                value: '社会化管理（住院）',
                label: '社会化管理（住院）',
              },
              {
                value: '灵活就业人员（基本）',
                label: '灵活就业人员（基本）',
              },
              {
                value: '社会化管理（基本）',
                label: '社会化管理（基本）',
              },
              {
                value: '自愿参加医疗保险（基本）',
                label: '自愿参加医疗保险（基本）',
              },
              {
                value: '县以上集体企业',
                label: '县以上集体企业',
              },
              {
                value: '城镇小集体企业',
                label: '城镇小集体企业',
              },
              {
                value: '灵活就业人员（住院）',
                label: '灵活就业人员（住院）',
              },
              {
                value: '自愿参加医疗保险（住院）',
                label: '自愿参加医疗保险（住院）',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>单位类型</span>,
      children: <Form.Item name="company_basicinfo_r3"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>注册资本</span>,
      children: <Form.Item name="company_basicinfo_45"><Input size='large' addonAfter='元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>单位成立时间</span>,
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>联系人</span>,
      children: <Form.Item name="company_basicinfo_30"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>联系电话</span>,
      children: <Form.Item name="company_basicinfo_29"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>工商登记有效期（开始时间）</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_66"><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择开始时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>工商登记有效期限</span>,
      children: <Form.Item name="company_basicinfo_9" ><Input size='large' addonAfter='年' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>工商登记发证日期</span>,
      children: <Form.Item name="hs_basic_4" ><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择发证时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>执照有效起始日期</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_69"><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择状态起始日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>执照有效终止日期</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_70"><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择状态终止日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>批准文号</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_71"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>批准日期</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_72"><DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>经营范围</span>,
      children: <Form.Item name="company_basicinfo_8" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>法人单位ID</span>,
      children: <Form.Item name="hs_basic_3" ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>法人姓名</span>,
      children: <Form.Item name="company_basicinfo_26"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '26',
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
      key: '27',
      label: <span style={{fontSize: '16px'}}>法人证件号码</span>,
      children: <Form.Item name="company_basicinfo_28"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>法人联系电话</span>,
      children: <Form.Item name="company_basicinfo_31"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>地税机构</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_83"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>地税税号</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_84"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>批准成立单位</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_85"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>电子邮箱</span>,
      children: <Form.Item name="company_basicinfo_35"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>单位地址</span>,
      children: <Form.Item name="company_basicinfo_17"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>邮政编码</span>,
      children: <Form.Item name="company_basicinfo_38"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>其他登记证件种类</span>,
      children: 
        <Form.Item name="HumanSocial_NewSheBao_80">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择其他登记证件种类"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '联合行医执照',
                label: '联合行医执照',
              },
              {
                value: '社会办医行医执照',
                label: '社会办医行医执照',
              },
              {
                value: '个体行医执照',
                label: '个体行医执照',
              },
              {
                value: '特种行业执照',
                label: '特种行业执照',
              },
              {
                value: '律师事务所执照许可证',
                label: '律师事务所执照许可证',
              },
              {
                value: '民办非企业单位登记证书',
                label: '民办非企业单位登记证书',
              },
              {
                value: '社会团体法人登记证书',
                label: '社会团体法人登记证书',
              },
              {
                value: '机关事业单位登记',
                label: '机关事业单位登记',
              },
              {
                value: '外地驻青办事机构登记证',
                label: '外地驻青办事机构登记证',
              },
              {
                value: '事业单位法人证书',
                label: '事业单位法人证书',
              },
              {
                value: '青岛市非正规就业劳动组织证书',
                label: '青岛市非正规就业劳动组织证书',
              },
              {
                value: '外国（地区）企业常驻代表机构登记证',
                label: '外国（地区）企业常驻代表机构登记证',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>其他登记证件号码</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_81"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '37',
      label: <span style={{fontSize: '16px'}}>法人所任职务</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_96"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: <span style={{fontSize: '16px'}}>投资国家或地区</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_97"><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      key: '39',
      label: <span style={{fontSize: '16px'}}>特殊情况说明</span>,
      children: <Form.Item name="HumanSocial_NewSheBao_98"><Input size='large' style={{ width: '830px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=BasicInfoHumanResource', {
      method: 'GET',
    })
    .then(function (config) {
      var after = saveDateAsString(values);
      const new_res = JSON.parse(JSON.stringify(after));
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】基本信息" bordered items={items} />
          <FloatButton.Group
            open={defaultOpen}
            trigger="click"
            style={{
              insetInlineEnd: 0,
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
          <>
            <Modal
              title="确认离开"
              open={isModalVisible}
              onCancel={handleCancel}
              footer={[
                <Button key="cancel" onClick={handleCancel}>
                  取消
                </Button>,
                <Button key="confirm" type="primary" onClick={handleConfirm}>
                  确认
                </Button>,
              ]}
            >
              您确定要离开此页面吗？
            </Modal>
          </>
        </Form>
      </div>
    </>
  );
}