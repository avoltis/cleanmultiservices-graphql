import { CleanMultiservicesAPI } from './datasource';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type address {
    street: String
    city: String
}
type contact {
    text: String
    phone: String
    email: String
}
type contactPageText {
    header: String
}
type open {
    openingHoursMondayToFriday: String
    openingHoursSaturday: String
    openingHoursSunday: String
    monday: String
    tuesday: String
    wednesday: String
    thursday: String
    friday: String
    saturday: String
    sunday: String
}
type storeSection {
    title: String
    smallTitle: String
    open: open
}
type storePageText {
    header: String
    mainSection: storeSection
    middleSection: Section
  }
type productsPageText {
    header: String
    mainSection: Section
    middleSection: Section
    footerSection: Section
  }
type aboutPageText {
    header: String
    title: String
    smallTitle: String
    descriptionPart1: String
    boldTextPart1: String
    boldTextPart1Description: String
    boldTextPart2: String
    boldTextPart2Description: String
    descriptionPart2: String
  }
  type mainPageFooterSection {
    title: String
    smallTitle: String
    description: String
  }
  type Section {
    title: String
    smallTitle: String
    description: String
    descriptionPart1: String
    boldTextPart1: String
    boldTextPart1Description: String
    boldTextPart2: String
    descriptionPart2: String
    boldTextPart2Description: String
    boldTextPart3: String
    boldTextPart3Description: String
    contact: String
  }
  type mainPageText {
    header: String
    mainSection: Section
    mainPageFooterSection: mainPageFooterSection
  }
  type headerText {
    title: String
    smallTitle: String
  }
  type data {
    headerText: headerText
    mainPageText: mainPageText
    aboutPageText: aboutPageText
    productsPageText: productsPageText
    storePageText: storePageText
    contactPageText: contactPageText
    contact: contact
    address: address
    footerText: String
  }
  type Query {
    cleanMultiservices: data
  }
`;

const resolvers = {
  Query: {
    cleanMultiservices: (root, args, { dataSources }) =>
      dataSources.cleanMultiservicesAPI.cleanMultiservices()
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    cleanMultiservicesAPI: new CleanMultiservicesAPI()
  }),
  introspection: true,
  playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
