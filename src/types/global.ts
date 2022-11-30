export type User = {
  id: number
  name: string
  email: string
  avatar: string
  is_dark_mode: boolean
}

export interface PaginatedList<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
;[]
