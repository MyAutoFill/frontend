import { request } from 'umi';

export function reqBasicData(curDate) {
    return request('/api/load_data', {
        method: 'POST',
        data: {
            date: curDate
        }
    });
}

export function reqRatioConfig(tableName) {
    return request('/api/get_ratio_config?table=' + tableName, {
        method: 'GET',
    })
}