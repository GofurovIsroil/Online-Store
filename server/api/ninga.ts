export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);

  //   const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_rgJsnZy6PNLeWcs9LSWqJHD5eyGao0zwQOBGZqUf"
  );

  return data;
});
