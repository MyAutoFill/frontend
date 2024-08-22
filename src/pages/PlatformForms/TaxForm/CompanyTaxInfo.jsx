import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Table, Radio, Upload } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;


export default function TechCompanyInfo() {

  const [disableVar, setDisableVar] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();

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
      key: '1',
      category: '销售额',
      project_name: '（一）按适用税率计税销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }} defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '2',
      category: '销售额',      
      project_name: '其中：应税货物销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '3',
      category: '销售额',      
      project_name: '应税劳务销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '4',
      category: '销售额',      
      project_name: '纳税检查调整的销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '5',
      category: '销售额',      
      project_name: '（二）按简易办法计税销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '6',
      category: '销售额',      
      project_name: '其中：纳税检查调整的销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '7',
      category: '销售额',      
      project_name: '（三）免、抵、退办法出口销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '8',
      category: '销售额',      
      project_name: '（四）免税销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '9',
      category: '销售额',      
      project_name: '其中：免税货物销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '10',
      category: '销售额',
      project_name: '免税劳务销售额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '11',
      category: '税款计算',
      project_name: '销项税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '12',
      category: '税款计算',
      project_name: '进项税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '13',
      category: '税款计算',
      project_name: '上期留抵税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '14',
      category: '税款计算',
      project_name: '进项税额转出',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '15',
      category: '税款计算',
      project_name: '免、抵、退应退税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '16',
      category: '税款计算',
      project_name: '按适用税率计算的纳税检查应补缴税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '17',
      category: '税款计算',
      project_name: '应抵扣税额合计',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '18',
      category: '税款计算',
      project_name: '实际抵扣税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '19',
      category: '税款计算',
      project_name: '应纳税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '20',
      category: '税款计算',
      project_name: '期末留抵税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '21',
      category: '税款计算',
      project_name: '简易计税办法计算的应纳税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '22',
      category: '税款计算',
      project_name: '按简易计税办法计算的纳税检查应补缴税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '23',
      category: '税款计算',
      project_name: '应纳税额减征额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '24',
      category: '税款计算',
      project_name: '应纳税额合计',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '25',
      category: '税款缴纳',
      project_name: '期初未缴税额（多缴为负数）',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '26',
      category: '税款缴纳',
      project_name: '实收出口开具专用缴款书退税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '27',
      category: '税款缴纳',
      project_name: '本期已缴税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '28',
      category: '税款缴纳',
      project_name: '①分次预缴税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '29',
      category: '税款缴纳',
      project_name: '②出口开具专用缴款书预缴税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '30',
      category: '税款缴纳',
      project_name: '③本期缴纳上期应纳税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '31',
      category: '税款缴纳',
      project_name: '④本期缴纳欠缴税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '32',
      category: '税款缴纳',
      project_name: '期末未缴税额（多缴为负数）',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '33',
      category: '税款缴纳',
      project_name: '其中：欠缴税额（≥0）',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '34',
      category: '税款缴纳',
      project_name: '本期应补(退)税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '35',
      category: '税款缴纳',
      project_name: '即征即退实际退税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '36',
      category: '税款缴纳',
      project_name: '期初未缴查补税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '37',
      category: '税款缴纳',
      project_name: '本期入库查补税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '38',
      category: '税款缴纳',
      project_name: '期末未缴查补税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '39',
      category: '附加税费',
      project_name: '城市维护建设税本期应补（退）税额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '40',
      category: '附加税费',
      project_name: '教育费附加本期应补（退）费额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '41',
      category: '附加税费',
      project_name: '地方教育附加本期应补（退）费额',
      code: <Input disabled={disableVar} size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      normal_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_month: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      immediate_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
    }
  ];
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Table dataSource={data} style={{width: '1250px'}} pagination={false}>
          <ColumnGroup title="单位税务信息" boarded>
            <ColumnGroup title="项目" boarded>
              <Column title="" dataIndex="category" key="category" boarded
                onCell={(row, index) => {
                  // 销售额
                  if (index === 0) {
                    return { rowSpan: 10 }
                  }
                  if (index === 1) {
                    return { rowSpan: 0 }
                  }
                  if (index === 2) {
                    return { rowSpan: 0 }
                  }
                  if (index === 3) {
                    return { rowSpan: 0 }
                  }
                  if (index === 4) {
                    return { rowSpan: 0 }
                  }
                  if (index === 5) {
                    return { rowSpan: 0 }
                  }
                  if (index === 6) {
                    return { rowSpan: 0 }
                  }
                  if (index === 7) {
                    return { rowSpan: 0 }
                  }
                  if (index === 8) {
                    return { rowSpan: 0 }
                  }
                  if (index === 9) {
                    return { rowSpan: 0 }
                  }

                  // 税款计算
                  if (index === 10) {
                    return { rowSpan: 14 }
                  }
                  if (index === 11) {
                    return { rowSpan: 0 }
                  }
                  if (index === 12) {
                    return { rowSpan: 0 }
                  }
                  if (index === 13) {
                    return { rowSpan: 0 }
                  }
                  if (index === 14) {
                    return { rowSpan: 0 }
                  }
                  if (index === 15) {
                    return { rowSpan: 0 }
                  }
                  if (index === 16) {
                    return { rowSpan: 0 }
                  }
                  if (index === 17) {
                    return { rowSpan: 0 }
                  }
                  if (index === 18) {
                    return { rowSpan: 0 }
                  }
                  if (index === 19) {
                    return { rowSpan: 0 }
                  }
                  if (index === 20) {
                    return { rowSpan: 0 }
                  }
                  if (index === 21) {
                    return { rowSpan: 0 }
                  }
                  if (index === 22) {
                    return { rowSpan: 0 }
                  }
                  if (index === 23) {
                    return { rowSpan: 0 }
                  }

                  // 税款缴纳
                  if (index === 24) {
                    return { rowSpan: 14 }
                  }
                  if (index === 25) {
                    return { rowSpan: 0 }
                  }
                  if (index === 26) {
                    return { rowSpan: 0 }
                  }
                  if (index === 27) {
                    return { rowSpan: 0 }
                  }
                  if (index === 28) {
                    return { rowSpan: 0 }
                  }
                  if (index === 29) {
                    return { rowSpan: 0 }
                  }
                  if (index === 30) {
                    return { rowSpan: 0 }
                  }
                  if (index === 31) {
                    return { rowSpan: 0 }
                  }
                  if (index === 32) {
                    return { rowSpan: 0 }
                  }
                  if (index === 33) {
                    return { rowSpan: 0 }
                  }
                  if (index === 34) {
                    return { rowSpan: 0 }
                  }
                  if (index === 35) {
                    return { rowSpan: 0 }
                  }
                  if (index === 36) {
                    return { rowSpan: 0 }
                  }
                  if (index === 37) {
                    return { rowSpan: 0 }
                  }
                  
                  // 附加税费
                  if (index === 38) {
                    return { rowSpan: 3 }
                  }
                  if (index === 39) {
                    return { rowSpan: 0 }
                  }
                  if (index === 40) {
                    return { rowSpan: 0 }
                  }
                }
              }/>
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
      </div>
    </>
  );
}