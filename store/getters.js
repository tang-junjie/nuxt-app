const R = require('ramda');
import config from '@/config'
export const accounts = state => {
  let res = []
  state.accountList && state.accountList.map((item, index) => {
    res.push(Object.assign({}, item , {hearlink: `${config.hearlink}/${item._id}`, key: index}))
  })
  return res
}

export const topics = state => {
  let res = []
  state.topicList && state.topicList.map((item, index) => {
    // 加name主要是解决ant-design-vue table title bug
    res.push(Object.assign({}, item , {key: index}, { name: item.title}))
  })
  return res
}
