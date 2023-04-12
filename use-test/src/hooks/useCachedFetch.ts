
const cachedFetches = {};
const useCachedFetch = (url) => {
    if (!cachedFetches[url]) {
        cachedFetches[url] = fetch(url).then(async (res) => ({
            status: res.status,
            data: res.status === 200 ? await res.json() : null,
        }));
    }
    return cachedFetches[url];
};
export default useCachedFetch;
