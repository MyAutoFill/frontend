import { Input, FloatButton, message, Form, Button, Descriptions, ConfigProvider, Upload, Table, Modal, Row } from 'antd';
import { UploadOutlined, FileSyncOutlined, ForwardOutlined, DownloadOutlined, CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { request } from 'umi';
import React, { useContext, useState, useEffect } from 'react';
import { reqBasicData, reqRatioConfig, } from '@/pages/Utils'
import { css } from '@emotion/css';

export default function UploadSyncPage() {

  const [messageApi, contextHolder] = message.useMessage();
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [form] = Form.useForm();

  const clickFunction = (url, name) => {
    request('', {
      method: 'POST',
      data: {
        url: url,
        select_name: name
      }
    })
  }

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

  useEffect(() => {
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
    load_data(year + '-' + month);
  }, []);

  const load_data = (curDate) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    reqBasicData(curDate, uuid)
      .then(function (res) {
        form.resetFields();
        form.setFieldsValue(res);
      })
  }

  const uploadProps = {
    name: 'file',
    action: '/api/load_from_excel',
    onChange(info) {
      if (info.file.status === 'done') {
        console.log(info.file.response)
        const exist = localStorage.getItem("currentUser");
        const uuid = JSON.parse(exist).uuid;
        if (uuid == undefined || uuid == null || uuid === '') {
          history.push('/auto_fill/user/login')
        }
        request('/api/parse_table', {
          method: 'POST',
          data: {
            parse_data: info.file.response,
            uuid: uuid
          }
        })
        .then(function (res) {
          var data = res;
          const modal = Modal.confirm({
            width: 1000,
            title: '确认填充项',
            destroyOnClose: true,
            content: <>
            <Table
              bordered
              dataSource={res}
              rowKey='name'
              columns={[
                {
                  title: '名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '现有值',
                  dataIndex: 'old_value',
                  key: 'old_value',
                },
                {
                  title: '新值（来自文件）',
                  dataIndex: 'new_value',
                  key: 'new_value',
                },
              ]}
            />
            </>,
            okText: '确认',
            cancelText: '取消',
            onCancel:()=>{},
            onOk:(res)=>{
              const exist = localStorage.getItem("currentUser");
              const uuid = JSON.parse(exist).uuid;
              if (uuid == undefined || uuid == null || uuid === '') {
                history.push('/auto_fill/user/login')
              }
              request('/api/save_from_excel', {
                method: 'POST',
                data: {
                  data: data,
                  uuid: uuid
                }
              })
              .then(function (res) {
                message.success(`上传成功`, 3, () => {window.location.reload()});
              })
            }
          });
        })
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;

  const items = [
    {
      label: <span style={{fontSize: '16px'}}>主营业务收入</span>,
      children: <Form.Item name="company_runningsum_3"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>主营业务税金及附加</span>,
        children: <Form.Item name="FinanceStatusInfo_56"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>流动资产合计</span>,
        children: <Form.Item name="company_runningsum_20"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>营业成本</span>,
        children: <Form.Item name="company_runningsum_2"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>税金及附加</span>,
        children: <Form.Item name="company_runningsum_4"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>销售费用</span>,
        children: <Form.Item name="company_runningsum_5"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>研发费用</span>,
        children: <Form.Item name="company_runningsum_7"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>管理费用</span>,
        children: <Form.Item name="company_runningsum_6"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>财务费用</span>,
        children: <Form.Item name="company_runningsum_8"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>资产减值损失</span>,
        children: <Form.Item name="company_runningsum_9"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>投资收益</span>,
        children: <Form.Item name="company_runningsum_12"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>其他收益</span>,
        children: <Form.Item name="company_runningsum_13"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>营业利润</span>,
        children: <Form.Item name="company_runningsum_14"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>利润总额</span>,
        children: <Form.Item name="company_runningsum_17"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>应付职工薪酬</span>,
        children: <Form.Item name="company_runningsum_23"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>应交增值税</span>,
        children: <Form.Item name="company_runningsum_19"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>货币资金</span>,
        children: <Form.Item name="tax_debt_1"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>储备基金</span>,
        children: <Form.Item name="FinanceStatusInfo_cbjj"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>未分配利润</span>,
        children: <Form.Item name="tax_debt_51"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>所有者权益合计</span>,
        children: <Form.Item name="company_runningsum_31"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>负债及所有者权益合计</span>,
        children: <Form.Item name="company_runningsum_31"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>研发投入</span>,
        children: <Form.Item name="company_runningsum_7"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>盈余公积</span>,
        children: <Form.Item name="tax_debt_49"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>其他业务利润</span>,
        children: <Form.Item name="company_runningsum_13"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>资产总计</span>,
        children: <Form.Item name="company_runningsum_18"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>应收帐款</span>,
        children: <Form.Item name="FinanceStatusInfo_10"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>减：坏帐准备</span>,
        children: <Form.Item name="company_runningsum_34"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>应收账款净额</span>,
        children: <Form.Item name="company_runningsum_35"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>其他应收款</span>,
        children: <Form.Item name="tax_debt_7"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>其他应收款净额</span>,
        children: <Form.Item name="company_runningsum_36"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>存货</span>,
        children: <Form.Item name="FinanceStatusInfo_14"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>其他流动资产</span>,
        children: <Form.Item name="tax_debt_13"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>固定资产原值</span>,
        children: <Form.Item name="FinanceStatusInfo_16"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>减：累计折旧</span>,
        children: <Form.Item name="company_runningsum_26"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>固定资产净值</span>,
        children: <Form.Item name="company_runningsum_22"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>无形资产</span>,
        children: <Form.Item name="company_runningsum_24"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>长期待摊费用</span>,
        children: <Form.Item name="company_research_9"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>非流动资产合计</span>,
        children: <Form.Item name="Tech_EcoInfo_99"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>资产合计</span>,
        children: <Form.Item name="company_runningsum_37"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>应付帐款</span>,
        children: <Form.Item name="tax_debt_28"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>应交税金</span>,
        children: <Form.Item name="company_runningsum_4"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>其他应付款</span>,
        children: <Form.Item name="tax_debt_35"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>预提费用</span>,
        children: <Form.Item name="tax_debt_36"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>流动负债合计</span>,
        children: <Form.Item name="company_runningsum_29"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>负债合计</span>,
        children: <Form.Item name="FinanceStatusInfo_40"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>实收资本</span>,
        children: <Form.Item name="company_runningsum_32"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>外方投资</span>,
        children: <Form.Item name="company_runningsum_38"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    },
    {
        label: <span style={{fontSize: '16px'}}>公允价值变动收益</span>,
        children: <Form.Item name="company_runningsum_11"><Input size='large' addonAfter='元' style={{ width: '250px', marginLeft: '10px', marginTop: '10px' }}></Input></Form.Item>,
        span: 1.5
    }
  ];

  const onFinish = (values) => {
    const exist = localStorage.getItem("currentUser");
    const uuid = JSON.parse(exist).uuid;
    if (uuid == undefined || uuid == null || uuid === '') {
      history.push('/auto_fill/user/login')
    }
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
    request('/api/save', {
      method: 'POST',
      data: {
        date: year + '-' + month,
        data: values,
        uuid: uuid
      }
    })
  };

  return (
    <>
      {contextHolder}
      <Row style={{height: 800}}>
        <br></br>
        <div>
        <span style={{fontSize:'24px'}}><b>您可以点击右侧按钮下载模板，填写完成后上传进行数据同步；您也可以直接在下面表格中填写。</b></span>
        <br/>
        <Button size='large' type='primary' style={{ width: '150px', marginLeft: '10px', marginTop: '10px' }} icon={<DownloadOutlined /> }
        onClick={() => {window.location.href='https://xcyb.weihai.cn/api/download_upload_template'}}
        >点击下载模板</Button>
        <Upload {...uploadProps} >
          <Button size='large' type='primary' style={{ width: '150px', marginLeft: '10px', marginTop: '10px' }} icon={<UploadOutlined /> }>点击上传</Button>
        </Upload>
        </div>
        <div style={{ textAlign: 'center', margin: 'auto', marginTop: '50px', width: '1150px', overflowY: 'scroll', overflowX: 'auto', height: '700px' }} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <Descriptions style={{width: '1100px'}} title="统一报表报送系统财务状况信息表" bordered items={items} />
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
            htmlType="submit"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 210
            }}
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
      </Row>
    </>
  );
}