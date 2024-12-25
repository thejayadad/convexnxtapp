import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import SearchBar from '../search/search-bar'

const Header = () => {
  return (
    <header className='w-full border-b-[1px]'>
        <div className='flex flex-col lg:flex-row items-center gap-4 p-4 mx-auto max-w-screen-lg'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
            <Link
            href={'/'}
            className="text-lg font-bold text-transparent bg-clip-text text-gray-600 shrink-0">
            Echo<span className='text-purple-600'>Blog</span>
            </Link>
            <div className="lg:hidden flex items-center ml-2">
  <div className="w-16 h-16 flex items-center justify-center">
    <UserButton appearance={{ elements: { userButtonAvatarBox: 'w-10 h-10' } }} />
  </div>
</div>
            </div>
            <div className='w-full lg:max-w-screen-lg'>
                <SearchBar />
            </div>
            <div className='hidden lg:block ml-auto'>
                <div className='flex items-center gap-3'>
                    <Link href={'/'}>
                        <button className='btn btn-md  rounded-full btn-outline text-gray-600 '>
                            AllPost
                        </button>
                    </Link>
                    <Link href={'/new'}>
                        <button className='btn btn-md rounded-full bg-gray-600 text-white'>
                            NewPost
                        </button>
                    </Link>
                    <div className="w-12 h-12 flex items-center ml-2 transform scale-150">
                    <UserButton />

                    </div>
                </div>
               </div>
               <div className='lg:hidden w-full flex justify-center gap-3'>
               <Link className='w-full' href={'/'}>
                        <button className='btn w-full btn-sm rounded-full btn-outline text-gray-600 '>
                            AllPost
                        </button>
                    </Link>
                    <Link
                    className='w-full'
                    href={'/new'}>
                        <button className='btn w-full btn-sm rounded-full bg-gray-600 text-white'>
                            NewPost
                        </button>
                    </Link>
                </div>
        </div>
    </header>
  )
}

export default Header