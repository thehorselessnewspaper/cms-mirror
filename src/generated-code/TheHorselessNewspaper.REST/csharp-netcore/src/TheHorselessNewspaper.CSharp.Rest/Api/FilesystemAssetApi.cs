/*
 * Horseless Content API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using TheHorselessNewspaper.CSharp.Rest.Client;
using TheHorselessNewspaper.CSharp.Rest.Model;

namespace TheHorselessNewspaper.CSharp.Rest.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFilesystemAssetApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        List<ContentEntitiesFilesystemAsset> FilesystemAssetControllerGet();

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        ApiResponse<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGetWithHttpInfo();
        /// <summary>
        /// 
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        List<ContentEntitiesFilesystemAsset> FilesystemAssetControllerGet_0();

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        ApiResponse<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGet_0WithHttpInfo();
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFilesystemAssetApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        System.Threading.Tasks.Task<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGetAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesFilesystemAsset&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<ContentEntitiesFilesystemAsset>>> FilesystemAssetControllerGetWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        System.Threading.Tasks.Task<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGet_0Async(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesFilesystemAsset&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<ContentEntitiesFilesystemAsset>>> FilesystemAssetControllerGet_0WithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFilesystemAssetApi : IFilesystemAssetApiSync, IFilesystemAssetApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class FilesystemAssetApi : IFilesystemAssetApi
    {
        private TheHorselessNewspaper.CSharp.Rest.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="FilesystemAssetApi"/> class.
        /// </summary>
        /// <returns></returns>
        public FilesystemAssetApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FilesystemAssetApi"/> class.
        /// </summary>
        /// <returns></returns>
        public FilesystemAssetApi(string basePath)
        {
            this.Configuration = TheHorselessNewspaper.CSharp.Rest.Client.Configuration.MergeConfigurations(
                TheHorselessNewspaper.CSharp.Rest.Client.GlobalConfiguration.Instance,
                new TheHorselessNewspaper.CSharp.Rest.Client.Configuration { BasePath = basePath }
            );
            this.Client = new TheHorselessNewspaper.CSharp.Rest.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new TheHorselessNewspaper.CSharp.Rest.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = TheHorselessNewspaper.CSharp.Rest.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FilesystemAssetApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public FilesystemAssetApi(TheHorselessNewspaper.CSharp.Rest.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = TheHorselessNewspaper.CSharp.Rest.Client.Configuration.MergeConfigurations(
                TheHorselessNewspaper.CSharp.Rest.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new TheHorselessNewspaper.CSharp.Rest.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new TheHorselessNewspaper.CSharp.Rest.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = TheHorselessNewspaper.CSharp.Rest.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FilesystemAssetApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public FilesystemAssetApi(TheHorselessNewspaper.CSharp.Rest.Client.ISynchronousClient client, TheHorselessNewspaper.CSharp.Rest.Client.IAsynchronousClient asyncClient, TheHorselessNewspaper.CSharp.Rest.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = TheHorselessNewspaper.CSharp.Rest.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public TheHorselessNewspaper.CSharp.Rest.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public TheHorselessNewspaper.CSharp.Rest.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public string GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public TheHorselessNewspaper.CSharp.Rest.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public TheHorselessNewspaper.CSharp.Rest.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        public List<ContentEntitiesFilesystemAsset> FilesystemAssetControllerGet()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>> localVarResponse = FilesystemAssetControllerGetWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        public TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGetWithHttpInfo()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json;odata.metadata=minimal;odata.streaming=true",
                "application/json;odata.metadata=minimal;odata.streaming=false",
                "application/json;odata.metadata=minimal",
                "application/json;odata.metadata=full;odata.streaming=true",
                "application/json;odata.metadata=full;odata.streaming=false",
                "application/json;odata.metadata=full",
                "application/json;odata.metadata=none;odata.streaming=true",
                "application/json;odata.metadata=none;odata.streaming=false",
                "application/json;odata.metadata=none",
                "application/json;odata.streaming=true",
                "application/json;odata.streaming=false",
                "application/json",
                "application/xml",
                "text/plain",
                "application/octet-stream",
                "text/json"
            };

            var localVarContentType = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }



            // make the HTTP request
            var localVarResponse = this.Client.Get<List<ContentEntitiesFilesystemAsset>>("/HorselessContent/FilesystemAsset", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("FilesystemAssetControllerGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        public async System.Threading.Tasks.Task<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGetAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>> localVarResponse = await FilesystemAssetControllerGetWithHttpInfoAsync(cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesFilesystemAsset&gt;)</returns>
        public async System.Threading.Tasks.Task<TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>>> FilesystemAssetControllerGetWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json;odata.metadata=minimal;odata.streaming=true",
                "application/json;odata.metadata=minimal;odata.streaming=false",
                "application/json;odata.metadata=minimal",
                "application/json;odata.metadata=full;odata.streaming=true",
                "application/json;odata.metadata=full;odata.streaming=false",
                "application/json;odata.metadata=full",
                "application/json;odata.metadata=none;odata.streaming=true",
                "application/json;odata.metadata=none;odata.streaming=false",
                "application/json;odata.metadata=none",
                "application/json;odata.streaming=true",
                "application/json;odata.streaming=false",
                "application/json",
                "application/xml",
                "text/plain",
                "application/octet-stream",
                "text/json"
            };

            var localVarContentType = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }



            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<List<ContentEntitiesFilesystemAsset>>("/HorselessContent/FilesystemAsset", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("FilesystemAssetControllerGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        public List<ContentEntitiesFilesystemAsset> FilesystemAssetControllerGet_0()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>> localVarResponse = FilesystemAssetControllerGet_0WithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        public TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGet_0WithHttpInfo()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json;odata.metadata=minimal;odata.streaming=true",
                "application/json;odata.metadata=minimal;odata.streaming=false",
                "application/json;odata.metadata=minimal",
                "application/json;odata.metadata=full;odata.streaming=true",
                "application/json;odata.metadata=full;odata.streaming=false",
                "application/json;odata.metadata=full",
                "application/json;odata.metadata=none;odata.streaming=true",
                "application/json;odata.metadata=none;odata.streaming=false",
                "application/json;odata.metadata=none",
                "application/json;odata.streaming=true",
                "application/json;odata.streaming=false",
                "application/json",
                "application/xml",
                "text/plain",
                "application/octet-stream",
                "text/json"
            };

            var localVarContentType = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }



            // make the HTTP request
            var localVarResponse = this.Client.Get<List<ContentEntitiesFilesystemAsset>>("/HorselessContent/FilesystemAsset/$count", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("FilesystemAssetControllerGet_0", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;ContentEntitiesFilesystemAsset&gt;</returns>
        public async System.Threading.Tasks.Task<List<ContentEntitiesFilesystemAsset>> FilesystemAssetControllerGet_0Async(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>> localVarResponse = await FilesystemAssetControllerGet_0WithHttpInfoAsync(cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesFilesystemAsset&gt;)</returns>
        public async System.Threading.Tasks.Task<TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesFilesystemAsset>>> FilesystemAssetControllerGet_0WithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json;odata.metadata=minimal;odata.streaming=true",
                "application/json;odata.metadata=minimal;odata.streaming=false",
                "application/json;odata.metadata=minimal",
                "application/json;odata.metadata=full;odata.streaming=true",
                "application/json;odata.metadata=full;odata.streaming=false",
                "application/json;odata.metadata=full",
                "application/json;odata.metadata=none;odata.streaming=true",
                "application/json;odata.metadata=none;odata.streaming=false",
                "application/json;odata.metadata=none",
                "application/json;odata.streaming=true",
                "application/json;odata.streaming=false",
                "application/json",
                "application/xml",
                "text/plain",
                "application/octet-stream",
                "text/json"
            };

            var localVarContentType = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = TheHorselessNewspaper.CSharp.Rest.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }



            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<List<ContentEntitiesFilesystemAsset>>("/HorselessContent/FilesystemAsset/$count", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("FilesystemAssetControllerGet_0", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
