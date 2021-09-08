import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto text-gray-400">
        <nav>
          <Link className="px-4 hover:text-white" to="/">Dashboard</Link>
          <Link className="px-4 hover:text-white" to="/customers">Khách hàng</Link>
          <Link className="px-4 hover:text-white" to="/bills">Hóa đơn</Link>
        </nav>
      </div>
    </div>
  )
}
