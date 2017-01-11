import md5 from 'md5'
import api from '../api'
import * as types from './types'
import { saveCookie, getCookie, signOut, removeCookie } from 'utils/auth' //引入登录、获取cookie方法
import { httpResponse, setLocal, getLocal, removeLocal } from 'utils/utils' //引入登录、获取cookie方法

/**
 * @method 方法名
 * @param {参数类型} 参数名 参数说明
 */
export const showMsg = ({ dispatch }, content, type = 'error') => {
	dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({ dispatch }) => {
	dispatch(types.HIDE_MSG)
}