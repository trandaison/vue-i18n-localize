# Installation
`Vue-i18n-localize` requires [`momentjs`](https://momentjs.com/) to be installed.

Use command bellow to install packages:

```sh
npm install moment --save
npm install https://github.com/framgia/Azui_Server_User.git --save

# or if you're using yarn
yarn add moment -S
yarn add https://github.com/framgia/Azui_Server_User.git -S
```

# Getting Started
```js
// main.js

import Vue from 'vue';
import I18nLocalize from 'vue-i18n-localize';

Vue.use(I18nLocalize, {
  locale: 'vi',
  formats: {
    vi: {
      full: '[ngày] D [tháng] M [năm] Y'
    }
  }
})
```

# API
### Options
| Options | Type | Description | Example |
|---|---|---|---|
| `locale` | `String` | The locale format. | `'vi'` |
| `formats` | `Object` | The format object for formatting | `{vi: {short: 'D/M/Y'}, en: {short: 'Y-M-Y'}}` |

### Methods
* `this.$l(date, key, locale)` returns a formatted string.

| Arguments | Required? | Description |
|---|---|---|
| `date` | `yes` | accept a `Date` object or [`momentjs`](https://momentjs.com/) object |
| `key` | `no` | The key to pattern in `formats` object |
| `locale` | `no` | The locale which defined in the options. |

**Examples:**
```js
this.$l(new Date(), 'full', 'vi')
this.$l(moment(), 'full')
```
