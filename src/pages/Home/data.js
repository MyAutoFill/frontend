export const header = [
  {
    title: '首页',
  },
  {
    title: '使用指导',
  },
  {
    title: '报表报送',
  },
  {
    title: '数据分析',
  }
];
export const banner = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: 'Unified report submission system', className: 'seeconf-en-name' },
      { children: '统一报表报送系统', className: 'seeconf-title', tag: 'h1' },
      { children: <>我们系统用于服务您和您的企业<br/>每月报表报送时实现一份数据填写，多个页面自动填充，同时同步历史数据归档<br/>节约您的时间，高效您的工作</>, className: 'seeconf-cn-name' },
      {
        children: [
          {
            name: '开始报送',
            link: 'https://seeconf.alipay.com/'
          },
          {
            name: '数据分析',
            link: 'https://seeconf.alipay.com/'
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
