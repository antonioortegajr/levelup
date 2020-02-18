import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'tel:541-654-563', label: '541-654-563' },
  { href: 'https://www.google.com/maps/search/?api=1&query=level+up+arcade', label: '1290 Oak Street, Eugene, OR 97401' },
  { href: 'https://www.facebook.com/leveluparcade', label: 'leveluparcade' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        background-color: #0f0e0b;
        color: white;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
