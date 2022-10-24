import React, { useState } from 'react';
// import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/searched/' + input);
	};

	return (
		<form onSubmit={submitHandler} className='my-0 mx-8'>
			<div className='relative w-full'>
				<FaSearch
					className='absolute top-1/2 left-0 translate-x-full -translate-y-1/2 text-white cursor-pointer sm:scale-75
				sm:translate-x-1/2'
				/>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className='border-none bg-gradient-to-b from-[#494949] to-[#313131] text-md text-white py-4 px-12
					outline-none w-full rounded-2xl sm:text-base sm:py-2 sm:px-8 sm:rounded-xl'
				/>
			</div>
		</form>
	);
};

export default Search;
