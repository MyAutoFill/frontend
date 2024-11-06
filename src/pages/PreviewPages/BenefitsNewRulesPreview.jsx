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

export default function BenefitsNewRules() {
  const [disableVar, setDisableVar] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    reqBasicData().then(function (res) {
      reqRatioConfig("BenefitsNewRules").then(function (config) {
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
    request("/api/get_ratio_config?table=BenefitsNewRules", {
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
        <div style={{ fontWeight: "600" }}>一、营业收入</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_1">
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
        <div style={{ paddingLeft: "30px" }}>减:营业成本</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_2">
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
        <div style={{ paddingLeft: "60px" }}>税金及附加</div>
      ),
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
        <div style={{ paddingLeft: "60px" }}>销售费用</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_5">
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
        <div style={{ paddingLeft: "60px" }}>管理费用</div>
      ),
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
        <div style={{ paddingLeft: "60px" }}>研发费用</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_7">
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
        <div style={{ paddingLeft: "60px" }}>财务费用</div>
      ),
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
        <div style={{ paddingLeft: "90px" }}>其中:利息费用</div>
      ),
      monthNum: (
        <Form.Item name="FinanceStatusInfo_76">
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
        <div style={{ paddingLeft: "120px" }}>利息收入</div>
      ),
      monthNum: (
        <Form.Item name="FinanceStatusInfo_73">
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
        <div style={{ paddingLeft: "30px" }}>加:其他收益</div>
      ),
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
        <div style={{ paddingLeft: "60px" }}>投资收益(损失以“_”号填列)</div>
      ),
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
        <div style={{ paddingLeft: "60px" }}>其中:对联营企业和合营企业的投资收益</div>
      ),
      monthNum: (
        <Form.Item name="tax_benefit_25">
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
        <div style={{ paddingLeft: "60px" }}>以摊余成本计量的金融资产终止确认收益(损失以“-”号填列)</div>
      ),
      monthNum: (
        <Form.Item name="tax_benefit_26">
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
        <div style={{ paddingLeft: "60px" }}>净敞口套期收益(损失以“_”号填列)</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_25">
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
        <div style={{ paddingLeft: "60px" }}>公允价值变动收益(损失以“_”号填列)</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_11">
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
        <div style={{ paddingLeft: "60px" }}>信用减值损失(损失以“_”号填列))</div>
      ),
      monthNum: (
        <Form.Item name="company_runningsum_10">
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
      project_name: <div style={{ paddingLeft: "60px" }}>资产减值损失(损失以“_”号填列)</div>,
      monthNum: (
        <Form.Item name="company_runningsum_9">
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
      project_name: <div style={{ paddingLeft: "60px" }}>资产处置收益(损失以“_”号填列)</div>,
      monthNum: (
        <Form.Item name="company_runningsum_27">
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
      key: "19",
      project_name: <div style={{ fontWeight: "600" }}>二、营业利润(亏损以“_”号填列)</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "20",
      project_name: <div style={{ paddingLeft: "30px" }}>加:营业外收入</div>,
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
      project_name: <div style={{ paddingLeft: "30px" }}>减:营业外支出</div>,
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
      project_name: <div style={{ fontWeight: "600" }}>三、利润总额(亏损总额以“-”号填列)</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "23",
      project_name: <div style={{ paddingLeft: "30px" }}>减:所得税费用</div>,
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
        <Form.Item name="yearNum_23">
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
      project_name: <div style={{ fontWeight: "600" }}>四、净利润(净亏损以“_”号填列)</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "25",
      project_name: <div style={{ paddingLeft: "30px" }}>(一)持续经营净利润(净亏损以“_”号填列)</div>,
      monthNum: (
        <Form.Item name="tax_benefits_32">
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
        <Form.Item name="yearNum_25">
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
      project_name: <div style={{ paddingLeft: "30px" }}>(二)终止经营净利润(净亏损以“_”号填列)</div>,
      monthNum: (
        <Form.Item name="tax_benefits_33">
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
      project_name: <div style={{ fontWeight: "600" }}>五、其他综合收益的税后净额</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "28",
      project_name: <div style={{ paddingLeft: "30px" }}>(一)不能重分类进损益的其他综合收益</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "29",
      project_name: <div style={{ paddingLeft: "60px" }}>1.重新计量设定受益计划变动额</div>,
      monthNum: (
        <Form.Item name="tax_benefits_34">
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
        <Form.Item name="yearNum_29">
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
      project_name: <div style={{ paddingLeft: "60px" }}>2.权益法下不能转损益的其他综合收益</div>,
      monthNum: (
        <Form.Item name="tax_benefits_35">
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
      project_name: <div style={{ paddingLeft: "60px" }}>3.其他权益工具投资公允价值变动</div>,
      monthNum: (
        <Form.Item name="tax_benefits_36">
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
      project_name: <div style={{ paddingLeft: "60px" }}>4.企业自身信用风险公允价值变动</div>,
      monthNum: (
        <Form.Item name="tax_benefits_37">
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
      project_name: <div style={{ paddingLeft: "30px" }}>(二)将重分类进损益的其他综合收益</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "34",
      project_name: <div style={{ paddingLeft: "60px" }}>1.权益法下可转损益的其他综合收益</div>,
      monthNum: (
        <Form.Item name="tax_benefits_38">
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
      project_name: <div style={{ paddingLeft: "60px" }}>2.其他债权投资公允价值变动</div>,
      monthNum: (
        <Form.Item name="tax_benefits_39">
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
      project_name: <div style={{ paddingLeft: "60px" }}>3.金融资产重分类计入其他综合收益的金额</div>,
      monthNum: (
        <Form.Item name="tax_benefits_40">
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
        <Form.Item name="yearNum_36">
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
      project_name: <div style={{ paddingLeft: "60px" }}>4.其他债权投资信用减值准备</div>,
      monthNum: (
        <Form.Item name="tax_benefits_41">
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
      key: "38",
      project_name: <div style={{ paddingLeft: "60px" }}>5.现金流量套期储备</div>,
      monthNum: (
        <Form.Item name="tax_benefits_42">
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
    {
      key: "39",
      project_name: <div style={{ paddingLeft: "60px" }}>6.外币财务报表折算差额</div>,
      monthNum: (
        <Form.Item name="tax_benefits_43">
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
        <Form.Item name="yearNum_39">
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
      project_name: <div style={{ fontWeight: "600" }}>六、综合收益总额</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "41",
      project_name: <div style={{ fontWeight: "600" }}>七、每股收益:</div>,
      monthNum: <div style={{ textAlign: "left" }}>--</div>,
      yearNum: <div style={{ textAlign: "left" }}>--</div>,
    },
    {
      key: "42",
      project_name: <div style={{ paddingLeft: "30px" }}>(一)基本每股收益</div>,
      monthNum: (
        <Form.Item name="tax_benefits_44">
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
        <Form.Item name="yearNum_42">
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
      key: "43",
      project_name: <div style={{ paddingLeft: "30px" }}>(二)稀释每股收益</div>,
      monthNum: (
        <Form.Item name="tax_benefits_45">
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
        <Form.Item name="yearNum_43">
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
      title: "项目",
      dataIndex: "project_name",
      key: "project_name",
      width: 220,
      onCell: (_, index) => ({
        colSpan: index === 0 ? 3 : 1,
      }),
    },
    {
      title: "本期金额",
      dataIndex: "monthNum",
      key: "monthNum",
      width: 150,
      onCell:(_, index) => {
        if (index === 0) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
    {
      title: "上期金额",
      dataIndex: "yearNum",
      key: "yearNum",
      width: 150,
      onCell:(_, index) => {
        if (index === 0) {
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
          利润表(适用已执行新金融准则、新收入准则和新租赁准则的一般企业)
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
