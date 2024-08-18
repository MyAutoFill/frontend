import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Table, Radio } from 'antd';
const { Column, ColumnGroup } = Table;


export default function TechCompanyInfo() {

  const [disableVar, setDisableVar] = useState(true)

  const data = [
    {
      key: '1',
      index_name: '主营业务收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }} defaultValue={'2010'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '2',
      index_name: '软件业务收入合计（自动计算）',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2020'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '3',
      index_name: '其中 1. 软件产品收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2021'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '4',
      index_name: '其中基础软件收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20211'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '5',
      index_name: '工业软件收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20212'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '6',
      index_name: '2.  信息技术服务收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2022'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '7',
      index_name: '其中云服务收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20221'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '8',
      index_name: '大数据服务收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20222'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '9',
      index_name: '工业互联网平台服务收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20223'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '10',
      index_name: '电子商务平台技术服务收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20224'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '11',
      index_name: '集成电路设计收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20225'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '12',
      index_name: '3.信息安全收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2023'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '13',
      index_name: '其中工控安全收入',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20231'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '14',
      index_name: '*4.嵌入式系统软件收入（自动计算）',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2024'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '15',
      index_name: '（二）按出口方式分列',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2020b'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '16',
      index_name: '其中1.软件外包服务出口',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2041'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      index_name: '*2.应用嵌入式系统软件的产品出口额',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'20421'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '17',
      index_name: '2-1嵌入式系统软件出口（自动计算）',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2042'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '18',
      index_name: '3.其他软件业务出口',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2043'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万美元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      index_name: '主营业务成本',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2050'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '19',
      index_name: '其中硬件成本',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2051'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '20',
      index_name: '费用总额',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2080'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '21',
      index_name: '利润总额',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2090'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '22',
      index_name: '研发经费',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2110'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '23',
      index_name: '从业人员工资总额',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2111'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='万元' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '24',
      index_name: '平均用工人数',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2112'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='人' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    },
    {
      key: '25',
      index_name: '订单同比增长',
      code: <Input disabled={disableVar} size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={'2113'}></Input>,
      total_this_year: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_year: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      total_last_term: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '150px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_same: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
      compare_round: <Input disabled={disableVar} addonAfter='%' size='large' style={{ width: '100px', marginTop: '10px' }}  defaultValue={''}></Input>,
    }
  ];

  const items = [
    {
      key: '1',
      label: '表名',
      children: '软统企6表',
      span: 3
    },
    {
      key: '2',
      label: '制定机关',
      children: '工业和信息化部',
      span: 1
    },
    {
      key: '3',
      label: '批准机关',
      children: '国家统计局',
      span: 3
    },
    {
      key: '4',
      label: '批准文号',
      children: '国统制〔2021〕136号',
      span: 1
    },
    {
      key: '5',
      label: '有效期至',
      children: <DatePicker disabled={disableVar} size='large' placeholder='有效期至' picker="year" style={{ width: '150px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 3
    },
    {
      label: '组织机构代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '640px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '6',
      label: '统一社会信用代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '640px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '7',
      label: '单位详细名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '640px', marginTop: '10px' }}></Input>,
      span: 3
    },
    {
      key: '8',
      label: '是否有嵌入式系统软件业务',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
          <Radio value={1}>是</Radio>
          <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '9',
      label: '单位负责人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input>,
      span: 1
    },,
    {
      key: '10',
      label: '统计负责人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input>,
      span: 1
    },,
    {
      key: '11',
      label: '填表人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input>,
      span: 1
    },,
    {
      key: '12',
      label: '移动电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input>,
      span: 1
    },,
    {
      key: '13',
      label: '固定电话',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginTop: '10px' }}></Input>,
      span: 2
    },
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="软件和信息技术服务业企业月报表" bordered items={items} />
        <Table dataSource={data} style={{width: '1250px'}} pagination={false}>
          <Column title="指标名称" dataIndex="index_name" key="index_name" />
          <Column title="代码" dataIndex="code" key="code" />
          <Column title="本年本期累计" dataIndex="total_this_year" key="total_this_year" />
          <Column title="本年同期累计" dataIndex="total_last_year" key="total_last_year" />
          <Column title="本年上期累计" dataIndex="total_last_term" key="total_last_term" />
          <Column title="同比（%）" dataIndex="compare_same" key="compare_same" />
          <Column title="环比（%）" dataIndex="compare_round" key="compare_round" />,
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