<template>
	<view class="contanier">
		<view class="list">
			<view class="list-item" :style="{border:index===0?'none':''}" v-for="(item,index) in menuList" :key="index"
				@click="handelClick(item)">{{item.label}}</view>
		</view>
	</view>
</template>

<script>
	import { formatDate,formatTime,formatTime1 } from '@/utils/formatDate.js'
	export default {
		data() {
			return {
				menuList: []
			}
		},
		onLoad() {
			this.setMenu()
			console.log(formatDate(new Date(),'ss q S'))
			console.log(formatDate(new Date()))
			console.log(formatDate(new Date().toString()))
			console.log(formatDate(new Date().getTime()))
			console.log(formatDate(new Date().getTime().toString()))
			console.log(formatDate(new Date(),'ss q S'))
			
			console.log('----------------------------------------------')
			console.log(formatDate(new Date(),'ss q S'))
			
			console.log(formatTime(new Date()))
			console.log(formatTime(new Date().toString()))
			console.log(formatTime(new Date().getTime()))
			console.log(formatTime(new Date().getTime().toString()))
			console.log(formatDate(new Date(),'ss q S'))
			
			console.log('----------------------------------------------')
			console.log(formatTime1(new Date()))
			console.log(formatTime1(new Date().toString()))
			console.log(formatTime1(new Date().getTime()))
			console.log(formatTime1(new Date().getTime().toString()))
			
			
		},
		methods: {
			handelClick(data) {
				uni.navigateTo({
					url: data.path
				})
			},
			setMenu() {
				const arr = [{
					label: '视频',
					value: 'video',
					path: '/pages/video/index'
				},{
					label: '日期时间',
					value: 'dateTime',
					path: '/pages/dateTime/index'
				}]

				this.menuList = arr
			}
		}
	}
</script>

<style>
	.contanier {
		padding: 30rpx;
	}

	.list-item {
		padding: 20rpx 0;
		font-size: 30rpx;
		border-top: 1px solid #f1f1f1;
	}
</style>