import { Link } from "react-router-dom";

const Header = ({ title }) => {
	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
				<Link to='/login'>
				<button className="bg-black text-white px-4 py-2 rounded border border-black">
					Login
				</button>
				</Link>
			</div>
		</header>
	);
};
export default Header;
