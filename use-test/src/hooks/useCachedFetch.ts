
const cachedFetches = {};
const useCachedFetch = async (url) => {
    console.log('useCachedFetch', url);
    if (!cachedFetches[url]) {
        const res = await fetch(url);
        console.log('useCachedFetch', url, res.status);
        cachedFetches[url] = await res.json();
        // cachedFetches[url] = await fetch(url).then(async (res) => ({
        //     status: res.status,
        //     data: res.status === 200 ? await res.json() : null,
        // }));
    }
    console.log('useCachedFetch', url, cachedFetches[url]);
    return cachedFetches[url];
};
export default useCachedFetch;
