const getDayName = (timestamp, locale) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString(locale, { weekday: 'long' })
}
export default getDayName;