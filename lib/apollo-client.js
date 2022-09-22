import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers, 'x-hasura-admin-secret': 'WzyMZ2gW6jTg92LTB3toSvDOmzWrMh0ch98WEKnCBUPqMMd3fynWpY7JX6MWoGu2'
        }
    }
});


const httpLink = createHttpLink({
    uri: 'https://modest-swan-16.hasura.app/v1/graphql',
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client