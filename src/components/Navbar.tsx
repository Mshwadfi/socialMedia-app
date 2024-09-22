'use client'
import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import LoadingSpinner from './LoadingSpinner';
import { searchUsers } from '@/lib/actions';

type SearchResult = {
  clerkId: string;
  avatar: string | null;
  name: string | null;  
  surname: string | null;
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous timeout if there's one
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout
    const newTimeout = setTimeout(async () => {
      if (searchQuery) {
        try {
          const response = await searchUsers(searchQuery);
          console.log(response);
          setSearchResults(response);
          setIsSearchOpen(true);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      } else {
        setSearchResults([]);
        setIsSearchOpen(false);
      }
    }, 300);

    setDebounceTimeout(newTimeout);

    // Clean up function to clear timeout on component unmount or when dependencies change
    return () => clearTimeout(newTimeout);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optionally handle submit logic if needed
  };

  return (
    <div className='h-24 flex justify-between items-center px-1'>
      <div className='md:hidden lg:block w-[20%]'>
        <Link href={'/'} className='font-extrabold text-blue-500 text-xl'>My App</Link>
      </div>
      <div className='hidden md:flex w-[50%] justify-between'>
        <div className='flex gap-5 text-gray-500 text-lg'>
          <Link href={'/'} className='flex items-center gap-2'>
            <Image src='/home.png' alt='home' width={16} height={16} className='w-4 h-4 mb-0.5' />
            <span>Home</span>
          </Link>
          <Link href={'/'} className='flex items-center gap-2'>
            <Image src='/friends.png' alt='friends' width={16} height={16} className='w-4 h-4' />
            <span>Friends</span>
          </Link>
          <Link href={'/'} className='flex items-center gap-2'>
            <Image src='/stories.png' alt='stories' width={16} height={16} className='w-4 h-4' />
            <span>Stories</span>
          </Link>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-50 items-center rounded-md'>
          <form onSubmit={handleSearchSubmit} className='flex'>
            <input 
              type='search' 
              placeholder='search' 
              className='bg-transparent outline-none' 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type='submit'>
              <Image src='/search.png' width={16} height={16} alt='' />
            </button>
          </form>
        </div>
      </div>
      <div className='w-[30%] flex items-center justify-end gap-4'>
        <ClerkLoading>
          <LoadingSpinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='hidden md:flex gap-4'>
              <div className='cursor-pointer'>
                <Image src={'/people.png'} alt='' width={20} height={20} />
              </div>
              <div className='cursor-pointer'>
                <Image src={'/messages.png'} alt='' width={20} height={20} />
              </div>
              <div className='cursor-pointer'>
                <Image src={'/notifications.png'} alt='' width={20} height={20} />
              </div>
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/people.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <HamburgerMenu />
      </div>
      {searchResults.length && isSearchOpen && (
        <div className='absolute top-20 left-[58%] transform -translate-x-1/2 bg-white border rounded-md shadow-lg w-1/6 z-10'>
          <ul>
            {searchResults.map(result => (
              <li key={result.clerkId} className='p-2 border-b last:border-b-0'>
                <Link href={`/profile/${result.clerkId}`} className='flex items-center gap-2' onClick={() => setIsSearchOpen(false)}>
                  <Image src={result.avatar || '/default-avatar.png'} alt='avatar' width={24} height={24} className='w-6 h-6 rounded-full' />
                  <span>{result.name} {result.surname}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
