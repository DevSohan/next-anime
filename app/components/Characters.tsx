"use client"

import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from '@/app/lib/dataFetching';
import CardCharacter from './CardCharacter';
import Pagination from './Pagination';

const Characters = () => {
    const { data } = useQuery(GET_CHARACTERS);
	console.log(data?.characters.info.pages)
	return (
		<>
			<Pagination />
			<div className='flex flex-row justify-center items-center flex-wrap gap-x-4 gap-y-6' >
				{data?.characters.results.map((character) => (
					<CardCharacter key={character.id} info={character} />
				))}
			</div>
		</>
	);
}

export default Characters
