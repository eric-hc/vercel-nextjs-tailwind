import Link from 'next/link'

const links = [
  { href: '/notes', label: 'Notes' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex mt-8 mx-16 rounded-lg px-48 justify-between h-16 items-center p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <li>
          <Link href="/">
            <a className="text-white underline hover:no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="bg-transparent hover:bg-white text-white font-semibold hover:text-gray-700 py-2 px-4 border border-white hover:border-transparent rounded">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
