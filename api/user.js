const http = uni.$g.http

const api = {
  user: '/installer/appuserinfo/getUserInfo'
}

export const getUserInfo = () => http.get(api.user)