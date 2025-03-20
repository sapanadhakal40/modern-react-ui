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
import { registerSchema , RegisterSchemaType } from "@/schema/register-schema";

export default function RegisterForm() {
    const form = useForm<RegisterSchemaType>({
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(registerSchema),
    });

    async function submitForm(data: RegisterSchemaType) {
        console.log(data);
    }

    return (
        <Form {...form }>
<form className='space-y-8' onSubmit={form.handleSubmit(submitForm)}>
    <FormField
    control={form.control}
    name='fullName'
    render={({ field }) => (
        <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
                <Input {...field} placeholder='Enter full name' />
            </FormControl>
            <FormMessage/>
        </FormItem>
    )}
    />
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
    <FormField
    control={form.control}
    name='confirmPassword'
    render={({ field }) => (
        <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
                <Input {...field} type='password' placeholder='Confirm password' />
            </FormControl>
            <FormMessage/>
        </FormItem>
    )}
    />

    <Button type='submit' className='w-full bg-blue-600 hover:bg-blue-800 cursor-pointer py-5 '>
        Sign Up
    </Button>

    <div className='text-center'>
        <p className='text-gray-500'>
            Already have an account?{' '}
            <Link to='/auth/login' className='text-blue-600 hover:text-blue-800'>
                Sign In
            </Link>
        </p>
    </div>
</form>


        </Form>
    );
}