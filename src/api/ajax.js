/*
    ajax发送数据请求函数
    返回值是Promise对象 (异步返回的数据是promise.data)
*/
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) { 
        // 执行ajax请求
        let promise 
        if (type === 'GET') { 
            // 准备 url query 参数数据 
            let dataStr = '' 
            //数据拼接字符串 
            Object.keys(data).forEach(key => { 
                dataStr += key + '=' + data[key] + '&' 
            })
            if (dataStr !== '') { 
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr 
            }
            // 发送 get 请求 
            promise = axios.get(url) 
        } else if (type === 'POST'){ 
            // 发送 post 请求 
            promise = axios.post(url, data) 
        }
        promise.then(response => { 
            // 异步返回值
            resolve(response.data) 
        }).catch(
            error => { reject(error) 
        }) 
    }) 
}
