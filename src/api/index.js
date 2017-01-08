/* 所有请求的方法 */
import * as resource from './resource'

export default {
	Login : function (options) {
		return resource.Login.save({...options})					 //登录提交
	},
	LoginOut: function () {
		return resource.LoginOut.save({})						//登出
	},
	GetIncome : function () {
		return resource.apiGetIncome.save({})						//首页信息
	},
	GetNewestNoticeList : function (options) {
		return resource.apiNewestNoticeList.save({...options})				//首页最新公告
	},
	GetNoticeList : function (options) {
		return resource.apiNoticelist.save({...options})				//首页公告列表
	},
	GetNoticeShow : function (options) {
		return resource.apiNoticeShow.save({...options})				//首页公告详情
	},
	GetMenus : function(){
		return resource.apiGetMenus.save()						//首页菜单列表
	},
	GetMyOrder : function(){
		return resource.apiOrderLook.save()						//首页我的订单
	},
	GetMyGoods : function(){
		return resource.apiGetgoods.save()						//首页我的商品
	},
	GetMoneyCount : function(){
		return resource.apiMoneyCount.save()						//首页我的钱包
	},
	GetCategoryList : function(){
		return resource.apiGetCategoryList.save()					//商品分类列表
	},
	GetshopInfo : function(){
		return resource.apiGetShopInfo.save()						//获取店铺信息
	},
	editShopInfo : function(options){
		return resource.apiEditShopInfo.save({...options})				//修改店铺信息
	},
	getMemberNum : function(options){							//会员人数
		return resource.apiGetMemberNum.save({...options})
	},
	GetGoodInfo : function(options){
		return resource.apiGetGoodInfo.save({...options})				//修改店铺信息
	},
	getCityList : function(options){							//城市列表
		return resource.getCityList.save({...options})
	},
	confirmTemplateName : function(options){					// 确认模板名称是否重复
		return resource.confirmTemplateName.save({...options});
	},
	GetTemplateList : function(options){ 						//查询模板列表
		return resource.getTemplateList.save({...options})
	},
	GetTemplateById : function(options){ 						//根据id查询模板列表
		return resource.getTemplateById.save({...options})
	},
	editTemplate : function(options){ 						//修改模板列表
		return resource.editTemplate.save({...options})
	},
	getTemplateInfo : function(options){ 						//获取模板信息
		return resource.getTemplateInfo.save({...options})
	},
	deleteTemplate : function(options){
		return resource.deleteTemplate.save({...options}) 		 // 删除模板
	},
	getAccountInfo : function(){														 //获取店铺信息
		return resource.getAccountInfo.save()
	},
	getstaitsticsInfo : function(options){									//获取店铺销售统计数据
		return resource.getstaitsticsInfo.save({...options})
	},
	getTotalIncomeByMonth : function(options){							//获取店铺月统计数据
		return resource.getTotalIncomeByMonth.save({...options})
	},
	getWithdrawAmount : function(options){							//获取店铺提现数据
		return resource.getWithdrawAmount.save({...options})
	},
	GetOrderDetails : function(options){							//获取店铺提现数据
		return resource.apiGetOrderDetails.save({...options})
	},
	GetOrderStatistic : function(){							//获取订单统计状态
		return resource.apiGetOrderStatistic.save({})
	}
}
