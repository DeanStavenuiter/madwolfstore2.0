'use client';

import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEventHandler } from 'react';
import { useState } from 'react';
import { clearTimeout } from 'timers';

const Signin = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  // const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault();

  //   const response = (await signIn('credentials', {
  //     email: userInfo.email,
  //     password: userInfo.password,
  //     redirect: false,
  //     // callbackUrl: '/',
  //   })) as any;

  //   toast.loading('Logging in...');
  //   // console.log('Response', response);

  //   if (response.ok) {
  //     const timeout1 = setTimeout(() => {
  //       toast.dismiss();
  //     }, 1500);

  //     const timeout2 = setTimeout(() => {
  //       toast.success('Logged in successfully');
  //     }, 1500);

  //     // const timeout3 = setTimeout(() => {
  //     //   router.push('/')
  //     // }, 2000);

  //     return () => {
  //       clearTimeout(timeout1);
  //       clearTimeout(timeout2);
  //       // clearTimeout(timeout3);
  //     };
  //   } else {
  //     const timeout1 = setTimeout(() => {
  //       toast.dismiss();
  //     }, 1500);

  //     const timeout2 = setTimeout(() => {
  //       toast.error('Invalid credentials, please try again.');
  //     }, 1500);

  //     return () => {
  //       clearTimeout(timeout1);
  //       clearTimeout(timeout2);
  //     };
  //   }
  // };

  return (
    <div className='flex justify-center'>
      <div className='flex h-[calc(100vh_-_328px)] w-2/3 items-center justify-center'>
        <div className='w-1/3 '>
          <h3 className='text-center text-lg font-bold mb-4'>Sign In</h3>
          <button
            className='btn mb-3 w-full border border-slate-200 px-4 py-2 text-slate-700
                  transition duration-150 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700
                  dark:bg-gray-800 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300'
            onClick={() =>
              signIn('google', {
                callbackUrl: '/',
              })
            }
          >
            <Image
              className='h-6 w-6'
              width={100}
              height={50}
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              alt='google logo'
            />
            <span>Google</span>
          </button>
          <div className='mb-3 mt-3 flex items-center'>
            <hr className='w-1/2' /> <span className='ml-3 mr-3'> OR </span>{' '}
            <hr className='w-1/2' />
          </div>

          <div className='flex-col justify-normal'>
            <form action='#'>
              <div className='mb-3 flex w-full flex-col'>
                {/* email */}
                <div className='w-full'>
                  <label className='label'>
                    <span className='text-gray-200 label-text'>Email</span>
                  </label>
                  <input
                    //   required
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        email: target.value,
                      })
                    }
                    autoComplete='true'
                    className='peer input input-bordered mb-3 w-full bg-[rgb(30,35,42)]'
                  />
                </div>

                {/* password */}
                <div className='w-full'>
                  <label className='label'>
                    <span className='text-gray-200 label-text'>
                      Password
                    </span>
                  </label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        password: target.value,
                      })
                    }
                    autoComplete='true'
                    className='peer input input-bordered mb-3 w-full bg-[rgb(30,35,42)]'
                  />
                </div>
                {/* <Toaster /> */}
              </div>
              <div className='flex flex-col gap-5'>
                <button
                  className='btn mb-4 border-none bg-sky-500 text-white hover:bg-sky-700'
                  type='submit'
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className='mb-3 flex justify-center'>
              <Link href={'/auth/signup'} className='hover:text-gray-300'>
                Don&apos;t have an account yet?
              </Link>
            </div>
            <div className='flex justify-center'>
              <Link
                href={'/auth/forgotPassword'}
                className='hover:text-gray-300'
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
