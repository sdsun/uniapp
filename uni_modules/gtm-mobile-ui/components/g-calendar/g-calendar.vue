<template>
  <view class="g-calendar">
    <view class="g-calendar__content">
			<view class="g-calendar__header-todo" v-if="mode == 'todo'">
				<text style="margin-right: 6px;">{{ nowDate.year }}</text>
				<text>{{ monthsName[parseInt(nowDate.month)] }}</text>
			</view>
      <view class="g-calendar__header" v-else>
        <view class="g-calendar__header-btn-box" @click.stop="pre">
          <view class="g-calendar__header-btn g-calendar--left"></view>
        </view>
				<text class="g-calendar__header-text">{{ (nowDate.year || "") + " / " + (nowDate.month || "") }}</text>
        <view class="g-calendar__header-btn-box" @click.stop="next">
          <view class="g-calendar__header-btn g-calendar--right"></view>
        </view>
        <text class="g-calendar__backtoday" @click="backtoday">today</text>
      </view>
      <view class="g-calendar__box" :class="{ 'show-month': showCurrentMonth }">
        <view class="g-calendar__weeks">
          <view class="g-calendar__weeks-day" v-for="item in weeksName" :key="item">
            <text class="g-calendar__weeks-day-text">{{ item }}</text>
          </view>
        </view>
				<view class="g-calendar__weeksrange" v-if="mode == 'todo' && !showCurrentMonth">
					<!-- <view class="g-calendar__weeksrange-text" v-if="showCurrentWeekRange">
						{{ parseInt((weeks[currentWeekIndex][0].month))}}/{{ (weeks[currentWeekIndex][0].date) }} - 
						{{ parseInt((weeks[currentWeekIndex][6].month))}}/{{ (weeks[currentWeekIndex][6].date) }}
					</view> -->
					<swiper
						circular
						:current="currentWeekIndex"
						:style="{
							height: '100rpx'
						}"
						@change="handleChangeWeekRange"
					>
						<swiper-item v-for="(item, weekIndex) in weeks" :key="weekIndex">
							<view class="g-calendar__weeks">
								<view
									class="g-calendar__weeks-item"
									style="display: block;"
									v-for="(weeks, weeksIndex) in item"
									:key="weeksIndex">
									<calendar-item
										class="g-calendar-item--hook"
										:weeks="weeks"
										:calendar="calendar"
										:selected="selected"
										:lunar="lunar"
										@change="choiceDate">
									</calendar-item>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<view
					v-else
					class="g-calendar__month"
				>
					<view
						class="g-calendar__weeks"
						v-for="(item, weekIndex) in weeks"
						:key="weekIndex">
						<view
							class="g-calendar__weeks-item"
							v-for="(weeks, weeksIndex) in item"
							:key="weeksIndex">
							<calendar-item
								class="g-calendar-item--hook"
								:weeks="weeks"
								:calendar="calendar"
								:selected="selected"
								:lunar="lunar"
								@change="choiceDate">
							</calendar-item>
						</view>
					</view>
				</view>
				<view class="toggle-month" v-if="mode == 'todo'">
					<view class="toggle-month__inner" @click="handleToggle">
						<view class="line"></view>
					</view>
				</view>
      </view>
    </view>
  </view>
</template>

<script>
import Calendar from "./util.js";
import CalendarItem from "./g-calendar-item.vue";

export default {
  components: {
    CalendarItem
  },
  emits: ["change", "monthSwitch"],
  props: {
		mode: {
			type: String,
			default: "todo"
		},
    date: {
      type: String,
      default: "",
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    range: {
      type: Boolean,
      default: false
    },
    clearDate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
			showCurrentMonth: false,
			currentWeekIndex: 0,
			showCurrentWeekRange: false,
      weeks: [],
      calendar: {},
      nowDate: "",
			// 后期集成多语言
			monthsName: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct"
			],
			weeksName: [
				"SUN",
				"MON",
				"TUE",
				"WED",
				"THU",
				"FRI",
				"SAT"
			]
    }
  },
  watch: {
    date(newVal) {
      this.init(newVal);
    },
    startDate(val) {
      this.cale.resetSatrtDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
      this.weeks = this.cale.weeks;
    }
  },
  created() {
    this.cale = new Calendar({
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range,
    });
    this.init(this.date);
  },
  methods: {
		// 初始化日期显示
    init(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
			const list = Object.values(this.weeks)
			list.map((item, index) => {
				this.isCurrentWeek(item, index)
			})
    },
		// 是否是当前周
		isCurrentWeek(item, index){
			const current = item.find(item => item.isDay)
			if (current) {
				this.currentWeekIndex = index
			}
		},
		handleChangeWeekRange(e) {
			this.currentWeekIndex = e.detail.current
			this.showCurrentWeekRange = true
			setTimeout(() => {
				this.showCurrentWeekRange = false
			}, 1000)
		},
		// 当月周和月切换
		handleToggle() {
			this.showCurrentMonth = !this.showCurrentMonth
		},
		// 选择日期
    change() {
      this.setEmit("change");
    },
		// 选择月份
    monthSwitch() {
      let { year, month } = this.nowDate;
      this.$emit("monthSwitch", {
        year,
        month: Number(month),
      });
    },
		// 派发事件
    setEmit(name) {
      const { year, month, date, fullDate, lunar, extraInfo } = this.calendar;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {},
      });
    },
		// 选择某一天
    choiceDate(weeks) {
      if (weeks.disable) return;
      this.calendar = weeks;
      // 设置多选
      this.cale.setMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      this.change();
    },
		// 回到今天
    backtoday() {
      let date = this.cale.getDate(new Date()).fullDate;
      this.init(date);
      this.change();
    },
		// 上个月
    pre() {
      const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
      this.setDate(preDate);
      this.monthSwitch();
    },
		// 下个月
    next() {
      const nextDate = this.cale.getDate(this.nowDate.fullDate, +1, "month").fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
		// 设置日期
    setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    }
  }
};
</script>

<style lang="scss" scoped>
$g-border-color: #ededed;
$g-text-color: #333;
$g-bg-color-hover: #fff;
$g-font-size-base: 14px;
$g-text-color-placeholder: #808080;
$g-color-subtitle: #555555;
$g-text-color-grey: #999;
.g-calendar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;

	&__header{
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 50px;
		border-bottom-color: $g-border-color;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}
	&__header-todo{
		padding: 32rpx;
		font-size: 42rpx;
		font-weight: bold;
	}
	&__backtoday {
		position: absolute;
		right: 0;
		top: 25rpx;
		padding: 0 5px;
		padding-left: 10px;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
		color: $g-text-color;
		background-color: $g-bg-color-hover;
	}

	&__header-text {
		text-align: center;
		width: 100px;
		font-size: $g-font-size-base;
		color: $g-text-color;
	}

	&__header-btn-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
	}

	&__header-btn {
		width: 10px;
		height: 10px;
		border-left-color: $g-text-color-placeholder;
		border-left-style: solid;
		border-left-width: 2px;
		border-top-color: $g-color-subtitle;
		border-top-style: solid;
		border-top-width: 2px;
	}

	&--left {
		transform: rotate(-45deg);
	}

	&--right {
		transform: rotate(135deg);
	}

	&__weeks {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	&__weeks-item{
		display: none;
		border-radius: 24rpx;
		overflow: hidden;
		flex: 1;
	}
	&__weeks-day {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 45px;
		border-bottom-color: #f5f5f5;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	&__weeks-day-text {
		font-size: 14px;
	}

	&__box {
		position: relative;
	}
}
.g-calendar__weeksrange{
	position: relative;
	height: 100rpx;
	&-text{
		position: absolute;
		background: #FFF;
		height: 100rpx;
		z-index: 999;
		width: 100%;
		left: 0;
		top: 0;
		text-align: center;
		line-height: 100rpx;
		color: #999;
		font-size: 24rpx;
	}
}
.toggle-month{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20rpx;
	&__inner{
		padding: 24rpx;
	}
}
.line{
	position: relative;
	height: 8rpx;
	width: 60rpx;
	&::before,
	&::after{
		content: '';
		display: block;
		width: 30rpx;
		height: 12rpx;
		background: #CCC;
		top: 0;
		position: absolute;
		transition: all .5s;
	}
	&::before{
		left: 0;
		border-radius: 6rpx 0 0 6rpx;
	}
	&::after{
		left: 30rpx;
		border-radius: 0 6rpx 6rpx 0;
		
	}
}
.show-month{
	.g-calendar__weeks-item{
		display: block;
	}
	.line{
		&::before{
			width: 34rpx;
			transform: rotate(-30deg);
			transform-origin: top center;
		}
		&::after{
			width: 34rpx;
			transform: rotate(30deg);
			transform-origin: top center;
		}
	}
}
.current-week{
	.g-calendar__weeks-item{
		display: block;
	}
}
</style>
