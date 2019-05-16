## Setup

Clone repository

`git clone https://github.com/evanwinter/starter my-project && cd my-project`

Install dependencies

`npm install`

Start local dev

`npm start`

Open a browser to localhost:1234 and you're ready to go.

## Deploy

Install [Surge]('https://surge.sh')

`npm install -g surge`

Create the production build

`npm run build`

Run `surge` from your project root

`surge`

It will prompt you to specify a directory to publish. Point it towards the `dist/` directory, like so:

`project: /Users/.../starter/dist/`

Then, just choose a domain name, and that's that.