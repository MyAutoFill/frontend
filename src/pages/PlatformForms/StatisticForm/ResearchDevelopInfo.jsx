import React, { useState } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Button, FloatButton, message, Form, Table } from 'antd';
import { CheckSquareFilled, SaveFilled, StopFilled, FastForwardOutlined, ExpandAltOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
import { request } from 'umi';
import { useEffect } from 'react';


export default function CompanyTotalSalary() {

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
        platform_name: "统计局",
        table_name: '研究开发项目情况信息',
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
      key: '1'
    }
  ];
  
  return (
    <>
      {contextHolder}
      <div size='large' style={{height: 800, padding: 10, overflow:'auto'}} class="banner-anim">
        <Table dataSource={data} style={{width: '1250px'}} pagination={false}>
          <ColumnGroup title="研究开发项目情况信息">
            <Column title="序号" dataIndex="people_index" key="people_index" />
            <Column title="项目名称" dataIndex="people_this_year" key="people_this_year" />
            <Column title="项目来源" dataIndex="people_last_year" key="people_last_year" />
            <Column title="项目开展形式" dataIndex="salary_index" key="salary_index" />
            <Column title="项目当年成果形式" dataIndex="salary_this_year" key="salary_this_year" />
            <Column title="项目技术经济目标跨年" dataIndex="salary_last_year" key="salary_last_year" />
            <Column title="项目起始日期" dataIndex="people_index" key="people_index" />
            <Column title="项目完成日期" dataIndex="people_this_year" key="people_this_year" />
            <Column title="项目当年所处主要进展阶段" dataIndex="people_last_year" key="people_last_year" />
            <Column title="项目研究开发人员（人）" dataIndex="salary_index" key="salary_index" />
            <Column title="项目人员实际工作时间（人月）" dataIndex="salary_this_year" key="salary_this_year" />
            <Column title="项目经费支出（千元）" dataIndex="salary_last_year" key="salary_last_year" />
            <Column title="其中：政府资金" dataIndex="people_index" key="people_index" />
            <Column title="其中：用于科学原理的探索发现" dataIndex="people_this_year" key="people_this_year" />
            <Column title="其中：企业自主开展" dataIndex="people_last_year" key="people_last_year" />
            <Column title="委托外单位开展" dataIndex="salary_index" key="salary_index" />
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