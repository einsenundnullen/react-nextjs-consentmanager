import {
  ConsentManager,
  ConsentManagerOptions,
  CookieType,
  I18nKeys
} from '@einsenundnullen/react-nextjs-consentmanager'
import '@einsenundnullen/react-nextjs-consentmanager/dist/index.css'
import React from 'react'

const App = () => {
  const options: ConsentManagerOptions = {
    cookies: [
      {
        id: 'consent-manager',
        name: 'Consent Management',
        type: CookieType.ESSENTIAL,
        provider: 'My Company',
        privacyPolicyLink: '#privacy-policy',
        reason: 'Cookie um diese Consent-Einstellungen zu speichern.'
      },
      {
        id: 'google-analytics',
        name: 'Google Analytics',
        type: CookieType.STATISTICS,
        provider: 'Google LLC',
        privacyPolicyLink: 'https://policies.google.com/privacy?hl=de',
        reason:
          'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.'
      }
    ],
    privacyPolicyLink: '#privacy-policy',
    impressLink: '#impress',
    i18n: {
      [I18nKeys.SETTINGS]: 'Einstellungen',
      [I18nKeys.ACCEPT_ALL]: 'Alle akzeptieren',
      [I18nKeys.SAVE]: 'Speichern',
      [I18nKeys.STATISTICS]: 'Statistik',
      [I18nKeys.ESSENTIAL]: 'Notwendig',
      [I18nKeys.BACK]: 'Zurück',
      [I18nKeys.ON]: 'An',
      [I18nKeys.OFF]: 'Aus',
      [I18nKeys.FUNCTIONAL]: 'Funktional',
      [I18nKeys.MARKETING]: 'Marketing',
      [I18nKeys.SETTINGS_TEXT]:
        'Auf dieser Seite können Sie Informationen zu den Zwecken und Anbietern erfahren die personenbezogene Daten auf unserer Webseite verarbeiten.',
      [I18nKeys.MAIN_TITLE]: 'Einwilligung zu Cookies & Daten',
      [I18nKeys.MAIN_TEXT]:
        'Auf dieser Website nutzen wir Cookies und vergleichbare Funktionen um Ihnen die bestmögliche Browsing-Erfahrung zu bieten. Die Verarbeitung dient der statistischen Analyse/Messung. Diese Einwilligung ist freiwillig, für die Nutzung unserer Website nicht erforderlich und kann jederzeit über das Icon rechts unten widerrufen werden.'
    }
  }

  const handleCookieConsentChange = (enabledCookies: string[]) => {
    console.log('enabledCookies', enabledCookies)
  }

  return (
    <div>
      <ConsentManager options={options} onChange={handleCookieConsentChange} />
    </div>
  )
}

export default App
