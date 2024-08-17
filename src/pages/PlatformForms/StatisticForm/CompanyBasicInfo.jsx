import 'rc-banner-anim/assets/index.css';
import React, { useState } from 'react';
import { Select, Descriptions, Input, Button, DatePicker, Checkbox, Radio } from 'antd';


export default function StatisticCompanyBasicInfo() {
  const [FormType, setFormType] = useState('')
  const [organizationTypeValue, setOrganizationTypeValue] = useState('')
  const [signUpTypeValue, setSignUpTypeValue] = useState('')
  const [signUpTypeSubValue, setSignUpTypeSubValue] = useState('')
  const [companyStockControlValue, setCompanyStockControlValue] = useState('')
  const [belongRelationValue, setBelongRelationValue] = useState('')
  const [runningStatusValue, setRunningStatusValue] = useState('')
  const [executeAccountingTypeValue, setExecuteAccountingTypeValue] = useState('')
  const [HouseRunningLevel, setHouseRunningLevel] = useState('')
  const [RunningType, setRunningType] = useState('')
  const [HaveStore, setHaveStore] = useState('')
  const [HaveStoreType, setHaveStoreType] = useState('')
  const [NoStoreType, setNoStoreType] = useState('')
  const [HospitalityStarLevel, setHospitalityStarLevel] = useState('')
  const [HaveUpperOwner, setHaveUpperOwner] = useState('')
  const [UpperOwnerInfo, setUpperOwnerInfo] = useState('')

  const HKTWInvestSituation = [
    { label: '港商投资', value: '港商投资' },
    { label: '台商投资', value: '台商投资' },
    { label: '暂未投资', value: '暂未投资' },
  ];

  const peopleSearchOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const peopleSearchOnSearch = (value) => {
    console.log('search:', value);
  };

  const [disableVar, setDisableVar] = useState(true)

  const items = [
    {
      key: '1',
      label: '是否为“视同法人单位”',
      children:         
      <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
        <Radio value={1}>是</Radio>
        <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
      </Radio.Group>,
      span: 3
    },
    {
      key: '2',
      label: '统一社会信用代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '3',
      label: '单位名称',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '4',
      label: '行业类别',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '5',
      label: '行业性质',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '6',
      label: '主要业务活动',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '7',
      label: '税务登记证号',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '8',
      label: '报表类别',
      children:             
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setFormType(e.target.value)} value={FormType}>
          <Radio value={'农业'}>农业</Radio>
          <Radio value={'规模以上工业'} style={{ marginLeft: '10px'}}>规模以上工业</Radio>
          <Radio value={'规模以下工业'} style={{ marginLeft: '10px'}}>规模以下工业</Radio>
          <Radio value={'建筑业'} style={{ marginLeft: '10px'}}>建筑业</Radio>
          <Radio value={'批发和零售业'} style={{ marginLeft: '10px'}}>批发和零售业</Radio>
          <Radio value={'住宿和餐饮业'} style={{ marginLeft: '10px'}}>住宿和餐饮业</Radio>
          <Radio value={'房地产开发经营业'} style={{ marginLeft: '10px'}}>房地产开发经营业</Radio>
          <Radio value={'规模以上服务业'} style={{ marginLeft: '10px'}}>规模以上服务业</Radio>
          <Radio value={'投资'} style={{ marginLeft: '10px'}}>投资</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
              其他
              {FormType === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
            </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '9',
      label: '单位所在地区划及详细地址',
      children: 
        <> 
          <Input addonBefore="省（自治区、直辖市）" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="市（地、州、盟)" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="县（市、区、旗)" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="乡（镇、街道办事处）" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="村（居）委会" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="街（路）、门牌" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="详细地址" disabled={disableVar} style={{ width: '1070px', marginLeft: '10px', marginTop: '10px' }}/>
        </>,
      span: 3
    },
    {
      key: '10',
      label: '区划代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '11',
      label: '城乡代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '12',
      label: '单位注册地区划及详细地址',
      children: (
        <>
          <span>
            是否与单位所在地区划及详细地址一致：
            <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
              <Radio value={1}>是</Radio>
              <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
            </Radio.Group>
          </span>
          <br></br>
          <Input addonBefore="省（自治区、直辖市）" disabled={disableVar} style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="市（地、州、盟)" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="县（市、区、旗)" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="乡（镇、街道办事处）" disabled={disableVar} style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="村（居）委会" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="街（路）、门牌" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="详细地址" disabled={disableVar} style={{ width: '1070px', marginTop: '10px' }}/>
        </>
      ),
      span: 3
    },
    {
      key: '13',
      label: '区划代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '14',
      label: '城乡代码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5
    },
    {
      key: '15',
      label: '单位规模',
      children: (
        <>
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={'大型'}>大型</Radio>
            <Radio value={'中型'} style={{ marginLeft: '10px'}}>中型</Radio>
            <Radio value={'小型'} style={{ marginLeft: '10px'}}>小型</Radio>
            <Radio value={'微型'} style={{ marginLeft: '10px'}}>微型</Radio>
          </Radio.Group>
        </>
      ),
      span: 3
    },
    {
      key: '16',
      label: '企业主要经济指标',
      children: '-',
      span: 3
    },
    {
      key: '17',
      label: '营业收入',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '18',
      label: '其中：主营业务收入',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '19',
      label: '资产总计',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '20',
      label: '其他基本信息',
      children: '-',
      span: 3
    },
    {
      key: '21',
      label: '法定代表人',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1
    },
    {
      key: '22',
      label: '成立时间（所有单位填报）',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择成立时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '23',
      label: '开业时间（仅限企业填报）',
      children: <DatePicker disabled={disableVar} size='large' placeholder='请选择开业时间' style={{ width: '200px', marginLeft: '10px', marginTop: '10px'}}/>,
      span: 1
    },
    {
      key: '24',
      label: '联系方式',
      children: 
        <>
          <Input addonBefore="长途区号" disabled={disableVar} style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="固定电话" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="通信地址" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="电子邮箱" disabled={disableVar} style={{ width: '350px', marginTop: '10px' }}/>
          <Input addonBefore="移动电话" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="传真号码" disabled={disableVar} style={{ width: '350px', marginLeft: '10px', marginTop: '10px' }}/>
          <Input addonBefore="邮政编码" disabled={disableVar} style={{ width: '350px', marginTop: '10px' }}/>
        </>,
      span: 3
    },
    {
      key: '25',
      label: '机构类型',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setOrganizationTypeValue(e.target.value)} value={organizationTypeValue}>
          <Radio value={'企业'}>企业</Radio>
          <Radio value={'事业单位'} style={{ marginLeft: '10px'}}>事业单位</Radio>
          <Radio value={'机关'} style={{ marginLeft: '10px'}}>机关</Radio>
          <Radio value={'社会团体'} style={{ marginLeft: '10px'}}>社会团体</Radio>
          <Radio value={'民办非企业单位'} style={{ marginLeft: '10px'}}>民办非企业单位</Radio>
          <Radio value={'基金会'} style={{ marginLeft: '10px'}}>基金会</Radio>
          <Radio value={'居委会'} style={{ marginLeft: '10px'}}>居委会</Radio>
          <Radio value={'村委会'} style={{ marginLeft: '10px'}}>村委会</Radio>
          <Radio value={'农民专业合作社'} style={{ marginLeft: '10px'}}>农民专业合作社</Radio>
          <Radio value={'农村集体经济组织'} style={{ marginLeft: '10px'}}>农村集体经济组织</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {organizationTypeValue === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '26',
      label: '登记注册类型',
      children: 
      <>
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeValue(e.target.value)} value={signUpTypeValue}>
          <Radio value={'内资'}>内资</Radio>
          <Radio value={'港澳台商投资'} style={{ marginLeft: '10px'}}>港澳台商投资</Radio>
          <Radio value={'外商投资'} style={{ marginLeft: '10px'}}>外商投资</Radio>
        </Radio.Group>
        <br></br>
        {signUpTypeValue === '内资' ? 
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
            <Radio value={'国有'} style={{ marginLeft: '20px'}}>国有</Radio>
            <Radio value={'其他有限责任公司'} style={{ marginLeft: '20px'}}>其他有限责任公司</Radio>
            <Radio value={'集体'} style={{ marginLeft: '20px'}}>集体</Radio>
            <Radio value={'股份合作'} style={{ marginLeft: '20px'}}>股份合作</Radio>
            <Radio value={'国有联营'} style={{ marginLeft: '20px'}}>国有联营</Radio>
            <Radio value={'国有与集体联营'} style={{ marginLeft: '20px'}}>国有与集体联营</Radio>
            <Radio value={'其他联营'} style={{ marginLeft: '20px'}}>其他联营</Radio>
            <Radio value={'国有独资公司'} style={{ marginLeft: '20px'}}>国有独资公司</Radio>
            <Radio value={'股份有限公司'} style={{ marginLeft: '20px'}}>股份有限公司</Radio>
            <Radio value={'私营独资'} style={{ marginLeft: '20px'}}>私营独资</Radio>
            <Radio value={'私营合伙'} style={{ marginLeft: '20px'}}>私营合伙</Radio>
            <Radio value={'私营有限责任公司'} style={{ marginLeft: '20px'}}>私营有限责任公司</Radio>
            <Radio value={'私营股份有限公司'} style={{ marginLeft: '20px'}}>私营股份有限公司</Radio>
            <Radio value={'其他'} style={{ marginLeft: '20px'}}>
              其他
              {signUpTypeSubValue === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : 
          signUpTypeValue === '港澳台商投资' ? 
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
            <Radio value={'与港澳台商合资经营'} style={{ marginLeft: '20px'}}>与港澳台商合资经营</Radio>
            <Radio value={'与港澳台商合作经营'} style={{ marginLeft: '20px'}}>与港澳台商合作经营</Radio>
            <Radio value={'港澳台商独资'} style={{ marginLeft: '20px'}}>港澳台商独资</Radio>
            <Radio value={'港澳台商投资股份有限公司'} style={{ marginLeft: '20px'}}>港澳台商投资股份有限公司</Radio>
            <Radio value={'其他港澳台投资'} style={{ marginLeft: '20px'}}>
            其他港澳台投资
              {signUpTypeSubValue === '其他港澳台投资' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : 
          signUpTypeValue === '外商投资' ? 
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setSignUpTypeSubValue(e.target.value)} value={signUpTypeSubValue}>
            <Radio value={'中外合资经营'} style={{ marginLeft: '20px'}}>中外合资经营</Radio>
            <Radio value={'中外合作经营'} style={{ marginLeft: '20px'}}>中外合作经营</Radio>
            <Radio value={'外资企业'} style={{ marginLeft: '20px'}}>外资企业</Radio>
            <Radio value={'外商投资股份有限公司'} style={{ marginLeft: '20px'}}>外商投资股份有限公司</Radio>
            <Radio value={'其他外商投资'} style={{ marginLeft: '20px'}}>
            其他外商投资
              {signUpTypeSubValue === '其他外商投资' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : null}
      </>,
      span: 3
    },
    {
      key: '27',
      label: '港澳台商投资情况',
      children: 
      <>
        （可多选）（仅限港澳台商投资企业填报）
        <Checkbox.Group disabled={disableVar} options={HKTWInvestSituation} />
      </>,
      span: 3
    },
    {
      key: '28',
      label: '企业控股情况',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setCompanyStockControlValue(e.target.value)} value={companyStockControlValue}>
          <Radio value={'国有控股'}>国有控股</Radio>
          <Radio value={'集体控股'} style={{ marginLeft: '10px'}}>集体控股</Radio>
          <Radio value={'私人控股'} style={{ marginLeft: '10px'}}>私人控股</Radio>
          <Radio value={'港澳台控股'} style={{ marginLeft: '10px'}}>港澳台控股</Radio>
          <Radio value={'外商控股'} style={{ marginLeft: '10px'}}>外商控股</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {companyStockControlValue === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '29',
      label: '隶属关系',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setBelongRelationValue(e.target.value)} value={belongRelationValue}>
          <Radio value={'中央'}>中央</Radio>
          <Radio value={'地方'} style={{ marginLeft: '10px'}}>地方</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {belongRelationValue === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '30',
      label: '运营状态',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setRunningStatusValue(e.target.value)} value={runningStatusValue}>
          <Radio value={'正常运营'}>正常运营</Radio>
          <Radio value={'停业（歇业）'} style={{ marginLeft: '10px'}}>停业（歇业）</Radio>
          <Radio value={'筹建'} style={{ marginLeft: '10px'}}>筹建</Radio>
          <Radio value={'当年关闭'} style={{ marginLeft: '10px'}}>当年关闭</Radio>
          <Radio value={'当年破产'} style={{ marginLeft: '10px'}}>当年破产</Radio>
          <Radio value={'当年注销'} style={{ marginLeft: '10px'}}>当年注销</Radio>
          <Radio value={'当年撤（吊）销'} style={{ marginLeft: '10px'}}>当年撤（吊）销</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {runningStatusValue === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '31',
      label: '执行会计标准类别',
      children: 
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setExecuteAccountingTypeValue(e.target.value)} value={executeAccountingTypeValue}>
          <Radio value={'企业会计准则制度'}>企业会计准则制度</Radio>
          <Radio value={'政府会计准则制度'} style={{ marginLeft: '10px'}}>政府会计准则制度</Radio>
          <Radio value={'民间非盈利组织会计制度'} style={{ marginLeft: '10px'}}>民间非盈利组织会计制度</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {executeAccountingTypeValue === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },


    {
      key: '32',
      label: '企业集团情况',
      children: 
        <>
        （限企业集团母公司及成员企业填写）本企业是
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={'集团母公司'}>1.集团母公司（核心企业或集团总部）</Radio>
            <Radio value={'成员企业'} style={{ marginLeft: '10px'}}>2.成员企业——请填直接上级法人统一社会信用代码（尚未领取统一社会信用代码的填原组织机构代码）</Radio>
          </Radio.Group>
        </>,
      span: 3
    },
    {
      key: '33',
      label: '建筑业企业资质登记编码',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5,
    },
    {
      key: '34',
      label: '建筑业企业新资质等级编码（若已更换最新资质证书，按新资质再次填写）',
      children: <Input disabled={disableVar} size='large' style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 1.5,
    },
    {
      key: '35',
      label: '房地产开发经营业企业资质等级',
      children: 
        <Radio.Group disabled={disableVar} size='large' style={{marginTop: '10px' }} onChange={(e) => setHouseRunningLevel(e.target.value)} value={HouseRunningLevel}>
          <Radio value={'一级'}>一级</Radio>
          <Radio value={'二级'} style={{ marginLeft: '10px'}}>二级</Radio>
          <Radio value={'三级'} style={{ marginLeft: '10px'}}>三级</Radio>
          <Radio value={'四级'} style={{ marginLeft: '10px'}}>四级</Radio>
          <Radio value={'五级'} style={{ marginLeft: '10px'}}>五级</Radio>
          <Radio value={'暂定'} style={{ marginLeft: '10px'}}>暂定</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {HouseRunningLevel === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '36',
      label: '批发和零售业、住宿和餐饮业单位经营形式',
      children: 
        <Radio.Group disabled={disableVar} size='large' style={{marginTop: '10px' }} onChange={(e) => setRunningType(e.target.value)} value={RunningType}>
          <Radio value={'独立门店'}>独立门店</Radio>
          <Radio value={'连锁总店(总部)'} style={{ marginLeft: '10px'}}>
            连锁总店(总部)
            {RunningType === '连锁总店(总部)' ? <Input disabled={disableVar} addonBefore='连锁品牌（商标或商号名称）：' style={{ width: '500px', marginLeft: '10px', marginTop: '0px' }}></Input> : null}
          </Radio>
          <Radio value={'连锁直营店'} style={{ marginLeft: '10px'}}>
            连锁直营店
            {RunningType === '连锁直营店' ? <Input disabled={disableVar} addonBefore='连锁品牌（商标或商号名称）：' style={{ width: '500px', marginLeft: '10px', marginTop: '0px' }}></Input> : null}
          </Radio>
          <Radio value={'连锁加盟店'} style={{ marginLeft: '10px'}}>
            连锁加盟店
            {RunningType === '连锁加盟店' ? <Input disabled={disableVar} addonBefore='连锁品牌（商标或商号名称）：' style={{ width: '500px', marginLeft: '10px', marginTop: '0px' }}></Input> : null}
          </Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {RunningType === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '37',
      label: '就失业登记证领取信息',
      children: 
      <>
        <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setHaveStore(e.target.value)} value={HaveStore}>
          <Radio value={'有店铺零售'}>有店铺零售</Radio>
          <Radio value={'无店铺零售'} style={{ marginLeft: '10px'}}>无店铺零售</Radio>
        </Radio.Group>
        <br></br>
        {HaveStore === '有店铺零售' ? 
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setHaveStoreType(e.target.value)} value={HaveStoreType}>
            <Radio value={'便利店'} style={{ marginLeft: '20px'}}>便利店</Radio>
            <Radio value={'超市'} style={{ marginLeft: '20px'}}>超市</Radio>
            <Radio value={'折扣店'} style={{ marginLeft: '20px'}}>折扣店</Radio>
            <Radio value={'仓储会员店'} style={{ marginLeft: '20px'}}>仓储会员店</Radio>
            <Radio value={'百货店'} style={{ marginLeft: '20px'}}>百货店</Radio>
            <Radio value={'购物中心'} style={{ marginLeft: '20px'}}>购物中心</Radio>
            <Radio value={'专业店'} style={{ marginLeft: '20px'}}>专业店</Radio>
            <Radio value={'品牌专卖店'} style={{ marginLeft: '20px'}}>品牌专卖店</Radio>
            <Radio value={'集合店'} style={{ marginLeft: '20px'}}>集合店</Radio>
            <Radio value={'无人值守商店'} style={{ marginLeft: '20px'}}>无人值守商店</Radio>
            <Radio value={'其他'} style={{ marginLeft: '20px'}}>
              其他
              {HaveStoreType === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : 
          HaveStore === '无店铺零售' ? 
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setNoStoreType(e.target.value)} value={NoStoreType}>
            <Radio value={'网络零售'} style={{ marginLeft: '20px'}}>网络零售</Radio>
            <Radio value={'电视/广播零售'} style={{ marginLeft: '20px'}}>电视/广播零售</Radio>
            <Radio value={'邮寄零售'} style={{ marginLeft: '20px'}}>邮寄零售</Radio>
            <Radio value={'无人售货设备零售'} style={{ marginLeft: '20px'}}>无人售货设备零售</Radio>
            <Radio value={'电话零售'} style={{ marginLeft: '20px'}}>电话零售</Radio>
            <Radio value={'直销'} style={{ marginLeft: '20px'}}>直销</Radio>
            <Radio value={'流动货摊零售'} style={{ marginLeft: '20px'}}>流动货摊零售</Radio>
            <Radio value={'其他'} style={{ marginLeft: '20px'}}>
            其他
              {NoStoreType === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}></Input> : null}
            </Radio>
          </Radio.Group> : null}
        </>,
      span: 3
    },
    {
      key: '38',
      label: '住宿业单位星级评定情况',
      children:
        <Radio.Group disabled={disableVar} size='large' style={{marginTop: '10px' }} onChange={(e) => setHospitalityStarLevel(e.target.value)} value={HospitalityStarLevel}>
          <Radio value={'一星'}>一星</Radio>
          <Radio value={'二星'} style={{ marginLeft: '10px'}}>二星</Radio>
          <Radio value={'三星'} style={{ marginLeft: '10px'}}>三星</Radio>
          <Radio value={'四星'} style={{ marginLeft: '10px'}}>四星</Radio>
          <Radio value={'五星'} style={{ marginLeft: '10px'}}>五星</Radio>
          <Radio value={'其他'} style={{ marginLeft: '10px'}}>
            其他
            {HospitalityStarLevel === '其他' ? <Input disabled={disableVar} style={{ width: '200px', marginLeft: '10px' }}></Input> : null}
          </Radio>
        </Radio.Group>,
      span: 3
    },
    {
      key: '39',
      label: '单位组织结构情况',
      children: '-',
      span: 3
    },
    {
      key: '40',
      label: '本法人单位是否有上一级法人',
      children: 
        <>
          <Radio.Group disabled={disableVar} style={{marginTop: '10px' }} onChange={(e) => setHaveUpperOwner(e.target.value)} value={HaveUpperOwner}>
            <Radio value={'是'}>是</Radio>
            <Radio value={'否'} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
          <br></br>
          {HaveUpperOwner === '是' ? 
            <>
              <Input disabled={disableVar} size='large' addonBefore='上一级法人统一社会信用代码' addonAfter='尚未领取统一社会信用代码的填写原组织机构代码' style={{ width: '1030px', marginLeft: '10px', marginTop: '10px' }}></Input>
              <br></br>
              <Input disabled={disableVar} size='large' addonBefore='上一级法人单位详细名称' style={{ width: '1030px', marginLeft: '10px', marginTop: '10px' }}></Input>
            </>
            : null}
          </>,
      span: 3
    },
    {
      key: '41',
      label: '本法人单位是否有下属产业活动单位',
      children:
        <>
          <span>分支机构、派出机构、分公司、分部、分厂、分店等</span>
          <br></br>
          <Radio.Group size='large' disabled={disableVar} style={{marginTop: '10px' }}>
            <Radio value={1}>是</Radio>
            <Radio value={2} style={{ marginLeft: '10px'}}>否</Radio>
          </Radio.Group>
        </>,
      span: 3
    },
    {
      key: '42',
      label: '',
      children: <Input disabled={disableVar} addonBefore='本法人单位所属产业活动单位共' addonAfter='个' size='large' style={{ width: '400px', marginLeft: '10px', marginTop: '10px' }}></Input>,
      span: 3
    }
  ];
  
  return (
    <>
      <div size='large' style={{height: 800, padding: 50, overflow:'auto'}} class="banner-anim">
        <Descriptions title="单位基本信息" bordered items={items} />
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