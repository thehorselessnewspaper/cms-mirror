# as per https://openapi-generator.tech/docs/usage
$theLibraryBuildPath = "horseless-contentapi\projects\wizardcontroller\horseless-contentapi\src"
$theLibraryDistPath = "horseless-contentapi\dist\wizardcontroller\horseless-contentapi"
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate `
    -i https://localhost:44373/swagger/v1/swagger.json `
    -g typescript-angular -o /local/projects `
    -c "/local/horseless-contentapi-opts.json"

$npmrc = ".npmrc"
pushd $theLibraryBuildPath
  npm version patch -m "Upgrade to %s for reasons"
  ng build $theLibrary --prod
popd

pushd $theLibraryDistPath
    npm publish
    popd
popd
