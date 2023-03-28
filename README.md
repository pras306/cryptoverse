# Cryptoverse

![Cryptoverse](src/assets/images/cryptoverse.png)

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [API References](#api-references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This is a cryptocurrency web app that lists information about popular cryptocurrency coins including their prices, related news articles and other information.

#### Technologies

- React JS
- Redux Toolkit
- React Chart JS

[Back To The Top](#cryptoverse)

---

## How To Use

The website is published at [Cryptoverse](https://cryptocoins-app.netlify.app)

Clone the project 

```bash
  git clone https://github.com/pras306/cryptoverse.git
```

Go to the project directory

```bash
  cd cryptoverse
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

---

## API References

- [Coinranking Rapid API](https://rapidapi.com/Coinranking/api/coinranking1)
- [Bing News Search Rapid API](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1)
- Custom Proxy Server for hiding API key - [https://api-proxy-server-6xbe.onrender.com/api/v1](https://api-proxy-server-6xbe.onrender.com/api/v1)


#### GET coins

```http
  GET /coinranking/coins?limit=${limit}
```

| Parameter   | Type     | Description                                                  |
| :---------- | :------- | :----------------------------------------------------------- |
| `limit`     | `number` | **Required**. the limit for different crypto coins           |


[Back To The Top](#cryptoverse)


#### GET coin

```http
  GET /coinranking/coin/${coinId}
```

| Parameter   | Type     | Description                                                  |
| :---------- | :------- | :----------------------------------------------------------- |
| `coinId`    | `number` | **Required**. the UUID of the coin you want to request       |


[Back To The Top](#cryptoverse)


#### GET coin price history

```http
  GET /coinranking/coin/${coinId}/history?timePeriod=${timePeriod}
```

| Parameter    | Type     | Description                                                        |
| :----------  | :------- | :----------------------------------------------------------------- |
| `coinId`     | `number` | **Required**. the UUID of the coin you want to request             |
| `timePeriod` | `number` | **Required**. Timeperiod where the change and history are based on |


[Back To The Top](#cryptoverse)


#### GET news search

```http
  GET /bingnewssearch/news/search?q=${searchTerm}&count=${count}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `searchTerm`  | `string` | **Required**. the query string for user's search                 |
| `count`       | `number` | **Required**. the number of news articles to return in search    |


[Back To The Top](#cryptoverse)

---

## License

MIT License

Copyright (c) [2021] [Prasanna Sriram]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#cryptoverse)

---

## Author Info

- Github - [pras306](https://github.com/pras306)
- LinkedIn - [Prasanna Sriram](https://www.linkedin.com/in/prasanna-sriram/)
- Portfolio - [Personal Portfolio](https://prasanna-sriram.netlify.app/)

[Back To The Top](#cryptoverse)