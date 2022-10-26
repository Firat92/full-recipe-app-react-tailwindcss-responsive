/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	const getCousine = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		);

		const recipes = await data.json();
		console.log(recipes);
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCousine(params.type);
		console.log(params);
	}, [params.type]);

	return (
		<motion.div
			className='grid grid-cols-20 gap-12 mb-4'
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{cuisine.map((item) => {
				return (
					<div key={item.id} className=''>
						<Link to={'/recipe/' + item.id} className='no-underline'>
							<div className='min-h-[18rem] relative'>
								<p className='vegpop-content'>{item.title}</p>
								<img src={item.image} alt={item.title} className='vegpop-img' />
								<div className='vegpop-content'></div>
								<div className='vegpop-div'></div>
							</div>
						</Link>
					</div>
				);
			})}
		</motion.div>
	);
};

export default Cuisine;
