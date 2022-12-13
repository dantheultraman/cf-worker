addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
	let responseContent = "This is your ";
  responseContent += request.headers.get('cf-connecting-ip');
  responseContent += " and you are accessing this site from " + request.cf.country;
	responseContent += " | " + request.cf.asn;

  const country = request.cf.country;

  if (country != null && country != 'SG') {
    return Response.redirect('https://1.1.1.1/');
  } else {
    return new Response(responseContent, { headers: { "content-type": "application/json;charset=utf-8" }});
  }
}
