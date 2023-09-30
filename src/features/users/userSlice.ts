import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface User {
  id: number
  first_name: string
  middle_name: string
  last_name: string
  email_id: string
  mobile_no: string
  dob: string
  gender: 'male' | 'female'
  address: string
  languages_known: string
  created_at: string
  updated_at: string
}

export interface Pagination {
  to: number
  total: number
  per_page: number
  current_page: number
  last_page:number
  orderBy?: 'id' | 'first_name' | 'email'
  sortedBy?: 'asc' | 'desc'
}

export interface UserStore {
  users: User[]
  pagination: Pagination
}

const initialState: UserStore = {
  users: [],
  pagination: {
    to: 1,
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page:1,
  },
} as UserStore
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },

    setPagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload
    },
  },
})
export const { setUsers, setPagination } = userSlice.actions
export const userSelector = (state: RootState) => state.userReducer
export default userSlice.reducer
