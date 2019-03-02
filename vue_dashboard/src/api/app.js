import axios from 'axios'

const service = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 5000
})

export const userLogin = (data) => { // export function userLogin(data) {
	return service({
		url: '/login',
		method: 'post',
		data,						// data: data
	})
}

export const noticeList = () => {   
  return service({
      url: `/notice/list/`,
      method: 'get',
  })
}

export const noticeDetail = (data) => {   
  return service({
    url: `/notice/detail/${data}`,
    method: 'get'
  })
}

export const noticeDelete = (data) => {   
  return service({
    url: '/notice/delete',
    method: 'post',
    data
  })
}

export const noticeRegister = (data) => {   
  return service({
    url: '/notice/register',
    method: 'post',
    data
  })
}

export const noticeModify = (data) => {   
  return service({
    url: '/notice/modify',
    method: 'post',
    data
  })
}
