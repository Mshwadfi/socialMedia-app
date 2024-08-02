'use client';

import { User } from '@prisma/client';
import React, { useActionState, useState } from 'react';
import Image from 'next/image';
import { updateProfile } from '@/lib/actions';
import { CldUploadWidget } from 'next-cloudinary';
import ImagePreset from './ImagePreset';
import { useFormStatus } from 'react-dom';

const UpdateUser = ({ user }: { user: User }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cover , setCover] = useState <any>('');
  const [formState , formAction] = useActionState(updateProfile,{success:false,error:false});
  const {pending} = useFormStatus();
  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setIsFormOpen(true)}
      >
        Update
      </span>
      {isFormOpen && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData)=>formAction({formData,cover:cover?.secure_url})}
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            {/* TITLE */}
            <div>
              <h1>Update Profile</h1>
              <div className="mt-4 text-xs text-gray-500">
                Use the navbar profile to change the avatar or username.
              </div>
            </div>
            {/* COVER PIC UPLOAD */}
            <CldUploadWidget uploadPreset="twasul" onSuccess={(result)=>setCover(result.info)}>
              {({ open }) => (
                <ImagePreset cover={user?.cover!} open={open} />
              )}
            </CldUploadWidget>

            {/* WRAPPER */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue={user.name || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="surname" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  defaultValue={user.surname || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="surname"
                  id="surname"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label htmlFor="description" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  type="text"
                  defaultValue={user.description || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="description"
                  id="description"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label htmlFor="city" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  defaultValue={user.city || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="city"
                  id="city"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label htmlFor="school" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  type="text"
                  defaultValue={user.school || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="school"
                  id="school"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label htmlFor="work" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  defaultValue={user.work || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="work"
                  id="work"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label htmlFor="website" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  defaultValue={user.website || ""}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                  name="website"
                  id="website"
                />
              </div>
            </div>

            <div
              className="absolute text-xl right-2 top-3 cursor-pointer"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              X
            </div>
            <button className="w-full p-2 bg-blue-500 rounded-md text-white m-2" disabled={pending}>
              {pending? 'Update...' : 'Update'}
            </button>
            {formState.success && <span className='text-green-400'>profile updated successfully!</span>}
            {formState.error && <span className='text-red-500'>something went wrong</span>}
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
