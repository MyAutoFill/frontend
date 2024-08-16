import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Input, Button, Table } from 'antd';
const { Column, ColumnGroup } = Table;


export default function CompanyTotalSalary() {

  const [disableVar, setDisableVar] = useState(true)

  const data = [
    {
      key: '1'
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 30, overflow:'auto'}} class="banner-anim">
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
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '330px', marginTop: '30px' }}
          onClick={() => setDisableVar(false)}
        >修改</Button>
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}
          onClick={() => setDisableVar(true)}
        >保存</Button>
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}
          onClick={() => setDisableVar(true)}
        >取消</Button>
        <Button type="primary" autoInsertSpace size='large' style={{fontSize: '20px', width: '100px', height: '50px', marginLeft: '50px', marginTop: '30px' }}>检查</Button>
      </div>
    </>
  );
}