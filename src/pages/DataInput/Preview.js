import { Menu, Row, Col, Layout } from 'antd';
const { Sider } = Layout;
import { useState } from 'react';
import { SolutionOutlined, BarChartOutlined, MenuUnfoldOutlined, MenuFoldOutlined, MoneyCollectOutlined, CameraOutlined, BarcodeOutlined, RobotOutlined, ScheduleOutlined, TransactionOutlined, TruckOutlined } from '@ant-design/icons';
import PMInfo from '../PlatformForms/CityGovernment/PMInfo'
import ProjectBasicInfo from '../PlatformForms/CityGovernment/ProjectBasicInfo'
import ElectricUserInfo from '../PlatformForms/ElectricTransactionForm/ElectricUserInfo'
import UserRecognizeInfo from '../PlatformForms/ElectricTransactionForm/UserRecognizeInfo'
import UserSignUpAndOff from '../PlatformForms/ElectricTransactionForm/UserSignUpAndOff'
import IndividualAccountInfo from '../PlatformForms/GongJiJinForm/IndividualAccountInfo'
import GongShangCompanyInfo from '../PlatformForms/GongShangForm/GongShangCompanyInfo'
import JoinedSecurityInfo from '../PlatformForms/GongShangForm/JoinedSecurityInfo'
import OuterVouch from '../PlatformForms/GongShangForm/OuterVouch'
import PropertyStatusInfo from '../PlatformForms/GongShangForm/PropertyStatusInfo'
import GongXinProductSales from '../PlatformForms/GongXinForm/GongXinProductSales'
import HumanSocialCompanyInfo from '../PlatformForms/HumanSocialForm/CompanyInfo'
import YiGongDaiXun from '../PlatformForms/HumanSocialForm/YiGongDaiXun'
import CompanySocialSecurityInfo from '../PlatformForms/HumanSocialForm/CompanySocialSecurityInfo'
import NewSheBao from '../PlatformForms/HumanSocialForm/NewSheBao'
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
import AddOrRemove from '../PlatformForms/YiBaoForm/AddOrRemove'
import CompanySecurityInfo from '../PlatformForms/YiBaoForm/CompanySecurityInfo'
import PeopleInfo from '../PlatformForms/YiBaoForm/PeopleInfo'
import YiBaoCompanyInfo from '../PlatformForms/YiBaoForm/YiBaoCompanyInfo'
import HospitalHelpInfos from '../PlatformForms/ZongGongHuiForm/HospitalHelpInfos'


import PropertyDebt from '../PreviewPages/PropertyDebtPreview';
import CashFlowPreview from '../PreviewPages/CashFlowPreview';
import BenefitsForm from '../PreviewPages/BenefitsFormPreview';
import PropertyDebtNewRule from '../PreviewPages/PropertyDebtNewRulesPreview';
import CashFlowNewRule from '../PreviewPages/CashFlowNewRulesPreview';
import BenefitsNewRules from '../PreviewPages/BenefitsNewRulesPreview';


export default function PreviewPage() {

  const [selectedKey, setSelectedKey] = useState('platform12_1');

  const menus = [
		{
      type: 'divider',
    },
    {
      key: 'platform12',
      icon: <SolutionOutlined />,
      label: <span style={{fontSize: '16px'}}>山东省税务局</span>,
      children: [
        {
          key: 'platform12_1',
          label: <span style={{fontSize: '16px'}}>现金流量表(适用已执行新金融准则、新收入准则和新租赁准则的一般企业)</span>,
        },
				{
          key: 'platform12_2',
          label: <span style={{fontSize: '16px'}}>资产负债表(适用已执行新金融准则、新收入准则和新租赁准则的一般企业)</span>,
        },
				{
          key: 'platform12_3',
          label: <span style={{fontSize: '16px'}}>利润表(适用已执行新金融准则、新收入准则和新租赁准则的一般企业)</span>,
        },
        // {
        //   key: 'platform12_4',
        //   label: <span style={{fontSize: '16px'}}>现金流量表(适用执行企业会计制度的企业)</span>,
        // },
				// {
        //   key: 'platform12_5',
        //   label: <span style={{fontSize: '16px'}}>资产负债表(适用执行企业会计制度的企业)</span>,
        // },
				// {
        //   key: 'platform12_6',
        //   label: <span style={{fontSize: '16px'}}>利润表(适用执行企业会计制度的企业)</span>,
        // }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform1',
      icon: <BarChartOutlined />,
      label: <span style={{fontSize: '16px'}}>统计局</span>,
      children: [
        // {
        //   key: '1',
        //   label: <span style={{fontSize: '16px'}}>从业人员及工资总额</span>,
        // },
        // {
				// 	key: '2',
				// 	label: <span style={{fontSize: '16px'}}>调查单位基本情况</span>,
        // },
        {
          key: '3',
          label: <span style={{fontSize: '16px'}}>财务状况</span>,
        },
        // {
        //   key: '4',
        //   label: <span style={{fontSize: '16px'}}>保障性住房开发及经营情况</span>,
        // },
        // {
				// 	key: '5',
				// 	label: <span style={{fontSize: '16px'}}>固定资产投资项目情况</span>,
        // },
        // {
				// 	key: '6',
				// 	label: <span style={{fontSize: '16px'}}>固定资产投资项目新增生产能力（或工程效益）情况</span>,
        // },
				// {
				// 	key: '7',
				// 	label: <span style={{fontSize: '16px'}}>工业产销总值及主要产品产量</span>,
				// },
				// {
				// 	key: '8',
				// 	label: <span style={{fontSize: '16px'}}>当月工业总产值明细数据</span>,
				// },
				// {
				// 	key: '9',
				// 	label: <span style={{fontSize: '16px'}}>当月工业总产值明细数据计算表</span>,
				// },
				// {
				// 	key: '10',
				// 	label: <span style={{fontSize: '16px'}}>能源购进、消费与库存</span>,
				// },
				// {
				// 	key: '11',
				// 	label: <span style={{fontSize: '16px'}}>生产经营景气状况</span>,
				// },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform2',
      icon: <MoneyCollectOutlined />,
      label: <span style={{fontSize: '16px'}}>人才服务大厅</span>,
      children: [
        {
            key: '12',
            label: <span style={{fontSize: '16px'}}>单位就业登记</span>,
        },
        {
            key: '13',
            label: <span style={{fontSize: '16px'}}>以工代训补贴申请</span>,
        }
      ],
    },
    {
      type: 'divider',
    },
    // {
    //   key: 'platform3',
    //   label: <span style={{fontSize: '16px'}}>社保就业网上申报</span>,
    //   children: [
    //     {
    //       key: '14',
    //       label: <span style={{fontSize: '16px'}}>增员</span>,
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform4',
    //   label: <span style={{fontSize: '16px'}}>医保网上申报系统</span>,
    //   children: [
    //     {
    //       key: '15',
    //       label: <span style={{fontSize: '16px'}}>单位信息变更</span>,
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    {
      key: 'platform5',
      icon: <CameraOutlined />,
      label: <span style={{fontSize: '16px'}}>信用公示系统</span>,
      children: [
        {
          key: '16',
          label: <span style={{fontSize: '16px'}}>工商年报</span>,
        }
      ],
    },
    {
      type: 'divider',
    },
    // {
    //   key: 'platform6',
    //   label: <span style={{fontSize: '16px'}}>威海住房公积金管理中心网站</span>,
    //   children: [
    //     {
    //       key: '17',
    //       label: <span style={{fontSize: '16px'}}>汇缴登记</span>,
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform7',
    //   label: <span style={{fontSize: '16px'}}>山东电力交易平台</span>,
    //   children: [
    //     {
    //       key: '18',
    //       label: <span style={{fontSize: '16px'}}>电力用户基本信息</span>,
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform8',
    //   label: <span style={{fontSize: '16px'}}>火炬中心业务办理平台</span>,
    //   children: [
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform9',
    //   label: <span style={{fontSize: '16px'}}>信息产业运行监测平台</span>,
    //   children: [
    //     {
    //       key: '19',
    //       label: <span style={{fontSize: '16px'}}>软件和信息技术服务业企业月报</span>,
    //     }
    //   ],
    // },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: 'platform10',
    //   label: <span style={{fontSize: '16px'}}>山东省政务服务网</span>,
    //   children: [
    //   ],
    // },
    // {
    //   type: 'divider',
    // }
  ];

  const pageMap = {
    'platform12_1': <CashFlowNewRule />,
    'platform12_2': <PropertyDebtNewRule />,
    'platform12_3': <BenefitsNewRules />,
    'platform12_4': <CashFlowPreview />,
    'platform12_5': <PropertyDebt />,
    'platform12_6': <BenefitsForm />,

    '1': <HumanSocialCompanyInfo />,
    '2': <YiGongDaiXun />,
    '3': <FinanceStatusInfo />,
    '4': <CompanySocialSecurityInfo />,
    '5': <JobDemandInfo />,

    '6': <StatisticCompanyBasicInfo />,
    '7': <CompanyTotalSalary />,
    '8': <ResearchDevelopInfo />,
    '9': <ResearchActivityInfo />,
    '10': <FinanceStatusInfo />,

    '11': <YiBaoCompanyInfo />,
    '12': <CompanySecurityInfo />,
    '13': <PeopleInfo />,
    '14': <AddOrRemove />,

    '15': <GongShangCompanyInfo />,
    '16': <PropertyStatusInfo />,
    '17': <OuterVouch />,
    '18': <JoinedSecurityInfo />,

    '19': <IndividualAccountInfo />,

    '23': <HospitalHelpInfos />,

    '24': <ElectricUserInfo />,
    '25': <UserSignUpAndOff />,
    '26': <UserRecognizeInfo />,

    '27': <TechCompanyInfo />,
    '28': <CompanyEcoInfo />,
    '29': <CompanyEmployeeInfo />,
    '30': <CompanyDevelopmentInfo />,
    '31': <ResearchDevelopActivity />,
    '32': <HighTechCompanyStat />,

    '33': <GongXinProductSales />,

    '34': <ProjectBasicInfo />,
    '35': <PMInfo />,

    '36': <CompanyTaxInfo />
  }

  return (
    <>
      <Row style={{height: 1000}}>
        <Col style={{height: 800, overflowX: 'auto'}}>
          <Layout style={{height: 800, minHeight: 800, backgroundColor: 'white'}}>
            <Sider
              collapsible
              trigger={null}
              breakpoint={'xxl'}
              collapsedWidth="40"
              style={{height: 800, backgroundColor: 'white'}}
            >
              <Menu
                style={{
                  fontSize: '18px'
                }}
                defaultSelectedKeys={['platform12_1']}
                defaultOpenKeys={['platform12_1']}
                mode="inline"
                items={menus}
                onSelect={(key) => {
                  setSelectedKey(key.key)
                }}
              />
            </Sider>
          </Layout>
        </Col>
        <Col xxl={20} xl={23} lg={22} md={22} sm={19} xs={19}>
          <div style={{marginLeft: 30, height: 832 }}>
            {pageMap[selectedKey]}
          </div>
        </Col>
      </Row>
    </>
  );
}