import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'tel:541-654-563', label: '541-654-563', icon: 'fa fa-phone'},
  { href: 'https://www.google.com/maps/search/?api=1&query=level+up+arcade', label: '1290 Oak Street, Eugene, OR 97401', icon: 'fa fa-map-marker'},
  { href: 'https://www.facebook.com/leveluparcade', label: 'leveluparcade', icon: 'fa fa-facebook'},
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label, icon}) => (
        <li key={key}>
            <i class={icon}></i>
            <a href={href}>
                {label}
            </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
