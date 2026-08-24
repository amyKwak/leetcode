function debounce(fn, delayMs) {
    let timer = null;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delayMs);
    }
}

for (let i = 0; i < 1000; i++) {
    debounce(console.log('test'), 300)
}