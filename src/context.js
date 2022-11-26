import { createContext } from "react";

// const dataContext = createContext({
//     page: 'Login',
//     loginPage: true,
//     cardDetails: false,
//     cardData: {
//       name: 'IVAN IVANOV',
//       time: '05/08',
//       number: '0000 0000 0000 0000',
//       secret: '667'
//     },
// })
const dataContext = createContext([[],() => {}])

export default dataContext;