export interface IScreen {
  route?: any
  navigation?: any
}

export interface ApiRequest {
  data?: any
  onSuccess?: (data?: any) => void
  onError?: (data?: any) => void
}
