# Getting Started

1. Fork and clone this repo

1. Use `npm i` to install the necessary dependencies

1. Run the TypeScript compiler, watch for changes, start the server, and launch the browser by using `npm start`

To test http.get request, replace the function with the following one in wikipedia.service.ts

search(terms: Observable<string>, debounceDuration = 400) {
  return terms.debounceTime(debounceDuration)
              .distinctUntilChanged()
              .switchMap(term => this.rawSearch(term));
}
