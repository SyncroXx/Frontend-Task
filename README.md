# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

1. _Required_: Add a "Valuation changes" section to the page. `mock.png` has been provided as a design reference for this new feature

- sincePurchase is calculated by `recentValuation - originalPurchasePrice`
- sincePurchasePercentage is calculated by `sincePurchase / originalPurchasePrice * 100`
- annualAppreciation is calulcated by `sincePurchasePercentage / number of years since purchase`
- For reference the colours used for the positive change in the image are #c2f7e1 and #006b57
- _Optional_: Consider what other variants this component could take

2. _Optional_: Request data via the API rather than the hardcoded object in `property-details/index`

- Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
- Someone started implementing this feature with a `useEffect` hook, you can finish implementing this method or use another that you are familiar with

3. _Optional_: Consider opportunities to reduce repetition in the code and increase legibility

- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

### Notes

---

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

---

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, try not to spend more **two hours** working on it.

We also ask that you update the readme with answers to the following questions

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

Answers:

1.  • I would have done research and used PropTypes (I'm more familiar using Typescript).
    • I would have added a spacing utility to the theme. (Utilising multiplications of a single base value)
    • I would have improved the API error handling defining each HTTP status code scenario.

2.  I think this page is hard to 'read' for the user as it contains different sections but they all look similar, maybe I would have added some icons to distinguish them. Also, the Mortgage link is not visually intuitive, maybe I would've added a button that redirects to the page.
    Furthermore, I would have made all the content fit within 100vh, as it is important for the user to visualise the button "Edit Account".
    A new design idea could be using cards instead of the rows.

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
