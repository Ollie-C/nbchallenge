# tvbland

Live: https://nbchallenge.vercel.app/ (env not fully configured yet - dynamic routes do not work)

Github: https://github.com/Ollie-C/nbchallenge

## Introduction

tvbland is a TV show app that allows users to browse the latest added TV shows in the UK, US and Japan and look up individual show details for a rating, cast list and weekly schedule.

Built in Next.js, tvbland makes use of the inbuilt API capability and implements a graphQL wrapper built on a graphql-yoga server for a REST API.

### Screenshots

![tvbland_screenshot](/public/screenshots/collage.png)

### Get started

1. Open up your terminal and clone the repo: ``git clone https://github.com/Ollie-C/tvbland.git``
2. Install dependencies: ``npm i / npm install``
3. Give it a whirl: ``npx next start``

## Details

### Tools

- Framework: Next.js for in-built API and image optimisation. Better accessibility and load times.
- Language: TypeScript for type safety and ability to match custom types with graphql schema
- GraphQL client: Apollo client though tempted to migrate to SWR
- GraphQL server: graphql-yoga for ease of set-up
- Styling: Modular SASS for organised stylesheets with nesting. Framer-motion for natural animations to complement a minimalist theme
- ESLint
- Prettier
- Git flow
- (Jest with React Testing Library) *not yet implemented*

### Design Approach

I tried to create a minimalist theme with simple animations built around a high contrast colour scheme. Shows and movies are usually associated with later times in the day hence a dark header.

Around 40% of the screen height is taken up by the header, any less and I'd feel it necessary to squeeze all of the episodes into the remaining space but given the nature of the content, that just wasn't happening, and this layout gives a sense of a rich content base.

### Features

1. Data for all shows being shown on current date in selected area
2. Users are able to view up to 18 episode cards per screen
3. Pagination for remainder of episodes
4. Filter search mimics edge functionality
5. Users can filter by country - currently 3 availabe: UK, US and Japan
6. Individual detail pages showing cast and show details
7. Client side and server side rendering with Apollo client

### Testing

Whilst I'm familiar with Jest, and Apollo client, I haven't actually used these in the same app before and understanding Apollo's MockedProvider is new to me and something I'm interested to learn more about!

### Lighthouse report

![tvbland_screenshot](/public/screenshots/lighthouse.PNG)

Potentially room for further image optimisation

### Unresolved bugs (not including ones that I'm still yet to discover....)

1. When filtering in search, page remains on the current page regardless of how many episode cards are being shown and can result in the page being blank unless navigating back a page
2. Data includes duplicate shows. Whilst they are seperate episodes it would be great to filter these out
3. Deployment - animations are jittery [UPDATE]
4. Deployment - dynamic pages not working. Issue with getServerSideProps and configuration of apollo client

### Limitations

- Currently no user sessions and authentication
- GraphQL schemas are messy without the use of tools like Pothos

### Future of the project

- Address all bugs mentioned above
- User accounts
- More dynamic & interactive data on details page

### Notes

Linting and webpack configured with create-next-app

Eastenders is still going ... ?

Ollie
