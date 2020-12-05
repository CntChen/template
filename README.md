# Template
> webpack4 + react + typescript template + jest

## Usage
* clone and init
```sh
$ git clone https://github.com/CntChen/template.git
$ cd tempalte
$ npm install
```

* start
```sh
$ cd template
$ npm run dev
```
Resource will lay in `./dist`.

* open
```sh
$ http-server -c0 ./dist
Available on:
  http://127.0.0.1:8080
```
Browser url usually is: http://127.0.0.1:8080

## Test

```sh
$ npm run test
```

* test coverage

```sh
$ npm run test:coverage
```

then open coverage file from browser:
```sh
$ npx http-server -c0 ./coverage/lcov-report
```

## EOF
