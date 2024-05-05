import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Login } from "./login/login"
import { SignUp } from "./sign-up/sign-up"

export const User = () => {
  return (
    <Tabs defaultValue="Login" className="w-full pt-10">
      <TabsList className="w-full">
        <TabsTrigger value="Login" className="dark w-full">
          Login
        </TabsTrigger>
        <TabsTrigger value="signUp" className="dark w-full ">
          Join Now
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <Login />
      </TabsContent>
      <TabsContent value="signUp">
        <SignUp />
      </TabsContent>
    </Tabs>
  )
}
