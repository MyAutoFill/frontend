import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { request } from 'umi';
import { useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'
import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';

export default function InfoTechMonthlyForm(props) {

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
      history.push('/auto_fill_test/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        reqRatioConfig('InfoTechMonthlyForm')
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
        label: '主营业务收入',
        children: <Form.Item name='company_runningsum_3' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '其中： 1. 软件产品收入',
        children: <Form.Item name='Gongxin_basic3' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '其中：基础软件收入',
        children: <Form.Item name='Gongxin_soft1' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '工业软件收入',
        children: <Form.Item name='Gongxin_soft2' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '其中：云服务收入',  
        children: <Form.Item name='Gongxin_soft3' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '大数据服务收入',
        children: <Form.Item name='Gongxin_soft4' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '工业互联网平台服务收入',
        children: <Form.Item name='Gongxin_soft5' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '电子商务平台技术服务收入',
        children: <Form.Item name='Gongxin_soft6' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '集成电路设计收入',
        children: <Form.Item name='Gongxin_soft7' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '3.信息安全收入',
        children: <Form.Item name='Gongxin_soft8' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '其中：工控安全收入',
        children: <Form.Item name='Gongxin_soft9' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '其中：1.软件外包服务出口',
        children: <Form.Item name='Gongxin_soft10' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '*2.应用嵌入式系统软件的产品出口额',
        children: <Form.Item name='Gongxin_soft11' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '3.其他软件业务出口',
        children: <Form.Item name='Gongxin_soft12' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '主营业务成本',
        children: <Form.Item name='company_runningsum_33' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '其中：硬件成本',
        children: <Form.Item name='Gongxin_soft13' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '费用总额',
        children: <Form.Item name='Gongxin_soft14' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '利润总额',
        children: <Form.Item name='company_runningsum_17' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '研发经费',
        children: <Form.Item name='Gongxin_soft15' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '从业人员工资总额',
        children: <Form.Item name='company_employee_11' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '平均用工人数',
        children: <Form.Item name='FinanceStatusInfo_130' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    },
    {
        label: '订单同比增长',
        children: <Form.Item name='Gongxin_soft16' ><Input size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1
    }
	]

	const onFinish = (values) => {
		request('/api/get_ratio_config?table=InfoTechMonthlyForm', {
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
				history.push('/auto_fill_test/user/login')
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
          <Descriptions style={{width: '1300px'}} title="软件和信息技术服务业企业月报表" bordered items={items} />
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