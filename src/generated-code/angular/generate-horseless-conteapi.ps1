# as per https://openapi-generator.tech/docs/usage

# expects for azure devops
#         npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
# expects 
#         .npmrc in ~/.npmrc for authenticated npm registries
# expects 
#         workspace configured as per comments below https://angular.io/guide/creating-libraries
# ng new horseless-contentapi-workspace --no-create-application
# cd horseless-contentapi-workspace
# ng generate library @wizardcontroller/horseless-contentapi-lib
$outputPath = "horseless-contentapi-workspace\projects\wizardcontroller\horseless-contentapi-lib\src\horseless-contentapi"
$theLibrary = '@wizardcontroller/horseless-contentapi-lib'
$theLibraryBuildPath = "horseless-contentapi-workspace/projects/wizardcontroller/horseless-contentapi-lib/src/"
$theLibraryDistPath = ".\horseless-contentapi-workspace\dist\wizardcontroller\horseless-contentapi-lib"

# pushd horseless-contentapi
npx @openapitools/openapi-generator-cli generate `
    -i horseless-contentapi.json `
    -c horseless-contentapi-opts.json `
    -g typescript-angular -o $outputPath --skip-validate-spec 
# popd

$npmrc = "horseless-contentapi-workspace/.npmrc"

pushd $theLibraryBuildPath
  npm version patch -m "Upgrade to %s for reasons"
  ng build $theLibrary --prod
popd

copy  $npmrc "./horseless-contentapi-workspace/dist/wizardcontroller/horseless-contentapi-lib"

pushd $theLibraryDistPath
    npm publish
    popd
popd
