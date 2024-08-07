export function getCurrentLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');

  return lang || navigator.language.split('-')[0] || 'en';
}