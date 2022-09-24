export const getId = (() => {
    let id = 1;
    return () => id++;
})();
