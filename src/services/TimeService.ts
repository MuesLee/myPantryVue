export function getCurrentDate() {
  const utcDate = new Date();
  utcDate.setTime(utcDate.getTime() + 1 * 60 * 60 * 1000);
  return utcDate;
}

