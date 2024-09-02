import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Form, Input, Button, FloatButton, message, Table} from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
import { request } from 'umi';
import { useEffect } from 'react';


export default function CompanyTaxInfo() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    request('/api/load_data', {
      method: 'POST',
      data: {
        date: '2024-08'
      }
    })
      .then(function (res) {
        form.setFieldsValue(res);
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

  const data = [
    {
      key: '50',
      category: '利润',
      project_name: '主营业务收入',
      code: <Form.Item name="Tax_companyInfo_250"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_251"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_252"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_253"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_254"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '51',
      category: '利润',
      project_name: '主营业务成本',
      code: <Form.Item name="Tax_companyInfo_255"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_33"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_256"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_257"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_258"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_259"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '52',
      category: '利润',
      project_name: '主营业务税金及附加',
      code: <Form.Item name="Tax_companyInfo_260"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_261"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_262"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_263"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_264"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '53',
      category: '利润',
      project_name: '其他业务利润',
      code: <Form.Item name="Tax_companyInfo_265"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_267"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_268"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_269"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_270"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '54',
      category: '利润',
      project_name: '营业费用',
      code: <Form.Item name="Tax_companyInfo_271"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_273"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_274"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_275"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_276"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '55',
      category: '利润',
      project_name: '管理费用',
      code: <Form.Item name="Tax_companyInfo_277"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_6"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_278"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_279"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_280"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_281"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '56',
      category: '利润',
      project_name: '财务费用',
      code: <Form.Item name="Tax_companyInfo_282"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_283"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_284"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_285"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_286"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '57',
      category: '利润',
      project_name: '投资收益',
      code: <Form.Item name="Tax_companyInfo_287"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_288"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_289"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_290"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_291"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '58',
      category: '利润',
      project_name: '补贴收入',
      code: <Form.Item name="Tax_companyInfo_292"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="FinanceStatusInfo_134"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_293"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_294"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_295"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_296"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '59',
      category: '利润',
      project_name: '营业外收入',
      code: <Form.Item name="Tax_companyInfo_298"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_298"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_299"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_300"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_301"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '60',
      category: '利润',
      project_name: '营业外支出',
      code: <Form.Item name="Tax_companyInfo_302"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_303"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_304"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_305"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_306"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '61',
      category: '利润',
      project_name: '所得税',
      code: <Form.Item name="Tax_companyInfo_307"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_308"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_309"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_310"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_311"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '62',
      category: '利润',
      project_name: '出售、处置部门或被投资单位所得收益',
      code: <Form.Item name="Tax_companyInfo_312"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_313"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_314"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_315"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_316"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_317"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '63',
      category: '利润',
      project_name: '自然灾害发生的损失',
      code: <Form.Item name="Tax_companyInfo_318"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_319"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_320"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_321"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_322"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_323"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '64',
      category: '利润',
      project_name: '会计政策变更增加(或减少)利润总额',
      code: <Form.Item name="Tax_companyInfo_324"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_325"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_326"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_327"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_328"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_329"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '65',
      category: '利润',
      project_name: '会计估计变更增加(或减少)利润总额',
      code: <Form.Item name="Tax_companyInfo_330"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_331"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_332"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_333"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_334"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_335"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '66',
      category: '利润',
      project_name: '债务重组损失',
      code: <Form.Item name="Tax_companyInfo_336"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_337"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_338"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_339"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_340"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_341"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '80',
      category: '利润',
      project_name: '营业收入',
      code: <Form.Item name="Tax_companyInfo_342"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_1"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_344"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_345"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_346"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_347"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '67',
      category: '利润',
      project_name: '营业成本',
      code: <Form.Item name="Tax_companyInfo_348"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_349"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_350"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_351"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_352"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '68',
      category: '利润',
      project_name: '销售费用',
      code: <Form.Item name="Tax_companyInfo_353"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_354"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_355"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_356"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_357"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '69',
      category: '利润',
      project_name: '研发费用',
      code: <Form.Item name="Tax_companyInfo_358"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_7"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_359"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_360"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_361"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_362"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '70',
      category: '利润',
      project_name: '利息费用',
      code: <Form.Item name="Tax_companyInfo_363"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="FinanceStatusInfo_76"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_365"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_366"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_367"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_368"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '71',
      category: '利润',
      project_name: '利息收入',
      code: <Form.Item name="Tax_companyInfo_369"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="FinanceStatusInfo_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_370"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_371"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_372"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_373"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '72',
      category: '利润',
      project_name: '其他收益',
      code: <Form.Item name="Tax_companyInfo_374"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_13"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_375"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_376"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_377"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_378"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '73',
      category: '利润',
      project_name: '对联营企业和合营企业的投资收益',
      code: <Form.Item name="Tax_companyInfo_379"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_380"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_381"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_382"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_383"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_384"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '74',
      category: '利润',
      project_name: '以摊余成本计量的金融资产终止确认收益',
      code: <Form.Item name="Tax_companyInfo_385"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_386"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_387"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_388"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_389"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_390"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '75',
      category: '利润',
      project_name: '净敞口套期收益',
      code: <Form.Item name="Tax_companyInfo_391"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_393"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_394"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_395"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_396"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '76',
      category: '利润',
      project_name: '公允价值波动收益',
      code: <Form.Item name="Tax_companyInfo_397"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_398"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_399"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_400"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_401"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '77',
      category: '利润',
      project_name: '信用减值损失',
      code: <Form.Item name="Tax_companyInfo_402"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_403"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_404"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_405"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_406"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '78',
      category: '利润',
      project_name: '资产减值损失',
      code: <Form.Item name="Tax_companyInfo_407"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_408"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_409"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_410"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_411"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '79',
      category: '利润',
      project_name: '资产处置收益',
      code: <Form.Item name="Tax_companyInfo_412"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="company_runningsum_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_413"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_414"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_415"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_416"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },



    {
      key: '1',
      category: '销售额',
      project_name: '（一）按适用税率计税销售额',
      code: <Form.Item name="Tax_companyInfo_1"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_2"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_3"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_4"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_5"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_6"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '2',
      category: '销售额',      
      project_name: '其中：应税货物销售额',
      code: <Form.Item name="Tax_companyInfo_7"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_8"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_9"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_10"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_11"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_12"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '3',
      category: '销售额',      
      project_name: '应税劳务销售额',
      code: <Form.Item name="Tax_companyInfo_13"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_14"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_15"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_16"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_17"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_17"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '4',
      category: '销售额',      
      project_name: '纳税检查调整的销售额',
      code: <Form.Item name="Tax_companyInfo_18"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_22"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_23"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '5',
      category: '销售额',      
      project_name: '（二）按简易办法计税销售额',
      code: <Form.Item name="Tax_companyInfo_24"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_25"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_26"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_27"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_28"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_29"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '6',
      category: '销售额',      
      project_name: '其中：纳税检查调整的销售额',
      code: <Form.Item name="Tax_companyInfo_30"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_19"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_21"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_22"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_23"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '7',
      category: '销售额',      
      project_name: '（三）免、抵、退办法出口销售额',
      code: <Form.Item name="Tax_companyInfo_36"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_37"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_38"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_39"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_40"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_41"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '8',
      category: '销售额',      
      project_name: '（四）免税销售额',
      code: <Form.Item name="Tax_companyInfo_42"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_43"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_44"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_45"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_46"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_47"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '9',
      category: '销售额',      
      project_name: '其中：免税货物销售额',
      code: <Form.Item name="Tax_companyInfo_48"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_49"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_50"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_51"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_52"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_53"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '10',
      category: '销售额',
      project_name: '免税劳务销售额',
      code: <Form.Item name="Tax_companyInfo_54"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_55"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_56"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_57"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_58"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_59"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '11',
      category: '税款计算',
      project_name: '销项税额',
      code: <Form.Item name="Tax_companyInfo_60"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_61"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_62"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_63"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_64"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_65"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '12',
      category: '税款计算',
      project_name: '进项税额',
      code: <Form.Item name="Tax_companyInfo_66"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_67"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_68"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_69"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_70"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_71"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '13',
      category: '税款计算',
      project_name: '上期留抵税额',
      code: <Form.Item name="Tax_companyInfo_72"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_73"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_74"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_75"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_76"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_77"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '14',
      category: '税款计算',
      project_name: '进项税额转出',
      code: <Form.Item name="Tax_companyInfo_78"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_79"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_80"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_81"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_82"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_83"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '15',
      category: '税款计算',
      project_name: '免、抵、退应退税额',
      code: <Form.Item name="Tax_companyInfo_84"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_85"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_86"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_87"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_88"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_89"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '16',
      category: '税款计算',
      project_name: '按适用税率计算的纳税检查应补缴税额',
      code: <Form.Item name="Tax_companyInfo_90"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_91"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_92"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_93"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_94"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_95"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '17',
      category: '税款计算',
      project_name: '应抵扣税额合计',
      code: <Form.Item name="Tax_companyInfo_96"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_97"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_98"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_99"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_100"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_101"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '18',
      category: '税款计算',
      project_name: '实际抵扣税额',
      code: <Form.Item name="Tax_companyInfo_102"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_103"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_104"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_105"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_106"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_107"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '19',
      category: '税款计算',
      project_name: '应纳税额',
      code: <Form.Item name="Tax_companyInfo_108"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_109"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_110"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_111"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_112"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_113"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '20',
      category: '税款计算',
      project_name: '期末留抵税额',
      code: <Form.Item name="Tax_companyInfo_114"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_115"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_116"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_117"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_118"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_119"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '21',
      category: '税款计算',
      project_name: '简易计税办法计算的应纳税额',
      code: <Form.Item name="Tax_companyInfo_120"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_121"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_122"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_123"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_124"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_125"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '22',
      category: '税款计算',
      project_name: '按简易计税办法计算的纳税检查应补缴税额',
      code: <Form.Item name="Tax_companyInfo_126"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_127"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_128"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_129"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_130"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_131"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '23',
      category: '税款计算',
      project_name: '应纳税额减征额',
      code: <Form.Item name="Tax_companyInfo_132"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_133"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_134"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_135"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_136"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_137"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '24',
      category: '税款计算',
      project_name: '应纳税额合计',
      code: <Form.Item name="Tax_companyInfo_138"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_139"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_140"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_141"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_142"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_143"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '25',
      category: '税款缴纳',
      project_name: '期初未缴税额（多缴为负数）',
      code: <Form.Item name="Tax_companyInfo_144"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_145"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_146"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_147"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_148"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_149"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '26',
      category: '税款缴纳',
      project_name: '实收出口开具专用缴款书退税额',
      code: <Form.Item name="Tax_companyInfo_150"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_151"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_152"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_153"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_154"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_155"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '27',
      category: '税款缴纳',
      project_name: '本期已缴税额',
      code: <Form.Item name="Tax_companyInfo_156"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_157"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_158"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_159"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_160"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_161"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '28',
      category: '税款缴纳',
      project_name: '①分次预缴税额',
      code: <Form.Item name="Tax_companyInfo_162"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_163"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_164"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_165"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_166"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_167"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '29',
      category: '税款缴纳',
      project_name: '②出口开具专用缴款书预缴税额',
      code: <Form.Item name="Tax_companyInfo_168"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_169"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_170"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_171"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_172"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_173"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '30',
      category: '税款缴纳',
      project_name: '③本期缴纳上期应纳税额',
      code: <Form.Item name="Tax_companyInfo_174"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_175"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_176"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_177"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_178"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_179"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '31',
      category: '税款缴纳',
      project_name: '④本期缴纳欠缴税额',
      code: <Form.Item name="Tax_companyInfo_180"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_181"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_182"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_183"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_184"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_185"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '32',
      category: '税款缴纳',
      project_name: '期末未缴税额（多缴为负数）',
      code: <Form.Item name="Tax_companyInfo_186"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_187"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_188"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_189"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_190"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_191"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '33',
      category: '税款缴纳',
      project_name: '其中：欠缴税额（≥0）',
      code: <Form.Item name="Tax_companyInfo_192"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_193"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_194"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_195"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_196"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_197"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '34',
      category: '税款缴纳',
      project_name: '本期应补(退)税额',
      code: <Form.Item name="Tax_companyInfo_198"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_199"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_200"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_201"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_202"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_203"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '35',
      category: '税款缴纳',
      project_name: '即征即退实际退税额',
      code: <Form.Item name="Tax_companyInfo_204"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_205"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_206"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_207"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_208"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_209"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '36',
      category: '税款缴纳',
      project_name: '期初未缴查补税额',
      code: <Form.Item name="Tax_companyInfo_210"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_211"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_212"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_213"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_214"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_20"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '37',
      category: '税款缴纳',
      project_name: '本期入库查补税额',
      code: <Form.Item name="Tax_companyInfo_215"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_216"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_217"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_218"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_219"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_220"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '38',
      category: '税款缴纳',
      project_name: '期末未缴查补税额',
      code: <Form.Item name="Tax_companyInfo_221"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_222"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_223"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_224"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_225"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_226"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '39',
      category: '附加税费',
      project_name: '城市维护建设税本期应补（退）税额',
      code: <Form.Item name="Tax_companyInfo_227"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_228"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_229"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_230"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_231"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_232"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '40',
      category: '附加税费',
      project_name: '教育费附加本期应补（退）费额',
      code: <Form.Item name="Tax_companyInfo_233"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_234"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_235"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_236"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_237"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_238"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    },
    {
      key: '41',
      category: '附加税费',
      project_name: '地方教育附加本期应补（退）费额',
      code: <Form.Item name="Tax_companyInfo_239"><Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_month: <Form.Item name="Tax_companyInfo_240"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      normal_this_year: <Form.Item name="Tax_companyInfo_241"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_month: <Form.Item name="Tax_companyInfo_242"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      immediate_this_year: <Form.Item name="Tax_companyInfo_243"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
      compare_round: <Form.Item name="Tax_companyInfo_244"><Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input></Form.Item>,
    }
  ];

  const onFinish = (values) => {
    request('/api/save', {
      method: 'POST',
      data: {
        date: '2024-08',
        data: values
      }
    })
  };
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Form onFinish={onFinish} form={form}>
          <Table dataSource={data} style={{width: '1300px'}} pagination={false}>
            <ColumnGroup title="单位税务信息" boarded>
              <ColumnGroup title="项目" boarded>
                <Column title="" dataIndex="category" key="category" boarded
                  onCell={(row, index) => {
                    // 销售额
                    if (index === 0) {
                      return { rowSpan: 31 }
                    }else if (index == 31){
                      return { rowSpan: 10 }
                    }else if (index == 41){
                      return { rowSpan: 14 }
                    }else if (index ==55){
                      return { rowSpan: 14 }
                    }else if (index == 69){
                      return { rowSpan: 3 }
                    }else if (index == 72){
                      return { rowSpan: 1 }
                    }else{
                      return { rowSpan: 0 }
                    }
                  }}
                />
                <Column title="项目名" dataIndex="project_name" key="project_name" />
              </ColumnGroup>
              <Column title="栏次" dataIndex="code" key="code" />
              <ColumnGroup title="一般项目" boarded>
                <Column title="本月数" dataIndex="normal_this_month" key="normal_this_month" />
                <Column title="本年累计" dataIndex="normal_this_year" key="normal_this_year" />
              </ColumnGroup>
              <ColumnGroup title="即征即退项目" boarded>
                <Column title="本月数" dataIndex="immediate_this_month" key="immediate_this_month" />
                <Column title="本年累计" dataIndex="immediate_this_year" key="immediate_this_year" />
              </ColumnGroup>
            </ColumnGroup>
          </Table>
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
            >立即填报</Button>
          </FloatButton.Group>
        </Form>
      </div>
    </>
  );
}