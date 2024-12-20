import { reqBasicData, reqRatioConfig } from "@/pages/Utils";
import {
  CheckSquareFilled,
  ExpandAltOutlined,
  FastForwardOutlined,
  SaveFilled,
  StopFilled,
} from "@ant-design/icons";
import { Button, FloatButton, Form, Input, message, Table,Row,Col,Descriptions } from "antd";
import "rc-banner-anim/assets/index.css";
import { useEffect, useState } from "react";
import { request } from "umi";
const { Column, ColumnGroup } = Table;

export default function BenefitsForm() {
  const [disableVar, setDisableVar] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData().then(function (res) {
      reqRatioConfig("BenefitsForm").then(function (config) {
        const new_res = JSON.parse(JSON.stringify(res));
        Object.keys(config).forEach((key) => {
          if (key in new_res) {
            let a = BigNumber(new_res[key]);
            let b = BigNumber(config[key]);
            new_res[key] = a.times(b).toString();
          }
        });
        form.setFieldsValue(new_res);
      });
    });
  };

  const [form] = Form.useForm();

  const SaveSuccess = () => {
    messageApi.open({
      type: "success",
      content: "本次修改保存成功",
    });
  };

  const SaveError = () => {
    messageApi.open({
      type: "error",
      content: "保存失败",
    });
  };

  const EditSuccess = () => {
    messageApi.open({
      type: "success",
      content: "本次修改取消成功",
    });
  };

  const EditError = () => {
    messageApi.open({
      type: "error",
      content: "本次修改取消失败",
    });
  };

  const CheckSuccess = () => {
    form.validateFields()
    messageApi.open({
      type: "success",
      content: "表单检查完成",
    });
  };

  const CheckError = () => {
    messageApi.open({
      type: "error",
      content: "表单检查失败",
    });
  };

  const onFinish = (values) => {
    request("/api/get_ratio_config?table=BenefitsForm", {
      method: "GET",
    }).then(function (config) {
      const new_res = JSON.parse(JSON.stringify(values));
      Object.keys(config).forEach((key) => {
        if (key in new_res) {
          let a = BigNumber(new_res[key]);
          let b = BigNumber(config[key]);
          new_res[key] = a.div(b).toString();
        }
      });
      request("/api/save", {
        method: "POST",
        data: {
          date: "2024-09",
          data: new_res,
        },
      });
    });
  };
  const data = [
    {
      key: "1",
      project_name: (
        <div style={{ fontWeight: "600" }}>一、主营业务收入</div>
      ),
      code: "1",
      monthNum: (
        <Form.Item name="company_runningsum_3">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_1">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "2",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>减:主营业务成本</div>
      ),
      code: "2",
      monthNum: (
        <Form.Item name="company_runningsum_33">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_2">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "3",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>主营业务税金及附加</div>
      ),
      code: "3",
      monthNum: (
        <Form.Item name="company_runningsum_4">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_3">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "4",
      project_name: (
        <div style={{ fontWeight: "600" }}>二、主营业务利润(亏损以"-"号埌列)</div>
      ),
      code: "4",
      monthNum: (
        <Form.Item name="tax_benefits_46">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_4">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "5",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>加:其他业务利润(亏损以"-"号填列)</div>
      ),
      code: "5",
      monthNum: (
        <Form.Item name="company_runningsum_13">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_5">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "6",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>减:营业费用</div>
      ),
      code: "6",
      monthNum: (
        <Form.Item name="tax_benefits_month_5">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_6">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "7",
      project_name: (
        <div style={{ paddingLeft: "60px" }}>管理费用</div>
      ),
      code: "7",
      monthNum: (
        <Form.Item name="company_runningsum_6">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_7">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "8",
      project_name: (
        <div style={{ paddingLeft: "60px" }}>财务费用</div>
      ),
      code: "8",
      monthNum: (
        <Form.Item name="company_runningsum_8">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_8">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "9",
      project_name: (
        <div style={{ fontWeight: "600" }}>三、营业利润(亏损以"-"号填列)</div>
      ),
      code: "9",
      monthNum: (
        <Form.Item name="company_runningsum_14">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_9">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "10",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>加:投资收益(摄失以"-"号列)</div>
      ),
      code: "10",
      monthNum: (
        <Form.Item name="company_runningsum_12">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_10">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "11",
      project_name: (
        <div style={{ paddingLeft: "60px" }}>补贴收入</div>
      ),
      code: "11",
      monthNum: (
        <Form.Item name="FinanceStatusInfo_134">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_11">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "12",
      project_name: (
        <div style={{ paddingLeft: "60px" }}>营业外收入</div>
      ),
      code: "12",
      monthNum: (
        <Form.Item name="company_runningsum_15">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_12">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "13",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>减:营业外支出</div>
      ),
      code: "13",
      monthNum: (
        <Form.Item name="company_runningsum_16">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_13">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "14",
      project_name: (
        <div style={{ fontWeight: "600" }}>四、利润总额(亏损总额以"-"号填列)</div>
      ),
      code: "14",
      monthNum: (
        <Form.Item name="company_runningsum_17">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_14">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "15",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>减:所得税</div>
      ),
      code: "15",
      monthNum: (
        <Form.Item name="company_runningsum_21">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_15">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "16",
      project_name: (
        <div style={{ fontWeight: "600" }}>五、净利润(净亏损以"-"号埌列)</div>
      ),
      code: "16",
      monthNum: (
        <Form.Item name="GongShang_property_6">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_16">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "17",
      project_name: <div style={{ fontWeight: "600" }}>补充资料</div>,
      code: "",
      monthNum: '',
      yearNum: '',
    },
    {
      key: "18",
      project_name: <div style={{ fontWeight: "600" }}>项目</div>,
      code: <div style={{ fontWeight: "600" }}>行次</div>,
      monthNum: <div style={{ fontWeight: "600" }}>本月数</div>,
      yearNum: <div style={{ fontWeight: "600" }}>本年累计数</div>,
    },
    {
      key: "19",
      project_name: '1.出售、处置部门或被投资单位所得收益',
      code: "17",
      monthNum: (
        <Form.Item name="tax_benefit_13">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_17">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "20",
      project_name: '2.自然灾害发生的损失',
      code: "18",
      monthNum: (
        <Form.Item name="tax_benefit_14">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_18">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "21",
      project_name: '3.会计政策变更增加(或减少)利润总额',
      code: "19",
      monthNum: (
        <Form.Item name="tax_benefit_15">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_19">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "22",
      project_name: '4.会计估计变更增加(或减少)利润总额',
      code: "20",
      monthNum: (
        <Form.Item name="tax_benefit_16">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_20">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "23",
      project_name: '5.债务重组损失',
      code: "21",
      monthNum: (
        <Form.Item name="tax_benefit_17">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_21">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "24",
      project_name: '6.其他',
      code: "22",
      monthNum: (
        <Form.Item name="monthNum_22">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      yearNum: (
        <Form.Item name="yearNum_22">
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
  ];
  const columns = [
    {
      title: "项目名称",
      dataIndex: "project_name",
      key: "project_name",
      width: 300,
      onCell: (_, index) => ({
        colSpan: index === 16 ? 4 : 1,
        align:index === 16 ? 'center':'left',
      }),
    },
    {
      title: "行次",
      dataIndex: "code",
      key: "code",
      width: 60,
      onCell:(_, index) => {
        if (index === 16) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
    {
      title: "本月数",
      dataIndex: "monthNum",
      key: "monthNum",
      width: 150,
      onCell:(_, index) => {
        if (index === 16) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
    {
      title: "本年累计数",
      dataIndex: "yearNum",
      key: "yearNum",
      width: 150,
      onCell:(_, index) => {
        if (index === 16) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
  ];

  const items = [
    {
      key: '1',
      label: '纳税人名称:',
      children: <Form.Item name="company_basicinfo_2"><Input disabled={true} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '15px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: '纳税人识别号:',
      children: <Form.Item name="investor28"><Input disabled={true} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '15px' }}></Input></Form.Item>,
      span: 1.5
    },
  ];
  
  return (
    <>
      {contextHolder}
      <div
        size="large"
        style={{ height: 800, padding: 10, overflow: "auto" }}
        class="banner-anim"
      >
      <Form onFinish={onFinish} form={form}>
        <Row style={{ width: "1300px" }}>
          <Col
            span={24}
            style={{
              textAlign: "center",
              lineHeight: "80px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
           利润表(适用执行企业会计制度的企业)
          </Col>
        </Row>

        <Row style={{ width: "1300px" }}>
          <Col span={8}>税款所属时间:2024-01-01至{}</Col>
          <Col span={8} style={{ textAlign: "center" }}>
            {/* 报送日期:2024-09-16 */}
          </Col>
          <Col span={8} style={{ textAlign: "right" }}>
            会企03表&nbsp;&nbsp;&nbsp;&nbsp;金额单位:元，至角分
          </Col>
        </Row>
        <Descriptions
          bordered
          items={items}
          column="2"
          style={{
            width: "1300px",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#efefef",
          }}
          labelStyle={{ color: "#333", width: "160px", textAlign: "right" }}
        />
          <Table
            dataSource={data}
            style={{ width: "1300px" }}
            pagination={false}
            bordered
            sticky
            columns={columns}
          >
          </Table>
          <FloatButton.Group
            open={defaultOpen}
            trigger="click"
            style={{
              insetInlineEnd: 120,
            }}
            shape="square"
            description="操作按钮"
            tooltip={<div>点击展示操作按钮</div>}
            type="primary"
            onOpenChange={(open) => setDefaultOpen(open)}
            icon={<ExpandAltOutlined />}
          >
            <Button
              type="primary"
              icon={<SaveFilled />}
              autoInsertSpace
              size="large"
              style={{
                position: "absolute",
                right: 0,
                bottom: 210,
              }}
              htmlType="submit"
              onClick={SaveSuccess}
            >
              保存数据
            </Button>
            <Button
              type="primary"
              icon={<StopFilled />}
              autoInsertSpace
              size="large"
              style={{
                position: "absolute",
                right: 0,
                bottom: 140,
              }}
              onClick={EditSuccess}
            >
              取消编辑
            </Button>
            <Button
              type="primary"
              icon={<CheckSquareFilled />}
              autoInsertSpace
              size="large"
              style={{
                position: "absolute",
                right: 0,
                bottom: 70,
              }}
              onClick={CheckSuccess}
            >
              检查表单
            </Button>
            <Button
              type="primary"
              icon={<FastForwardOutlined />}
              autoInsertSpace
              size="large"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            >
              立即填报
            </Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}
