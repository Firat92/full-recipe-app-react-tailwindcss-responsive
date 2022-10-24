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
		<div className='flex mt-28 mb-20 xl:flex-col md:mt-16'>
			<div>
				<h2 className='mb-8 font-bold xs:mb-4'>{details.title}</h2>
				<img
					src={details.image}
					alt={details.title}
					className='rounded-3xl md:w-10/12'
				/>
			</div>

			<div className='ml-36 xl:flex-col xl:ml-0'>
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

				{activeTab === 'instructions' && (
					<div className='xs:text-sm'>
						<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
						<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul className='mt-8 list-disc'>
						{details.extendedIngredients.map((ingredient, i) => (
							<li key={ingredient.id + i} className='text-xl xs:text-sm'>
								{ingredient.original}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Recipe;
