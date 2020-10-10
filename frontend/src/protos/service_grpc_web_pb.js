/**
 * @fileoverview gRPC-Web generated client stub for pitwall
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var protos_car_pb = require('../protos/car_pb.js')
const proto = {};
proto.pitwall = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pitwall.TimingsClient =
  function (hostname, credentials, options) {
    if (!options) options = {};
    options['format'] = 'text';

    /**
     * @private @const {!grpc.web.GrpcWebClientBase} The client
     */
    this.client_ = new grpc.web.GrpcWebClientBase(options);

    /**
     * @private @const {string} The hostname
     */
    this.hostname_ = hostname;

  };


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pitwall.TimingsPromiseClient =
  function (hostname, credentials, options) {
    if (!options) options = {};
    options['format'] = 'text';

    /**
     * @private @const {!grpc.web.GrpcWebClientBase} The client
     */
    this.client_ = new grpc.web.GrpcWebClientBase(options);

    /**
     * @private @const {string} The hostname
     */
    this.hostname_ = hostname;

  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pitwall.EmptyRequest,
 *   !proto.pitwall.SessionReply>}
 */
const methodDescriptor_Timings_Session = new grpc.web.MethodDescriptor(
  '/pitwall.Timings/Session',
  grpc.web.MethodType.UNARY,
  proto.pitwall.EmptyRequest,
  proto.pitwall.SessionReply,
  /**
   * @param {!proto.pitwall.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.pitwall.SessionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pitwall.EmptyRequest,
 *   !proto.pitwall.SessionReply>}
 */
const methodInfo_Timings_Session = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pitwall.SessionReply,
  /**
   * @param {!proto.pitwall.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.pitwall.SessionReply.deserializeBinary
);


/**
 * @param {!proto.pitwall.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pitwall.SessionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pitwall.SessionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pitwall.TimingsClient.prototype.session =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/pitwall.Timings/Session',
      request,
      metadata || {},
      methodDescriptor_Timings_Session,
      callback);
  };


/**
 * @param {!proto.pitwall.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pitwall.SessionReply>}
 *     Promise that resolves to the response
 */
proto.pitwall.TimingsPromiseClient.prototype.session =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/pitwall.Timings/Session',
      request,
      metadata || {},
      methodDescriptor_Timings_Session);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pitwall.EmptyRequest,
 *   !proto.pitwall.CarReply>}
 */
const methodDescriptor_Timings_RaceUpdates = new grpc.web.MethodDescriptor(
  '/pitwall.Timings/RaceUpdates',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pitwall.EmptyRequest,
  proto.pitwall.CarReply,
  /**
   * @param {!proto.pitwall.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.pitwall.CarReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pitwall.EmptyRequest,
 *   !proto.pitwall.CarReply>}
 */
const methodInfo_Timings_RaceUpdates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pitwall.CarReply,
  /**
   * @param {!proto.pitwall.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.pitwall.CarReply.deserializeBinary
);


/**
 * @param {!proto.pitwall.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pitwall.CarReply>}
 *     The XHR Node Readable Stream
 */
proto.pitwall.TimingsClient.prototype.raceUpdates =
  function (request, metadata) {
    return this.client_.serverStreaming(this.hostname_ +
      '/pitwall.Timings/RaceUpdates',
      request,
      metadata || {},
      methodDescriptor_Timings_RaceUpdates);
  };


/**
 * @param {!proto.pitwall.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pitwall.CarReply>}
 *     The XHR Node Readable Stream
 */
proto.pitwall.TimingsPromiseClient.prototype.raceUpdates =
  function (request, metadata) {
    return this.client_.serverStreaming(this.hostname_ +
      '/pitwall.Timings/RaceUpdates',
      request,
      metadata || {},
      methodDescriptor_Timings_RaceUpdates);
  };


module.exports = proto.pitwall;

