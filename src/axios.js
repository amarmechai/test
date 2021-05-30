import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const azureUserPhotoCache = setupCache({
  maxAge: 15 * 60 * 1000,
  debug: (d) => console.log(d)
});

axios.defaults.adapter = azureUserPhotoCache.adapter;

// export const cache = setupCache({
//   maxAge: 5000
// });

// export const axiosInstance = axios.create({
//   adapter: cache.adapter
// });
