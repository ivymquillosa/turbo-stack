import type { Meta, StoryObj } from '@storybook/react'
import { CommonMeta } from '../utils/commonMeta'
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardTitle, CardContent, CardFooter, Button, CardDescription} from '@stack/radix-components'

const meta = {
  title: 'Example/Form',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { ...CommonMeta.argsType }
}

export default meta
type Story = StoryObj<typeof meta>

const Tab = () => {
    return(
        <Tabs>
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
            <Card>
                <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you&apos;re
                    done.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <label htmlFor="name">Name</label>
                    <input defaultValue="Pedro Duarte" id="name" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="username">Username</label>
                    <input defaultValue="@peduarte" id="username" />
                </div>
                </CardContent>
                <CardFooter>
                <Button>Save changes</Button>
                </CardFooter>
            </Card>
            </TabsContent>
            <TabsContent value="password">
            <Card>
                <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                    Change your password here. After saving, you&apos;ll be logged
                    out.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <label htmlFor="current">Current password</label>
                    <input id="current" type="password" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="new">New password</label>
                    <input id="new" type="password" />
                </div>
                </CardContent>
                <CardFooter>
                <Button>Save password</Button>
                </CardFooter>
            </Card>
            </TabsContent>
        </Tabs>
    )
}

const Form = ()=>{
    
    return(
        <form className='p-10 flex flex-col gap-4 bg-[#0E1534]'>
            <Tab></Tab>
            
            <button className="p-4 border-none outline-none relative z-[1] text-white rounded-lg bg-gradient-to-r from-[#81683F] via-[#62278A] to-[#4066B4] before:content-[''] before:absolute before:left-0.5 before:right-0.5 before:top-0.5 before:bottom-0.5 before:rounded-md before:bg-[#0E1534] before:z-[-1]">
                Create treatment cycle
            </button>
        </form>
    )
}   

export const Default: Story = {
  render: ()=> <Form/>
}


