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

export function getDaysAgo(date: Date, n: number = 1): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n)
}

export function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

const DAYS = ['日', '月', '火', '水', '木', '金', '土']

export function getDay(date: Date): string {
  return DAYS[date.getDay()]
}
