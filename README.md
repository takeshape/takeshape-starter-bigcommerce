# TakeShape Starter BigCommerce

The following is a guide to launching a React app that pulls data from a BigCommerce store through TakeShape to display a list of projects.


## Instructions

1. Create a TakeShape project with the pattern in this repo. The button below will deploy the project:

* <a href="https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/takeshape-starter-bigcommerce/tree/main/.takeshape/pattern"><img alt="Deploy To TakeShape" src="https://camo.githubusercontent.com/1b580e3ce353d235bde0f376ca35b0fb26d685f3750a3013ae4b225dd3aaf344/68747470733a2f2f696d616765732e74616b6573686170652e696f2f32636363633832352d373062652d343331632d396261302d3130616233386563643361372f6465762f38653266376264612d306530382d346564652d613534362d3664663539626536613862622f4465706c6f79253230746f25323054616b65536861706525343032782e706e673f6175746f3d666f726d6174253243636f6d7072657373" width="205" height="38" data-canonical-src="https://images.takeshape.io/2cccc825-70be-431c-9ba0-10ab38ecd3a7/dev/8e2f7bda-0e08-4ede-a546-6df59be6a8bb/Deploy%20to%20TakeShape%402x.png?auto=format%2Ccompress" style="max-width:100%;"></a>

2. In the Home tab of your project dashboard, click the BigCommerce logo in the Connections section.

![Connections](./images/bigcommerce-connection-button.png)

2. On the next page, fill in your API path and Access Token from your BigCommerce project. Read our guide on this process if you don't know how:

https://app.takeshape.io/docs/services/providers/bigcommerce/#Connecting-BigCommerce-to-your-TakeShape-project

![Access Tokens](./images/bigcommerce-authentication.png)

2. Follow our documentation to [create a read-only API Key](https://app.takeshape.io/docs/api/api-keys).

3. Find your API Endpoint by navigating to your project in the TakeShape web client and clicking on the Home tab. Scroll down, and you'll see your API Endpoint in the `Useful Snippets` section on the bottom right. Refer to the image below:

![Useful Snippets](./images/useful-snippets.png)


4. In the terminal on your local machine, clone this repo with `git clone https://github.com/takeshape/takeshape-starter-bigcommerce`

5. Open the project directory and edit `.env.example` and replace the text that says `YOUR-ENDPOINT-HERE` with your API Endpoint. Replace the text that says `YOUR-API-KEY-HERE` with your API Key. Save the file and rename it to `.env`.

5. Follow this guide to connect a BigCommerce Store to your project:
https://app.takeshape.io/docs/services/providers/bigcommerce/#Connecting-BigCommerce-to-your-TakeShape-project

5. Once your BigCommerce project is connected to your TakeShape project, enter `npm run start` in your terminal.

5. Enjoy!

## Learn More

Check out [our docs on this project](https://app.takeshape.io/docs/services/providers/bigcommerce/) to learn how this example works.