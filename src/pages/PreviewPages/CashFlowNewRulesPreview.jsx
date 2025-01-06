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

export default function CashFlowNewRule() {
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
      reqRatioConfig("CashFlowNewRule").then(function (config) {
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
    request("/api/get_ratio_config?table=CashFlowNewRule", {
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
        <div style={{ fontWeight: "600", fontSize: '16px' }}>一、经营活动产生的现金流量:</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_71" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>销售商品、提供劳务收到的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_1" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>收到的税费返还</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_2" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>收到的其他与经营活动有关的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_47" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "60px", fontSize: '16px' }}>经营活动现金流入小计</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_3" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>购买商品、接受劳务支付的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_4" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>支付给职工以及为职工支付的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_5" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>支付的各项税费</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_6" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>支付其他与经营活动有关的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_51" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "60px", fontSize: '16px' }}>经营活动现金流出小计</div>
      ),
      monthNum: (
        <Form.Item name="monthNum_10" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>经营活动产生的现金流量净额</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_71" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ fontWeight: "600", fontSize: '16px' }}>二、投资活动产生的现金流量:</div>
      ),
      monthNum: '',
      yearNum: '',
    },
    {
      key: "13",
      project_name: (
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>收回投资收到的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_52" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>取得投资收益收到的现金</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_53" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>处置固定资产、无形资产和其他长期资产收回的现金净额</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_10" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <div style={{ paddingLeft: "30px", fontSize: '16px' }}>处置子公司及其他营业单位收到的现金净额</div>
      ),
      monthNum: (
        <Form.Item name="cash_flow_55" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>收到其他与投资活动有关的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_11" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "18",
      project_name: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>投资活动现金流入小计</div>,
      monthNum: '0.00',
      yearNum: '0.00',
    },
    {
      key: "19",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>购建固定资产、无形资产和其他长期资产所支付的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_12" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "20",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>投资支付的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_58" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "21",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>取得子公司及其他营业单位支付的现金净额</div>,
      monthNum: (
        <Form.Item name="cash_flow_59" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
      key: "22",
      project_name:  <div style={{ paddingLeft: "30px", fontSize: '16px' }}>支付其他与投资活动有关的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_14" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
    {
      key: "23",
      project_name: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>投资活动现金流出小计</div>,
      monthNum: '-',
      yearNum: '-',
    },
    {
      key: "24",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>投资活动产生的现金流量净额</div>,
      monthNum: '--',
      yearNum: '--',
    },
    {
      key: "25",
      project_name: <div style={{ fontWeight: "600", fontSize: '16px' }}>三、筹资活动所产生的现金流量:</div>,
      monthNum: '',
      yearNum: '',
    },
    {
      key: "26",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>吸收投资收到的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_61" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_26">
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
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>取得借款收到的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_62" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_27">
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
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>收到其他与筹资活动有关的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_63" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_28">
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
      project_name: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>筹资活动现金流入小计</div>,
      monthNum: '--',
      yearNum:'--',
    },
    {
      key: "30",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>偿还债务支付的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_64" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_30">
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
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>分配股利、利润或偿付利息支付的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_19" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_31">
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
      key: "32",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>支付其他与筹资活动有关的现金</div>,
      monthNum: (
        <Form.Item name="cash_flow_66" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_32">
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
      project_name: <div style={{ paddingLeft: "60px", fontSize: '16px' }}>筹资活动现金流出小计</div>,
      monthNum: '0.00',
      yearNum:'0.00',
    },
    {
      key: "34",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>筹资活动产生的现金流量净额</div>,
      monthNum: (
        <Form.Item name="cash_flow_72" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_34">
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
      project_name: <div style={{ fontWeight: "600", fontSize: '16px' }}>四、汇率变动对现金及现金等价物的影响</div>,
      monthNum: (
        <Form.Item name="cash_flow_67" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_35">
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
      project_name: <div style={{ fontWeight: "600", fontSize: '16px' }}>五、现金及现金等价物净增加额</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "37",
      project_name: <div style={{ paddingLeft: "30px", fontSize: '16px' }}>加:期初现金及现金等价物余额</div>,
      monthNum: (
        <Form.Item name="cash_flow_68" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_37">
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
      key: "40",
      project_name: <div style={{ fontWeight: "600", fontSize: '16px' }}>六、期末现金及现金等价物余额</div>,
      monthNum: (
        <Form.Item name="monthNum_38" rules={[{required: true, pattern: /^-?\d+(\.\d+)?$/, message: '该项需为数字',},]}>
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
        <Form.Item name="yearNum_38">
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
      title: <span style={{fontSize: '16px'}}>项目</span>,
      dataIndex: "project_name",
      key: "project_name",
      width: 220,
      onCell: (_, index) => ({
        colSpan: [0,11,24].indexOf(index) >=0 ? 3 : 1,
      }),
    },
    {
      title: <span style={{fontSize: '16px'}}>本期金额</span>,
      dataIndex: "monthNum",
      key: "monthNum",
      width: 150,
      onCell:(_, index) => {
        if ([0,11,24].indexOf(index) >=0) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
    {
      title: <span style={{fontSize: '16px'}}>上期金额</span>,
      dataIndex: "yearNum",
      key: "yearNum",
      width: 150,
      onCell:(_, index) => {
        if ([0,11,24].indexOf(index) >=0) {
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
      label: <span style={{fontSize: '16px'}}>纳税人名称</span>,
      children: <Form.Item name="company_basicinfo_2"><Input disabled={true} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '15px' }}></Input></Form.Item>,
      span: 1.5
    },
    {
      key: '2',
      label: <span style={{fontSize: '16px'}}>纳税人识别号</span>,
      children: <Form.Item name="company_investor28"><Input disabled={true} size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '15px' }}></Input></Form.Item>,
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
          现金流量表(适用已执行新金融准则、新收入准则和新租赁准则的一般企业)
          </Col>
        </Row>

        <Row style={{ width: "1300px" }}>
          <Col span={8}>税款所属时间:2024-01-01至2024-03-31</Col>
          <Col span={8} style={{ textAlign: "center" }}>
            报送日期:{formattedDate}
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
