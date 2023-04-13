
const cachedFetches = {};
const useCachedFetch = async (url, operate) => {
    console.log('useCachedFetch', url);
    if (!cachedFetches[url]) {
        const res = await fetch(url);
        console.log('useCachedFetch', url, res.status);
        let data = await res.json();
        cachedFetches[url] =  operate(data);
    }
    console.log('useCachedFetch', url, cachedFetches[url]);
    return cachedFetches[url];
};
const useIsCached = (url) => {
    let cached = false;
    if (cachedFetches[url]) {
         cached = true;
    }
    return cached;
}
export default useCachedFetch;
export {useIsCached};

