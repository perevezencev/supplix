import { SignIn } from '@clerk/nextjs'

export const SignInPage = () => {
  return <SignIn signUpUrl="/auth/sign-up" />
}

export default SignInPage
