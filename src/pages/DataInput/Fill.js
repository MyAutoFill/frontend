import { Menu, 
  DatePicker, 
  Row, 
  Col,
  icon } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { SolutionOutlined, BarChartOutlined, MoneyCollectOutlined, CameraOutlined, BarcodeOutlined, RobotOutlined, ScheduleOutlined, TransactionOutlined, TruckOutlined } from '@ant-design/icons';

import GongShangCompanyInfo from '../PlatformForms/GongShangForm/GongShangCompanyInfo'
import JoinedSecurityInfo from '../PlatformForms/GongShangForm/JoinedSecurityInfo'
import OuterVouch from '../PlatformForms/GongShangForm/OuterVouch'
import PropertyStatusInfo from '../PlatformForms/GongShangForm/PropertyStatusInfo'
import GongXinProductSales from '../PlatformForms/GongXinForm/GongXinProductSales'
import GongXinBasicInfo from '../PlatformForms/GongXinForm/GongxinBasicInfo';
import InfoTechMonthlyForm from '../PlatformForms/GongXinForm/InfoTechMonthlyForm';
import HumanSocialCompanyInfo from '../PlatformForms/HumanSocialForm/CompanyInfo'
import YiGongDaiXun from '../PlatformForms/HumanSocialForm/YiGongDaiXun'
import CompanySocialSecurityInfo from '../PlatformForms/HumanSocialForm/CompanySocialSecurityInfo'
import BasicInfoHumanResource from '../PlatformForms/HumanSocialForm/BasicInfo'
import CaizhengBasicInfo from '../PlatformForms/CaizhengJu/CaizhengBasicInfo';
import JobDemandInfo from '../PlatformForms/HumanSocialForm/JobDemandInfo'
import StatisticCompanyBasicInfo from '../PlatformForms/StatisticForm/CompanyBasicInfo'
import CompanyTotalSalary from '../PlatformForms/StatisticForm/CompanyTotalSalary'
import FinanceStatusInfo from '../PlatformForms/StatisticForm/FinanceStatusInfo'
import ResearchActivityInfo from '../PlatformForms/StatisticForm/ResearchActivityInfo'
import ResearchDevelopInfo from '../PlatformForms/StatisticForm/ResearchDevelopInfo'
import CompanyTaxInfo from '../PlatformForms/TaxForm/CompanyTaxInfo'
import CompanyDevelopmentInfo from '../PlatformForms/TechForm/CompanyDevelopmentInfo'
import CompanyEcoInfo from '../PlatformForms/TechForm/CompanyEcoInfo'
import CompanyEmployeeInfo from '../PlatformForms/TechForm/CompanyEmployeeInfo'
import HighTechCompanyStat from '../PlatformForms/TechForm/HighTechCompanyStat'
import ResearchDevelopActivity from '../PlatformForms/TechForm/ResearchDevelopActivity'
import TechCompanyInfo from '../PlatformForms/TechForm/TechCompanyInfo'
import BenefitsForm from '../PlatformForms/TaxForm/BenefitsForm'
import PropertyDebtForm from '../PlatformForms/TaxForm/PropertyDebtForm'
import CashFlowForm from '../PlatformForms/TaxForm/CashFlowForm'
import HaiguanAnnualReport from '../PlatformForms/WeihaiHaiGuan/AnnualReport';
import ShangwuBasicInfo from '../PlatformForms/ShangWuJu/BasicInfo';
import ShangwuInvestorInfo from '../PlatformForms/ShangWuJu/InvestorInfo';
import ShangwuOperationInfo from '../PlatformForms/ShangWuJu/OperationInfo';

import dayjs from 'dayjs';
import { useSearchParams } from "react-router-dom";
import CompanyInfoChange from '../PlatformForms/GongJiJinForm/CompanyInfoChange';

export default function Fill() {

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  console.log(searchParams.get('table', '42'));
  const [selectedKey, setSelectedKey] = useState(
      searchParams.get('table') == null ? '42' : searchParams.get('table')
  );
  const [curDate, setCurDate] = useState(dayjs().format('YYYY-MM'));

  const subMenuMap = {
    '42': 'platform12', 
    '36': 'platform12', 
    '37': 'platform12', 
    // '38': 'platform12', 
    '39': 'platform12', 
    // '40': 'platform12', 
    '6': 'platform2', 
    '7': 'platform2', 
    '8': 'platform2', 
    '9': 'platform2', 
    '10': 'platform2', 
    'caizheng1': 'caizhengju', 
    '15': 'platform4', 
    '16': 'platform4', 
    '17': 'platform4', 
    '18': 'platform4', 
    'weihaihaiguan_sub': 'weihaihaiguan', 
    '27': 'platform8', 
    '28': 'platform8', 
    '29': 'platform8', 
    '30': 'platform8', 
    '31': 'platform8', 
    '32': 'platform8', 
    '33': 'platform9', 
    'shangwu1': 'shangwuju', 
    '1': 'platform1', 
    '2': 'platform1', 
    '3': 'platform1', 
    '4': 'platform1', 
    // '19': 'platform5', 
    // '20': 'platform5', 
    // '21': 'platform5', 
    // '22': 'platform5', 
    // '23': 'platform6', 
    // '24': 'platform7', 
    // '25': 'platform7', 
    // '26': 'platform7', 
    // '11': 'platform3', 
    // '12': 'platform3', 
    // '13': 'platform3', 
    // '14': 'platform3', 
    // '34': 'platform10', 
    // '35': 'platform10'
  }

  const [openKey, setOpenKey] = useState( Object.keys(subMenuMap).indexOf(selectedKey) == -1 ? ['platform12']: [subMenuMap[selectedKey]]);

  useEffect(() => {
    setSearchParams({'table': selectedKey.toString(), 'tab': '2'})
  }, [selectedKey])

  const menus = [
    {
      type: 'divider',
    },
    {
      key: 'platform12',
      label: '人社局',
      icon: <SolutionOutlined />,
      children: [
        {
          key: 'g1',
          type: 'group',
          children: [
            {
              key: '42',
              label: '单位基本信息',
            },
            // {
            //   key: '36',
            //   label: '单位就业登记信息',
            // },
            {
              key: '37',
              label: '以工代训补贴申领信息',
            },
            // {
            //   key: '38',
            //   label: '新增社保参保人员信息',
            // },
            {
              key: '39',
              label: '单位参保信息',
            },
            {
              key: '40',
              label: '就业需求信息',
            }
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform2',
      label: '统计局',
      icon: <BarChartOutlined />,
      children: [
        {
          key: '6',
          label: '单位基本信息',
        },
        {
          key: '7',
          label: '单位从业人员及工资总额信息',
        },
        // {
        //   key: '8',
        //   label: '研究开发项目情况信息'
        // },
        // {
        //   key: '9',
        //   label: '研究开发活动及相关情况信息'
        // },
        {
          key: '10',
          label: '财务状况信息'
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'caizhengju',
      label: '财政局',
      icon: <MoneyCollectOutlined />,
      children: [
        {
          key: 'caizheng1',
          label: '企业基本信息',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform4',
      label: '市场监督管理局',
      icon: <CameraOutlined />,
      children: [
        {
          key: '15',
          label: '企业基本信息',
        },
        // {
        //   key: '16',
        //   label: '资产状况信息',
        // },
        // {
        //   key: '17',
        //   label: '对外提供保证担保信息',
        // },
        {
          key: '18',
          label: '参保信息',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'weihaihaiguan',
      label: '威海海关',
      icon: <BarcodeOutlined />,
      children: [
        {
          key: 'weihaihaiguan_sub',
          label: '海关年报事项',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform8',
      label: '科技局',
      icon: <RobotOutlined />,
      children: [
        {
          key: '27',
          label: '企业概况信息',
        },
        {
          key: '28',
          label: '企业经济概况信息',
        },
        {
          key: '29',
          label: '企业人员概况信息',
        },
        // {
        //   key: '30',
        //   label: '研究开发项目状况信息',
        // },
        {
          key: '31',
          label: '研究开发活动及相关情况信息'
        },
        {
          key: '32',
          label: '法人基本信息表'
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform9',
      label: '工信局',
      icon: <ScheduleOutlined />,
      children: [
        {
          key: '33',
          label: '工信基本信息',
        },
        {
          key: '34',
          label: '工业产品销售',
        },
        {
          key: '35',
          label: '软件和信息技术服务业企业月报表'
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'shangwuju',
      label: '商务局',
      icon: <TruckOutlined />,
      children: [
        {
          key: 'shangwu1',
          label: '基本情况',
        },
        {
          key: 'shangwu2',
          label: '投资者情况',
        },
        {
          key: 'shangwu3',
          label: '经营情况',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform1',
      label: '税务局',
      icon: <TransactionOutlined />,
      children: [
        {
          key: '1',
          label: '单位税务信息',
        },
        {
          key: '2',
          label: '利润表',
        },
        {
          key: '3',
          label: '资产负债表',
        },
        {
          key: '4',
          label: '现金流量表',
        }
      ],
    },
    {
      type: 'divider',
    },
    // {
    //   key: 'platform5',
    //   label: '公积金管理中心',
    //   children: [
    //     {
    //       key: '19',
    //       label: '个人账户信息',
    //     },
    //     {
    //       key: '20',
    //       label: '个人账户同城转移信息',
    //     },
    //     {
    //       key: '21',
    //       label: '汇缴登记信息',
    //     },
    //     {
    //       key: '22',
    //       label: '个人缴存明细信息',
    //     },
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform6',
    //   label: '市总工会',
    //   children: [
    //     {
    //       key: '23',
    //       label: '住院医疗互助信息',
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform7',
    //   label: '电力交易中心',
    //   children: [
    //     {
    //       key: '24',
    //       label: '电力用户基本信息',
    //     },
    //     {
    //       key: '25',
    //       label: '用户申请/注销信息',
    //     },
    //     {
    //       key: '26',
    //       label: '电力用户身份认证信息',
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform3',
    //   label: '医保局',
    //   children: [
    //     {
    //       key: '11',
    //       label: '单位基本信息',
    //     },
    //     {
    //       key: '12',
    //       label: '单位参保登记信息',
    //     },
    //     {
    //       key: '13',
    //       label: '人员信息',
    //     },
    //     {
    //       key: '14',
    //       label: '在线增减员信息',
    //     },
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform10',
    //   label: '市政府',
    //   children: [
    //     {
    //       key: '34',
    //       label: '项目基本信息',
    //     },
    //     {
    //       key: '35',
    //       label: '项目法人/申报单位信息',
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
  ];

  const pageMap = {
    '1': <CompanyTaxInfo date={curDate} />,
    '2': <BenefitsForm date={curDate} />,
    '3': <PropertyDebtForm date={curDate} />,
    '4': <CashFlowForm date={curDate} />,

    '6': <StatisticCompanyBasicInfo date={curDate} />,
    '7': <CompanyTotalSalary date={curDate} />,
    '8': <ResearchDevelopInfo date={curDate} />,
    '9': <ResearchActivityInfo date={curDate} />,
    '10': <FinanceStatusInfo date={curDate} />,

    'weihaihaiguan_sub': <HaiguanAnnualReport date={curDate} />,
    'caizheng1': <CaizhengBasicInfo date={curDate} />,

    'shangwu1': <ShangwuBasicInfo date={curDate} />,
    'shangwu2': <ShangwuInvestorInfo date={curDate} />,
    'shangwu3': <ShangwuOperationInfo date={curDate} />,

    // '11': <YiBaoCompanyInfo date={curDate} />,
    // '12': <CompanySecurityInfo date={curDate} />,
    // '13': <PeopleInfo date={curDate} />,
    // '14': <AddOrRemove date={curDate} />,

    '15': <GongShangCompanyInfo date={curDate} />,
    '16': <PropertyStatusInfo date={curDate} />,
    '17': <OuterVouch date={curDate} />,
    '18': <JoinedSecurityInfo date={curDate} />,

    // '19': <IndividualAccountInfo date={curDate} />,
    // '20': <IndividualCityTransferInfo date={curDate} />,
    // '21': <PaymentSignUpInfo date={curDate} />,
    // '22': <PersonalPaymentDetails date={curDate} />,

    // '23': <HospitalHelpInfos date={curDate} />,

    // '24': <ElectricUserInfo date={curDate} />,
    // '25': <UserSignUpAndOff date={curDate} />,
    // '26': <UserRecognizeInfo date={curDate} />,

    '27': <TechCompanyInfo date={curDate} />,
    '28': <CompanyEcoInfo date={curDate} />,
    '29': <CompanyEmployeeInfo date={curDate} />,
    '30': <CompanyDevelopmentInfo date={curDate} />,
    '31': <ResearchDevelopActivity date={curDate} />,
    '32': <HighTechCompanyStat date={curDate} />,

    '33': <GongXinBasicInfo date={curDate} />,
    '34': <GongXinProductSales date={curDate} />,
    '35': <InfoTechMonthlyForm date={curDate} />,

    // '34': <ProjectBasicInfo date={curDate} />,
    // '35': <PMInfo date={curDate} />,

    '36': <HumanSocialCompanyInfo date={curDate} />,
    '37': <YiGongDaiXun date={curDate} />,
    // '38': <NewSheBao date={curDate} />,
    '39': <CompanySocialSecurityInfo date={curDate} />,
    '40': <JobDemandInfo date={curDate} />,

    '41': <CompanyInfoChange date={curDate} />,
    '42': <BasicInfoHumanResource date={curDate} />
  }

  const onChange = (e) => {
    setCurDate(e.format('YYYY-MM'));
  }

  return (
    <>
      <Row style={{height: 1000}}>
        <Col span={4} style={{height: 800, overflowX: 'auto'}}>
          <Menu
            style={{
              width: '100%',
              fontSize: '18px'
            }}
            openKeys={openKey}
            selectedKeys={selectedKey}
            mode="inline"
            items={menus}
            onSelect={(key) => {
              setSelectedKey(key.key)
            }}
            onOpenChange={(key) => {
              setOpenKey(key)
            }}
          />
        </Col>
        <Col span={20}>
          <div style={{marginLeft: 30, height: 950 }}>
            <DatePicker format="YYYY-MM-DD" defaultValue={dayjs()} onChange={onChange} picker="month"/>
            {pageMap[selectedKey]}
          </div>
        </Col>
      </Row>
    </>
  );
}
