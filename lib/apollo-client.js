import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers, 'x-hasura-admin-secret': 'jS5InkRpfPJyD3MplB9fpcqThXj7NRLVRN6GydX83yb3FcpCe25ISaVNKAGKN4r3'
        }
    }
});


const httpLink = createHttpLink({
    uri: 'https://suitable-scorpion-22.hasura.app/v1/graphql',
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client