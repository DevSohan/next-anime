import { gql, TypedDocumentNode } from "@apollo/client";

export interface Character {
    id: string
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        id: string
        name: string
        type: string
        dimension: string
    }
    location: {
        id: string
        name: string
        type: string
        dimension: string
    }
    image: string
    episode: {
        id: string
        name: string
        air_date: string
        episode: string
    }
}

export const GET_CHARACTERS:TypedDocumentNode<{
    characters: {
        results: Character[]
        info: {
            count: number
            pages: number
            next: number
            prev: number
        }
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
                gender
                origin{
                    id
                    name
                    type
                    dimension                    
                }
                location{
                    id
                    name
                    type
                    dimension                    
                }
                image
                episode{
                    id
                    name
                    air_date
                    episode             
                }
            }
            info {
                count
                pages
                next
                prev
            }
        }
    }
`;