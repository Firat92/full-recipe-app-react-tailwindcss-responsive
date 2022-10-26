import React from 'react';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');

		if (check) {
			setPopular(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
			);
			const data = await api.json();
			// console.log(data);

			localStorage.setItem('popular', JSON.stringify(data.recipes));
			setPopular(data.recipes);
			console.log(data.recipes);
		}
	};

	return (
		<div className='my-16 mx-0'>
			<h3 className='text-2xl font-bold mb-4 '>Popular Picks</h3>
			<Splide
				options={{
					mediaQuery: 'min',
					breakpoints: {
						1400: {
							perPage: 4,
						},
						1280: {
							perPage: 3,
						},
						534: {
							perPage: 2,
						},
					},
					arrows: false,
					pagination: false,
					drag: 'free',
					gap: '5rem',
				}}
			>
				{popular.map((recipe) => {
					return (
						<SplideSlide key={recipe.id}>
							<div className='min-h-[18rem] rounded-xl overflow-hidden relative'>
								<Link to={'./recipe/' + recipe.id}>
									<p className='vegpop-content'>{recipe.title}</p>
									<img
										src={recipe.image}
										alt={recipe.title}
										className='vegpop-img'
									/>
								</Link>
								<div className='vegpop-div'></div>
							</div>
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
};

export default Popular;
