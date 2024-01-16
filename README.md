This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After installing the dependencies with `npm install` or `yarn` run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tehcnical considerations for the reviewer

- The application is built using Next.js version 14, which required node version 18.17
- The application CSS framework used is tailwind.
- Whenever possible, react hooks were not used in order to keep the codebase as simple as possible and to leverage
    the benefits of next.js and server rendered components.
- To simplify the application does not have any route handlers, instead the data fetching is done in the page component
    itself.

## Architecture Overview

The architectural style applied to this application is described below:

- page.tsx files loads and instantiates components from domain folders (for example app/_listing) and passes props
    to them, when necessary these page.tsx files will also hold state and any context necessary following the react
    philosophy by lifting state up when necessary and act as higher order components.
- Components that belong to a single domain is kept in specific _[domain] folders, for example the 
    listings components are kept in `_listing`.
- The lib folder contains utilities and data functions that are used by multiple components. Also any data fetching 
    functions are kept in lib under their respective domain folders.
- The _components folder contains components that are used by multiple domains, for example buttons, forms, etc.
    Whenever a component happens to be used in more than one domain, it will be placed in this _components folder.
- The folder naming conventions follows the standards for next.js applications, using `_` in front of the folder name
    in order to prevent next.js from creating a route for that folder.
- Folders like _listing are kept at the top level of the app folder for easy access and to prevent the app folder from
    becoming too cluttered down the line. While the route folders are kept in the app folder, the components that are
    used by those routes are kept in the _[domain] folders.
  
## Folder Structure

All the relevant files and its organization are listed below:

- ## app/
- ## _components/
  - ## buttons
    - ### DefaultButton.tsx
    - A button component for general use.
    - ### LinkButton.tsx
    - A button that acts as a hyperlink, used for navigation.
- ## _listing/
  - ### ListingCard.tsx
  - Component for displaying a single property in a card layout.
  - ### ListingDate.tsx
  - Displays the date on which the listing was added.
  - ### ListingFactsCard.tsx
  - Shows detailed info about the property, like beds, baths, etc.
  - ### ListingGrid.tsx
  - Arranges the listings in a grid layout.
  - ### ListingGridFilter.tsx
  - Provides filtering options to narrow down property listings.
  - ### ListingGridSkeleton.tsx
  - A placeholder display for ListingGrid while data is being loaded.
  - ### ListingLocation.tsx
  - Shows the location of the property.
  - ### ListingPrice.tsx
  - Formats and displays the price of the property.
  - ### ListingTitle.tsx
  - Displays the title of the property listing.
  - ### ContactForm.tsx
  - A form for contacting the listing agent.
  - ### FavoriteListingButton.tsx
  - A button for favoriting a listing.
- ## lib/
  - ## formatters
    - ### beds-bathrooms-formatter.ts
    - Utility to format the beds and bathrooms count for display.
    - ### listing-date-formatter.ts
    - Formats the date of listing.
    - ### sale-price-formatter.ts
    - Formats the sale price for display.
  - ## listing
  - Data functions and types for listing data.
    - ### data.ts
    - Functions for fetching listing data.
- ## listings
  - ### [id].tsx
  - Displays the listing details page
  
