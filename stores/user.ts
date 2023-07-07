/*
 * @Date: 2023-06-26 20:23:07
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-06-26 20:26:50
 * @FilePath: \nuxt-template\stores\user.ts
 */
export interface IUserState {
  token: Nullable<string>
}

export const useUser = defineStore('user', {
  persist: {
    paths: ['token']
  },
  state: (): IUserState => ({
    token: null
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})
