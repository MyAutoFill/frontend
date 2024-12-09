import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, DatePicker, Form, Select, Modal } from 'antd';
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

const countDownDays = 15-day

export default function YiGongDaiXun(props) {

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    load_data(props.date);
    return () => {
      setModalVisible(true);
    };
  }, [props.date]);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('YiGongDaiXun')
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
      label: <span style={{fontSize: '16px'}}>单位信息</span>,
      children: <span style={{fontSize: '16px'}}>以下为单位信息</span>,
      span: 3
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>单位名称</span>,
      children: <Form.Item name="company_basicinfo_2"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '3',
      label: <span style={{fontSize: '16px'}}>统一信用代码</span>,
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: <span style={{fontSize: '16px'}}>法人姓名</span>,
      children: <Form.Item name="company_basicinfo_26"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: <span style={{fontSize: '16px'}}>法人身份证号码</span>,
      children: <Form.Item name="company_basicinfo_28"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: <span style={{fontSize: '16px'}}>基本账户开户银行</span>,
      children: <Form.Item name="HumanSocial_yigongdaixun_5"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: <span style={{fontSize: '16px'}}>基本账户银行账号</span>,
      children: <Form.Item name="company_insurance_11"><Input disabled={disableVar} size='large' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '8',
      label: <span style={{fontSize: '16px'}}>联系电话</span>,
      children: <Form.Item name="company_basicinfo_29"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: <span style={{fontSize: '16px'}}>企业规模</span>,
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_8">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择企业规模"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                  value: '大型企业',
                  label: '大型企业',
              },
              {
                  value: '中型企业',
                  label: '中型企业',
              },
              {
                  value: '小型企业',
                  label: '小型企业',
              },
              {
                  value: '微型企业',
                  label: '微型企业',
              },
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '10',
      label: <span style={{fontSize: '16px'}}>所属行业</span>,
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_9">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择所属行业"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                  value: '外贸',
                  label: '外贸',
              },
              {
                  value: '住宿餐饮',
                  label: '住宿餐饮',
              },
              {
                  value: '文化旅游',
                  label: '文化旅游',
              },
              {
                  value: '交通运输',
                  label: '交通运输',
              },
              {
                  value: '批发零售',
                  label: '批发零售',
              },
              {
                  value: '其他行业',
                  label: '其他行业',
              },
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: <span style={{fontSize: '16px'}}>补贴年月</span>,
      children: <DatePicker format="YYYY-MM-DD" size='large' placeholder='请选择补贴年月' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '12',
      label: <span style={{fontSize: '16px'}}>补贴类型</span>,
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_11">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="选择所属行业"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
            options={[
              {
                  value: '请选择',
                  label: '请选择',
              },
              {
                  value: '新吸纳就业',
                  label: '新吸纳就业',
              }
            ]}
          />
        </Form.Item>,
      span: 1
    },
    {
      key: '13',
      label: <span style={{fontSize: '16px'}}>企业所属规划</span>,
      children: 
				<Form.Item name="HumanSocial_yigongdaixun_12">
					<Select
            allowClear
						style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
						size='large'
						placeholder="请选择企业所属规划"
						optionFilterProp="label"
						onChange={peopleSearchOnChange}
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
      key: '14',
      label: <span style={{fontSize: '16px'}}>是否当月首次申领</span>,
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_13">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否当月首次申领"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
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
      span: 1
    },
    {
      key: '15',
      label: <span style={{fontSize: '16px'}}>以工代训培训情况</span>,
      children: <Form.Item name="HumanSocial_yigongdaixun_14"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '16',
      label: <span style={{fontSize: '16px'}}>是否为劳务派遣</span>,
      children: 
        <Form.Item name="HumanSocial_yigongdaixun_15">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否为劳务派遣"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
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
      span: 1
    },
    {
      key: '17',
      label: <span style={{fontSize: '16px'}}>劳务派遣单位名称</span>,
      children: <Form.Item name="company_basicinfo_2"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '18',
      label: <span style={{fontSize: '16px'}}>派遣单位的统一社会信用代码</span>,
      children: <Form.Item name="company_basicinfo_1"><Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '19',
      label: <span style={{fontSize: '16px'}}>是否在省直参保</span>,
      children:
        <Form.Item name="HumanSocial_yigongdaixun_18">
          <Select
            allowClear
            style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
            size='large'
            placeholder="是否在省直参保"
            optionFilterProp="label"
            onChange={peopleSearchOnChange}
            onSearch={peopleSearchOnSearch}
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
      span: 1
    }
  ];
  
  const onFinish = (values) => {
    request('/api_test/get_ratio_config?table=YiGongDaiXun', {
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
      const exist = localStorage.getItem("currentUser");
      const uuid = JSON.parse(exist).uuid;
      if (uuid == undefined || uuid == null || uuid === '') {
        history.push('/auto_fill/user/login')
      }
      request('/api_test/save', {
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
          <Descriptions style={{width: '1300px'}} title="【报表名称】以工代训补贴申领信息" bordered items={items} />
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
          <>
            {modalVisible && (
              <Modal
                title="提示"
                open={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
              >
                您即将离开页面，确定要离开吗？
              </Modal>
            )}
            {/* 组件的其余内容 */}
          </>
        </Form>
      </div>
    </>
  );
}