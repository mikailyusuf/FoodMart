import React from 'react'
import { GetStaticProps } from 'next'
// import Link from 'next/link'

import Link from './link'

import { navLinks } from "../data/nav"


function Nav(props):JSX.Element {
    return (
        <div className="flex justify-between items-center pt-6">
            <div className="flex space-x-36">
                <select className="">
                    <option>Shop by Departments</option>
                    <option>Shop by Category</option>
                </select>
                <nav className="">
                    <ul className="flex">
                        {navLinks.map(link => (
                            <Link key={link.title} href={link.href} className="px-6 py-2 leading-22 capitalize text-222 font-OpenSans" activeClassName="bg-FFC rounded-md">{link.title}</Link>
                        ))}
                    </ul>
                    
                </nav>
            </div>
            <div className="flex space-x-[9px] items-center">
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.625 22.2857C1.625 23.2339 2.35117 24 3.25 24H11.375V15.4286H1.625V22.2857ZM14.625 24H22.75C23.6488 24 24.375 23.2339 24.375 22.2857V15.4286H14.625V24ZM24.375 6.85714H22.2371C22.552 6.20893 22.75 5.49107 22.75 4.71429C22.75 2.11607 20.7441 0 18.2812 0C16.1688 0 14.8027 1.14107 13.0508 3.65893C11.2988 1.14107 9.93281 0 7.82031 0C5.35742 0 3.35156 2.11607 3.35156 4.71429C3.35156 5.49107 3.54453 6.20893 3.86445 6.85714H1.625C0.726172 6.85714 0 7.62321 0 8.57143V12.8571C0 13.3286 0.365625 13.7143 0.8125 13.7143H25.1875C25.6344 13.7143 26 13.3286 26 12.8571V8.57143C26 7.62321 25.2738 6.85714 24.375 6.85714ZM7.81523 6.85714C6.69297 6.85714 5.78398 5.89821 5.78398 4.71429C5.78398 3.53036 6.69297 2.57143 7.81523 2.57143C8.82578 2.57143 9.57227 2.74821 12.1875 6.85714H7.81523ZM18.2812 6.85714H13.909C16.5191 2.75893 17.2453 2.57143 18.2812 2.57143C19.4035 2.57143 20.3125 3.53036 20.3125 4.71429C20.3125 5.89821 19.4035 6.85714 18.2812 6.85714Z" fill="#FFA801"/>
                </svg>
                <p className="font-semibold leading-22 capitalize text-222 font-OpenSans">Get your coupon code</p>
            </div>
        </div>
    )
}

export default Nav

// export function getStaticProps(props) {
//     return {
//         props: {
//             navLinks: ["Home", "Shop", "Pages", "Services", "Blog", "Contact", "Offers"]
//         }
//     }

// }