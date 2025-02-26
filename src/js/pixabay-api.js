// const BASE_URL = 'https://pixabay.com/api/';
const baseUrl = 'https://api.unsplash.com/search/photos/?';
// const API_KEY = '31000801-179358ed9db1a9fc0904af43d';

export function getImagesByQuery(query) {
  // const params = new URLSearchParams({
  //   key: API_KEY,
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  //   safesearch: true,
  //   q: query,
  // });

  // return fetch(`${BASE_URL}?${params}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }

  //   return response.json();
  // });
  const searchParams = new URLSearchParams({
    client_id: '9Beoy0UgY8dZI_NMQw9iR-Icf7z3j434hCWFybIXpTg',
    orientation: 'landscape',
    query: query,
  });

  return fetch(`${baseUrl}${searchParams}`)
    .then(res => res.json())
    .catch(console.log);
}
