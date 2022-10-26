import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiBowlOfRice } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Category = () => {
	return (
		<div className='flex flex-wrap justify-between m-8'>
			<NavLink to={'/cuisine/Italian'} className='cuisine-sec'>
				<FaPizzaSlice className='sign' />
				<h4>Italian</h4>
			</NavLink>
			<NavLink to={'/cuisine/American'} className='cuisine-sec'>
				<FaHamburger className='sign' />
				<h4>American</h4>
			</NavLink>
			<NavLink to={'/cuisine/Chinese'} className='cuisine-sec'>
				<GiBowlOfRice className='sign' />
				<h4>Chinese</h4>
			</NavLink>
			<NavLink to={'/cuisine/Thai'} className='cuisine-sec'>
				<GiNoodles className='sign' />
				<h4>Thai</h4>
			</NavLink>
		</div>
	);
};

export default Category;
