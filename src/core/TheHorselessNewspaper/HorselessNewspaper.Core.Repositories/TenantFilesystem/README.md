# Tenant Filesytem Provider 

goals
- support posix semantics and dependency injection
- support asp.net core controllers or simpler consumers like azure functions
- abstract the implementation of underlying filesystem api
- normalize the api of the underlying api implementations, posix or not

contraindications
- windows filesystem operations are synchronous as are all the associated xfileprovider style api surfaces

brute force solutions
- tenant filesystem metadata must be precomputed and cached. idistributedcache is suitable for synchronous cache value retrieval

implementations
- viewlocationexpander
-    requires ienumerable<string> of valid filesystem paths from cache
- ifileprovider for razor views
-    depends on precomputed subpaths and can merely instantiate a chroot style fileprovider for the requested paths 


database retrieval implementation inspired by
- https://www.mikesdotnetting.com/article/301/loading-asp-net-core-mvc-views-from-a-database-or-other-location