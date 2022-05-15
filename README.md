# DemoBlog
Disclaimer: 
This is a project for demo purposes. 

It uses following stack:

Backend:
- PostgreSQL database
- Prisma (ORM)
- ApolloServer(with Express plugin)/GraphQL

Frontend:
- React
    - ReactQuery / GraphQL
    - Styled Components
    - ApolloClient
    - Auth0
- Typescript

## Features
- Upload articles (auth required)
- Post comments (auth required)
- Read articles in markdown format
- Authentication via auth0

## Future improvements/Bugfixes
- [] Persist authentication in localstorage
- [] Get article icons from database
- [] Add authorization for backend
- [] Add timestamps to dates
- [] Invalidate stale data in mutations [Link](https://react-query.tanstack.com/guides/invalidations-from-mutations) -> fix the need to leave page and revisit to see the new mutations
- [] Improve security for uploads against html injection attacks
- [] Login redirects to previous page in history (same with logout)
- [] Proper usermanagement in backend
- [] Add image support for markdown
- [] Add storybook to test new components
- [] Add unittests
- [] Add E2E-tests with Cypress for example
- [] Introduce lint rules
- [] Add proper types
- [] Improve project structure [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- [] Add different language support with i18n
- [] Add CMS (Lokalise)
- [] Add mobile support
- [] Global statemanagement with Redux
- [] Improve code quality and readability

## Good reads:
- [React Query and Graphql](https://www.scien.cx/2022/01/02/graphql-api-requests-with-typescript-react-query-graphql-code-generator/)
