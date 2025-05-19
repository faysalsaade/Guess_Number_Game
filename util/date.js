export function getFormattedDate(date) {
  return `${date.getFullYear() + 1}-${date.getMonth()}-${date.getDay()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), -days);
}
