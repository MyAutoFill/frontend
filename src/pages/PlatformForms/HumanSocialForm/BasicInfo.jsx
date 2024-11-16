import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form, Select, DatePicker } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';

export default function BasicInfoHumanResource(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();
  const [yewuqu, setYewuqu] = useState('')
  const [renyuanleibie, setRenyuanleibie] = useState('')
  const [renyuanleibie2, setRenyuanleibie2] = useState('')

  useEffect(() => {
    load_data(props.date);
  }, [props.date]);

  const load_data = (curDate) => {
    reqBasicData(curDate)
      .then(function (res) {
        reqRatioConfig('BasicInfoHumanResource')
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

  const yewujiedaoOptions = () => {
    if (yewuqu === '环翠区') {
      return [
        {
          value: '环翠楼街道办事处',
          label: '环翠楼街道办事处',
        },
        {
          value: '鲸园街道办事处',
          label: '鲸园街道办事处',
        },
        {
          value: '竹岛街道办事处',
          label: '竹岛街道办事处',
        },
        {
          value: '张村镇',
          label: '张村镇',
        },
        {
          value: '羊亭镇',
          label: '羊亭镇',
        },
        {
          value: '温泉镇',
          label: '温泉镇',
        },
        {
          value: '孙家疃镇',
          label: '孙家疃镇',
        },
        {
          value: '嵩山街道办事处',
          label: '嵩山街道办事处',
        },
        {
          value: '桥头镇',
          label: '桥头镇',
        },
      ]
    }else if(yewuqu === '高新区') {
      return [
        {
          value: '怡园街道办事处',
          label: '怡园街道办事处',
        },
        {
          value: '田和街道办事处',
          label: '田和街道办事处',
        },
        {
          value: '双岛街道办事处',
          label: '双岛街道办事处',
        },
        {
          value: '初村镇',
          label: '初村镇',
        }
      ]
    }else if(yewuqu === '经济区') {
      return [
        {
          value: '皇冠街道办事处',
          label: '皇冠街道办事处',
        },
        {
          value: '凤林街道办事处',
          label: '凤林街道办事处',
        },
        {
          value: '西苑街道办事处',
          label: '西苑街道办事处',
        },
        {
          value: '崮山镇',
          label: '崮山镇',
        },
        {
          value: '泊于镇',
          label: '泊于镇',
        }
      ]
    }else if(yewuqu === '临港区') {
      return [
        {
          value: '草庙子镇',
          label: '草庙子镇',
        },
        {
          value: '汪疃镇',
          label: '汪疃镇',
        },
        {
          value: '蔄山镇街道办事处',
          label: '蔄山镇街道办事处',
        },
        {
          value: '黄岚街道办事处',
          label: '黄岚街道办事处',
        }
      ]
    }else if(yewuqu === '威海火炬高技术产业开发区') {
      return [
        {
          value: '威海火炬高技术产业开发区',
          label: '威海火炬高技术产业开发区',
        }
      ]
    }else if(yewuqu === '文登区') {
      return [
        {
          value: '龙山街道办事处',
          label: '龙山街道办事处',
        },
        {
          value: '天福路街道办事处',
          label: '天福路街道办事处',
        },
        {
          value: '环山路街道办事处',
          label: '环山路街道办事处',
        },
        {
          value: '文登营镇',
          label: '文登营镇',
        },
        {
          value: '大水泊镇',
          label: '大水泊镇',
        },
        {
          value: '张家产镇',
          label: '张家产镇',
        },
        {
          value: '高村镇',
          label: '高村镇',
        },
        {
          value: '泽库镇',
          label: '泽库镇',
        },
        {
          value: '侯家镇',
          label: '侯家镇',
        },
        {
          value: '宋村镇',
          label: '宋村镇',
        },
        {
          value: '泽头镇',
          label: '泽头镇',
        },
        {
          value: '小观镇',
          label: '小观镇',
        },
        {
          value: '葛家镇',
          label: '葛家镇',
        },
        {
          value: '米山镇',
          label: '米山镇',
        },
        {
          value: '界石镇',
          label: '界石镇',
        },
        {
          value: '金山镇',
          label: '金山镇',
        },
        {
          value: '苘山镇',
          label: '苘山镇',
        },
        {
          value: '开发区办事处',
          label: '开发区办事处',
        },
        {
          value: '埠口港管理委员会',
          label: '埠口港管理委员会',
        }
      ]
    }else if(yewuqu === '荣成市') {
      return [
        {
          value: '宁津街道办事处',
          label: '宁津街道办事处',
        },
        {
          value: '港湾街道办事处',
          label: '港湾街道办事处',
        },
        {
          value: '桃园街道办事处',
          label: '桃园街道办事处',
        },
        {
          value: '王连街道办事处',
          label: '王连街道办事处',
        },
        {
          value: '东山街道办事处',
          label: '东山街道办事处',
        },
        {
          value: '斥山街道办事处',
          label: '斥山街道办事处',
        },
        {
          value: '崖头街道办事处',
          label: '崖头街道办事处',
        },
        {
          value: '城西街道办事处',
          label: '城西街道办事处',
        },
        {
          value: '寻山街道办事处',
          label: '寻山街道办事处',
        },
        {
          value: '崂山街道办事处',
          label: '崂山街道办事处',
        },
        {
          value: '俚岛镇',
          label: '俚岛镇',
        },
        {
          value: '成山镇',
          label: '成山镇',
        },
        {
          value: '埠柳镇',
          label: '埠柳镇',
        },
        {
          value: '港西镇',
          label: '港西镇',
        },
        {
          value: '夏庄镇',
          label: '夏庄镇',
        },
        {
          value: '崖西镇',
          label: '崖西镇',
        },
        {
          value: '荫子镇',
          label: '荫子镇',
        },
        {
          value: '滕家镇',
          label: '滕家镇',
        },
        {
          value: '大疃镇',
          label: '大疃镇',
        },
        {
          value: '上庄镇',
          label: '上庄镇',
        },
        {
          value: '虎山镇',
          label: '虎山镇',
        },
        {
          value: '人和镇',
          label: '人和镇',
        },
        {
          value: '石岛街道办事处',
          label: '石岛街道办事处',
        } 
      ]
    }else if(yewuqu === '乳山市') {
      return [
        {
          value: '城区街道办事处',
          label: '城区街道办事处',
        },
        {
          value: '夏村镇',
          label: '夏村镇',
        },
        {
          value: '乳山口镇',
          label: '乳山口镇',
        },
        {
          value: '海阳所镇',
          label: '海阳所镇',
        },
        {
          value: '白沙滩镇',
          label: '白沙滩镇',
        },
        {
          value: '大孤山镇',
          label: '大孤山镇',
        },
        {
          value: '南黄镇',
          label: '南黄镇',
        },
        {
          value: '冯家镇',
          label: '冯家镇',
        },
        {
          value: '下初镇',
          label: '下初镇',
        },
        {
          value: '午极镇',
          label: '午极镇',
        },
        {
          value: '育黎镇',
          label: '育黎镇',
        },
        {
          value: '崖子镇',
          label: '崖子镇',
        },
        {
          value: '诸往镇',
          label: '诸往镇',
        },
        {
          value: '乳山寨镇',
          label: '乳山寨镇',
        },
        {
          value: '徐家镇',
          label: '徐家镇',
        },
      ]
    }else if(yewuqu === '市本级') {
      return [
        {
          value: '市本级虚拟街道',
          label: '市本级虚拟街道',
        }
      ]
    }else{
      return []
    }
  }

  const renyuanleibieOptions = () => {
    if (renyuanleibie === '城镇新成长劳动力') {
      return [
        {
          value: '未能升学的初高中人员',
          label: '未能升学的初高中人员',
        },
        {
          value: '高校毕业生',
          label: '高校毕业生',
        }
      ]
    }else if(renyuanleibie === '就业转失业人员') {
      return [
        {
          value: '其他就业困难人员',
          label: '其他就业困难人员',
        },
        {
          value: '4050人员',
          label: '4050人员',
        }
      ]
    }else if(renyuanleibie === '残疾人') {
      return [
        {
          value: '残疾人',
          label: '残疾人',
        }
      ]
    }else if(renyuanleibie === '复员') {
      return [
        {
          value: '复员',
          label: '复员',
        }
      ]
    }else if(renyuanleibie === '刑满释放') {
      return [
        {
          value: '刑满释放',
          label: '刑满释放',
        }
      ]
    }else if(renyuanleibie === '农村劳动力') {
      return [
        {
          value: '农村劳动力',
          label: '农村劳动力',
        }
      ]
    }else if(renyuanleibie === '调转人员') {
      return [
        {
          value: '其他人员',
          label: '其他人员',
        },
        {
          value: '省属人员',
          label: '省属人员',
        },
        {
          value: '调用单位人员',
          label: '调用单位人员',
        }
      ]
    }else if(renyuanleibie === '人员接续') {
      return [
        {
          value: '人员接续',
          label: '人员接续',
        }
      ]
    }else if(renyuanleibie === '失业转就业人员') {
      return [
        {
          value: '失业转就业人员',
          label: '失业转就业人员',
        }
      ]
    }else if(renyuanleibie === '法定劳动年龄内各类人员') {
      return [
        {
          value: '法定劳动年龄内各类人员',
          label: '法定劳动年龄内各类人员',
        }
      ]
    }else{
      return []
    }
  }

  const renyuanleibieOptions3 = () => {
    if (renyuanleibie2 === '高校毕业生') {
      return [
        {
          value: '大中专毕业生',
          label: '大中专毕业生',
        },
        {
          value: '职业院校毕业生',
          label: '职业院校毕业生',
        },
        {
          value: '技工院校毕业生',
          label: '技工院校毕业生',
        }
      ]
    }else{
      return []
    }
  }

  const items = [
    {
      key: '1',
      label: '统一社会信用代码',
      children: <Form.Item name="company_basicinfo_1" ><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '2',
      label: '单位名称',
      children: <Form.Item name="company_basicinfo_2" ><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '3',
      label: '所属行政区划',
      children: <Form.Item name="HumanSocial_NewSheBao_61"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '4',
      label: '行业小类',
      children: <Form.Item name="HumanSocial_NewSheBao_63"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '5',
      label: '行业中类',
      children: <Form.Item name="hs_basic_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '6',
      label: '行业大类',
      children: <Form.Item name="hs_basic_3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '7',
      label: '行业代码',
      children: <Form.Item name="company_basicinfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: '工商登记执照种类',
      children: <Form.Item name="HumanSocial_NewSheBao_64"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '工商营业执照号码',
      children: <Form.Item name="HumanSocial_NewSheBao_68"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: '组织机构代码',
      children: <Form.Item name="company_basicinfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '隶属关系',
      children: 
				<Form.Item name="company_basicinfo_r9">
					<Select
            allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
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
      span: 1
    },
    {
      key: '12',
      label: '经济类型',
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
      label: '经济类型明细',
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
      label: '单位类型',
      children: <Form.Item name="company_basicinfo_r3"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '注册资本',
      children: <Form.Item name="company_basicinfo_45"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: '单位成立时间',
      children: <Form.Item name="company_basicinfo_build_date"><DatePicker size='large' placeholder='请选择成立时间' defaultValue={dayjs('2013/12/23', dateFormat)} style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '联系人',
      children: <Form.Item name="company_basicinfo_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '联系电话',
      children: <Form.Item name="company_basicinfo_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '工商登记有效期（开始时间）',
      children: <Form.Item name="HumanSocial_NewSheBao_66"><DatePicker size='large' placeholder='请选择开始时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '16',
      label: '工商登记有效期限（年）',
      children: <Form.Item name="company_basicinfo_9" ><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '17',
      label: '工商登记发证日期',
      children: <Form.Item name="hs_basic_2" ><DatePicker size='large' placeholder='请选择发证时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: '执照有效起始日期',
      children: <Form.Item name="HumanSocial_NewSheBao_69"><DatePicker disabled={disableVar} size='large' placeholder='请选择状态起始日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '19',
      label: '执照有效终止日期',
      children: <Form.Item name="HumanSocial_NewSheBao_70"><DatePicker disabled={disableVar} size='large' placeholder='请选择状态终止日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '21',
      label: '批准文号',
      children: <Form.Item name="HumanSocial_NewSheBao_71"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '22',
      label: '批准日期',
      children: <Form.Item name="HumanSocial_NewSheBao_72"><DatePicker disabled={disableVar} size='large' placeholder='请选择状态批准日期' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/></Form.Item>,
      span: 1,
    },
    {
      key: '23',
      label: '经营范围',
      children: <Form.Item name="company_basicinfo_8" ><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: '法人单位ID',
      children: <Form.Item name="hs_basic_3" ><Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '25',
      label: '法人姓名',
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '26',
      label: '法人证件类型',
      children: 
        <Form.Item name="company_basicinfo_27">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请选择法人证件类型"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
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
      label: '法人证件号码',
      children: <Form.Item name="company_basicinfo_28"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '28',
      label: '法人联系电话',
      children: <Form.Item name="company_basicinfo_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '29',
      label: '地税机构',
      children: <Form.Item name="HumanSocial_NewSheBao_83"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '30',
      label: '地税税号',
      children: <Form.Item name="HumanSocial_NewSheBao_84"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '31',
      label: '批准成立单位',
      children: <Form.Item name="HumanSocial_NewSheBao_85"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '32',
      label: '电子邮箱',
      children: <Form.Item name="company_basicinfo_35"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '33',
      label: '单位地址',
      children: <Form.Item name="company_basicinfo_17"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '34',
      label: '邮政编码',
      children: <Form.Item name="company_basicinfo_38"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: '其他登记证件种类',
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
      label: '其他登记证件号码',
      children: <Form.Item name="HumanSocial_NewSheBao_81"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '37',
      label: '法人所任职务',
      children: <Form.Item name="HumanSocial_NewSheBao_96"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '38',
      label: '投资国家或地区',
      children: <Form.Item name="HumanSocial_NewSheBao_97"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 2
    },
    {
      key: '39',
      label: '特殊情况说明',
      children: <Form.Item name="HumanSocial_NewSheBao_98"><Input disabled={disableVar} size='large' style={{ width: '830px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=BasicInfoHumanResource', {
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
          <Descriptions title="基本信息" bordered items={items} />
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