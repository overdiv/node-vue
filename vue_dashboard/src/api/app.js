import axios from 'axios'
import { get } from 'http';

const service = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 5000
})

export const userLogin = (data) => { // export function userLogin(data) {
	//return service({
	//	url: '/login',
	//	method: 'post',
	//	data,						// data: data
  //})
  return service.post('/login', data);
}

export const noticeList = (params) => {   
  //return service({
  //    url: `/notice/list/`,
  //    method: 'get',
  //})
  return service.get('/notice/list', { params })
}

export const noticeDetail = (data) => {   
  //return service({
  //  url: `/notice/detail/${data}`,
  //  method: 'get'
  //})
  return service.get(`/notice/detail/${data}`);
}

export const noticeDelete = (data) => {   
  //return service({
  //  url: '/notice/delete',
  //  method: 'post',
  //  data
  //})
  return service.post('/notice/delete', data);
}

export const noticeRegister = (data) => {   
  //return service({
  //  url: '/notice/register',
  //  method: 'post',
  //  data
  //})
  return service.post('/notice/register', data);
}

export const noticeModify = (data) => {   
  //return service({
  //  url: '/notice/modify',
  //  method: 'post',
  //  data
  //})
  return service.post('/notice/modify', data);
}

export const registration = (data) => {
  return service.post('/registration', data);
}