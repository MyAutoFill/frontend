import { request } from 'umi';
import dayjs from 'dayjs';
const dateFormat = 'YYYY-MM-DD';

export function reqBasicData(curDate, uuid) {
  return request('/api/load_data', {
    method: 'POST',
    data: {
      date: curDate,
      uuid: uuid
    }
  });
}

export function reqRatioConfig(tableName) {
  return request('/api/get_ratio_config?table=' + tableName, {
    method: 'GET',
  })
}

export function requestCompanyData(uuid) {
  return request('/api/load_company_data', {
    method: 'POST',
    data: {
      uuid: uuid
    }
  });
}

export function transferDate(new_res) {
  var after = {}
  const newSet = new Set(['company_basicinfo_41', 'company_basicinfo_42', 'company_basicinfo_build_date', 'company_signup44', 'company_investor8', 'company_investor17', 'HumanSocial_NewSheBao_66', 'hs_basic_4', 'HumanSocial_NewSheBao_69', 'HumanSocial_NewSheBao_70', 'GongShang_CompanyInfo_23', 'company_basicinfo_open_date', 'Tech_stat_IDstart', 'Tech_stat_IDend'])
  for (var key in new_res) {
    if (newSet.has(key)) {
      if (new_res[key] != undefined && new_res[key] != null && new_res[key] !== '') {
        after[key] = dayjs(new_res[key], dateFormat)
      } else {
        after[key] = null
      }
    } else {
      after[key] = new_res[key];
    }
  }
  return after;
}

export function saveDateAsString(values) {
  var after = {}
  for (var key in values) {
    const newSet = new Set(['company_basicinfo_41', 'company_basicinfo_42', 'company_basicinfo_build_date', 'company_signup44', 'company_investor8', 'company_investor17', 'HumanSocial_NewSheBao_66', 'hs_basic_4', 'HumanSocial_NewSheBao_69', 'HumanSocial_NewSheBao_70', 'GongShang_CompanyInfo_23', 'company_basicinfo_open_date', 'Tech_stat_IDstart', 'Tech_stat_IDend'])
    if (newSet.has(key)) {
      if (values[key] != undefined && values[key] != null) {
        after[key] = values[key].format(dateFormat);
      }
    } else {
      after[key] = values[key]
    }
  }
  return after;
}