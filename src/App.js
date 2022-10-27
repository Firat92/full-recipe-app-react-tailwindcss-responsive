import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
	return (
		<div className='mx-2 lg:mx-auto md:mx-6 sm:mx-4 max-w-[70rem] px-2 md:px-4'>
			<div
				className='flex justify-start items-center
			py-16 px-0'
			>
				<GiKnifeFork className='text-base xs:text-lg md:text-xl lg:text-3xl' />
				<Link
					to={'/'}
					className='no-underline text-base font-normal font-sans ml-1 xs:text-lg md:text-xl lg:text-3xl'
				>
					deliciousss
				</Link>
			</div>
			<Search />
			<Category />
			<Pages />
		</div>
	);
}

export default App;
