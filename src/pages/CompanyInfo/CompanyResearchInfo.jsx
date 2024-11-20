import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Form } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import { useEffect } from 'react';
import { requestCompanyData, reqRatioConfig, } from '@/pages/Utils'
import { history } from 'umi';
import { BigNumber } from 'bignumber.js'


export default function CompanyResearchInfo(props) {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    requestCompanyData()
      .then(function (res) {
        reqRatioConfig('CompanyResearchInfo')
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
      label: '一、研发人员情况',
      children: '-',
      span: 3
    },
    {
      key: '3',
      label: '研发人员合计',
      children: <Form.Item name="company_research_1"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '2',
      label: '其中：管理和服务人员',
      children: <Form.Item name="company_research_2"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '4',
      label: '其中：全职人员',
      children: <Form.Item name="company_research_3"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '5',
      label: '其中：本科毕业及以上人员',
      children: <Form.Item name="company_research_4"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '7',
      label: '其中：外聘人员',
      children: <Form.Item name="company_research_5"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '10',
      label: '二、研究开发费用情况',
      children: '-',
      span: 3
    },
    {
      key: '6',
      label: '研究开发费用合计',
      children: <Form.Item name="company_research_6"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
    {
      key: '8',
      label: '1.人员人工费用',
      children: <Form.Item name="company_research_7"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '9',
      label: '2.直接投入费用',
      children: <Form.Item name="company_research_8"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '11',
      label: '3.折旧费用与长期待摊费用',
      children: <Form.Item name="company_research_9"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '12',
      label: '4.无形资产摊销费用',
      children: <Form.Item name="company_research_10"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '7',
      label: '5.设计费用',
      children: <Form.Item name="company_research_11"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '14',
      label: '6.装备调试费用与试验费用',
      children: <Form.Item name="company_research_12"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1
    },
    {
      key: '15',
      label: '7.委托外部研究开发费用',
      children: <Form.Item name="company_research_13"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '16',
      label: '其中：委托境内研究机构',
      children: <Form.Item name="company_research_14"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '17',
      label: '委托境内高等学校',
      children: <Form.Item name="company_research_15"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '21',
      label: '委托境内企业',
      children: <Form.Item name="company_research_16"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '19',
      label: '委托境外机构',
      children: <Form.Item name="company_research_17"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '22',
      label: '8.其他费用',
      children: <Form.Item name="company_research_18"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '18',
      label: '三、研究开发活动资产情况',
      children: '-',
      span: 3,
    },
    {
      key: '23',
      label: '当年形成用于研究开发的固定资产',
      children: <Form.Item name="company_research_19"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '20',
      label: '其中：仪器和设备',
      children: <Form.Item name="company_research_20"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '24',
      label: '四、研究开发支出资金来源情况',
      children: '-',
      span: 3,
    },
    {
      key: '13',
      label: '1.来自企业自筹',
      children: <Form.Item name="company_research_21"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '25',
      label: '2.来自政府部门',
      children: <Form.Item name="company_research_22"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '6',
      label: '3.来自银行贷款',
      children: <Form.Item name="company_research_23"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '26',
      label: '4.来自风险投资',
      children: <Form.Item name="company_research_24"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '27',
      label: '5.来自其他渠道',
      children: <Form.Item name="company_research_25"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '28',
      label: '五、企业办（境内）研发机构情况',
      children: '-',
      span: 3
    },
    {
      key: '29',
      label: '期末机构数',
      children: <Form.Item name="company_research_26"><Input size='large' disabled={disableVar} addonAfter='家' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '30',
      label: '机构研究开发人员合计',
      children: <Form.Item name="company_research_27"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '32',
      label: '其中：博士毕业',
      children: <Form.Item name="company_research_28"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '56',
      label: '其中：硕士毕业',
      children: <Form.Item name="company_research_29"><Input size='large' disabled={disableVar} addonAfter='人' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '33',
      label: '机构研究开发费用',
      children: <Form.Item name="company_research_30"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '34',
      label: '六、研究开发产出及相关情况',
      children: '-',
      span: 3
    },
    {
      key: '35',
      label: '（一）自主知识产权情况',
      children: '-',
      span: 3
    },
    {
      key: '36',
      label: '当年专利申请数',
      children: <Form.Item name="company_research_31"><Input size='large' disabled={disableVar} addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '37',
      label: '其中：申请发明专利',
      children: <Form.Item name="company_research_32"><Input size='large' disabled={disableVar} addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '38',
      label: '期末拥有有效专利数',
      children: <Form.Item name="company_research_33"><Input size='large' disabled={disableVar} addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3,
    },
    {
      key: '39',
      label: '专利所有权转让及许可',
      children: <Form.Item name="company_research_34"><Input size='large' disabled={disableVar} addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '40',
      label: '（二）新产品生产及销售情况',
      children: '-',
      span: 3
    },
    {
      key: '41',
      label: '新产品销售收入',
      children: <Form.Item name="company_research_35"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '42',
      label: '其中：出口',
      children: <Form.Item name="company_research_36"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '43',
      label: '（三）其他情况',
      children: '-',
      span: 3
    },
    {
      key: '44',
      label: '发表科技论文',
      children: <Form.Item name="company_research_37"><Input size='large' disabled={disableVar} addonAfter='篇' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '45',
      label: '期末拥有注册商标',
      children: <Form.Item name="company_research_38"><Input size='large' disabled={disableVar} addonAfter='件' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    },
    {
      key: '46',
      label: '累计形成国家或行业标准',
      children: <Form.Item name="company_research_39"><Input size='large' disabled={disableVar} addonAfter='项' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '47',
      label: '其中：当年形成国家或行业标准',
      children: <Form.Item name="company_research_40"><Input size='large' disabled={disableVar} addonAfter='项' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '48',
      label: '八、其他相关情况',
      children: '-',
      span: 3
    },
    {
      key: '49',
      label: '（一）技术改造和技术获取情况',
      children: '-',
      span: 3
    },
    {
      key: '50',
      label: '技术改造经费支出',
      children: <Form.Item name="company_research_41"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '51',
      label: '购买境内技术经费支出',
      children: <Form.Item name="company_research_42"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5,
    },
    {
      key: '52',
      label: '引进境外技术经费支出',
      children: <Form.Item name="company_research_43"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '53',
      label: '引进境外技术的消化吸收经费支出',
      children: <Form.Item name="company_research_44"><Input size='large' disabled={disableVar} addonAfter='千元' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '54',
      label: '（二）企业在境外设立分支机构情况',
      children: '-',
      span: 3,
    },
    {
      key: '55',
      label: '企业当年在境外设立分支机构数量',
      children: <Form.Item name="company_research_45"><Input size='large' disabled={disableVar} addonAfter='个' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 3
    }
  ];
  
  const onFinish = (values) => {
    request('/api/get_ratio_config?table=CompanyResearchInfo', {
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
      request('/api/save_company_data', {
        method: 'POST',
        data: {
          data: new_res
        }
      })
    })
  };

  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 700, width: 'auto', padding: 20, overflow:'auto'}} >
        <Form onFinish={onFinish} form={form}>
          <Descriptions title="企业研究开发及相关信息" bordered items={items} />
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