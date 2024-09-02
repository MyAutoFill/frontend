import { request } from 'umi';

export function reqBasicData() {
    return request('/api/load_data', {
        method: 'POST',
        data: {
            date: '2024-09'
        }
    });
}

export function reqRatioConfig(tableName) {
    return request('/api/get_ratio_config?table=' + tableName, {
        method: 'GET',
    })
}