"use client"

import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from '@/app/lib/dataFetching';

const FetchTest = () => {
    const { data } = useQuery(GET_CHARACTERS);
	console.log(data)
	return (
	  <ol>
		{data?.characters.results.map((character) => (
		  <li key={character.name}>{character.name}</li>
		))}
	  </ol>
	);
}

export default FetchTest
