import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Searched = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
		);

		const recipes = await data.json();
		// console.log(recipes);
		setSearchedRecipes(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<div className='grid gap-12 grid-cols-20 mb-4'>
			{searchedRecipes.map((item) => {
				return (
					<div key={item.id}>
						<Link to={'/recipe/' + item.id}>
							<div className='min-h-[18rem] relative'>
								<img src={item.image} alt='' className='vegpop-img' />
								<div className='vegpop-content'>{item.title}</div>
								<div className='vegpop-div'></div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Searched;
