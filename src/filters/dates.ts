import Vue from 'vue'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

Vue.filter('prettyDate', (dateValue: Date) => {
  dayjs.extend(advancedFormat)
  return dayjs(dateValue).format('MMMM DD, YYYY')
})