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
$outputPath = "horseless-contentapi-workspace\projects\wizardcontrollerprerelease\horseless-contentapi-lib\src\horseless-contentapi"
$theLibrary = '@wizardcontrollerprerelease/horseless-contentapi-lib'
$theLibraryBuildPath = "horseless-contentapi-workspace/projects/wizardcontrollerprerelease/horseless-contentapi-lib/src/"
$theLibraryDistPath = ".\horseless-contentapi-workspace\dist\wizardcontrollerprerelease\horseless-contentapi-lib"

# pushd horseless-contentapi
npx @openapitools/openapi-generator-cli generate `
    -i horseless-contentapi.json `
    -c horseless-contentapi-opts.json `
    -g typescript-angular -o $outputPath --skip-validate-spec 
# popd

$npmrc = "horseless-contentapi-workspace/.npmrc"

git config --global user.email "buildwizard@wizardcontroller.com"
git config --global user.name "build user"
git checkout  $(Build.SourceBranchName)
git commit -m "ci/cd build -> $(Build.QueuedBy) comitted npm version bump branch $(Build.SourceBranchName) " -a
Write-Host "ci/cd build -> $(Build.QueuedBy) comitted npm version bump branch $(Build.SourceBranchName) "
pushd $theLibraryBuildPath
  npm version patch -m "Upgrade to %s for reasons"
  ng build $theLibrary 
popd

copy  $npmrc "./horseless-contentapi-workspace/dist/wizardcontrollerprerelease/horseless-contentapi-lib"

# pushd $theLibraryDistPath
#    npm publish -access public
#    popd
# popd
