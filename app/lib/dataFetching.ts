import { gql, TypedDocumentNode } from "@apollo/client";

export interface Character {
    id: string
    name: string
    status: string
    species: string
    type: string
}

export const GET_CHARACTERS:TypedDocumentNode<{
    characters: {
        results: Character[]
    }
}> = gql`
	query Characters {
        characters {
            results {
            id
            name
            status
            species
            type
            }
        }
    }
`;