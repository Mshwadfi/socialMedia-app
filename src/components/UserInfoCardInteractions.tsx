'use client'
import { toggleBlock, toggleFollowRequest } from '@/lib/actions';
import React, { useState } from 'react';

const UserInfoCardInteractions = ({
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent,
  }: {
    userId: string | undefined;
    isUserBlocked: boolean;
    isFollowing: boolean;
    isFollowingSent: boolean;
  }) => {

    const [userInfo, setUserInfo] = useState({
        blocked: isUserBlocked,
        following: isFollowing,
        followRequest: isFollowingSent,
    });

    const [optimisticState, setOptimisticState] = useState(userInfo);

    const followAction = async () => {
        setOptimisticState(prev => ({
            ...prev,
            following: prev.following && false,
            followRequest: !prev.following && !prev.followRequest ? true : false,
        }));

        try {
            userId && await toggleFollowRequest(userId);
            setUserInfo(prev => ({
                ...prev,
                following: prev.following && false,
                followRequest: !prev.following && !prev.followRequest ? true : false,
            }));
        } catch (error) {
            console.log(error);
            setOptimisticState(userInfo); // Revert to original state on error
        }
    }

    const blockAction = async () => {
        setOptimisticState(prev => ({
            ...prev,
            blocked: !prev.blocked,
        }));

        try {
            console.log('try block');
            userId && await toggleBlock(userId);
            setUserInfo(prev => ({
                ...prev,
                blocked: !prev.blocked,
            }));
        } catch (error) {
            console.log(error);
            setOptimisticState(userInfo); // Revert to original state on error
        }
    }

    return (
        <div className='flex flex-col gap-3'>
            <form onSubmit={(e) => { e.preventDefault(); followAction(); }}>
                <button type="submit" className="w-full bg-blue-500 p-2 rounded-md text-white">
                    {optimisticState.following ? 'Unfollow' : optimisticState.followRequest ? "Request Sent" : "Follow"}
                </button>
            </form>
            <form onSubmit={(e) => { e.preventDefault(); blockAction(); }}>
                <button type="submit" className="text-right bg text-red-500 cursor-pointer">
                    {optimisticState.blocked ? 'Unblock' : "Block"}
                </button>
            </form>
        </div>
    );
}

export default UserInfoCardInteractions;
