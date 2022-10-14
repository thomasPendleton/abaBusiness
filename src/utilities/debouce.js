function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const myDebounce = (callback, delay) => {
  let timer

  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

// Throttling Function
export const throttleFunction = (func, delay) => {
  let prev = 0
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime()

    // Logging the difference between previously
    // called and current called timings
    console.log(now, prev);
    console.log(now - prev, delay)

    // If difference is greater than delay call the function again.
    if (now - prev > delay) {
      prev = now
        console.log(prev, 'prev')
     
      return func(...args)
    }
  }
}