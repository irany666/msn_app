<template>
	<view class="s-page-wrapper is-100vh">
		<view class="is-33vh has-mgt-10">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100">
				<image src="../../static/img/ucenter/face.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="content">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<input type="text" maxlength="11" v-model="login.account" placeholder="加微信:vitionx,免费获取账号" class="is-input1 "
					 @input="BindInput" data-val="account" />
				</view>
				<view class=" has-radius has-mgtb-10">
					<input type="password" v-model="login.password" placeholder="请输入登录密码" class="is-input1" @input="BindInput"
					 data-val="password" />
				</view>

				<view class=" loginbtn has-radius has-mgtb-20">
					<button :loading="login.loading" @tap="defaultHandlerLogin"> {{ login.loading ? "登录中...":"登 录"}} </button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80 content">
			<navigator @click="forgetClick" class=" has-radius is-right is-grey has-mgr-20" hover-class="">
				<text class="is-white">忘记密码?</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: {
					loading: false,
					account: "",
					password: ""
				},

			};
		},
		methods: {
			defaultHandlerLogin: function() {
				var _this=this;
				if (this.login.account == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入账号'
					});
					return;
				}

				if (this.login.password == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入密码'
					});
					return;
				}
				this.login.loading = true;
				this.apihttp.ajax({
					url: '/security/login',
					data: {
						account: this.login.account,
						password: this.login.password
					},
					method: 'POST',
					success: function(res) {
						var data = res.data;
						if (data.code == 200) {
							uni.setStorage({
								key: 'token',
								data: data.data,
								success: function() {
									console.log('缓存用户token');
								}
							})
							_this.apihttp.ajax({
								url: '/security/info',
								method: 'POST',
								success: function(res) {
									var data = res.data;
									if (data.code == 200) {
										uni.setStorageSync('user', data.data)
										console.log('缓存用户信息 - ' + data.data.user.account);
										uni.switchTab({
											url: '/pages/ucenter/index'
										})
									}
								}
							})
						}
						uni.showToast({
							icon: 'none',
							title: data.msg
						});
					}
				})

				this.login.loading = false;
			},
			BindInput: function(e) {
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value;
			},
			toHome() {
				uni.switchTab({
					url: '/pages/ucenter/index'
				})
			},
			forgetClick() {
				uni.showToast({
					icon: 'none',
					title: '吔屎啦你!找GM!'
				})
			}
		}
	}
</script>

<style>
	page {
		min-height: 100%;
		background-color: #434343;
	}

	.content {
		width: 85%;
		margin: 0 auto;
	}

	.loginbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: white;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #FFBD27;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}
</style>
