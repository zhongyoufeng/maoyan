import API from '../api'
import http from '../utils/http'

export function getCityListData () {
  return new Promise((resolve, reject) => {
    http({
      url: API.CITY_LIST_API,
      method: 'GET'
    })
      .then(({data, status}) => {
        if (status != 200) {
          // 请求失败
        }else {
          // 请求成功
          // 取得首字母，按字母先分类
          let map = {}
          data.cts.map(item => {
            let letter = item.py[0]
            if (!map[letter]) {
              map[letter] = []
            }
            map[letter].push(item)
          })
          let keys = Object.keys(map)
          // 排序
          // 选择排序
          for (let i = 0; i < keys.length; i++) {
            for (let j = i + 1; j < keys.length; j++) {
              if (keys[i] > keys[j]) {
                let tmp = keys[i]
                keys[i] = keys[j]
                keys[j] = tmp
              }
            }
          }
          // 组装数据
          let newData = keys.map(item => {

            return {
              key: item.toUpperCase(),
              value: map[item]
            }
          })
          resolve({
            keys: keys,
            data: newData
          })
        }
      })
      .catch(error => {
        // 请求失败
      })
  })
}

export function getSearchData (kw, id) {
  return new Promise((resolve, reject) => {
    http({
      url: API.SEARCH_API,
      method: 'GET',
      data: {
        kw: kw,
        cityId: id,
        stype: -1
      }

    })
      .then(({data, status}) => {
        if (status != 200) {
          // 请求失败
        }else {
          console.log(data.cinemas)
          resolve({
            movie: data.movies,
            cinema: data.cinemas ? data.cinemas : ''
          })
        }
      })
      .catch(error => {
        // 请求失败
      })
  })
}
export function getSearchCinema (kw, id) {
  return new Promise((resolve, reject) => {
    http({
      url: API.SEARCH_API,
      method: 'GET',
      data: {
        kw: kw,
        cityId: id,
        stype: -1
      }

    })
      .then(({data, status}) => {
        if (status != 200) {
          // 请求失败
        }else {
          resolve(data.cinemas)
        }
      })
      .catch(error => {
        // 请求失败
      })
  })
}
