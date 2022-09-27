import {gql, useQuery} from "@apollo/client";

export const GET_LOCATIONS = gql`
    query GetLocations {
      testdrive_locations {
        id
        name
        address1
        city
        state
        zip
        country
        location_details_relationship {
          phone
          notes
        }
      }
    }
`;