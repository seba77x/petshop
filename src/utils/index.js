import axios from 'axios'

const get = (path) => {
    return axios.get(`http://sva.talana.com:8000/api/${path}`)
}
export default get