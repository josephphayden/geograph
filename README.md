## Demo

A live demo is available at [https://geograph.joseph.codes](https://geograph.joseph.codes)

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Deployment

The demo is served on Netlify, connected to this repo. So deployment is achieved by pushing to master.

## Notes

#### Incomplete data

Some of the data in the dataset is incomplete, I've displayed these values as `N/A` or `Unknown`. In the case of a country having no Gini index, the country is filtered out from the list when sorting by Gini.

#### Syncing between browsers

I haven't attempted this part of the test as there wasn't enough time. My solution would have been to use `socket.io`, hosting the server on a Node instance.

As each change is made locally, the client would broadcast this change to every other client. Each client would be subscribed to updates from the server, and using a React hook would call the `updateCountry` function on each update.
