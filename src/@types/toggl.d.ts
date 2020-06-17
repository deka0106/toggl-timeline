declare module 'toggl' {
  interface Response<T> {
    data: T
  }

  interface User {
    id: number
    api_token: string
    default_wid: number
    email: string
    fullname: string
    jquery_timeofday_format: string
    jquery_date_format: string
    timeofday_format: string
    date_format: string
    store_start_and_stop_time: boolean
    beginning_of_week: number
    language: string
    image_url: string
    sidebar_piechart: boolean
    at: string // Date
    new_blog_post: {
      title: string
      link: string
    }
    send_product_emails: boolean
    send_weekly_report: boolean
    send_timer_notifications: boolean
    openid_enabled: boolean
    timezone: string
  }

  interface Project {
    id: number
    wid: number
    cid: number
    name: string
    billable: boolean
    is_private: boolean
    active: boolean
    at: string // Date
    template_id: number
    color: string
  }

  interface TimeEntry {
    id: number
    pid: number
    wid: number
    billable: boolean
    start: string // Date
    stop: string // Date
    duration: number
    description: string
    at: string // Date
  }

  interface Workspace {
    id: number
    name: string
    premium: boolean
    admin: boolean
    default_hourly_rate: number
    default_currency: string
    only_admins_may_create_projects: boolean
    only_admins_see_billable_rates: boolean
    rounding: number
    rounding_minutes: number
    at: string // Date
    logo_url: string
  }
}
