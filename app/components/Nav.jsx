import Link from 'next/link'
import React from 'react'
import { BuildingStorefrontIcon, HomeIcon, Cog6ToothIcon, QueueListIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';

export default function Nav() {
    const inactiveLink = 'flex gap-1 items-center p-1';
    const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg';
    const pathName = usePathname();

    return (
        <aside className='text-white p-4 pr-0'>
            <Link href="/" className='flex items-center gap-1 m-4 font-bold text-xl uppercase'>
                <BuildingStorefrontIcon className='h-8' />
                <span className=''>
                    Ecommerce
                </span>
            </Link>
            <nav className='flex flex-col gap-2'>
                <Link href="/" className={pathName === '/' ? activeLink : inactiveLink}>
                    <HomeIcon className='h-6' />
                    Dashboard
                </Link>
                <Link href="/products" className={pathName.includes('/products') ? activeLink : inactiveLink}>
                    <ArchiveBoxIcon className='h-6' />
                    Products
                </Link>
                <Link href="/orders" className={pathName.includes('/orders') ? activeLink : inactiveLink}>
                    <QueueListIcon className='h-6' />
                    Orders
                </Link>
                <Link href="/settings" className={pathName.includes('/settings') ? activeLink : inactiveLink}>
                    <Cog6ToothIcon className='h-6' />
                    Settings
                </Link>
            </nav>
        </aside>
    )
}

