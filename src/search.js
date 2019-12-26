/*
  This is a Netlify Function that proxies our Elasticsearch instance.
*/
import fetch from "node-fetch";

export default function(event, context, callback) {
  const path = process.env.ES_PATH;
  const index = process.env.ES_INDEX;

  fetch(`${path}/${index}/_search`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: event.body
  })
    .then(response => response.text().then(body => [response, body]))
    .then(([response, body]) => {
      callback(null, {
        statusCode: response.status,
        body: body
      });
    })
    .catch(() => {
      callback(null, {
        statusCode: 500,
        body: "An error occurred"
      });
    });
};
