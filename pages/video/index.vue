<template>
	<view>

		<button @click="playVideo" style="width: 260rpx;">播放</button>
		<video v-if="isPlaying" @play="onPlay" :src="videoUrl" id="videoId" @fullscreenchange="fullscreenchange" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: "/static/logo.png",
				videoUrl: "",
				isPlaying: false,

				videoContext: null
			};
		},
		methods: {
			playVideo() {
				this.videoUrl = 'https://web-assets.dcloud.net.cn/unidoc/zh/wap2appvsnative.mp4'
				this.videoContext = uni.createVideoContext('videoId', this)
				this.isPlaying = true;
				setTimeout(() => {
					this.videoContext.play();
				}, 1000)
			},
			
			onPlay(e) {
				this.videoContext.requestFullScreen()
			},

			fullscreenchange(e) {
				if (!e.detail.fullScreen) {
					this.videoContext.pause();
					this.videoContext = null
					this.isPlaying = false
				}
			}
		},
	};
</script>

<style scoped>
	video {
		width: 0;
		height: 0;

	}
</style>
