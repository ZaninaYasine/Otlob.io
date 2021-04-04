// write fake date
import client from "../api/apolloClient";
import { sb, mc, ph } from "../images";
import {
  california,
  chicago,
  deepdish,
  garlicfingers,
  greek,
  neapolitan,
  seafood,
  sicilian,
  salad,
  pitaya,
} from "../images/product_images";

export const writeData = () => {
  client.writeData({
    data: {
      cart: { list: [] },
      categories: [
        {
          name: "مكدونالدز",
          description: "الحمرا",
          image: mc,
          status: "open",
          products: [
            {
              name: "Neapolitan",
              description:
                "Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples",
              image: neapolitan,
              price: "$6.99",
              rating: 5,
              __typename: "productPayload",
            },
            {
              name: "Chicago Pizza",
              description:
                "Chicago pizza, also commonly referred to as deep-dish pizza",
              image: chicago,
              price: "$4.99",
              rating: 2,
              __typename: "productPayload",
            },
            {
              name: "Sicilian Pizza",
              description:
                "Sicilian pizza, also known as sfincione, provides a thick cut of pizza with pillowy dough",
              image: sicilian,
              price: "$9.99",
              rating: 5,
              __typename: "productPayload",
            },
            {
              name: "Greek",
              description:
                "Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza",
              image: greek,
              price: "$19.99",
              rating: 4,
              __typename: "productPayload",
            },
            {
              name: "California",
              description:
                "California pizza, or gourmet pizza, is known for its unusual ingredients.",
              image: california,
              price: "$3.49",
              rating: 2,
              __typename: "productPayload",
            },
            {
              name: "Deep Dish",
              description:
                "Unlike most pizzas, deep dish is eaten with a knife and fork.",
              image: deepdish,
              price: "$8.99",
              rating: 4,
              __typename: "productPayload",
            },
            {
              name: "Seafood Pizza",
              description:
                "Seafood pizza is pizza prepared with seafood as a primary ingredient.",
              image: seafood,
              price: "$14.99",
              rating: 5,
              __typename: "productPayload",
            },
            {
              name: "Garlic Fingers",
              description:
                "Garlic fingers is a popular food item throughout Atlantic Canada.",
              image: garlicfingers,
              price: "$6.99",
              rating: 3,
              __typename: "productPayload",
            },
          ],
          __typename: "CategoryPayload",
        },
        {
          name: "بيتزا هوت",
          description: "الرياض",
          image: ph,
          status: "closed",
          products: [
            {
              name: "Noodle Salad",
              description:
                "Fresh and light Vietnamese Noodle Salad, with fresh slivered veggies...",
              image: salad,
              price: "$3.99",
              rating: 3,
              __typename: "productPayload",
            },
          ],
          __typename: "CategoryPayload",
        },
        {
          id: "03",
          name: "ستاربكس",
          description: "الرياض",
          image: sb,
          status: "busy",
          products: [
            {
              name: "Pitaya Cake",
              description:
                "Dragon fruit has a delicate sweet flavor which is nice complement to the soft cake.",
              image: pitaya,
              price: "$4.99",
              rating: 4,
              __typename: "productPayload",
            },
          ],
          __typename: "CategoryPayload",
        },
      ],
    },
  });
};
