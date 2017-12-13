# angular2 calendar
[![Build Status](https://travis-ci.org/strategiccoach/ng2-booking.svg?branch=master)](https://travis-ci.org/strategiccoach/ng2-booking)
[![npm version](https://badge.fury.io/js/ng2-booking.svg)](http://badge.fury.io/js/ng2-booking)
[![devDependency Status](https://david-dm.org/strategiccoach/ng2-booking/dev-status.svg)](https://david-dm.org/strategiccoach/ng2-booking#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/strategiccoach/ng2-booking.svg)](https://github.com/strategiccoach/ng2-booking/issues)
[![GitHub stars](https://img.shields.io/github/stars/strategiccoach/ng2-booking.svg)](https://github.com/strategiccoach/ng2-booking/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/strategiccoach/ng2-booking/master/LICENSE)

## Demo
https://strategiccoach.github.io/ng2-booking/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

A calendar component that can display events on a month, week or day view. The successor of: https://github.com/strategiccoach/angular-bootstrap-calendar

This is currently very much a WIP and won't be completed for several months. Community contributions are very welcome!

High level design goals:
* Support everything the current angular1 calendar does with a near identical API
* Authored in typescript
* Ditch the bootstrap dependency - create a generic set of styles and then have optional themes that sit on top for bootstrap, material, ionic etc
* Use flexbox because its 2016 and most browsers support this, and it can be [polyfilled](https://github.com/10up/flexibility) easily enough
* Handle bigger amounts of events
* Much improved week view
* Remove the year view as it doesn't really add much value
* Support rendering in a webworker / server side
* Use only angular2 APIs for drag / drop and resizing rather than interact.js -> create separate modules for each of these
* Extract business logic from the angular1 calendar into a separate module that can be shared between both calendars (the dist files will have it bundled though for an easier developer experience)

Prior art:
* https://github.com/strategiccoach/angular-bootstrap-calendar
* http://fullcalendar.io/
* Apple calendar app

## Installation

Install through npm:
```
npm install --save ng2-booking
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'ng2-booking';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/strategiccoach/ng2-booking/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/ng2-booking/ng2-booking.js"></script>
<script>
    // everything is exported angular2Calendar namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://strategiccoach.github.io/ng2-booking/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests. 

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
