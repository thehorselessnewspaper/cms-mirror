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
    public interface IHorselessSessionApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;ContentEntitiesHorselessSession&gt;</returns>
        List<ContentEntitiesHorselessSession> HorselessSessionControllerGet();

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        ApiResponse<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGetWithHttpInfo();
        /// <summary>
        /// 
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>List&lt;ContentEntitiesHorselessSession&gt;</returns>
        List<ContentEntitiesHorselessSession> HorselessSessionControllerGet_0();

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        ApiResponse<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGet_0WithHttpInfo();
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IHorselessSessionApiAsync : IApiAccessor
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
        /// <returns>Task of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        System.Threading.Tasks.Task<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGetAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesHorselessSession&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<ContentEntitiesHorselessSession>>> HorselessSessionControllerGetWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        System.Threading.Tasks.Task<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGet_0Async(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesHorselessSession&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<ContentEntitiesHorselessSession>>> HorselessSessionControllerGet_0WithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IHorselessSessionApi : IHorselessSessionApiSync, IHorselessSessionApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class HorselessSessionApi : IHorselessSessionApi
    {
        private TheHorselessNewspaper.CSharp.Rest.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="HorselessSessionApi"/> class.
        /// </summary>
        /// <returns></returns>
        public HorselessSessionApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="HorselessSessionApi"/> class.
        /// </summary>
        /// <returns></returns>
        public HorselessSessionApi(string basePath)
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
        /// Initializes a new instance of the <see cref="HorselessSessionApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public HorselessSessionApi(TheHorselessNewspaper.CSharp.Rest.Client.Configuration configuration)
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
        /// Initializes a new instance of the <see cref="HorselessSessionApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public HorselessSessionApi(TheHorselessNewspaper.CSharp.Rest.Client.ISynchronousClient client, TheHorselessNewspaper.CSharp.Rest.Client.IAsynchronousClient asyncClient, TheHorselessNewspaper.CSharp.Rest.Client.IReadableConfiguration configuration)
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
        /// <returns>List&lt;ContentEntitiesHorselessSession&gt;</returns>
        public List<ContentEntitiesHorselessSession> HorselessSessionControllerGet()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>> localVarResponse = HorselessSessionControllerGetWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        public TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGetWithHttpInfo()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
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
            var localVarResponse = this.Client.Get<List<ContentEntitiesHorselessSession>>("/HorselessContent/HorselessSession", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("HorselessSessionControllerGet", localVarResponse);
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
        /// <returns>Task of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        public async System.Threading.Tasks.Task<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGetAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>> localVarResponse = await HorselessSessionControllerGetWithHttpInfoAsync(cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesHorselessSession&gt;)</returns>
        public async System.Threading.Tasks.Task<TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>>> HorselessSessionControllerGetWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
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
            var localVarResponse = await this.AsynchronousClient.GetAsync<List<ContentEntitiesHorselessSession>>("/HorselessContent/HorselessSession", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("HorselessSessionControllerGet", localVarResponse);
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
        /// <returns>List&lt;ContentEntitiesHorselessSession&gt;</returns>
        public List<ContentEntitiesHorselessSession> HorselessSessionControllerGet_0()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>> localVarResponse = HorselessSessionControllerGet_0WithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        public TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGet_0WithHttpInfo()
        {
            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
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
            var localVarResponse = this.Client.Get<List<ContentEntitiesHorselessSession>>("/HorselessContent/HorselessSession/$count", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("HorselessSessionControllerGet_0", localVarResponse);
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
        /// <returns>Task of List&lt;ContentEntitiesHorselessSession&gt;</returns>
        public async System.Threading.Tasks.Task<List<ContentEntitiesHorselessSession>> HorselessSessionControllerGet_0Async(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>> localVarResponse = await HorselessSessionControllerGet_0WithHttpInfoAsync(cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="TheHorselessNewspaper.CSharp.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;ContentEntitiesHorselessSession&gt;)</returns>
        public async System.Threading.Tasks.Task<TheHorselessNewspaper.CSharp.Rest.Client.ApiResponse<List<ContentEntitiesHorselessSession>>> HorselessSessionControllerGet_0WithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions localVarRequestOptions = new TheHorselessNewspaper.CSharp.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
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
            var localVarResponse = await this.AsynchronousClient.GetAsync<List<ContentEntitiesHorselessSession>>("/HorselessContent/HorselessSession/$count", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("HorselessSessionControllerGet_0", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
