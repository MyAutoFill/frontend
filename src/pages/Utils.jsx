import { request } from 'umi';

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