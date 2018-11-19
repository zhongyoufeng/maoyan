// 开发环境
const SAT_HOST = 'http://localhost:8080'
// 测试
const UAT_HOST = 'http://10.213.12.98:8080'
// 生产
const PRO_HOST = 'https://m.maoyan.com'

/*
正在热映的接口
参数： token 用户标识
*/
const PLAYING_API = '/ajax/movieOnInfoList'

/*
更多正在热映数据的接口
参数：
    token 用户标识
    movieIds  请求的电影id
*/
const MORE_PLAYING_API = '/ajax/moreComingList'

/*
最受期待的电影数据接口
参数：ci 城市id
     limit   数据长度
     offset   数据偏移量
     token  用户标识
*/
const MOST_EXPECTED_API = '/ajax/mostExpected'

/*
即将上映的接口
参数： ci   城市id
      token   用户标识
      limit   数据长度
*/
const COMING_API = '/ajax/comingList'
/**
 *
 * 更多即将上映的接口
 * 参数：ci 城市id，
 * token：用户标识，
 * limit：数据长度，
 * movieIds
 */

const MOST_COMING_API = '/ajax/moreComingList'
/* 加载更多影院的接口&&影院接口
    day:'2018-11-10',请求日期
    offset:‘’偏移量
    limit:'20',数据请求长度
    districtId:'-1',
    lineId:'-1',
     hallType:'-1',
     brandId:'-1',
     serviceId:'-1',
     areaId:'-1',
      stationId:'-1',
      item:'',
       updateShowDay:'false',更新上映时间
        reqId:'请求id',
        cityId:城市id
*/
const CINEMA_API = '/ajax/cinemaList'

/*
加载电影详情页接口
?movieId=42964 电影id
*/
const MOVIE_DETAIL_API = '/ajax/detailmovie'
/**/
/*
城市列表接口
*/
const CITY_LIST_API = '/dianying/cities.json'

/*
搜索接口
?kw=35&cityId=30&stype=-1'
*/
const SEARCH_API = '/ajax/search'

/* 搜索结果全部列表
*/
const MOST_SEARCH_API = '/ajax/searchlist/movies'

export default {
  SAT_HOST,
  UAT_HOST,
  PRO_HOST,
  PLAYING_API,
  MORE_PLAYING_API,
  MOST_EXPECTED_API,
  CINEMA_API,
  MOST_COMING_API,
  MOVIE_DETAIL_API,
  COMING_API,CITY_LIST_API,
SEARCH_API}
