# as per https://openapi-generator.tech/docs/usage

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate `
-i https://raw.githubusercontent.com/ccouzens/keycloak-openapi/main/keycloak/16.0.yml `
-g csharp-netcore -o /local/csharp-netcore `
--artifact-id "Horseless.Keycloak.Admin.Rest" `
--package-name "Horseless.Keycloak.Admin.Rest" `
--additional-properties="netCoreProjectFile=true,nonPublicApi=false,optionalAssemblyInfo=true,packageName=Horseless.Keycloak.Admin.Rest,targetFramework=net6.0"

