// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

export async function currentUser(ticket: any) {
  return request('/zhby_api/ishandong_user_commons/user/getUserInfoNew2024?ticket=' + ticket, {
    method: 'POST',
  });
}

export async function queryCompanyInfo(uuid: any) {
  return request('/api/load_company_data', {
      method: 'POST',
      data: {
        uuid: uuid
      }
  });
}
