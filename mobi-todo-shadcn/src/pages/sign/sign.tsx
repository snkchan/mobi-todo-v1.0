import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Login, SignUp } from "./components"

export const Sign = () => {
  return (
    <Tabs defaultValue="Login" className="w-full">
      <TabTrigger />
      <TabContentLogin />
      <TabContentSignUp />
    </Tabs>
  )
}

const TabTrigger = () => {
  return (
    <TabsList className="w-full">
      <TabsTrigger value="Login" className="dark w-full">
        Login
      </TabsTrigger>
      <TabsTrigger value="signUp" className="dark w-full ">
        Join Now
      </TabsTrigger>
    </TabsList>
  )
}

const TabContentLogin = () => {
  return (
    <TabsContent value="Login">
      <Login />
    </TabsContent>
  )
}
const TabContentSignUp = () => {
  return (
    <TabsContent value="signUp">
      <SignUp />
    </TabsContent>
  )
}
