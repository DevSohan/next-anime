"use client"

import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from '@/app/lib/dataFetching';
import CardCharacter from './CardCharacter';

const Characters = () => {
    const { data } = useQuery(GET_CHARACTERS);
	console.log(data)
	return (
	  <ol>
		{data?.characters.results.map((character) => (
		  <>
            <li key={character.name}>{character.name}</li>
            <CardCharacter key={character.id} info={character} />
          </>
		))}
	  </ol>
	);
}

export default Characters
