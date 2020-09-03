import Nav from '../components/nav'

export default function Layout({children}) {
  return (
    <div>
      <Nav />
      <div className="py-20">
        {children}
      </div>
    </div>
  )
}
