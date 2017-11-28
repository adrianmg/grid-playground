import Link from 'next/link'

const Header = () => (
  <div>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>

    <style jsx>{`
      a { margin-right: 8px; }
    `}
    </style>
  </div>
)

export default Header
