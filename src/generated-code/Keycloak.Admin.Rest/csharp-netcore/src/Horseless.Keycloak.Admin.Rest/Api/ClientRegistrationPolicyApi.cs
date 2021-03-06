/*
 * Keycloak Admin REST API
 *
 * This is a REST API reference for the Keycloak Admin
 *
 * The version of the OpenAPI document: 1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using Horseless.Keycloak.Admin.Rest.Client;

namespace Horseless.Keycloak.Admin.Rest.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IClientRegistrationPolicyApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns>List&lt;Dictionary&lt;string, Object&gt;&gt;</returns>
        List<Dictionary<string, Object>> RealmClientRegistrationPolicyProvidersGet(string realm);

        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns>ApiResponse of List&lt;Dictionary&lt;string, Object&gt;&gt;</returns>
        ApiResponse<List<Dictionary<string, Object>>> RealmClientRegistrationPolicyProvidersGetWithHttpInfo(string realm);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IClientRegistrationPolicyApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;Dictionary&lt;string, Object&gt;&gt;</returns>
        System.Threading.Tasks.Task<List<Dictionary<string, Object>>> RealmClientRegistrationPolicyProvidersGetAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;Dictionary&lt;string, Object&gt;&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<Dictionary<string, Object>>>> RealmClientRegistrationPolicyProvidersGetWithHttpInfoAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IClientRegistrationPolicyApi : IClientRegistrationPolicyApiSync, IClientRegistrationPolicyApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class ClientRegistrationPolicyApi : IClientRegistrationPolicyApi
    {
        private Horseless.Keycloak.Admin.Rest.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="ClientRegistrationPolicyApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ClientRegistrationPolicyApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ClientRegistrationPolicyApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ClientRegistrationPolicyApi(string basePath)
        {
            this.Configuration = Horseless.Keycloak.Admin.Rest.Client.Configuration.MergeConfigurations(
                Horseless.Keycloak.Admin.Rest.Client.GlobalConfiguration.Instance,
                new Horseless.Keycloak.Admin.Rest.Client.Configuration { BasePath = basePath }
            );
            this.Client = new Horseless.Keycloak.Admin.Rest.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Horseless.Keycloak.Admin.Rest.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = Horseless.Keycloak.Admin.Rest.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ClientRegistrationPolicyApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public ClientRegistrationPolicyApi(Horseless.Keycloak.Admin.Rest.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = Horseless.Keycloak.Admin.Rest.Client.Configuration.MergeConfigurations(
                Horseless.Keycloak.Admin.Rest.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new Horseless.Keycloak.Admin.Rest.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Horseless.Keycloak.Admin.Rest.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = Horseless.Keycloak.Admin.Rest.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ClientRegistrationPolicyApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public ClientRegistrationPolicyApi(Horseless.Keycloak.Admin.Rest.Client.ISynchronousClient client, Horseless.Keycloak.Admin.Rest.Client.IAsynchronousClient asyncClient, Horseless.Keycloak.Admin.Rest.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = Horseless.Keycloak.Admin.Rest.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public Horseless.Keycloak.Admin.Rest.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public Horseless.Keycloak.Admin.Rest.Client.ISynchronousClient Client { get; set; }

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
        public Horseless.Keycloak.Admin.Rest.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Horseless.Keycloak.Admin.Rest.Client.ExceptionFactory ExceptionFactory
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
        /// Base path for retrieve providers with the configProperties properly filled 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns>List&lt;Dictionary&lt;string, Object&gt;&gt;</returns>
        public List<Dictionary<string, Object>> RealmClientRegistrationPolicyProvidersGet(string realm)
        {
            Horseless.Keycloak.Admin.Rest.Client.ApiResponse<List<Dictionary<string, Object>>> localVarResponse = RealmClientRegistrationPolicyProvidersGetWithHttpInfo(realm);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns>ApiResponse of List&lt;Dictionary&lt;string, Object&gt;&gt;</returns>
        public Horseless.Keycloak.Admin.Rest.Client.ApiResponse<List<Dictionary<string, Object>>> RealmClientRegistrationPolicyProvidersGetWithHttpInfo(string realm)
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling ClientRegistrationPolicyApi->RealmClientRegistrationPolicyProvidersGet");
            }

            Horseless.Keycloak.Admin.Rest.Client.RequestOptions localVarRequestOptions = new Horseless.Keycloak.Admin.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Horseless.Keycloak.Admin.Rest.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Horseless.Keycloak.Admin.Rest.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("realm", Horseless.Keycloak.Admin.Rest.Client.ClientUtils.ParameterToString(realm)); // path parameter

            // authentication (access_token) required
            // bearer authentication required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // make the HTTP request
            var localVarResponse = this.Client.Get<List<Dictionary<string, Object>>>("/{realm}/client-registration-policy/providers", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmClientRegistrationPolicyProvidersGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;Dictionary&lt;string, Object&gt;&gt;</returns>
        public async System.Threading.Tasks.Task<List<Dictionary<string, Object>>> RealmClientRegistrationPolicyProvidersGetAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            Horseless.Keycloak.Admin.Rest.Client.ApiResponse<List<Dictionary<string, Object>>> localVarResponse = await RealmClientRegistrationPolicyProvidersGetWithHttpInfoAsync(realm, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Base path for retrieve providers with the configProperties properly filled 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;Dictionary&lt;string, Object&gt;&gt;)</returns>
        public async System.Threading.Tasks.Task<Horseless.Keycloak.Admin.Rest.Client.ApiResponse<List<Dictionary<string, Object>>>> RealmClientRegistrationPolicyProvidersGetWithHttpInfoAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling ClientRegistrationPolicyApi->RealmClientRegistrationPolicyProvidersGet");
            }


            Horseless.Keycloak.Admin.Rest.Client.RequestOptions localVarRequestOptions = new Horseless.Keycloak.Admin.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Horseless.Keycloak.Admin.Rest.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Horseless.Keycloak.Admin.Rest.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("realm", Horseless.Keycloak.Admin.Rest.Client.ClientUtils.ParameterToString(realm)); // path parameter

            // authentication (access_token) required
            // bearer authentication required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<List<Dictionary<string, Object>>>("/{realm}/client-registration-policy/providers", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmClientRegistrationPolicyProvidersGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
