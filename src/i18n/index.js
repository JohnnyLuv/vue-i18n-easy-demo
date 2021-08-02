import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import Element from 'element-ui'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en', // 设置语言环境
  fallbackLocale: 'en',
  messages: { en } // 设置语言环境信息
})

Vue.use(Element, { i18n: (key, value) => i18n.t(key, value) })

const loadedLanguages = ['en'] // 我们的预装默认语言

function setI18nLanguage(lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  window.localStorage.setItem('lang', lang)
  return lang
}

export async function loadLanguageAsync(lang) {
  // 如果语言相同
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果语言已经加载
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果尚未加载语言
  const messages = await import(/* webpackChunkName: "lang-[request]" */ `@/i18n/lang/${lang}`)
  i18n.setLocaleMessage(lang, messages.default)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}