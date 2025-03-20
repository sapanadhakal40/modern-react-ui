import type { LoginSchemaType } from "@/schema/login-schema";
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormItem,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/login-schema";


export default function LoginForm() {
    const form = useForm<LoginSchemaType>({
        defaultValues: {
            email: "",
            password: "",
           
        },
        resolver: zodResolver(loginSchema),
    });

    async function submitForm(data: LoginSchemaType) {
        console.log(data);
    }

    return (
        <Form {...form }>
<form className='space-y-8' onSubmit={form.handleSubmit(submitForm)}>
 
    <FormField
    control={form.control}
    name='email'
    render={({ field }) => (
        <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
                <Input {...field} placeholder='Enter email' />
            </FormControl>
            <FormMessage/>
        </FormItem>
    )}
    />
    <FormField
    control={form.control}
    name='password'
    render={({ field }) => (
        <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
                <Input {...field} type='password' placeholder='Enter password' />
            </FormControl>
            <FormMessage/>
        </FormItem>
    )}
    />
  

    <Button type='submit' className='w-full bg-blue-600 hover:bg-blue-800 cursor-pointer py-5 '>
        Sign In
    </Button>

    <div className='text-center'>
        <p className='text-gray-500'>
        Don't have an account?{' '}
            <Link to='/auth/register' className='text-blue-600 hover:text-blue-800'>
                Sign Up
            </Link>
        </p>
    </div>
</form>


        </Form>
    );
}