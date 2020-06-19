export function getWeekStart(date: Date): Date {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay()
  )
}

export function getPrevWeek(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
}

export function getNextWeek(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7)
}
