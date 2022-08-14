import request from '@/utils/request'

export function getList(params) {
  return request({
    urlb: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
