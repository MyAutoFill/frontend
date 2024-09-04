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

export default function CompanyTaxInfo() {
  const [disableVar, setDisableVar] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData().then(function (res) {
      reqRatioConfig("CompanyTaxInfo").then(function (config) {
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
    request("/api/get_ratio_config?table=CompanyTaxInfo", {
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
        <span style={{ fontWeight: "600" }}>一.经营活动产生的晚金流量：</span>
      ),
      code: "",
      money: "",
    },
    {
      key: "2",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>销售商品.提供劳务收到的现金</div>
      ),
      code: "1",
      money: (
        <Form.Item name="money_1">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "3",
      project_name: <div style={{ paddingLeft: "30px" }}>收到的税费返还</div>,
      code: "2",
      money: (
        <Form.Item name="money_2">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>
          收到的其他与经营活动有关的资金
        </div>
      ),
      code: "3",
      money: (
        <Form.Item name="money_3">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "5",
      project_name: <div style={{ paddingLeft: "60px" }}>现金流入小计</div>,
      code: "4",
      money: (
        <Form.Item name="money_4">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>购买商品.接受劳务支付的现金</div>
      ),
      code: "5",
      money: (
        <Form.Item name="money_5">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>
          支付给职工以及为职工支付的现金
        </div>
      ),
      code: "6",
      money: (
        <Form.Item name="money_6">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "8",
      project_name: <div style={{ paddingLeft: "30px" }}>支付的各项税费</div>,
      code: "7",
      money: (
        <Form.Item name="money_7">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>
          支付的其他与经营活动有美的现金
        </div>
      ),
      code: "8",
      money: (
        <Form.Item name="money_8">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "10",
      project_name: <div style={{ paddingLeft: "60px" }}>现金流出小计</div>,
      code: "9",
      money: (
        <Form.Item name="money_9">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>经营活动产生的现金流量净额</div>
      ),
      code: "10",
      money: (
        <Form.Item name="money_10">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <span style={{ fontWeight: "600" }}>二.投资活动产生的现金说量:</span>
      ),
      code: "",
      money: "",
    },
    {
      key: "13",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>收回投密所收到的现金</div>
      ),
      code: "11",
      money: (
        <Form.Item name="money_11">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>取得投演收益所收到的现金</div>
      ),
      code: "12",
      money: (
        <Form.Item name="money_12">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>
          处置国定资产.无形资产和县他长期资产所收回的号金净额
        </div>
      ),
      code: "13",
      money: (
        <Form.Item name="money_13">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        <div style={{ paddingLeft: "30px" }}>收到其帖与投密活动有关的现金</div>
      ),
      code: "14",
      money: (
        <Form.Item name="money_14">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "17",
      project_name: <div style={{ paddingLeft: "60px" }}>现金流入小计</div>,
      code: "15",
      money: (
        <Form.Item name="money_15">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "18",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>
          购建国定资产.无形淘产和其的长期资产所支村的晚金
        </div>
      ),
      code: "16",
      money: (
        <Form.Item name="money_16">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "19",
      project_name: <div style={{ paddingLeft: "30px" }}>投资所支付的现金</div>,
      code: "17",
      money: (
        <Form.Item name="money_17">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "20",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>
          支忖的其油与投资活动有关的现金
        </div>
      ),
      code: "18",
      money: (
        <Form.Item name="money_18">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "22",
      project_name: <div style={{ paddingLeft: "60px" }}>现会流出小计</div>,
      code: "19",
      money: (
        <Form.Item name="money_19">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "21",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>投资活动产生的现金流量净额</div>
      ),
      code: "20",
      money: (
        <Form.Item name="money_20">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "22",
      project_name: (
        <div style={{ fontWeight: "600" }}>三.筹资活动所产生的晚金流量:</div>
      ),
      code: "",
      money: "",
    },
    {
      key: "23",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>吸收投资所收则的现金</div>
      ),
      code: "21",
      money: (
        <Form.Item name="money_21">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "24",
      project_name: <div style={{ paddingLeft: "30px" }}>倡款所收到的观金</div>,
      code: "22",
      money: (
        <Form.Item name="money_22">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "25",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>
          收到的目油与解资活动有关的现金
        </div>
      ),
      code: "23",
      money: (
        <Form.Item name="money_23">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "26",
      project_name: <div style={{ paddingLeft: "60px" }}>现金流入小计</div>,
      code: "24",
      money: (
        <Form.Item name="money_24">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "27",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>信汪债务所支付的嗅金</div>
      ),
      code: "25",
      money: (
        <Form.Item name="money_25">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "28",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>
          分配股利.利润残偿付利息所支付的现金
        </div>
      ),
      code: "26",
      money: (
        <Form.Item name="money_26">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "29",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>
          支忖的其帖与筹密活动有笑的现金
        </div>
      ),
      code: "27",
      money: (
        <Form.Item name="money_27">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "30",
      project_name: <div style={{ paddingLeft: "60px" }}>现会流出小计</div>,
      code: "28",
      money: (
        <Form.Item name="money_28">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "31",
      project_name: (
        <div style={{ paddingLeft: "30px" }}>帅资活动产生的现金流量净额</div>
      ),
      code: "29",
      money: (
        <Form.Item name="money_29">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "32",
      project_name: (
        <div style={{ fontWeight: "600" }}>四.汇率变动对现金的影响</div>
      ),
      code: "29",
      money: (
        <Form.Item name="money_29">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "33",
      project_name: (
        <div style={{ fontWeight: "600" }}>五.现金及現金等价物净增加额</div>
      ),
      code: "30",
      money: (
        <Form.Item name="money_30">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "34",
      project_name: <div style={{ fontWeight: "600" }}>补充资料</div>,
      code: "",
      money: "",
    },
    {
      key: "35",
      project_name: <div style={{ fontWeight: "600" }}>项目</div>,
      code: <div style={{ fontWeight: "600" }}>行次</div>,
      money: <div style={{ fontWeight: "600" }}>金额</div>,
    },
    {
      key: "36",
      project_name: <span style={{fontWeight:"600"}}>1.将净利润调节为经营活动现金流量:</span>,
      code: "",
      money: '',
    },
    {
      key: "37",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>净利润</div>
      ),
      code: "31",
      money: (
        <Form.Item name="money_31">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "38",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>加:计提的资产减值准备</div>
      ),
      code: "32",
      money: (
        <Form.Item name="money_32">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "39",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>固定资产折1日</div>
      ),
      code: "33",
      money: (
        <Form.Item name="money_33">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "40",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>无形资产摊销</div>
      ),
      code: "34",
      money: (
        <Form.Item name="money_34">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "41",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>长期待摊费用摊销</div>
      ),
      code: "35",
      money: (
        <Form.Item name="money_35">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "42",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>待擁碧用i少(胾:増加)</div>
      ),
      code: "36",
      money: (
        <Form.Item name="money_36">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "43",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>预提费用增加(减:减少)</div>
      ),
      code: "37",
      money: (
        <Form.Item name="money_37">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "44",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>处置固定资产.无形资产和其他长期资产的损失(:收益)</div>
      ),
      code: "38",
      money: (
        <Form.Item name="money_38">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "45",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>固定资产报度损失</div>
      ),
      code: "39",
      money: (
        <Form.Item name="money_39">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "46",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>财务费用</div>
      ),
      code: "40",
      money: (
        <Form.Item name="money_40">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "47",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>投资损失(藏:收益)</div>
      ),
      code: "41",
      money: (
        <Form.Item name="money_41">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "48",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>递延税款贷项(藏:借项)</div>
      ),
      code: "42",
      money: (
        <Form.Item name="money_42">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "49",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>存货的减少(:增加)</div>
      ),
      code: "43",
      money: (
        <Form.Item name="money_43">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "50",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>经营性应收项目的减少(减:增加)</div>
      ),
      code: "44",
      money: (
        <Form.Item name="money_44">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "51",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>经营性应付项目的增加(戏:减少)</div>
      ),
      code: "45",
      money: (
        <Form.Item name="money_45">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "52",
      project_name: (
        <div style={{  paddingLeft: "60px" }}>其他</div>
      ),
      code: "46",
      money: (
        <Form.Item name="money_46">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "53",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>经营活动产生的现金流量净额</div>
      ),
      code: "47",
      money: (
        <Form.Item name="money_47">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "55",
      project_name: <div style={{  fontWeight: "600" }}>2.不涉及现金收支的投资和筹资活动:</div>,
      code: "",
      money: '',
    },
    {
      key: "56",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>债务转为资本</div>
      ),
      code: "48",
      money: (
        <Form.Item name="money_48">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "57",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>一年内到期的可转换公司债券</div>
      ),
      code: "49",
      money: (
        <Form.Item name="money_49">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "58",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>雕资租入固定资产</div>
      ),
      code: "50",
      money: (
        <Form.Item name="money_50">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "59",
      project_name: <div style={{  fontWeight: "600" }}>3.现金及现金等价物净增加情况况:</div>,
      code: "",
      money: '',
    },
    {
      key: "60",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>现金的期末余额</div>
      ),
      code: "51",
      money: (
        <Form.Item name="money_51">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "61",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>减:现金的期初余额</div>
      ),
      code: "52",
      money: (
        <Form.Item name="money_52">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "62",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>加:现金等价物的期末余额</div>
      ),
      code: "53",
      money: (
        <Form.Item name="money_53">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "63",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>减:现金等价物的期初余额</div>
      ),
      code: "54",
      money: (
        <Form.Item name="money_54">
          <Input
            disabled={disableVar}
            addonAfter=""
            size="large"
            style={{ width: "150px", marginTop: "10px" }}
            defaultValue="0.0"
          ></Input>
        </Form.Item>
      ),
    },
    {
      key: "64",
      project_name: (
        <div style={{  paddingLeft: "30px" }}>现金及现金等价物净增加额</div>
      ),
      code: "55",
      money: (
        <Form.Item name="money_55">
          <Input
            disabled={disableVar}
            addonAfter=""
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
        colSpan: index === 34 ? 3 : 1,
        align:index === 34 ? 'center':'left',
      }),
    },
    {
      title: "行次",
      dataIndex: "code",
      key: "code",
      width: 60,
      onCell:(_, index) => {
        if (index === 34) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
    {
      title: "金额",
      dataIndex: "money",
      key: "money",
      width: 150,
      onCell:(_, index) => {
        if (index === 34) {
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
      key: "1",
      label: "纳税人名称:",
      children: "威海东日技研电子有限公司",
    },
    {
      key: "2",
      label: "纳税人识别号:",
      children: "91371000613752141X",
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
          <Col
            span={24}
            style={{
              textAlign: "center",
              lineHeight: "80px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            现金流量表(适用执行企业会计制度的企业)
          </Col>
        </Row>

        <Row style={{ width: "1300px" }}>
          <Col span={8}>税款所属时间:2024-01-01至2024-03-31</Col>
          <Col span={8} style={{ textAlign: "center" }}>
            报送日期:2024-06-16
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
        <Form onFinish={onFinish} form={form}>
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
