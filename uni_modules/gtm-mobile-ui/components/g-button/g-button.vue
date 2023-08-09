<template>
  <button
		class="g-button g-reset-button"
    :hover-start-time="Number(hoverStartTime)"
    :hover-stay-time="Number(hoverStayTime)"
    :form-type="formType"
    :open-type="openType"
    :app-parameter="appParameter"
    :hover-stop-propagation="hoverStopPropagation"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :lang="lang"
    :data-name="dataName"
    :session-from="sessionFrom"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :style="[baseColor, $u.addStyle(customStyle)]"
    :hover-class="!disabled && !loading ? 'g-button--active' : ''"
    :class="bemClass"
    @getphonenumber="getphonenumber"
    @getuserinfo="getuserinfo"
    @error="error"
    @opensetting="opensetting"
    @launchapp="launchapp"
    @tap="clickHandler"
  >
		<g-icon
			class="g-button__icon"
			v-if="!loading && icon"
			:name="icon"
			:color="iconColorCom"
			:size="textSize * 1.2"
			style="margin-right: 6rpx;">
		</g-icon>
		<slot>
			<text
				class="g-button__text"
				:style="[{
					fontSize: textSize + 'rpx'
				}]">
				{{ text }}
			</text>
		</slot>
  </button>
</template>

<script>
import button from "../../libs/mixin/button.js";
import openType from "../../libs/mixin/openType.js";
import props from "./props.js";
/**
 * button 按钮
 * @description Button 按钮
 * @property {Boolean}			hairline				是否显示按钮的细边框 (默认 true )
 * @property {String}			type					按钮的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {String}			size					按钮尺寸，large，normal，mini （默认 normal）
 * @property {String}			shape					按钮形状，circle（两边为半圆），square（带圆角） （默认 'square' ）
 * @property {Boolean}			plain					按钮是否镂空，背景色透明 （默认 false）
 * @property {Boolean}			disabled				是否禁用 （默认 false）
 * @property {Boolean}			loading					按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) （默认 false）
 * @property {String | Number}	loadingText				加载中提示文字
 * @property {String}			loadingMode				加载状态图标类型 （默认 'spinner' ）
 * @property {String | Number}	loadingSize				加载图标大小 （默认 15 ）
 * @property {String}			openType				开放能力，具体请看uniapp稳定关于button组件部分说明
 * @property {String}			formType				用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
 * @property {String}			appParameter			打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）
 * @property {Boolean}			hoverStopPropagation	指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true ）
 * @property {String}			lang					指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文（默认 en ）
 * @property {String}			sessionFrom				会话来源，openType="contact"时有效
 * @property {String}			sendMessageTitle		会话内消息卡片标题，openType="contact"时有效
 * @property {String}			sendMessagePath			会话内消息卡片点击跳转小程序路径，openType="contact"时有效
 * @property {String}			sendMessageImg			会话内消息卡片图片，openType="contact"时有效
 * @property {Boolean}			showMessageCard			是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效（默认false）
 * @property {String}			dataName				额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
 * @property {String | Number}	throttleTime			节流，一定时间内只能触发一次 （默认 0 )
 * @property {String | Number}	hoverStartTime			按住后多久出现点击态，单位毫秒 （默认 0 )
 * @property {String | Number}	hoverStayTime			手指松开后点击态保留时间，单位毫秒 （默认 200 )
 * @property {String | Number}	text					按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
 * @property {String}			icon					按钮图标
 * @property {String}			iconColor				按钮图标颜色
 * @property {String}			color					按钮颜色，支持传入linear-gradient渐变色
 * @property {Object}			customStyle				定义需要用到的外部样式
 *
 * @event {Function}	click			非禁止并且非加载中，才能点击
 * @event {Function}	getphonenumber	open-type="getPhoneNumber"时有效
 * @event {Function}	getuserinfo		用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
 * @event {Function}	error			当使用开放能力时，发生错误的回调
 * @event {Function}	opensetting		在打开授权设置页并关闭后回调
 * @event {Function}	launchapp		打开 APP 成功的回调
 */
export default {
  name: "g-button",
  // #ifdef MP
  mixins: [uni.$g.mpMixin, uni.$g.mixin, button, openType, props],
  // #endif
  // #ifndef MP
  mixins: [uni.$g.mpMixin, uni.$g.mixin, props],
  // #endif
  data() {
    return {};
  },
  computed: {
    // 生成bem风格的类名
    bemClass() {
      // this.bem为一个computed变量，在mixin中
      if (!this.color) {
        return this.bem("button", ["type", "shape", "size"], ["disabled", "plain", "hairline"]);
      } else {
        // 由于nvue的原因，在有color参数时，不需要传入type，否则会生成type相关的类型，影响最终的样式
        return this.bem("button", ["shape", "size"], ["disabled", "plain", "hairline"]);
      }
    },
    loadingColor() {
      if (this.plain) {
        // 如果有设置color值，则用color值，否则使用type主题颜色
        return this.color ? this.color : uni.$g.config.color[`g-${this.type}`];
      }
      if (this.type === "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    },
    iconColorCom() {
      if (this.iconColor) return this.iconColor;
      if (this.plain) {
        return this.color ? this.color : this.type;
      } else {
        return this.type === "info" ? "#000000" : "#ffffff";
      }
    },
    baseColor() {
      let style = {};
      if (this.color) {
        style.color = this.plain ? this.color : "white";
        if (!this.plain) {
          style["background-color"] = this.color;
        }
        if (this.color.indexOf("gradient") !== -1) {
          style.borderTopWidth = 0;
          style.borderRightWidth = 0;
          style.borderBottomWidth = 0;
          style.borderLeftWidth = 0;
          if (!this.plain) {
            style.backgroundImage = this.color;
          }
        } else {
          // 非渐变色，则设置边框相关的属性
          style.borderColor = this.color;
          style.borderWidth = "1px";
          style.borderStyle = "solid";
        }
      }
      return style;
    },
    // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
    nvueTextStyle() {
      let style = {};
      // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色
      if (this.type === "info") {
        style.color = "#323233";
      }
      if (this.color) {
        style.color = this.plain ? this.color : "white";
      }
      style.fontSize = this.textSize + "px";
      return style;
    },
    // 字体大小
    textSize() {
			const { size } = this
			const sizeList = {
				large: 32,
				normal: 28,
				small: 24,
				mini: 20
			}
      return sizeList[size] || 24;
    },
  },
  methods: {
    clickHandler() {
      if (!this.disabled && !this.loading) {
        // 进行节流控制，每this.throttle毫秒内，只在开始处执行
        uni.$g.throttle(() => {
          this.$emit("click");
        }, this.throttleTime);
      }
    },
    // 下面为对接uniapp官方按钮开放能力事件回调的对接
    getphonenumber(res) {
      this.$emit("getphonenumber", res);
    },
    getuserinfo(res) {
      this.$emit("getuserinfo", res);
    },
    error(res) {
      this.$emit("error", res);
    },
    opensetting(res) {
      this.$emit("opensetting", res);
    },
    launchapp(res) {
      this.$emit("launchapp", res);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

/* #ifndef APP-NVUE */
@import "./vue.scss";
/* #endif */

/* #ifdef APP-NVUE */
@import "./nvue.scss";
/* #endif */

$g-button-g-button-height: 40px !default;
$g-button-text-font-size: 15px !default;
$g-button-loading-text-font-size: 15px !default;
$g-button-loading-text-margin-left: 4px !default;
$g-button-large-width: 100% !default;
$g-button-large-height: 50px !default;
$g-button-normal-padding: 0 12px !default;
$g-button-large-padding: 0 15px !default;
$g-button-normal-font-size: 14px !default;
$g-button-small-min-width: 60px !default;
$g-button-small-height: 30px !default;
$g-button-small-padding: 0px 8px !default;
$g-button-mini-padding: 0px 8px !default;
$g-button-small-font-size: 12px !default;
$g-button-mini-height: 22px !default;
$g-button-mini-font-size: 10px !default;
$g-button-mini-min-width: 50px !default;
$g-button-disabled-opacity: 0.5 !default;
$g-button-info-color: #323233 !default;
$g-button-info-background-color: #fff !default;
$g-button-info-border-color: #ebedf0 !default;
$g-button-info-border-width: 1px !default;
$g-button-info-border-style: solid !default;
$g-button-success-color: #fff !default;
$g-button-success-background-color: $g-success !default;
$g-button-success-border-color: $g-button-success-background-color !default;
$g-button-success-border-width: 1px !default;
$g-button-success-border-style: solid !default;
$g-button-primary-color: #fff !default;
$g-button-primary-background-color: $g-primary !default;
$g-button-primary-border-color: $g-button-primary-background-color !default;
$g-button-primary-border-width: 1px !default;
$g-button-primary-border-style: solid !default;
$g-button-error-color: #fff !default;
$g-button-error-background-color: $g-error !default;
$g-button-error-border-color: $g-button-error-background-color !default;
$g-button-error-border-width: 1px !default;
$g-button-error-border-style: solid !default;
$g-button-warning-color: #fff !default;
$g-button-warning-background-color: $g-warning !default;
$g-button-warning-border-color: $g-button-warning-background-color !default;
$g-button-warning-border-width: 1px !default;
$g-button-warning-border-style: solid !default;
$g-button-block-width: 100% !default;
$g-button-circle-border-top-right-radius: 100px !default;
$g-button-circle-border-top-left-radius: 100px !default;
$g-button-circle-border-bottom-left-radius: 100px !default;
$g-button-circle-border-bottom-right-radius: 100px !default;
$g-button-square-border-top-right-radius: 3px !default;
$g-button-square-border-top-left-radius: 3px !default;
$g-button-square-border-bottom-left-radius: 3px !default;
$g-button-square-border-bottom-right-radius: 3px !default;
$g-button-icon-min-width: 1em !default;
$g-button-plain-background-color: #fff !default;
$g-button-hairline-border-width: 0.5px !default;

.g-button {
  height: $g-button-g-button-height;
  position: relative;
  align-items: center;
  justify-content: center;
  @include flex;
  /* #ifndef APP-NVUE */
  box-sizing: border-box;
  /* #endif */
  flex-direction: row;

  &__text {
    font-size: $g-button-text-font-size;
  }

  &__loading-text {
    font-size: $g-button-loading-text-font-size;
    margin-left: $g-button-loading-text-margin-left;
  }

  &--large {
    /* #ifndef APP-NVUE */
    width: $g-button-large-width;
    /* #endif */
    height: $g-button-large-height;
    padding: $g-button-large-padding;
  }

  &--normal {
    padding: $g-button-normal-padding;
    font-size: $g-button-normal-font-size;
  }

  &--small {
    /* #ifndef APP-NVUE */
    min-width: $g-button-small-min-width;
    /* #endif */
    height: $g-button-small-height;
    padding: $g-button-small-padding;
    font-size: $g-button-small-font-size;
  }

  &--mini {
    height: $g-button-mini-height;
    font-size: $g-button-mini-font-size;
    /* #ifndef APP-NVUE */
    min-width: $g-button-mini-min-width;
    /* #endif */
    padding: $g-button-mini-padding;
  }

  &--disabled {
    opacity: $g-button-disabled-opacity;
  }

  &--info {
    color: $g-button-info-color;
    background-color: $g-button-info-background-color;
    border-color: $g-button-info-border-color;
    border-width: $g-button-info-border-width;
    border-style: $g-button-info-border-style;
  }

  &--success {
    color: $g-button-success-color;
    background-color: $g-button-success-background-color;
    border-color: $g-button-success-border-color;
    border-width: $g-button-success-border-width;
    border-style: $g-button-success-border-style;
  }

  &--primary {
    color: $g-button-primary-color;
    background-color: $g-button-primary-background-color;
    border-color: $g-button-primary-border-color;
    border-width: $g-button-primary-border-width;
    border-style: $g-button-primary-border-style;
  }

  &--error {
    color: $g-button-error-color;
    background-color: $g-button-error-background-color;
    border-color: $g-button-error-border-color;
    border-width: $g-button-error-border-width;
    border-style: $g-button-error-border-style;
  }

  &--warning {
    color: $g-button-warning-color;
    background-color: $g-button-warning-background-color;
    border-color: $g-button-warning-border-color;
    border-width: $g-button-warning-border-width;
    border-style: $g-button-warning-border-style;
  }

  &--block {
    @include flex;
    width: $g-button-block-width;
  }

  &--circle {
    border-top-right-radius: $g-button-circle-border-top-right-radius;
    border-top-left-radius: $g-button-circle-border-top-left-radius;
    border-bottom-left-radius: $g-button-circle-border-bottom-left-radius;
    border-bottom-right-radius: $g-button-circle-border-bottom-right-radius;
  }

  &--square {
    border-bottom-left-radius: $g-button-square-border-top-right-radius;
    border-bottom-right-radius: $g-button-square-border-top-left-radius;
    border-top-left-radius: $g-button-square-border-bottom-left-radius;
    border-top-right-radius: $g-button-square-border-bottom-right-radius;
  }

  &__icon {
    /* #ifndef APP-NVUE */
    min-width: $g-button-icon-min-width;
    line-height: inherit !important;
    vertical-align: top;
    /* #endif */
  }

  &--plain {
    background-color: $g-button-plain-background-color;
  }

  &--hairline {
    border-width: $g-button-hairline-border-width !important;
  }
}
</style>
