export interface BaseResponse {
  status: boolean
}

export interface CustomError {
  message: string
}

export interface ErrorResponse extends BaseResponse {
  data: CustomError
}

export interface CustomResponse<T = Record<string, string>>
  extends BaseResponse {
  data: T
}
