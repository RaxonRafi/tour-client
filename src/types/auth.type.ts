export interface ISendOtp{
    email: string
}
export interface ILogin{
    email: string,
    passoword: string
}
export interface IVerifyOtp{
    email: string,
    otp: string
}