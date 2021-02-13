import React from 'react';
import { AiFillHome, AiOutlineShop } from 'react-icons/ai';
import { BsCollectionPlay } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiNintendogamecube } from 'react-icons/hi';

export const navArr = [
    {
        title: 'home',
        icon: <AiFillHome />
    },
    {
        title: 'watch',
        icon: <BsCollectionPlay />
    },
    {
        title: 'marketplace',
        icon: <AiOutlineShop />
    },
    {
        title: 'groups',
        icon: <HiOutlineUserGroup />
    },
    {
        title: 'gaming',
        icon: <SiNintendogamecube />
    },
]