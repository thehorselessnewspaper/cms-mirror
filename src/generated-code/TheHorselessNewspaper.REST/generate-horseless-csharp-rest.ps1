# as per https://openapi-generator.tech/docs/usage

$specfile = './swagger-spec.json'

# handle credential provider timeouts
# as per https://www.primordialcode.com/blog/post/nuget-credentialprovider-timeout
$env:NUGET_PLUGIN_HANDSHAKE_TIMEOUT_IN_SECONDS=30
$env:NUGET_PLUGIN_REQUEST_TIMEOUT_IN_SECONDS=30
if(Test-Path -Path $specFile -PathType Leaf)
{

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate `
    -i '/local/swagger-spec.json' `
    -g csharp-netcore -o /local/csharp-netcore `
    --artifact-id "TheHorselessNewspaper.CSharp.Rest" `
    --package-name "TheHorselessNewspaper.CSharp.Rest" `
    --skip-validate-spec `
    --remove-operation-id-prefix `
    --additional-properties="netCoreProjectFile=true,optionalAssemblyInfo=true,packageName=TheHorselessNewspaper.CSharp.Rest,targetFramework=net6.0,webRequestLibrary=httpclient"

    push-location csharp-netcore\src

        # as per this clever hack https://stackoverflow.com/questions/39934405/can-i-build-multiple-projects-with-dotnet-build/51904395
        dotnet build -c production  TheHorselessNewspaper.CSharp.Rest\TheHorselessNewspaper.CSharp.Rest.csproj
      pop-location


}
else {
    Write-Host "spec file not provided"
}