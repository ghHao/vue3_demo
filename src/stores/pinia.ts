import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  age: number,
  count: number | 0
}

interface State {
  userList: UserInfo[]
  user: UserInfo | null,
  count: number | 0,
  age: UserInfo | 0
}
export const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      userList: [],
      user: null,
      count: 0,
      age: 0
    }
  }
})
