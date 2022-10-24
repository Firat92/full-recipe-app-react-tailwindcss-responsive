import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
	return (
		<div className='App'>
			<div
				className='flex justify-start items-center
			py-16 px-0'
			>
				<GiKnifeFork className='text-2xl' />
				<Link
					to={'/'}
					className='no-underline text-2xl font-normal font-sans ml-1 sm:text-base'
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
