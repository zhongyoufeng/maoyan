import http from '../utils/http'
import API from '../api'
import date from '../utils/date'
export function getCinemaList (offset, cityId) {
  return new Promise((resolve, reject) => {

    http({
      url: API.CINEMA_API,
      method: 'GET',
      data: {
        day: date(),
        offset: offset,
        limit: '20',
        districtId: '-1',
        lineId: '-1',
        hallType: '-1',
        brandId: '-1',
        serviceId: '-1',
        areaId: '-1',
        stationId: '-1',
        item: '',
        updateShowDay: 'false',
        reqId: '1541854996471',
        cityId: cityId
      }
    })
      .then(({ data, status }) => {
        if (status != 200) {
          // 请求失败
          return
        }
        // 请求成功

        let newData = data.cinemas.map(item => {
          let {id, mark, nm, sellPrice, addr, distance, tag, promotion} = item
          return { id, mark, nm, sellPrice, addr, distance, tag, promotion}
        })
        resolve({
          data: newData,
          ids: data.id
        })
      })
      .catch(error => {
        // 请求失败
        console.log(error)
      })
  })
}
