import { GoogleAuthButton, SignInForm, SignUpForm } from '@/features/auth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'

const AuthForm = () => {
    return (
        <div className={'flex flex-col gap-6'}>
            <h1 className="text-2xl text-center font-bold">Welcome To Easy Post 👋</h1>

            <Tabs defaultValue="sign-in" className="w-[400px] flex flex-col gap-6">
                <TabsList className="w-full">
                    <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="sign-in">
                    <SignInForm thirdPartyAuth={<GoogleAuthButton />} />
                </TabsContent>

                <TabsContent value="sign-up">
                    <SignUpForm thirdPartyAuth={<GoogleAuthButton />} />
                </TabsContent>
            </Tabs>

            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}

export default AuthForm
