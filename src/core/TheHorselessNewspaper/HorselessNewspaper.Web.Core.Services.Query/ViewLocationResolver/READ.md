# load mvc views from non default locations

this supports loading views from supported locations as per
- tenant filesystem
- database

IViewLocationExpander implementations can look up view names in any location and return the location to consumers
as per
- https://www.iaspnetcore.com/blog/blogpost/5915fd3684cd45104c5216d9