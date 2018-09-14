import moment from 'moment'

const I18nLocalize = {
  install: (Vue, opts) => {
    const defaultLocale = opts.locale || 'vi'
    const formats = opts.formats || { vi: { deafult: 'Y-M-D' } }

    Vue.prototype.$l = function locale (date, format = 'default', locale = defaultLocale) {
      const pattern = formats[locale][format]
      return moment(date).format(pattern)
    }
  }
}

export default I18nLocalize
