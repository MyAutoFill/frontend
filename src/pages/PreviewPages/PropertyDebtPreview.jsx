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

export default function PropertyDebt() {
  const [disableVar, setDisableVar] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData().then(function (res) {
      reqRatioConfig("PropertyDebt").then(function (config) {
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
    request("/api/get_ratio_config?table=PropertyDebt", {
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
      category: "资产",
      property_name1: <span style={{ fontWeight: "600" }}>流动资产：</span>,
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: <span style={{ fontWeight: "600" }}>流动负债：</span>,
      code2: "",
      year_start2: "",
      year_end2: "",
    },
    {
      key: "2",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>货币资金</div>,
      code1: '1',
      year_start1: (
        <Form.Item name="property_2_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_1">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>短期借款</div>,
      code2: '33',
      year_start2: (
        <Form.Item name="property_2_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_26">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "3",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>短期投资</div>,
      code1: '2',
      year_start1: (
        <Form.Item name="property_3_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_2">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应付票据</div>,
      code2: '34',
      year_start2: (
        <Form.Item name="property_3_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_27">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "4",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>应收票据</div>,
      code1: '3',
      year_start1: (
        <Form.Item name="property_4_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_3">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应付账款</div>,
      code2: '35',
      year_start2: (
        <Form.Item name="property_4_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_28">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "5",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>应收股利</div>,
      code1: '4',
      year_start1: (
        <Form.Item name="property_5_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_4">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>预收账款</div>,
      code2: '36',
      year_start2: (
        <Form.Item name="property_5_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_29">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "6",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>应收利息</div>,
      code1: '5',
      year_start1: (
        <Form.Item name="property_6_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_5">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应付工资</div>,
      code2: '37',
      year_start2: (
        <Form.Item name="property_6_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_employee_11">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "7",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>应收账款</div>,
      code1: '6',
      year_start1: (
        <Form.Item name="property_7_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="FinanceStatusInfo_10">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应付福利费</div>,
      code2: '38',
      year_start2: (
        <Form.Item name="property_7_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_31">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "8",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>其他应收款</div>,
      code1: '7',
      year_start1: (
        <Form.Item name="property_8_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_7">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应付股利</div>,
      code2: '39',
      year_start2: (
        <Form.Item name="property_8_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_32">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "9",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>预付账款</div>,
      code1: '8',
      year_start1: (
        <Form.Item name="property_9_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_8">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应交税金</div>,
      code2: '40',
      year_start2: (
        <Form.Item name="property_9_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_runningsum_4">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "10",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>应收补贴款</div>,
      code1: '9',
      year_start1: (
        <Form.Item name="property_10_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_9">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>其他应交款</div>,
      code2: '41',
      year_start2: (
        <Form.Item name="property_10_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_34">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "11",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>存货</div>,
      code1: '10',
      year_start1: (
        <Form.Item name="property_11_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="FinanceStatusInfo_13">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>其他应付款</div>,
      code2: '42',
      year_start2: (
        <Form.Item name="property_11_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_35">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "12",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>待摊费用</div>,
      code1: '11',
      year_start1: (
        <Form.Item name="property_12_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_research_9">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>预提费用</div>,
      code2: '43',
      year_start2: (
        <Form.Item name="property_12_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_36">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "13",
      category: "资产",
      property_name1: (
        <div style={{ paddingLeft: "30px" }}>一年内到期的长期债权投资</div>
      ),
      code1: '12',
      year_start1: (
        <Form.Item name="property_13_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_12">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>预计负债</div>,
      code2: '44',
      year_start2: (
        <Form.Item name="property_13_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_37">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "14",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>其他流动资产</div>,
      code1: '13',
      year_start1: (
        <Form.Item name="property_14_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_13">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "30px" }}>一年内到期的长期负债</div>
      ),
      code2: '45',
      year_start2: (
        <Form.Item name="property_14_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_38">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "15",
      category: "资产",
      property_name1: <div style={{ color: "#ff4d4f" }}>流动资产合计</div>,
      code1: '14',
      year_start1: (
        <Form.Item name="property_15_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_runningsum_20">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>其他流动负债</div>,
      code2: '46',
      year_start2: (
        <Form.Item name="property_15_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_runningsum_29">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "16",
      category: "资产",
      property_name1: <span style={{ fontWeight: "600" }}>长期投资：</span>,
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: <div style={{ color: "#ff4d4f" }}>流动负债合计</div>,
      code2: '47',
      year_start2: (
        <Form.Item name="property_16_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_runningsum_29">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "17",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>长期股权投资</div>,
      code1: '15',
      year_start1: (
        <Form.Item name="property_17_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_14">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <span style={{ fontWeight: "600" }}>长期负债:</span>,
      code2: "",
      year_start2: "",
      year_end2: "",
    },
    {
      key: "18",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>长期债权投资</div>,
      code1: '16',
      year_start1: (
        <Form.Item name="property_19_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_15">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>长期借款</div>,
      code2: '48',
      year_start2: (
        <Form.Item name="property_18_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_40">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "19",
      category: "资产",
      property_name1: <div style={{ color: "#ff4d4f" }}>长期投资合计</div>,
      code1: '17',
      year_start1: (
        <Form.Item name="property_19_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_52">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>应付债券</div>,
      code2: '49',
      year_start2: (
        <Form.Item name="property_19_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_41">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "20",
      category: "资产",
      property_name1: <span style={{ fontWeight: "600" }}>固定资产:</span>,
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: <div style={{ paddingLeft: "30px" }}>长期应付款</div>,
      code2: '50',
      year_start2: (
        <Form.Item name="property_20_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_42">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "21",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>固定资产原价</div>,
      code1: '18',
      year_start1: (
        <Form.Item name="property_21_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="FinanceStatusInfo_16">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>专项应付款</div>,
      code2: '51',
      year_start2: (
        <Form.Item name="property_21_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_43">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "23",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}> 减:累计折旧</div>,
      code1: '19',
      year_start1: (
        <Form.Item name="property_23_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_runningsum_26">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>其他长期负债</div>,
      code2: '52',
      year_start2: (
        <Form.Item name="property_23_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_44">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "24",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>固定资产净值</div>,
      code1: '20',
      year_start1: (
        <Form.Item name="property_24_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_runningsum_22">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ color: "#ff4d4f" }}>长期负债合计</div>,
      code2: '53',
      year_start2: (
        <Form.Item name="property_24_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_53">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "25",
      category: "资产",
      property_name1: (
        <div style={{ paddingLeft: "30px" }}>减:固定资产减值准备</div>
      ),
      code1: '21',
      year_start1: (
        <Form.Item name="property_25_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_18">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <span style={{ fontWeight: "600" }}>递延税项:</span>,
      code2: "",
      year_start2: "",
      year_end2: "",
    },
    {
      key: "26",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>固定资产净额</div>,
      code1: '22',
      year_start1: (
        <Form.Item name="property_26_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_54">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>递延税款贷项</div>,
      code2: '55',
      year_start2: (
        <Form.Item name="property_26_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_45">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "27",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>工程物资</div>,
      code1: '23',
      year_start1: (
        <Form.Item name="property_27_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_19">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ color: "#ff4d4f" }}>负债合计</div>,
      code2: '56',
      year_start2: (
        <Form.Item name="property_27_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="FinanceStatusInfo_40">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "28",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>在建工程</div>,
      code1: '24',
      year_start1: (
        <Form.Item name="property_28_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_20">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <span style={{ fontWeight: "600" }}>所有者权益(或股东权益)：</span>
      ),
      code2: "",
      year_start2: "",
      year_end2: "",
    },
    {
      key: "29",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>固定资产清理</div>,
      code1: '25',
      year_start1: (
        <Form.Item name="property_29_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_runningsum_31">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "30px" }}>实收资本(或殷本)</div>
      ),
      code2: '57',
      year_start2: (
        <Form.Item name="property_29_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_runningsum_32">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "30",
      category: "资产",
      property_name1: <div style={{ color: "#ff4d4f" }}>固定资产合计</div>,
      code1: '26',
      year_start1: (
        <Form.Item name="property_30_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_55">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>减:已归还投资</div>,
      code2: '58',
      year_start2: (
        <Form.Item name="property_30_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_47">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "31",
      category: "资产",
      property_name1: (
        <span style={{ fontWeight: "600" }}>无形资产及其他资产：</span>
      ),
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: (
        <div style={{ paddingLeft: "30px" }}>实收资本(或股本)净额</div>
      ),
      code2: '59',
      year_start2: (
        <Form.Item name="property_31_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_runningsum_32">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "32",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>无形资产</div>,
      code1: '27',
      year_start1: (
        <Form.Item name="property_32_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_runningsum_24">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>资本公积</div>,
      code2: '60',
      year_start2: (
        <Form.Item name="property_32_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_48">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "33",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>长期待摊费用</div>,
      code1: '28',
      year_start1: (
        <Form.Item name="property_33_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_research_9">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px" }}>盈余公积</div>,
      code2: '61',
      year_start2: (
        <Form.Item name="property_33_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_49">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "34",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>其他长期资产</div>,
      code1: '29',
      year_start1: (
        <Form.Item name="property_34_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="tax_debt_24">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "30px" }}> 其中:法定公益金</div>
      ),
      code2: '62',
      year_start2: (
        <Form.Item name="property_34_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_50">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "35",
      category: "资产",
      property_name1: (
        <div style={{ color: "#ff4d4f" }}>无形资产及其他资产合计</div>
      ),
      code1: '30',
      year_start1: (
        <Form.Item name="property_35_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="company_runningsum_20">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "35px" }}>未分配利润</div>,
      code2: '63',
      year_start2: (
        <Form.Item name="property_35_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="tax_debt_51">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "36",
      category: "资产",
      property_name1: <span style={{ fontWeight: "600" }}>递延税项：</span>,
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: (
        <div style={{ color: "#ff4d4f" }}>所有者权益(或股东权益)合计</div>
      ),
      code2: '64',
      year_start2: (
        <Form.Item name="property_36_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="company_runningsum_31">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "37",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px" }}>延税款借项</div>,
      code1: '31',
      year_start1: (
        <Form.Item name="property_37_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: '31',
      property_name2: (
        <div style={{ color: "#ff4d4f" }}>负债和所有者权益(或股东权益)总计</div>
      ),
      code2: '65',
      year_start2: (
        <Form.Item name="property_37_yearStart_2">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_37_yearEnd_2">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "38",
      category: "资产",
      property_name1: <div style={{ color: "#ff4d4f" }}>资产合计</div>,
      code1: 32,
      year_start1: (
        <Form.Item name="property_38_yearStart_1">
          <Input
            disabled={true}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_38_yearEnd_1">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "130px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      code2: "",
      year_start2: "",
      year_end2: "",
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
      children: <Form.Item name="company_basicinfo_1"><Input disabled={true} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '15px' }}></Input></Form.Item>,
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
        <Row style={{ width: "1300px" }}>
          <Col span={24} style={{textAlign:'center',lineHeight:"80px",fontSize:'20px',fontWeight:'600'}}>资产负债表(适用执行企业会计制度的企业)</Col>
        </Row>
        
        <Row style={{ width: "1300px" }}>
          <Col span={8}>税款所屈期间:2024-01-01至2024-03-31</Col>
          <Col span={8} style={{textAlign:'center'}}>报送日期:2024-06-16</Col>
          <Col span={8} style={{textAlign:'right'}}>报送日期:2024-06-16</Col>
        </Row>
        <Form onFinish={onFinish} form={form}>
          <Descriptions bordered items={items} column="2" style={{ width: "1300px",marginTop:"20px",marginBottom:"20px",backgroundColor:"#efefef"  }} labelStyle={{color:"#333",width:"160px",textAlign:"right"}}/>
            <Table
              dataSource={data}
              style={{ width: "1300px" }}
              pagination={false}
              bordered
              sticky
            >
              <Column
                title="资产"
                dataIndex="property_name1"
                key="property_name1"
                boarded
              />
              <Column title="行次" dataIndex="code1" key="code1"/>
              <Column
                title="年初数"
                dataIndex="year_start1"
                key="year_start1"
              />
              <Column title="期末数" dataIndex="year_end1" key="year_end1" />
              <Column
                title="负债及所有者权益(或股东权益)"
                dataIndex="property_name2"
                key="property_name2"
              />
              <Column title="行次" dataIndex="code2" key="code2" />
              <Column
                title="年初数"
                dataIndex="year_start2"
                key="year_start2"
              />
              <Column title="期末数" dataIndex="year_end2" key="year_end2" />
   
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
