 #!/bin/bash
outputPath='./horseless-contentapi-workspace/projects/wizardcontroller/horseless-contentapi-lib/src/horseless-contentapi'
theLibrary='@wizardcontroller/horseless-contentapi-lib'
theLibraryBuildPath='./horseless-contentapi-workspace/projects/wizardcontroller/horseless-contentapi-lib/src'
theLibraryDistPath='./horseless-contentapi-workspace/dist/wizardcontroller/horseless-contentapi-lib'
npx @openapitools/openapi-generator-cli generate --skip-validate-spec -i horseless-contentapi.json -c horseless-contentapi-opts.json -g typescript-angular -o $outputPath
npmrc='horseless-contentapi-workspace/.npmrc'
pushd 'horseless-content-api-workspace/projects/wizardcontroller/horseless-contentapi-lib/src'
npm version patch -m "Upgrade to %s for reasons"
ng build $theLibrary --prod
popd
cp  $npmrc './horseless-contentapi-workspace/dist/wizardcontroller/horseless-contentapi-lib'
pushd $theLibraryDistPath
npm publish
popd
popd
