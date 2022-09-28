import {gql} from "@apollo/client";

export const CreateVehicle = (vin: string, gen: string, color: string, location: number, in_service: boolean) => gql`
    mutation CreateVehicle {
      insert_testdrive_vehicles(objects: {vin: "${vin}", gen: "${gen}", color: "${color}", location: ${location}, in_service: ${in_service}}) {
        returning {
          id
        }
      }
    }
`;

export const CreateAvailability = (instances: string[]) => gql`
    mutation CreateAvailability {
      insert_testdrive_availability(objects: [${instances}]) {
        returning {
          id
        }
      }
    }
`;

export const GetVehicleIDs = gql`
    query MyQuery {
      testdrive_vehicles {
        id
      }
    }
`;