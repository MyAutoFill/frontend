import { reqBasicData, reqRatioConfig } from "@/pages/Utils";
import {
  CheckSquareFilled,
  ExpandAltOutlined,
  FastForwardOutlined,
  SaveFilled,
  StopFilled,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Descriptions,
  FloatButton,
  Form,
  Input,
  message,
  Row,
  Table,
} from "antd";
import "rc-banner-anim/assets/index.css";
import { useEffect, useState } from "react";
import { request } from "umi";
const { Column, ColumnGroup } = Table;

export default function PropertyDebtNewRule() {
  const [disableVar, setDisableVar] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  var today = new Date();
 
  // 获取年、月、日
  var year = today.getFullYear();
  var month = today.getMonth() + 1; // 月份从0开始，需要+1
  var day = today.getDate();
   
  // 格式化日期为yyyy-mm-dd
  var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData().then(function (res) {
      reqRatioConfig("PropertyDebtNewRule").then(function (config) {
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
    request("/api/get_ratio_config?table=PropertyDebtNewRule", {
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
      property_name1: <span style={{ fontWeight: "600", fontSize: '16px' }}>流动资产：</span>,
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: <span style={{ fontWeight: "600", fontSize: '16px' }}>流动负债：</span>,
      code2: "",
      year_start2: "",
      year_end2: "",
    },
    {
      key: "2",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>货币资金</div>,
      code1: "1",
      year_start1: (
        <Form.Item name="tax_debt_1">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_2_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>短期借款</div>,
      code2: "35",
      year_start2: (
        <Form.Item name="tax_debt_26">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_2_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>交易性金融资产</div>,
      code1: "2",
      year_start1: (
        <Form.Item name="tax_debt_56">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_3_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>交易性金融负债</div>,
      code2: "36",
      year_start2: (
        <Form.Item name="tax_debt_57">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_3_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>衍生金融资产</div>,
      code1: "3",
      year_start1: (
        <Form.Item name="tax_debt_58">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_4_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>衍生金融负债</div>,
      code2: "37",
      year_start2: (
        <Form.Item name="tax_debt_59">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_4_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应收票据</div>,
      code1: "4",
      year_start1: (
        <Form.Item name="tax_debt_3">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_5_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应付票据</div>,
      code2: "38",
      year_start2: (
        <Form.Item name="tax_debt_27">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_5_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应收账款</div>,
      code1: "5",
      year_start1: (
        <Form.Item name="FinanceStatusInfo_10">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_6_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应付账款</div>,
      code2: "39",
      year_start2: (
        <Form.Item name="property_6_yearStart_2">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_6_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应收款项融资</div>,
      code1: "6",
      year_start1: (
        <Form.Item name="tax_debt_60">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_7_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>预收款项</div>,
      code2: "40",
      year_start2: (
        <Form.Item name="tax_debt_61">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_7_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>预付款项</div>,
      code1: "7",
      year_start1: (
        <Form.Item name="tax_debt_62">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_8_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>合同负债</div>,
      code2: "41",
      year_start2: (
        <Form.Item name="tax_debt_63">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_8_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他应收款</div>,
      code1: "8",
      year_start1: (
        <Form.Item name="tax_debt_7">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_9_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应付职工薪酬</div>,
      code2: "42",
      year_start2: (
        <Form.Item name="company_runningsum_23">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_9_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>存货</div>,
      code1: "9",
      year_start1: (
        <Form.Item name="FinanceStatusInfo_13">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_10_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应交税费</div>,
      code2: "43",
      year_start2: (
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
      year_end2: (
        <Form.Item name="property_10_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>合同资产</div>,
      code1: "10",
      year_start1: (
        <Form.Item name="tax_debt_64">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_11_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他应付款</div>,
      code2: "44",
      year_start2: (
        <Form.Item name="tax_debt_35">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_11_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>持有待售资产</div>,
      code1: "11",
      year_start1: (
        <Form.Item name="tax_debt_65">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_12_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>持有待售负债</div>,
      code2: "45",
      year_start2: (
        <Form.Item name="tax_debt_66">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_12_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>一年内到期的非流动资产</div>
      ),
      code1: "12",
      year_start1: (
        <Form.Item name="tax_debt_67">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_13_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>一年内到期的非流动负债</div>,
      code2: "46",
      year_start2: (
        <Form.Item name="tax_debt_68">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_13_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他流动资产</div>,
      code1: "13",
      year_start1: (
        <Form.Item name="tax_debt_13">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_14_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他流动负债</div>
      ),
      code2: "47",
      year_start2: (
        <Form.Item name="company_runningsum_29">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_14_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft:'60px',color: "#ff4d4f", fontSize: '16px' }}>流动资产合计</div>,
      code1: "14",
      year_start1: (
        <Form.Item name="company_runningsum_20">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_15_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft:'60px',color: "#ff4d4f", fontSize: '16px' }}>流动负债合计</div>,
      code2: "48",
      year_start2: (
        <Form.Item name="tax_debt_69">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_15_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <span style={{ fontWeight: "600", fontSize: '16px' }}>非流动资产:</span>,
      code1: "",
      year_start1: "",
      year_end1: "",
      property_name2: <span style={{ fontWeight: "600", fontSize: '16px' }}>非流动负债:</span>,
      code2: "",
      year_start2: "",
      year_end2:  "",
    },
    {
      key: "17",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>债权投资</div>,
      code1: "15",
      year_start1: (
        <Form.Item name="tax_debt_15">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_17_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>长期借款:</div>,
      code2: "49",
      year_start2: (
        <Form.Item name="tax_debt_40">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_17_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "18",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他债权投资</div>,
      code1: "16",
      year_start1: (
        <Form.Item name="tax_debt_70">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_19_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>应付债券</div>,
      code2: "50",
      year_start2: (
        <Form.Item name="tax_debt_41">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_18_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "19",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>长期应收款</div>,
      code1: "17",
      year_start1: (
        <Form.Item name="tax_debt_71">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_19_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>其中:优先股</div>,
      code2: "51",
      year_start2: (
        <Form.Item name="tax_debt_72">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_19_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>长期股权投资</div>,
      code1: "18",
      year_start1: (
        <Form.Item name="tax_debt_14">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_19_yearEnd_20"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>永续债</div>,
      code2: "52",
      year_start2: (
        <Form.Item name="tax_debt_73">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_20_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他权益工具投资</div>,
      code1: "19",
      year_start1: (
        <Form.Item name="tax_debt_74">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_21_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>租赁负债</div>,
      code2: "53",
      year_start2: (
        <Form.Item name="tax_debt_75">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_21_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他非流动金融资产</div>,
      code1: "20",
      year_start1: (
        <Form.Item name="tax_debt_76">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_24_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>长期应付款</div>,
      code2: "54",
      year_start2: (
        <Form.Item name="tax_debt_42">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_24_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "25",
      category: "资产",
      property_name1: (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>投资性房地产</div>
      ),
      code1: "21",
      year_start1: (
        <Form.Item name="tax_debt_77">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_25_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>预计负债</div>,
      code2: "55",
      year_start2: (
        <Form.Item name="tax_debt_37">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_25_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "26",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>固定资产</div>,
      code1: "22",
      year_start1: (
        <Form.Item name="FinanceStatusInfo_16">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_26_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>递延收益</div>,
      code2: "56",
      year_start2: (
        <Form.Item name="tax_debt_78">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_26_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "27",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>在建工程</div>,
      code1: "23",
      year_start1: (
        <Form.Item name="tax_debt_20">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_27_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>递延所得税负债</div>,
      code2: "57",
      year_start2: (
        <Form.Item name="tax_debt_79">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_27_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "28",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>生产性生物资产</div>,
      code1: "24",
      year_start1: (
        <Form.Item name="tax_debt_80">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_28_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他非流动负债</div>,
      code2: "58",
      year_start2: (
        <Form.Item name="tax_debt_81">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_28_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "29",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>油气资产</div>,
      code1: "25",
      year_start1: (
        <Form.Item name="tax_debt_82">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_29_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "60px",color: "#ff4d4f", fontSize: '16px'}}>非流动负债合计</div>
      ),
      code2: "59",
      year_start2: (
        <Form.Item name="property_29_yearStart_2">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_29_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "30",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px'}}>使用权资产</div>,
      code1: "26",
      year_start1: (
        <Form.Item name="tax_debt_83">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_30_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "60px" ,color: "#ff4d4f", fontSize: '16px'}}>负债合计</div>,
      code2: "60",
      year_start2: (
        <Form.Item name="FinanceStatusInfo_40">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_30_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "31",
      category: "资产",
      property_name1: (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>无形资产</div>
      ),
      code1: "27",
      year_start1: (
        <Form.Item name="company_runningsum_24">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_31_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <span style={{ fontWeight: "600", fontSize: '16px' }}>所有者权益(或股东权益):</span>
      ),
      code2: "",
      year_start2: '',
      year_end2: '',
    },
    {
      key: "32",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>开发支出</div>,
      code1: "28",
      year_start1: (
        <Form.Item name="Tech_EcoInfo_101">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_32_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>实收资本(或股本)</div>,
      code2: "61",
      year_start2: (
        <Form.Item name="company_runningsum_32">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_32_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "33",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>商誉</div>,
      code1: "29",
      year_start1: (
        <Form.Item name="tax_debt_84">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_33_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他权益工具</div>,
      code2: "62",
      year_start2: (
        <Form.Item name="tax_debt_85">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_33_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "34",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>长期待摊费用</div>,
      code1: "30",
      year_start1: (
        <Form.Item name="property_34_yearStart_1">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_34_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "60px", fontSize: '16px' }}>其中:优先股</div>
      ),
      code2: "63",
      year_start2: (
        <Form.Item name="property_34_yearStart_2">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_34_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "35",
      category: "资产",
      property_name1: (
        <div style={{  paddingLeft: "30px", fontSize: '16px' }}>递延所得税资产</div>
      ),
      code1: "32",
      year_start1: (
        <Form.Item name="tax_debt_86">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_35_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>永续债</div>,
      code2: "64",
      year_start2: (
        <Form.Item name="property_35_yearStart_2">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_35_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "36",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他非流动资产</div>,
      code1: "32",
      year_start1: (
        <Form.Item name="tax_debt_87">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: (
        <Form.Item name="property_36_yearEnd_1"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
          <Input
            disabled={true}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      property_name2: (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>资本公积</div>
      ),
      code2: "65",
      year_start2: (
        <Form.Item name="property_36_yearStart_2">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_36_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "37",
      category: "资产",
      property_name1: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>非流动资产合计</div>,
      code1: "33",
      year_start1: (
        <Form.Item name="Tech_EcoInfo_99">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end1: "--",
      property_name2: 
      (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>减:库存股</div>
      ),
      code2: "66",
      year_start2: (
        <Form.Item name="tax_debt_88">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_37_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "38",
      category: "资产",
      property_name1: '',
      code1: '',
      year_start1: '',
      year_end1: '',
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>其他综合收益</div>,
      code2: "67",
      year_start2: (
        <Form.Item name="tax_debt_89">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_37_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "38",
      category: "资产",
      property_name1: '',
      code1: '',
      year_start1: '',
      year_end1: '',
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>专项储备</div>,
      code2: "68",
      year_start2: (
        <Form.Item name="tax_debt_90">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_37_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "38",
      category: "资产",
      property_name1: '',
      code1: '',
      year_start1: '',
      year_end1: '',
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>盈余公积</div>,
      code2: "69",
      year_start2: (
        <Form.Item name="tax_debt_49">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_37_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "38",
      category: "资产",
      property_name1: '',
      code1: '',
      year_start1: '',
      year_end1: '',
      property_name2: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>未分配利润</div>,
      code2: "70",
      year_start2: (
        <Form.Item name="tax_debt_51">
          <Input
            disabled={disableVar}
            addonAfter="元"
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
      year_end2: (
        <Form.Item name="property_37_yearEnd_2"  rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "38",
      category: "资产",
      property_name1: '',
      code1: '',
      year_start1: '',
      year_end1: '',
      property_name2: <div style={{ color: "#ff4d4f", fontSize:'16px' }}>所有者权益(或股东权益)合计</div>,
      code2: "71",
      year_start2: '--',
      year_end2: '--',
    },
    {
      key: "38",
      category: "资产",
      property_name1: <div style={{ color: "#ff4d4f", fontSize:'16px' }}>资产总计</div>,
      code1: '34',
      year_start1: '--',
      year_end1: '--',
      property_name2: <div style={{ color: "#ff4d4f", fontSize:'16px' }}>负债和所有者权益(或股东权益)总计</div>,
      code2: "72",
      year_start2: '--',
      year_end2: '--',
    },
  ];
  const columns = [
    {
      title: <span style={{fontSize: '16px'}}>资产</span>,
      dataIndex: "property_name1",
      key: "property_name1",
      width: 150,
    },
    {
      title: <span style={{fontSize: '16px'}}>行次</span>,
      dataIndex: "code1",
      key: "code1",
      width: 60,
    },
    {
      title: <span style={{fontSize: '16px'}}>期末余额</span>,
      dataIndex: "year_start1",
      key: "year_start1",
      width: 150,
    },
    {
      title: <span style={{fontSize: '16px'}}>上年年末余额</span>,
      dataIndex: "year_end1",
      key: "year_end1",
      width: 150,
    },
    {
      title: <span style={{fontSize: '16px'}}>负债及所有者权益<br/>(或股东权益)</span>,
      dataIndex: "property_name2",
      key: "property_name2",
      width: 150,
    },
    {
      title: <span style={{fontSize: '16px'}}>行次</span>,
      dataIndex: "code2",
      key: "code2",
      width: 60,
    },
    {
      title: <span style={{fontSize: '16px'}}>期末余额</span>,
      dataIndex: "year_start2",
      key: "year_start2",
      width: 150,
    },
    {
      title: <span style={{fontSize: '16px'}}>上年年末余额</span>,
      dataIndex: "year_end2",
      key: "year_end2",
      width: 150,
    },
  ];

  const items = [
    {
      key: '1',
      label: <span style={{fontSize: '16px'}}>纳税人名称</span>,
      children: <Form.Item name="company_basicinfo_2"><Input disabled={true} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '15px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>纳税人识别号</span>,
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
        <Row style={{ width: "1200px" }}>
          <Col
            span={24}
            style={{
              textAlign: "center",
              lineHeight: "80px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            资产负债表(适用已执行新金融准则、新收入准则和新租赁准则的一般企业)
          </Col>
        </Row>
        <Row style={{ width: "1200px" }}>
          <Col span={12}>税款所属期间：2024-04-0'至 2024-06-31</Col>
          <Col span={12} style={{ textAlign: "right" }}>
          会企01表金额单位：元,至角分
          </Col>
        </Row>
        <Descriptions
          bordered
          items={items}
          column="2"
          style={{
            width: "1200px",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#efefef",
          }}
          labelStyle={{ color: "#333", width: "160px", textAlign: "right" }}
        />
          <Table
            dataSource={data}
            style={{ width: "1200px" }}
            pagination={false}
            bordered
            sticky
            columns={columns}
            size="small"
          >
            {/* <Column
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
    */}
          </Table>
          <FloatButton.Group
            open={defaultOpen}
            trigger="click"
            style={{
              insetInlineEnd: 0,
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
