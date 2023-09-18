// 首页
export interface IBanners {
	id: number;
	productId: number;
	picId: number;
	backendPicId: number;
	addTime: number;
	position: number;
	type: number;
	url: string;
	bannerExtJson?: any;
	isSetTime: number;
	beginTime: number;
	endTime?: any;
	picStr: string;
	backendPicStr: string;
}

export interface ICategorys {
	cid: number;
	picStr: string;
	title: string;
	tabIndex: number;
	targetUrl: string;
	count: number;
	desc: string;
	type: number;
}

export interface IRecommends {
	id: number;
	picStr: string;
	title: string;
}

export interface IDigitalData {
	digitalIcon: string;
	name: string;
	desc: string;
	buyNow: string;
	picStr: string;
	picStr2: string;
	picStr1: string;
}

// 推荐商品
export interface ExtInfo1 {
	albumId: number;
	songId: number;
	goodVipType: number;
	quotaOfOrder: number;
	extProductId: number;
	extProductStatus: number;
	extShelfStatus: number;
	concertId: number;
	buysingle: boolean;
	showStartProId: number;
	needMessage: number;
	preSale: number;
	defaultMessage: string;
	tax: string;
	albumSaleDisplayType: number;
	restrict: number;
	giftSet: number;
	hiddenCanBuy: boolean;
	preSaleFlag: boolean;
}

export interface IProducts {
	stock: number;
	saleNum: number;
	sumMoney?: any;
	skus?: any;
	discount?: any;
	pickUp: boolean;
	couponLabelFlag: number;
	tags: string[];
	display: number;
	status: number;
	iap: boolean;
	label: string;
	pubTime: number;
	createTime: number;
	priceType: number;
	levelLimit: number;
	vipLimit: boolean;
	allowDupBuy: boolean;
	extInfo: ExtInfo1;
	specialType: number;
	shopId: number;
	exchangeType: number;
	useVipPrice: boolean;
	category1: number;
	suggestWord: string;
	category2: number;
	brandName: string;
	drawTime: number;
	alterStock: number;
	statistics: number;
	picUrls: string[];
	coverIdStr: string;
	performanceTime: number;
	coverUrl: string;
	picIds: string[];
	couponLabelDesc: string;
	name: string;
	id: number;
	type: number;
	minPrice: number;
	originalCost: number;
	maxPrice: number;
	alg: string;
}

export interface IHotProduct {
	db_create_time: number;
	id: number;
	name: string;
	price?: any;
	productId: number;
	resourceUrl?: any;
	orderWeight: number;
	products: IProducts;
	db_update_time: number;
}

// 热门商品
export interface ExtInfo2 {
	albumId: number;
	songId: number;
	goodVipType: number;
	quotaOfOrder: number;
	extProductId: number;
	extProductStatus: number;
	extShelfStatus: number;
	concertId: number;
	buysingle: boolean;
	showStartProId: number;
	needMessage: number;
	preSale: number;
	defaultMessage: string;
	tax: string;
	albumSaleDisplayType: number;
	restrict: number;
	giftSet: number;
	hiddenCanBuy: boolean;
	preSaleFlag: boolean;
}

export interface IAllProduct {
	stock: number;
	saleNum: number;
	sumMoney?: any;
	skus?: any;
	discount?: any;
	pickUp: boolean;
	tags: any[];
	display: number;
	status: number;
	priceType: number;
	levelLimit: number;
	vipLimit: boolean;
	allowDupBuy: boolean;
	extInfo: ExtInfo2;
	specialType: number;
	shopId: number;
	exchangeType: number;
	useVipPrice: boolean;
	createTime: number;
	iap: boolean;
	picIds: string[];
	couponLabelFlag: number;
	pubTime: number;
	label: string;
	couponLabelDesc: string;
	drawTime: number;
	picUrls: string[];
	coverUrl: string;
	statistics: number;
	alterStock: number;
	category1: number;
	performanceTime: number;
	category2: number;
	brandName: string;
	suggestWord: string;
	coverIdStr: string;
	name: string;
	id: number;
	type: number;
	minPrice: number;
	originalCost: number;
	maxPrice: number;
}

// detail
export interface SpecialTopicProduct {
	productId: number;
	productName?: any;
	price?: any;
	productPicURL?: any;
	onlineStock: number;
	order: number;
}

export interface ExtInfo {
	albumId: number;
	songId: number;
	goodVipType: number;
	quotaOfOrder: number;
	extProductId: number;
	extProductStatus: number;
	extShelfStatus: number;
	concertId: number;
	buysingle: boolean;
	showStartProId: number;
	needMessage: number;
	preSale: number;
	defaultMessage: string;
	tax: string;
	albumSaleDisplayType: number;
	restrict: number;
	giftSet: number;
	hiddenCanBuy: boolean;
	preSaleFlag: boolean;
}


export interface IDetailData {
	id: number;
	name: string;
	linkedUrl?: any;
	coverStatus?: any;
	webPic: string;
	mobilePic: string;
	productNum: number;
	create_time?: any;
	specialTopicProducts: SpecialTopicProduct[];
	specialTopicPVUVList?: any;
	products: IAllProduct[];
}
