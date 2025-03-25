import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Select, Modal, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'

const dateFormat = 'YYYY-MM-DD';
// 此处要根据不同表格定制
const today = new Date();
const fillRequiredDate = '每月15日'
// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

const countDownDays = 15 - day < 0 ? 45 - day : 15 - day

export default function HumanSocialCompanyInfo(props) {

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
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('HumanSocialCompanyInfo')
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
      key: '2',
      label: <span style={{fontSize: '16px'}}>证件类型</span>,
      children: <Form.Item name="company_basicinfo_27"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>证件号码</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_3"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>个人基本信息</span>,
      children: '-',
      span: 3
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>证件号码</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_4"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>姓名</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_5"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>性别</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_6"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>民族</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>户口性质</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_8"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>联系电话</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_9"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>户籍地地址</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_10"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>常住地址</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_11"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>就业登记信息</span>,
      children: '-',
      span: 3
    },
    {
      key: '14',
      label: <span style={{fontSize: '16px'}}>业务办理区</span>,
      children: 
				<Form.Item name="HumanSocial_CompanyInfo_12">
					<Select
						showSearch
            allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请输入业务办理的区县"
						optionFilterProp="label"
						onChange={(e) => {
              setYewuqu('')
              setYewuqu(e)
            }}
						onSearch={peopleSearchOnSearch}
						options={[
							{
								value: '环翠区',
								label: '环翠区',
							},
							{
								value: '高新区',
								label: '高新区',
							},
							{
								value: '经济区',
								label: '经济区',
							},
							{
								value: '临港区',
								label: '临港区',
							},
							{
								value: '威海火炬高技术产业开发区',
								label: '威海火炬高技术产业开发区',
							},
							{
								value: '文登区',
								label: '文登区',
							},
							{
								value: '荣成市',
								label: '荣成市',
							},
							{
								value: '乳山市',
								label: '乳山市',
							},
							{
								value: '市本级',
								label: '市本级',
							},
						]}
					/>
				</Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>业务办理街道</span>,
      children: 
				<Form.Item name="HumanSocial_CompanyInfo_13">
					<Select
						allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请输入业务办理的街道"
						optionFilterProp="label"
						onChange={peopleSearchOnChange}
						onSearch={peopleSearchOnSearch}
						options={yewujiedaoOptions()}
					/>
				</Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>用工形式</span>,
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_14">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请输入用工形式"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '原固定职工',
                label: '原固定职工',
              },
              {
                value: '城镇合同制',
                label: '城镇合同制',
              },
              {
                value: '农村合同制',
                label: '农村合同制',
              },
              {
                value: '临时工',
                label: '临时工',
              },
              {
                value: '聘任制',
                label: '聘任制',
              },
              {
                value: '人事代理',
                label: '人事代理',
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
      key: '17',
      label: <span style={{fontSize: '16px'}}>人员类别一类</span>,
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_15">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请输入人员类别一类"
            optionFilterProp="label"
            onChange={(e) => {setRenyuanleibie(e)}}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '城镇新成长劳动力',
                label: '城镇新成长劳动力',
              },
              {
                value: '就业转失业人员',
                label: '就业转失业人员',
              },
              {
                value: '残疾人',
                label: '残疾人',
              },
              {
                value: '复员',
                label: '复员',
              },
              {
                value: '刑满释放',
                label: '刑满释放',
              },
              {
                value: '农村劳动力',
                label: '农村劳动力',
              },
              {
                value: '调转人员',
                label: '调转人员',
              },
              {
                value: '人员接续',
                label: '人员接续',
              },
              {
                value: '失业转就业人员',
                label: '失业转就业人员',
              },
              {
                value: '法定劳动年龄内各类人员',
                label: '法定劳动年龄内各类人员',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>人员类别二类</span>,
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_16">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请输入人员类别二类"
            optionFilterProp="label"
            onChange={(e) => {setRenyuanleibie2(e)}}
            onSearch={peopleSearchOnSearch}
            options={renyuanleibieOptions()}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>人员类别三类</span>,
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_17">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请输入人员类别三类"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={renyuanleibieOptions3()}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '20',
      label: <span style={{fontSize: '16px'}}>工资待遇</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_18"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '21',
      label: <span style={{fontSize: '16px'}}>是否企业法人</span>,
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_19">
          <Select
            showSearch
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否企业法人"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
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
        </Form.Item>,span: 1
    },
    {
      key: '22',
      label: <span style={{fontSize: '16px'}}>工种</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_20"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '23',
      label: <span style={{fontSize: '16px'}}>劳动合同类型</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_21"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '24',
      label: <span style={{fontSize: '16px'}}>合同开始日期</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_22"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1,
    },
    {
      key: '25',
      label: <span style={{fontSize: '16px'}}>合同终止日期</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_23"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '26',
      label: <span style={{fontSize: '16px'}}>是否创业</span>,
      children: 
        <Form.Item name="HumanSocial_CompanyInfo_24">
          <Select
            showSearch
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否创业"
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
        </Form.Item>,
      span: 1.5
    },
    {
      key: '27',
      label: <span style={{fontSize: '16px'}}>单位所在区县</span>,
      children:
        <Form.Item name="HumanSocial_CompanyInfo_25">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="请输入单位所在区县"
            optionFilterProp="label"
            onChange={(e) => {
              setYewuqu('')
              setYewuqu(e)
            }}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                value: '环翠区',
                label: '环翠区',
              },
              {
                value: '高新区',
                label: '高新区',
              },
              {
                value: '经济区',
                label: '经济区',
              },
              {
                value: '临港区',
                label: '临港区',
              },
              {
                value: '威海火炬高技术产业开发区',
                label: '威海火炬高技术产业开发区',
              },
              {
                value: '文登区',
                label: '文登区',
              },
              {
                value: '荣成市',
                label: '荣成市',
              },
              {
                value: '乳山市',
                label: '乳山市',
              },
              {
                value: '市本级',
                label: '市本级',
              },
            ]}
          />
        </Form.Item>,
      span: 1.5,
    },
    {
      key: '28',
      label: <span style={{fontSize: '16px'}}>单位所在街道（镇）</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_26"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '29',
      label: <span style={{fontSize: '16px'}}>单位所在社区（村）</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_27"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '30',
      label: <span style={{fontSize: '16px'}}>备注</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_28"><Input disabled={disableVar} size='large' style={{ width: '870px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '31',
      label: <span style={{fontSize: '16px'}}>就失业登记证领取信息</span>,
      children: '-',
      span: 3
    },
    {
      key: '32',
      label: <span style={{fontSize: '16px'}}>是否领取</span>,
      children:
        <Form.Item name="HumanSocial_CompanyInfo_29">
          <Select
            showSearch
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否领取"
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
        </Form.Item>,
      span: 1
    },
    {
      key: '33',
      label: <span style={{fontSize: '16px'}}>证书领取方式</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_30"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '34',
      label: <span style={{fontSize: '16px'}}>收件人姓名</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_31"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '35',
      label: <span style={{fontSize: '16px'}}>收件人电话</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_32"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '36',
      label: <span style={{fontSize: '16px'}}>收件人地址</span>,
      children: <Form.Item name="HumanSocial_CompanyInfo_33"><Input disabled={disableVar} size='large' style={{ width: '870px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    }
  ];

  const onFinish = (values) => {
    request('/api/get_ratio_config?table=HumanSocialCompanyInfo', {
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
          <span style={{ fontSize: '17px' }}>【填报截止日期】{fillRequiredDate}</span>
          <span>          </span>
          <span style={{ fontSize: '17px' }}>【填充倒计时】{countDownDays}天</span>
          <Descriptions style={{width: '1300px'}} title="【报表名称】单位就业登记信息" bordered items={items} />
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
        </Form>
      </div>
    </>
  );
}