import gql from "graphql-tag"; //write graphql on front-end

export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            genres
            rating
        }
    }
`
//대부분 query라서 query 생략 가능 mutation은 써줘야함
