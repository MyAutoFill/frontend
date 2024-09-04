import { Menu } from 'antd';
import { useState } from 'react';

import PMInfo from '../PlatformForms/CityGovernment/PMInfo'
import ProjectBasicInfo from '../PlatformForms/CityGovernment/ProjectBasicInfo'
import ElectricUserInfo from '../PlatformForms/ElectricTransactionForm/ElectricUserInfo'
import UserRecognizeInfo from '../PlatformForms/ElectricTransactionForm/UserRecognizeInfo'
import UserSignUpAndOff from '../PlatformForms/ElectricTransactionForm/UserSignUpAndOff'
import IndividualAccountInfo from '../PlatformForms/GongJiJinForm/IndividualAccountInfo'
import IndividualCityTransferInfo from '../PlatformForms/GongJiJinForm/IndividualCityTransferInfo'
import PaymentSignUpInfo from '../PlatformForms/GongJiJinForm/PaymentSignUpInfo'
import PersonalPaymentDetails from '../PlatformForms/GongJiJinForm/PersonalPaymentDetails'
import GongShangCompanyInfo from '../PlatformForms/GongShangForm/GongShangCompanyInfo'
import JoinedSecurityInfo from '../PlatformForms/GongShangForm/JoinedSecurityInfo'
import OuterVouch from '../PlatformForms/GongShangForm/OuterVouch'
import PropertyStatusInfo from '../PlatformForms/GongShangForm/PropertyStatusInfo'
import InfoTechMonthlyForm from '../PlatformForms/GongXinForm/InfoTechMonthlyForm'
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


import PropertyDebt from '../PreviewPages/PropertyDebt';


export default function PreviewPage() {

  const [selectedKey, setSelectedKey] = useState('1');

  const menus = [
		{
      key: 'platform1',
      label: '统计局',
      children: [
        {
          key: '1',
          label: '从业人员及工资总额',
        },
        {
					key: '2',
					label: '调查单位基本情况',
        },
        {
          key: '3',
          label: '财务状况',
        },
        {
          key: '4',
          label: '保障性住房开发及经营情况',
        },
        {
					key: '5',
					label: '固定资产投资项目情况',
        },
        {
					key: '6',
					label: '固定资产投资项目新增生产能力（或工程效益）情况',
        },
				{
					key: '7',
					label: '工业产销总值及主要产品产量',
				},
				{
					key: '8',
					label: '当月工业总产值明细数据',
				},
				{
					key: '9',
					label: '当月工业总产值明细数据计算表',
				},
				{
					key: '10',
					label: '能源购进、消费与库存',
				},
				{
					key: '11',
					label: '生产经营景气状况',
				},
      ],
    },
		{
      type: 'divider',
    },
    {
      key: 'platform12',
      label: '国家税务局山东省电子税务局',
      children: [
        {
          key: '20',
          label: '现金流量表',
        },
				{
          key: '21',
          label: '资产负债表',
        },
				{
          key: '22',
          label: '利润表',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform2',
      label: '山东公共就业人才服务网上服务大厅',
      children: [
        {
            key: '12',
            label: '单位就业登记',
        },
        {
            key: '13',
            label: '以工代训补贴申请',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform3',
      label: '社保就业网上申报',
      children: [
        {
          key: '14',
          label: '增员',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform4',
      label: '医保网上申报系统',
      children: [
        {
          key: '15',
          label: '单位信息变更',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform5',
      label: '国家企业信用信息公示系统',
      children: [
        {
          key: '16',
          label: '工商年报',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform6',
      label: '威海住房公积金管理中心网站',
      children: [
        {
          key: '17',
          label: '汇缴登记',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform7',
      label: '山东电力交易平台',
      children: [
        {
          key: '18',
          label: '电力用户基本信息',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform8',
      label: '火炬中心业务办理平台',
      children: [
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform9',
      label: '信息产业运行监测平台',
      children: [
        {
          key: '19',
          label: '软件和信息技术服务业企业月报',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform10',
      label: '山东省政务服务网',
      children: [
      ],
    },
    {
      type: 'divider',
    }
  ];

  const pageMap = {
    '1': <HumanSocialCompanyInfo />,
    '2': <YiGongDaiXun />,
    '3': <NewSheBao />,
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
    '20': <IndividualCityTransferInfo />,


    '21': <PropertyDebt />,


    '22': <PersonalPaymentDetails />,

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

    '33': <InfoTechMonthlyForm />,

    '34': <ProjectBasicInfo />,
    '35': <PMInfo />,

    '36': <CompanyTaxInfo />
  }

  return (
    <>
      <div style={{display: 'flex', overflow: 'auto', height: 1000}}>
        <div>
          <Menu
            style={{
              width: 320,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
            items={menus}
            onSelect={(key) => {
              setSelectedKey(key.key)
            }}
          />
        </div>
        <div>
          <div style={{marginLeft: 30, height: 950, width: 1400, overflow: 'auto'}}>
            {pageMap[selectedKey]}
          </div>
        </div>
      </div>
    </>
  );
}