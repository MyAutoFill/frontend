import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Descriptions, Input, Button, FloatButton, message, Table, Radio, Upload } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined, UploadOutlined  } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;


export default function CompanyTotalSalary() {

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
      people_index: '一、从业人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '二、工资总额',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '2',
      people_index: '从业人员期末人数',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '从业人员工资总额',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '3',
      people_index: '其中：女性',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '其中：女性',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '4',
      people_index: '按人员类型分',
      people_this_year: '',
      people_last_year: '',
      salary_index: '按人员类型分',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '5',
      people_index: '在岗职工',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '在岗职工',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '6',
      people_index: '劳务派遣人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '劳务派遣人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '7',
      people_index: '其他从业人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '其他从业人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '8',
      people_index: '按职业类型分',
      people_this_year: '',
      people_last_year: '',
      salary_index: '按职业类型分',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '9',
      people_index: '中层及以上管理人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '中层及以上管理人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '10',
      people_index: '专业技术人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '专业技术人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '11',
      people_index: '办事人员和有关人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '办事人员和有关人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '12',
      people_index: '社会生产服务和生活服务人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '社会生产服务和生活服务人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '13',
      people_index: '生产制造及有关人员',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '生产制造及有关人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '14',
      people_index: '从业人员平均人数',
      people_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='人' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '15',
      people_index: '三、月平均工资',
      people_this_year: '',
      people_last_year: '',
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '16',
      people_index: '从业人员月平均工资',
      people_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      people_index: '按人员类型分',
      people_this_year: '',
      people_last_year: '',
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '17',
      people_index: '在岗职工',
      people_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '劳务派遣人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '18',
      people_index: '其他从业人员',
      people_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      people_index: '按职业类型分',
      people_this_year: '',
      people_last_year: '',
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    },
    {
      key: '19',
      people_index: '中层及以上管理人员',
      people_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '专业技术人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '20',
      people_index: '办事人员和有关人员',
      people_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '社会生产服务和生活服务人员',
      salary_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>
    },
    {
      key: '21',
      people_index: '生产制造及有关人员',
      people_this_year: <Input disabled={disableVar} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      people_last_year: <Input disabled={true} addonAfter='元' size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }} value='-'></Input>,
      salary_index: '',
      salary_this_year: '',
      salary_last_year: ''
    }
  ];
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Table dataSource={data} style={{width: '1250px'}} pagination={false}>
          <ColumnGroup title="单位从业人员及工资总额" boarded>
            <Column boarded title="指标名称" dataIndex="people_index" key="people_index" />
            <Column title="本年" dataIndex="people_this_year" key="people_this_year" />
            <Column title="上年同期" dataIndex="people_last_year" key="people_last_year" />
            <Column title="指标名称" dataIndex="salary_index" key="salary_index" />
            <Column title="本年" dataIndex="salary_this_year" key="salary_this_year" />
            <Column title="上年同期" dataIndex="salary_last_year" key="salary_last_year" />
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