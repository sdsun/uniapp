import envConfig from "@/config/index.js";

/**
 * API REQUEST CONFIG AND INTERCEPTOR
 */
export const httpInterceptor = () => {
  // HTTP Global Config
  uni.$g.http.setConfig((config) => {
    config.baseURL = envConfig.BASE_API_URL
    config.timeout = 18000
    config.header = {
      "Content-Type": "application/json;charset=UTF-8;",
    }
    return config
  })
  
  // HTTTP Request Interceptors
  uni.$g.http.interceptors.request.use((config) => {
    const token = uni.getStorageSync("token")
    if (token) {
      config.header["Authorization"] = `Bearer ${token}`
    }
    return config
  }, config => {
    return Promise.reject(config)
  })
  // HTTTP Response Interceptors
  uni.$g.http.interceptors.response.use((response) => {
    const { code, msg } = response.data
    if (code != 0) {
      uni.showToast({
        title: msg,
        icon: 'fail'
      })
    }
    return response.data
  }, (response) => {
    return Promise.reject(response)
  })
}


