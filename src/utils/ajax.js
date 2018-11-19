import axios from 'axios'

const ajax = (options , all = false) => {

  return new Promise((resolve, rejected) => {
    axios(options).then(res => {
      all ? resolve(res) : resolve(res.data)
    }).catch((err) => {

      rejected(err)
    })
  })
}

export default ajax
