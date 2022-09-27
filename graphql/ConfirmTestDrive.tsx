import {gql} from "@apollo/client";

export const ConfirmTestDrive = gql`
    mutation InsertConfirmTestDrive {
      insert_testdrive_confirmations(objects: {name: "Stephen Rains", email: "test@gmail.com", phone: "1112223333", date: "09/27/2022", time: "3:00 PM", location: 1, zip: "00000"}) {
        returning {
          name
        }
      }
    }
`;