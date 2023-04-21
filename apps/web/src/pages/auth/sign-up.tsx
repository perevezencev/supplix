import { SignUp } from '@clerk/nextjs'

export const SignUpPage = () => {
  return <SignUp signInUrl="/auth/sign-in" />
}

export default SignUpPage
