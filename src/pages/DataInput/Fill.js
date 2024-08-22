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

export default function Fill() {

  const [selectedKey, setSelectedKey] = useState('1');

  const menus = [
    {
      type: 'divider',
    },
    {
      key: 'platform1',
      label: '人社局',
      children: [
        {
          key: 'g1',
          type: 'group',
          children: [
            {
              key: '1',
              label: '单位就业登记信息',
            },
            {
              key: '2',
              label: '以工代训补贴申领信息',
            },
            {
              key: '3',
              label: '新增社保参保人员信息',
            },
            {
              key: '4',
              label: '单位参保信息',
            },
            {
              key: '5',
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
      children: [
        {
          key: '6',
          label: '单位基本信息',
        },
        {
          key: '7',
          label: '单位从业人员及工资总额信息',
        },
        {
          key: '8',
          label: '研究开发项目情况信息'
        },
        {
          key: '9',
          label: '研究开发活动及相关情况信息'
        },
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
      key: 'platform3',
      label: '医保局',
      children: [
        {
          key: '11',
          label: '单位基本信息',
        },
        {
          key: '12',
          label: '单位参保登记信息',
        },
        {
          key: '13',
          label: '人员信息',
        },
        {
          key: '14',
          label: '在线增减员信息',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform4',
      label: '工商局',
      children: [
        {
          key: '15',
          label: '企业基本信息',
        },
        {
          key: '16',
          label: '资产状况信息',
        },
        {
          key: '17',
          label: '对外提供保证担保信息',
        },
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
      key: 'platform5',
      label: '公积金管理中心',
      children: [
        {
          key: '19',
          label: '个人账户信息',
        },
        {
          key: '20',
          label: '个人账户同城转移信息',
        },
        {
          key: '21',
          label: '汇缴登记信息',
        },
        {
          key: '22',
          label: '个人缴存明细信息',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform6',
      label: '市总工会',
      children: [
        {
          key: '23',
          label: '住院医疗互助信息',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform7',
      label: '电力交易中心',
      children: [
        {
          key: '24',
          label: '电力用户基本信息',
        },
        {
          key: '25',
          label: '用户申请/注销信息',
        },
        {
          key: '26',
          label: '电力用户身份认证信息',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform8',
      label: '科技局',
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
        {
          key: '30',
          label: '研究开发项目状况信息',
        },
        {
          key: '31',
          label: '研究开发活动及相关情况信息'
        },
        {
          key: '32',
          label: '高新技术企业统计表信息'
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform9',
      label: '工信局',
      children: [
        {
          key: '33',
          label: '软件和信息技术服务业企业月报表信息',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform10',
      label: '市政府',
      children: [
        {
          key: '34',
          label: '项目基本信息',
        },
        {
          key: '35',
          label: '项目法人/申报单位信息',
        }
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'platform12',
      label: '税务局',
      children: [
        {
          key: '36',
          label: '单位税务信息',
        }
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
    '21': <PaymentSignUpInfo />,
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
            defaultOpenKeys={['sub1']}
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