# HorselessTagsLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

It has been modified to emit deployable assets

Modifications as per https://medium.com/vendasta/angular-elements-a-guide-to-shipping-framework-agnostic-libraries-13b02b2b284f
- library packaging
- angular application packaging for angular elements registration and deployable assets

# TODO
`
const fs = require('fs-extra');
const concat = require('concat');

function handleErr(err) {
    if (err) {
        return console.error(err);
    }
    console.log('success!');
}

(async function build() {
  const library1Files = [
      './dist/library1-elements-tmp/runtime.js',
      './dist/library1-elements-tmp/polyfills.js',
      './dist/library1-elements-tmp/main.js'
    ];

  await fs.ensureDir('./dist/library1-client/elements');
  await concat(library1Files, './dist/library1-client/elements/library1.js');
  await fs.remove('./dist/library1-elements-tmp', handleErr);
})();
`

## Code scaffolding

Run `ng generate component component-name --project horseless-tags-library` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project horseless-tags-library`.
> Note: Don't forget to add `--project horseless-tags-library` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build horseless-tags-library` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build horseless-tags-library`, go to the dist folder `cd dist/horseless-tags-library` and run `npm publish`.

## Running unit tests

Run `ng test horseless-tags-library` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
