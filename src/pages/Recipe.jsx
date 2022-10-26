import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
	let params = useParams();

	const [details, setDetails] = useState({});

	const [activeTab, setActiveTab] = useState('instructions');

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const detailData = await data.json();
		console.log(detailData);
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.name]);

	return (
		<div className='flex mt-10 flex-col'>
			<div>
				<h2 className='mb-4 ml-4 font-bold '>{details.title}</h2>
				<img
					src={details.image}
					alt={details.title}
					className='rounded-3xl w-80 h-80 ml-4 xs:w-96 xs:h-96 sm:w-full sm:h-full'
				/>
			</div>

			<div className='ml-4 mb-4 text-sm '>
				<div className='flex mr-4'>
					<button
						className={activeTab === 'instructions' ? 'active' : ''}
						onClick={() => setActiveTab('instructions')}
					>
						Instructions
					</button>
					<button
						className={activeTab === 'ingredients' ? 'active' : ''}
						onClick={() => setActiveTab('ingredients')}
					>
						Ingredients
					</button>
				</div>

				{activeTab === 'instructions' && (
					<div className='mt-4'>
						<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
						<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul className='mt-4 list-disc'>
						{details.extendedIngredients.map((ingredient, i) => (
							<li key={ingredient.id + i}>{ingredient.original}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Recipe;
