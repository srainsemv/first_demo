import {gql} from "@apollo/client";

export const ConfirmTestDrive = (name: string, email:string, phone:string, date:string, time:string, location:number, zip:string) => gql`
    mutation InsertConfirmTestDrive {
      insert_testdrive_confirmations(objects: {name: "${name}", email: "${email}", phone: "${phone}", date: "${date}", time: "${time}", location: ${location}, zip: "${zip}"}) {
        returning {
          id
        }
      }
    }
`;