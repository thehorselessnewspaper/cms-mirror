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
    public interface IAttackDetectionApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns></returns>
        void RealmAttackDetectionBruteForceUsersDelete(string realm);

        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns>ApiResponse of Object(void)</returns>
        ApiResponse<Object> RealmAttackDetectionBruteForceUsersDeleteWithHttpInfo(string realm);
        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns></returns>
        void RealmAttackDetectionBruteForceUsersUserIdDelete(string realm, string userId);

        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns>ApiResponse of Object(void)</returns>
        ApiResponse<Object> RealmAttackDetectionBruteForceUsersUserIdDeleteWithHttpInfo(string realm, string userId);
        /// <summary>
        /// Get status of a username in brute force detection
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        Dictionary<string, Object> RealmAttackDetectionBruteForceUsersUserIdGet(string realm, string userId);

        /// <summary>
        /// Get status of a username in brute force detection
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        ApiResponse<Dictionary<string, Object>> RealmAttackDetectionBruteForceUsersUserIdGetWithHttpInfo(string realm, string userId);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IAttackDetectionApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of void</returns>
        System.Threading.Tasks.Task RealmAttackDetectionBruteForceUsersDeleteAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse<Object>> RealmAttackDetectionBruteForceUsersDeleteWithHttpInfoAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of void</returns>
        System.Threading.Tasks.Task RealmAttackDetectionBruteForceUsersUserIdDeleteAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse<Object>> RealmAttackDetectionBruteForceUsersUserIdDeleteWithHttpInfoAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        /// <summary>
        /// Get status of a username in brute force detection
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        System.Threading.Tasks.Task<Dictionary<string, Object>> RealmAttackDetectionBruteForceUsersUserIdGetAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Get status of a username in brute force detection
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> RealmAttackDetectionBruteForceUsersUserIdGetWithHttpInfoAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IAttackDetectionApi : IAttackDetectionApiSync, IAttackDetectionApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class AttackDetectionApi : IAttackDetectionApi
    {
        private Horseless.Keycloak.Admin.Rest.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="AttackDetectionApi"/> class.
        /// </summary>
        /// <returns></returns>
        public AttackDetectionApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AttackDetectionApi"/> class.
        /// </summary>
        /// <returns></returns>
        public AttackDetectionApi(string basePath)
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
        /// Initializes a new instance of the <see cref="AttackDetectionApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public AttackDetectionApi(Horseless.Keycloak.Admin.Rest.Client.Configuration configuration)
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
        /// Initializes a new instance of the <see cref="AttackDetectionApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public AttackDetectionApi(Horseless.Keycloak.Admin.Rest.Client.ISynchronousClient client, Horseless.Keycloak.Admin.Rest.Client.IAsynchronousClient asyncClient, Horseless.Keycloak.Admin.Rest.Client.IReadableConfiguration configuration)
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
        /// Clear any user login failures for all users   This can release temporary disabled users 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns></returns>
        public void RealmAttackDetectionBruteForceUsersDelete(string realm)
        {
            RealmAttackDetectionBruteForceUsersDeleteWithHttpInfo(realm);
        }

        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <returns>ApiResponse of Object(void)</returns>
        public Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Object> RealmAttackDetectionBruteForceUsersDeleteWithHttpInfo(string realm)
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersDelete");
            }

            Horseless.Keycloak.Admin.Rest.Client.RequestOptions localVarRequestOptions = new Horseless.Keycloak.Admin.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
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
            var localVarResponse = this.Client.Delete<Object>("/{realm}/attack-detection/brute-force/users", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmAttackDetectionBruteForceUsersDelete", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of void</returns>
        public async System.Threading.Tasks.Task RealmAttackDetectionBruteForceUsersDeleteAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            await RealmAttackDetectionBruteForceUsersDeleteWithHttpInfoAsync(realm, cancellationToken).ConfigureAwait(false);
        }

        /// <summary>
        /// Clear any user login failures for all users   This can release temporary disabled users 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Object>> RealmAttackDetectionBruteForceUsersDeleteWithHttpInfoAsync(string realm, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersDelete");
            }


            Horseless.Keycloak.Admin.Rest.Client.RequestOptions localVarRequestOptions = new Horseless.Keycloak.Admin.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
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
            var localVarResponse = await this.AsynchronousClient.DeleteAsync<Object>("/{realm}/attack-detection/brute-force/users", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmAttackDetectionBruteForceUsersDelete", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public void RealmAttackDetectionBruteForceUsersUserIdDelete(string realm, string userId)
        {
            RealmAttackDetectionBruteForceUsersUserIdDeleteWithHttpInfo(realm, userId);
        }

        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns>ApiResponse of Object(void)</returns>
        public Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Object> RealmAttackDetectionBruteForceUsersUserIdDeleteWithHttpInfo(string realm, string userId)
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdDelete");
            }

            // verify the required parameter 'userId' is set
            if (userId == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'userId' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdDelete");
            }

            Horseless.Keycloak.Admin.Rest.Client.RequestOptions localVarRequestOptions = new Horseless.Keycloak.Admin.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
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
            localVarRequestOptions.PathParameters.Add("userId", Horseless.Keycloak.Admin.Rest.Client.ClientUtils.ParameterToString(userId)); // path parameter

            // authentication (access_token) required
            // bearer authentication required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // make the HTTP request
            var localVarResponse = this.Client.Delete<Object>("/{realm}/attack-detection/brute-force/users/{userId}", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmAttackDetectionBruteForceUsersUserIdDelete", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of void</returns>
        public async System.Threading.Tasks.Task RealmAttackDetectionBruteForceUsersUserIdDeleteAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            await RealmAttackDetectionBruteForceUsersUserIdDeleteWithHttpInfoAsync(realm, userId, cancellationToken).ConfigureAwait(false);
        }

        /// <summary>
        /// Clear any user login failures for the user   This can release temporary disabled user 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Object>> RealmAttackDetectionBruteForceUsersUserIdDeleteWithHttpInfoAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdDelete");
            }

            // verify the required parameter 'userId' is set
            if (userId == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'userId' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdDelete");
            }


            Horseless.Keycloak.Admin.Rest.Client.RequestOptions localVarRequestOptions = new Horseless.Keycloak.Admin.Rest.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
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
            localVarRequestOptions.PathParameters.Add("userId", Horseless.Keycloak.Admin.Rest.Client.ClientUtils.ParameterToString(userId)); // path parameter

            // authentication (access_token) required
            // bearer authentication required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.DeleteAsync<Object>("/{realm}/attack-detection/brute-force/users/{userId}", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmAttackDetectionBruteForceUsersUserIdDelete", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get status of a username in brute force detection 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        public Dictionary<string, Object> RealmAttackDetectionBruteForceUsersUserIdGet(string realm, string userId)
        {
            Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Dictionary<string, Object>> localVarResponse = RealmAttackDetectionBruteForceUsersUserIdGetWithHttpInfo(realm, userId);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get status of a username in brute force detection 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        public Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Dictionary<string, Object>> RealmAttackDetectionBruteForceUsersUserIdGetWithHttpInfo(string realm, string userId)
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdGet");
            }

            // verify the required parameter 'userId' is set
            if (userId == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'userId' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdGet");
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
            localVarRequestOptions.PathParameters.Add("userId", Horseless.Keycloak.Admin.Rest.Client.ClientUtils.ParameterToString(userId)); // path parameter

            // authentication (access_token) required
            // bearer authentication required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // make the HTTP request
            var localVarResponse = this.Client.Get<Dictionary<string, Object>>("/{realm}/attack-detection/brute-force/users/{userId}", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmAttackDetectionBruteForceUsersUserIdGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get status of a username in brute force detection 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        public async System.Threading.Tasks.Task<Dictionary<string, Object>> RealmAttackDetectionBruteForceUsersUserIdGetAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Dictionary<string, Object>> localVarResponse = await RealmAttackDetectionBruteForceUsersUserIdGetWithHttpInfoAsync(realm, userId, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get status of a username in brute force detection 
        /// </summary>
        /// <exception cref="Horseless.Keycloak.Admin.Rest.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="realm">realm name (not id!)</param>
        /// <param name="userId"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        public async System.Threading.Tasks.Task<Horseless.Keycloak.Admin.Rest.Client.ApiResponse<Dictionary<string, Object>>> RealmAttackDetectionBruteForceUsersUserIdGetWithHttpInfoAsync(string realm, string userId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'realm' is set
            if (realm == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'realm' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdGet");
            }

            // verify the required parameter 'userId' is set
            if (userId == null)
            {
                throw new Horseless.Keycloak.Admin.Rest.Client.ApiException(400, "Missing required parameter 'userId' when calling AttackDetectionApi->RealmAttackDetectionBruteForceUsersUserIdGet");
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
            localVarRequestOptions.PathParameters.Add("userId", Horseless.Keycloak.Admin.Rest.Client.ClientUtils.ParameterToString(userId)); // path parameter

            // authentication (access_token) required
            // bearer authentication required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<Dictionary<string, Object>>("/{realm}/attack-detection/brute-force/users/{userId}", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("RealmAttackDetectionBruteForceUsersUserIdGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}