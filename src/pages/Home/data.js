import { Input, AutoComplete, Button, Space } from "antd";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FastForwardOutlined } from '@ant-design/icons';

const options = [
  // { value: '42', label: '人社局 > 单位基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=42', label: '人社局 > 单位基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=36', label: '人社局 > 单位就业登记信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=37', label: '人社局 > 以工代训补贴申领信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=39', label: '人社局 > 单位参保信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=6', label: '统计局 > 单位基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=7', label: '统计局 > 单位从业人员及工资总额信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=8', label: '统计局 > 研究开发项目情况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=9', label: '统计局 > 研究开发活动及相关情况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=10', label: '统计局 > 财务状况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=caizheng1', label: '财政局 > 企业基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=15', label: '市场监督管理局 > 企业基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=16', label: '市场监督管理局 > 资产状况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=17', label: '市场监督管理局 > 对外提供保证担保信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=18', label: '市场监督管理局 > 参保信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=haiguan1', label: '威海海关 > 企业基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=27', label: '科技局 > 企业概况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=28', label: '科技局 > 企业经济概况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=29', label: '科技局 > 企业人员概况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=39', label: '科技局 > 研究开发项目状况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=31', label: '科技局 > 研究开发活动及相关情况信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=32', label: '科技局 > 法人基本信息表' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=33', label: '工信局 > 软件和信息技术服务企业月报' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=shangwu1', label: '商务局 > 企业基本信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=1', label: '税务局 > 单位税务信息' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=2', label: '税务局 > 利润表' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=3', label: '税务局 > 资产负债表' },
  { value: 'https://xcyb.weihai.cn/auto_fill_test/input?tab=2&table=4', label: '税务局 > 现金流量表' },
];

const AutoCompleteExample = () => {
  const [value, setValue] = useState(null);
  const [curStatus, setCurStatus] = useState(null);
  const [web, setWeb] = useState(null)
 
  const onSelect = (value, option) => {
    setValue(option.label);
  };

  const onChange = (value, option) => {
    if (option === undefined) {
      setValue(null); // 通过onChange更新state
      setWeb(null)
    } else {
      console.log(option)
      setValue(option.label); // 通过onChange更新state
      setWeb(option.value)
      console.log(option)
    }
  };

  return (
    <Space.Compact>
      <AutoComplete
        placeholder='在此处输入您想要搜索的平台名、表单名或数据项名称，选择正确的选项后点击立即前往'
        allowClear
        popupMatchSelectWidth={650}
        style={{
          width: 650,
        }}
        status={curStatus}
        value={value}
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        size="large"
        filterOption={(inputValue, option) =>
          option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
      </AutoComplete>
      <Button 
        type="primary" 
        icon={<FastForwardOutlined />} 
        autoInsertSpace 
        size='large'
        onClick={() => {
          window.location.href = web
        }}
      >
        立即前往
      </Button>
    </Space.Compact>
  );
};

export default AutoCompleteExample;

export const banner = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: 'Unified Report Submission System', className: 'seeconf-en-name' },
      { children: '统一报表报送系统', className: 'seeconf-title', tag: 'h1' },
      { children: <>我们系统用于服务您和您的企业<br/>每月报表报送时实现一份数据填写，多个页面自动填充，同时同步历史数据归档<br/>节约您的时间，高效您的工作</>, className: 'seeconf-cn-name' },
      { children: 
        <>
          <AutoCompleteExample></AutoCompleteExample>
        </> 
      },
      {
        children: [
          {
            name: '企业信息',
            link: '/auto_fill_test/company_info'
          },
          {
            name: '开始报送',
            link: '/auto_fill_test/input'
          },
          {
            name: '数据分析',
            link: '/auto_fill_test/analysis'
          }
        ],
        className: 'banner-button',
        tag: 'button',
      },
      { children: '', className: 'seeconf-time' },
    ],
  },
];

export const page1 = {
  title: '简单两步，快速填充，化繁为简，高效工作',
  children: [
    {
      title: '快速填充',
      content: <span>同源数据<br />多网页快速填充</span>,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.08)',
      link: 'https://ant.design/docs/spec/values-cn',
    },
    {
      title: '信息安全',
      content: <span>业界高效安全加密算法<br />保护您的数据</span>,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.08)',
      link: 'https://ant.design/docs/spec/colors-cn',
    },
    {
      title: '网页配置',
      content: <span>支持配置多个网页<br />方便您未来填报</span>,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
      link: 'https://antv.alipay.com/zh-cn/vis/index.html',
    },
    {
      title: '信息归档',
      content: <span>避免繁琐的多网站登录<br />便利您的回溯</span>,
      src: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
      link: 'https://antv.alipay.com/zh-cn/vis/index.html',
    },
  ],
};

export const page3 = {
  title: '大家都喜爱的产品',
  children: [
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://gw.alipayobjects.com/os/rmsportal/gCFHQneMNZMMYEdlHxqK.mp4',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://gw.alipayobjects.com/os/rmsportal/gCFHQneMNZMMYEdlHxqK.mp4',
    },
  ],
};

export const page4 = {
  title: '',
  children: [
    // 'https://gw.alipayobjects.com/zos/rmsportal/qImQXNUdQgqAKpPgzxyK.svg', // 阿里巴巴
    // 'https://gw.alipayobjects.com/zos/rmsportal/LqRoouplkwgeOVjFBIRp.svg', // 蚂蚁金服
    // 'https://gw.alipayobjects.com/zos/rmsportal/TLCyoAagnCGXUlbsMTWq.svg', // 人民网
    // 'https://gw.alipayobjects.com/zos/rmsportal/HmCGMKcJQMwfPLNCIhOH.svg', // cisco
    // 'https://gw.alipayobjects.com/zos/rmsportal/aqldfFDDqRVFRxqLUZOk.svg', // GrowingIO
    // 'https://gw.alipayobjects.com/zos/rmsportal/rqNeEFCGFuwiDKHaVaPp.svg', // 饿了么
    // 'https://gw.alipayobjects.com/zos/rmsportal/FdborlfwBxkWIqKbgRtq.svg', // 滴滴出行
    // 'https://gw.alipayobjects.com/zos/rmsportal/coPmiBkAGVTuTNFVRUcg.png', // 飞凡网
  ],
};

export const footer = [
  {
    title: '蚂蚁科技',
    children: [
      { title: '蚂蚁金服开放平台', link: 'https://open.alipay.com' },
      { title: '蚂蚁体验云', link: 'https://xcloud.alipay.com' },
      { title: '蚂蚁金融云', link: 'https://www.cloud.alipay.com' },
    ],
  },
  {
    title: '相关会议',
    children: [
      { title: 'ATEC', link: 'https://atec.antfin.com' },
      { title: 'SEE Conf', link: 'https://seeconf.alipay.com' },
    ],
  },
  {
    title: '联系我们',
    children: [
      { title: '蚂蚁金服体验科技专栏', link: 'https://zhuanlan.zhihu.com/xtech' },
      { title: '蚂蚁金服体验科技官微', link: 'https://weibo.com/p/1005056420205486' },
      { title: 'AntV 官微', link: 'https://weibo.com/antv2017' },
      { title: 'Ant Design 专栏', link: 'https://zhuanlan.zhihu.com/antdesign' },
    ],
  },
  {
    title: '蚂蚁体验云',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
    children: [
      { title: 'Ant Design', desc: '蚂蚁 UI 体系', link: 'https://ant.design' },
      { title: 'AntV', desc: '蚂蚁数据可视化方案', link: 'https://antv.alipay.com' },
      // { title: 'AntG', desc: '蚂蚁互动图形技术', link: 'http://antg.alipay.net' },
      { title: 'Egg', desc: '企业级 Node Web 开发框架', link: 'https://eggjs.org' },
      { title: '云凤蝶', desc: '移动建站平台', link: 'https://fengdie.alipay-eco.com/intro' },
    ],
  },
];

// 图处预加载；
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.style.display = 'none';
  document.body.appendChild(div);
  [
    'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
  ].concat(page4.children).forEach((src) => {
    const img = new Image();
    img.src = src;
    div.appendChild(img);
  });
}
