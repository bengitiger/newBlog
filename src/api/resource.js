import Vue from 'vue'
import VueResource from 'vue-resource'
import { getCookie, signOut } from '../utils/authService' //引入登录、获取cookie方法
var CONFIG = require('../../config/config') //获取URL配置

Vue.use(VueResource) //注册VueResource

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true
Vue.http.options._timeout = 11000; //11秒超时请求

Vue.http.interceptors.push((request, next) => {
	let timeout;
	// 这里对请求体进行处理
	request.headers = request.headers || {}
	if (request._timeout) {
		// 设置定时器，只要触发就立即返回 response ， 并且自定义了 status 和 statusText
		timeout = setTimeout(() => {
			next(request.respondWith(request.body, {
				 status: 502,
				 statusText: 'Request Timeout'
			}));
			request.abort();
		}, request._timeout);
	}
	next((response) => {
		clearTimeout(timeout);
		// 这里可以对响应的结果进行处理
		if (response.status === 401) {
			//signOut();
			window.location.pathname = '/login'
		}
		return response
	})
})

export const Login = Vue.resource(CONFIG.apiUrl + 'login/login.json')						//登录的API
export const LoginOut = Vue.resource(CONFIG.apiUrl + 'login/logout.json')				//登出的API
export const apiGetIncome = Vue.resource(CONFIG.apiUrl + 'statistics/getIncome.json')	//首页-我的收入
export const apiGetgoods = Vue.resource(CONFIG.apiUrl + 'statistics/goodsCount.json')	//首页-我的商品
export const apiOrderLook = Vue.resource(CONFIG.apiUrl + 'statistics/orderLook.json')	//首页-订单查看
export const apiMoneyCount = Vue.resource(CONFIG.apiUrl + 'statistics/moneyCount.json')	//首页-我的钱包
export const apiNewestNoticeList = Vue.resource(CONFIG.apiUrl + 'notice/newestNoticeList.json')	//首页-最新公告
export const apiNoticelist = Vue.resource(CONFIG.apiUrl + 'notice/noticeList.json')		//首页-公告列表
export const apiNoticeShow = Vue.resource(CONFIG.apiUrl + 'notice/noticeInfo.json')		//首页-公告详情
export const apiGetMenus = Vue.resource(CONFIG.apiUrl + 'statistics/getMenus.json')		//首页-获取菜单
export const apiGetCategoryList = Vue.resource(CONFIG.apiUrl + 'categoryManage/getCategoryList.json') //商品分类列表
export const apiGetShopInfo = Vue.resource(CONFIG.apiUrl + 'shop/getShopInfo.json')			//获取店铺信息
export const apiEditShopInfo = Vue.resource(CONFIG.apiUrl + 'shop/updateShopInfo.json')	//修改店铺信息
export const apiGetMemberNum = Vue.resource(CONFIG.apiUrl + 'customerManager/getCustomerInfo.json')	//会员人数
export const apiGetGoodInfo = Vue.resource(CONFIG.apiUrl + 'goodsManage/getCustomerGoodsInfo.json') //获取商品详情
export const getCityList = Vue.resource(CONFIG.apiUrl + 'cityManage/getChildByParentId.json') //获取城市列表
export const confirmTemplateName = Vue.resource(CONFIG.apiUrl + '/logistics/findTemplateByName.json') // 确认模板名称是否重复
export const getTemplateList = Vue.resource(CONFIG.apiUrl + 'logistics/getTemplateList.json') // 查询模板列表
export const getTemplateById = Vue.resource(CONFIG.apiUrl + 'logistics/getTemplate.json') // 根据id查询模板列表
export const editTemplate = Vue.resource(CONFIG.apiUrl + 'logistics/updateTemplate.json') // 修改模板列表
export const deleteTemplate = Vue.resource(CONFIG.apiUrl + 'logistics/deleteTemplate.json') // 删除模板列表
export const getTemplateInfo = Vue.resource(CONFIG.apiUrl + 'logistics/getTemplate.json') // 查询物流模板
export const getAccountInfo = Vue.resource(CONFIG.apiUrl + 'shop/getAccountInfo.json') //获取账号信息
export const getstaitsticsInfo = Vue.resource(CONFIG.apiUrl + 'finance/getIncomeListByMonth.json')      //获取店铺月统计
export const getTotalIncomeByMonth = Vue.resource(CONFIG.apiUrl + 'finance/getTotalIncomeByMonth.json') //获取店铺累计收入统计
export const getWithdrawAmount = Vue.resource(CONFIG.apiUrl + 'finance/getWithdrawAmount.json') //获取店铺提现数据
export const apiGetOrderDetails = Vue.resource(CONFIG.apiUrl + 'order/getOrderDetail.json') //获取订单详情
export const apiGetOrderStatistic = Vue.resource(CONFIG.apiUrl + 'order/getStateStatistical.json') //获取订单统计状态
