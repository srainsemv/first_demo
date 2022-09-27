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

export const CreateAvailability = (date: string, vehicle: number) => gql`
    mutation CreateAvailability {
      insert_testdrive_availability(objects:
       {date: "${date}", vehicle: ${vehicle}, t0: false, t1: false, t2: false, t3: false, t4: false, t5: false, t6: false, t7: false, t8: true, t9: true, t10: true, t11: true, t12: true, t13: true, t14: true, t15: true, t16: true, t17: true, t18: true, t19: false, t20: false, t21: false, t22: false, t23: false}
       ) {
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