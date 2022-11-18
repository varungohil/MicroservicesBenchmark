(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roster-roster-module"],{

/***/ "1wmj":
/*!**************************************!*\
  !*** ./proto/ProfServiceClientPb.ts ***!
  \**************************************/
/*! exports provided: profClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profClient", function() { return profClient; });
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grpc-web */ "TxjO");
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grpc_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prof_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prof_pb */ "80kh");
/* harmony import */ var _prof_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prof_pb__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview gRPC-Web generated client stub for prof
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck


class profClient {
    constructor(hostname, credentials, options) {
        this.methodInfogetProf = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["AbstractClientBase"].MethodInfo(_prof_pb__WEBPACK_IMPORTED_MODULE_1__["profResponse"], (request) => {
            return request.serializeBinary();
        }, _prof_pb__WEBPACK_IMPORTED_MODULE_1__["profResponse"].deserializeBinary);
        this.methodInfogetProfList = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["AbstractClientBase"].MethodInfo(_prof_pb__WEBPACK_IMPORTED_MODULE_1__["profListResponse"], (request) => {
            return request.serializeBinary();
        }, _prof_pb__WEBPACK_IMPORTED_MODULE_1__["profListResponse"].deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["GrpcWebClientBase"](options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getProf(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/prof.prof/getProf', request, metadata || {}, this.methodInfogetProf, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/prof.prof/getProf', request, metadata || {}, this.methodInfogetProf);
    }
    getProfList(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/prof.prof/getProfList', request, metadata || {}, this.methodInfogetProfList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/prof.prof/getProfList', request, metadata || {}, this.methodInfogetProfList);
    }
}


/***/ }),

/***/ "6pfS":
/*!**************************************************************!*\
  !*** ./src/app/roster/roster-class/roster-class.resolver.ts ***!
  \**************************************************************/
/*! exports provided: RosterClassResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterClassResolver", function() { return RosterClassResolver; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/classlist-client.service */ "9GJm");



class RosterClassResolver {
    constructor(client) {
        this.client = client;
    }
    resolve(route, state) {
        let ob = this.client.getClassList("all").asObservable();
        ob.subscribe(x => console.log(x));
        return ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(2));
    }
}
RosterClassResolver.ɵfac = function RosterClassResolver_Factory(t) { return new (t || RosterClassResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__["ClasslistClientService"])); };
RosterClassResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RosterClassResolver, factory: RosterClassResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "80kh":
/*!**************************!*\
  !*** ./proto/prof_pb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: prof.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = __webpack_require__(/*! google-protobuf */ "hRO2");
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.prof.Professor', null, global);
goog.exportSymbol('proto.prof.profListRequest', null, global);
goog.exportSymbol('proto.prof.profListResponse', null, global);
goog.exportSymbol('proto.prof.profRequest', null, global);
goog.exportSymbol('proto.prof.profResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.prof.profRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.prof.profRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.prof.profRequest.displayName = 'proto.prof.profRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.prof.profResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.prof.profResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.prof.profResponse.displayName = 'proto.prof.profResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.prof.profListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.prof.profListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.prof.profListRequest.displayName = 'proto.prof.profListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.prof.profListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.prof.profListResponse.repeatedFields_, null);
};
goog.inherits(proto.prof.profListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.prof.profListResponse.displayName = 'proto.prof.profListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.prof.Professor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.prof.Professor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.prof.Professor.displayName = 'proto.prof.Professor';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.prof.profRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.prof.profRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.prof.profRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.prof.profRequest}
 */
proto.prof.profRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.prof.profRequest;
  return proto.prof.profRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.prof.profRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.prof.profRequest}
 */
proto.prof.profRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.prof.profRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.prof.profRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.prof.profRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.prof.profRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.profRequest} returns this
 */
proto.prof.profRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.prof.profResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.prof.profResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.prof.profResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    prof: (f = msg.getProf()) && proto.prof.Professor.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.prof.profResponse}
 */
proto.prof.profResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.prof.profResponse;
  return proto.prof.profResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.prof.profResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.prof.profResponse}
 */
proto.prof.profResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.prof.Professor;
      reader.readMessage(value,proto.prof.Professor.deserializeBinaryFromReader);
      msg.setProf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.prof.profResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.prof.profResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.prof.profResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.prof.Professor.serializeBinaryToWriter
    );
  }
};


/**
 * optional Professor prof = 1;
 * @return {?proto.prof.Professor}
 */
proto.prof.profResponse.prototype.getProf = function() {
  return /** @type{?proto.prof.Professor} */ (
    jspb.Message.getWrapperField(this, proto.prof.Professor, 1));
};


/**
 * @param {?proto.prof.Professor|undefined} value
 * @return {!proto.prof.profResponse} returns this
*/
proto.prof.profResponse.prototype.setProf = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.prof.profResponse} returns this
 */
proto.prof.profResponse.prototype.clearProf = function() {
  return this.setProf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.prof.profResponse.prototype.hasProf = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.prof.profListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.prof.profListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.prof.profListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.prof.profListRequest}
 */
proto.prof.profListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.prof.profListRequest;
  return proto.prof.profListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.prof.profListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.prof.profListRequest}
 */
proto.prof.profListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.prof.profListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.prof.profListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.prof.profListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.prof.profListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.prof.profListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.prof.profListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.prof.profListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profsList: jspb.Message.toObjectList(msg.getProfsList(),
    proto.prof.Professor.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.prof.profListResponse}
 */
proto.prof.profListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.prof.profListResponse;
  return proto.prof.profListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.prof.profListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.prof.profListResponse}
 */
proto.prof.profListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.prof.Professor;
      reader.readMessage(value,proto.prof.Professor.deserializeBinaryFromReader);
      msg.addProfs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.prof.profListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.prof.profListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.prof.profListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.profListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.prof.Professor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Professor profs = 1;
 * @return {!Array<!proto.prof.Professor>}
 */
proto.prof.profListResponse.prototype.getProfsList = function() {
  return /** @type{!Array<!proto.prof.Professor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.prof.Professor, 1));
};


/**
 * @param {!Array<!proto.prof.Professor>} value
 * @return {!proto.prof.profListResponse} returns this
*/
proto.prof.profListResponse.prototype.setProfsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.prof.Professor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.prof.Professor}
 */
proto.prof.profListResponse.prototype.addProfs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.prof.Professor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.prof.profListResponse} returns this
 */
proto.prof.profListResponse.prototype.clearProfsList = function() {
  return this.setProfsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.prof.Professor.prototype.toObject = function(opt_includeInstance) {
  return proto.prof.Professor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.prof.Professor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.Professor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rating: jspb.Message.getFieldWithDefault(msg, 2, ""),
    wouldtakeagain: jspb.Message.getFieldWithDefault(msg, 3, ""),
    levelofdifficulty: jspb.Message.getFieldWithDefault(msg, 4, ""),
    toptags: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reviews: jspb.Message.getFieldWithDefault(msg, 6, ""),
    numreviews: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.prof.Professor}
 */
proto.prof.Professor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.prof.Professor;
  return proto.prof.Professor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.prof.Professor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.prof.Professor}
 */
proto.prof.Professor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRating(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWouldtakeagain(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelofdifficulty(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToptags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReviews(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumreviews(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.prof.Professor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.prof.Professor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.prof.Professor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.prof.Professor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRating();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWouldtakeagain();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLevelofdifficulty();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToptags();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReviews();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNumreviews();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.prof.Professor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string rating = 2;
 * @return {string}
 */
proto.prof.Professor.prototype.getRating = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setRating = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string wouldTakeAgain = 3;
 * @return {string}
 */
proto.prof.Professor.prototype.getWouldtakeagain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setWouldtakeagain = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string levelOfDifficulty = 4;
 * @return {string}
 */
proto.prof.Professor.prototype.getLevelofdifficulty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setLevelofdifficulty = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string topTags = 5;
 * @return {string}
 */
proto.prof.Professor.prototype.getToptags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setToptags = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string reviews = 6;
 * @return {string}
 */
proto.prof.Professor.prototype.getReviews = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setReviews = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string numReviews = 7;
 * @return {string}
 */
proto.prof.Professor.prototype.getNumreviews = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.prof.Professor} returns this
 */
proto.prof.Professor.prototype.setNumreviews = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


goog.object.extend(exports, proto.prof);


/***/ }),

/***/ "Nv32":
/*!***************************************************!*\
  !*** ./src/app/roster/roster/roster.component.ts ***!
  \***************************************************/
/*! exports provided: RosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterComponent", function() { return RosterComponent; });
/* harmony import */ var _services_tracer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tracer.service */ "Th7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/classlist-client.service */ "9GJm");
/* harmony import */ var _services_prof_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prof-client.service */ "fFEM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roster-search/roster-search.component */ "seXH");
/* harmony import */ var _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../roster-card/roster-card.component */ "STuS");








function RosterComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", v_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r2);
} }
function RosterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-roster-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](class_r3);
} }
class RosterComponent {
    constructor(client1, client2) {
        this.client1 = client1;
        this.client2 = client2;
        this.classes = [];
        this.profs = [];
        this.years = ["SP21", "FA21"];
        this.selectedyear = "SP21";
        this.tracerService = new _services_tracer_service__WEBPACK_IMPORTED_MODULE_0__["TracerService"]();
    }
    ngOnInit() {
        const span = this.tracerService.getTracer().startSpan('ngOnInit-roster', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            this.client1.getClassList(this.selectedyear).asObservable().subscribe(val => {
                this.classes = val;
                console.log(this.classes);
            });
            this.client2.getProfList().asObservable().subscribe(val => {
                this.profs = val;
                console.log(this.profs);
            });
        });
        span.end();
    }
    onChange(event) {
        const span = this.tracerService.getTracer().startSpan('onChange', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            span.setAttribute("selectedYear", this.selectedyear);
            console.log("Selected Year : " + this.selectedyear);
            this.client1.getClassList(this.selectedyear).asObservable().subscribe(val => {
                this.classes = val;
                console.log(this.classes);
                // span.end();
            });
            span.end();
        });
    }
}
RosterComponent.ɵfac = function RosterComponent_Factory(t) { return new (t || RosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__["ClasslistClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_prof_client_service__WEBPACK_IMPORTED_MODULE_3__["ProfClientService"])); };
RosterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RosterComponent, selectors: [["app-roster"]], decls: 11, vars: 5, consts: [[1, "container"], ["id", "identity"], [3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "content"], [1, "roster-lists"], [4, "ngFor", "ngForOf"], [1, "search"], [3, "classes", "profs"], [3, "ngValue"]], template: function RosterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Electrical & Computer Engineering (ECE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RosterComponent_Template_select_ngModelChange_4_listener($event) { return ctx.selectedyear = $event; })("change", function RosterComponent_Template_select_change_4_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RosterComponent_option_5_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RosterComponent_div_8_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-roster-search", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("classes", ctx.classes)("profs", ctx.profs);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_6__["RosterSearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_7__["RosterCardComponent"]], styles: ["#identity[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  background: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 15%; \n  padding: 0px 0px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InJvc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lkZW50aXR5IHtcbiAgcGFkZGluZzogMjVweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogMTUlOyBcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4IDIwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "STuS":
/*!*************************************************************!*\
  !*** ./src/app/roster/roster-card/roster-card.component.ts ***!
  \*************************************************************/
/*! exports provided: RosterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterCardComponent", function() { return RosterCardComponent; });
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../proto/classList_pb */ "s0aR");
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_tracer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tracer.service */ "Th7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RosterCardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Location: TBD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterCardComponent_div_11_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const section_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.visitProf(section_r2.getInstructors()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("-- ", section_r2.getNumber(), " -- ", ctx_r0.class.getCredit(), " credits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](section_r2.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", section_r2.getTimes().getStart(), " - ", section_r2.getTimes().getEnd(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](section_r2.getInstructors());
} }
function RosterCardComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommendation_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", recommendation_r5, "% ");
} }
class RosterCardComponent {
    constructor(router) {
        this.router = router;
        this.recommendationsString = '';
        this.recommendations = [];
        this.tracerService = new _services_tracer_service__WEBPACK_IMPORTED_MODULE_1__["TracerService"]();
        this.class = new _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__["Class"]();
    }
    ngOnInit() {
        console.log(this.class);
        this.recommendationsString = this.class.getRecommendation();
        this.recommendations = this.recommendationsString.split(';');
    }
    visitProf(profName) {
        const span = this.tracerService.getTracer().startSpan('visitProf-rostercard', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            span.setAttribute("prof_name", profName);
            var idx = profName.indexOf('(') - 2;
            profName = profName.substr(0, idx);
            console.log(profName);
        });
        span.end();
        this.router.navigate(['roster/prof/' + profName]);
    }
}
RosterCardComponent.ɵfac = function RosterCardComponent_Factory(t) { return new (t || RosterCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RosterCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RosterCardComponent, selectors: [["app-roster-card"]], inputs: { class: "class" }, decls: 16, vars: 5, consts: [[1, "title-container"], [1, "title-code"], [1, "drop-sections"], ["class", "section-container", 4, "ngFor", "ngForOf"], [1, "recommendations"], [4, "ngFor", "ngForOf"], [1, "section-container"], [1, "section-details"], [1, "search-card", 3, "click"]], template: function RosterCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " List all sections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RosterCardComponent_div_11_Template, 13, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Top related recommendations based on similarity scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RosterCardComponent_div_15_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.class.getCode(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.class.getTitle(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.class.getDescription(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.class.getSectionsList());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recommendations);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background: #f2f2f2;\n  font-size: 1.18em;\n  font-weight: 300;\n  background: rgba(0,0,0,0.05);\n  border-left: 3px solid #b31b1b;\n  padding: 0.5em 66px 0.5em 0.75em;\n}\n\n.title-code[_ngcontent-%COMP%] {\n  width: 18%;\n  height: 100%;\n  text-align: left;\n  padding-right: 0.5em;\n  font-weight: bold;\n  float: left;\n}\n\n.section-container[_ngcontent-%COMP%] {\n  border: 1px dashed #b31b1b;\n  display: flex;\n  flex-direction: column;\n  background: #f2f2f2;\n  background: rgba(0,0,0,0.05);\n  padding: 0.5em;\n  margin-bottom: 1em;\n}\n\n.section-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.section-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.drop-sections[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyb3N0ZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGZvbnQtc2l6ZTogMS4xOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiMzFiMWI7XG4gIHBhZGRpbmc6IDAuNWVtIDY2cHggMC41ZW0gMC43NWVtO1xufVxuXG4udGl0bGUtY29kZSB7XG4gIHdpZHRoOiAxOCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNiMzFiMWI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5zZWN0aW9uLWNvbnRhaW5lciBoMyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlY3Rpb24tZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRyb3Atc2VjdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ "a+Y4":
/*!*******************************************************************!*\
  !*** ./src/app/roster/professor-card/professor-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfessorCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorCardComponent", function() { return ProfessorCardComponent; });
/* harmony import */ var proto_prof_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proto/prof_pb */ "80kh");
/* harmony import */ var proto_prof_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(proto_prof_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProfessorCardComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r1, " ");
} }
class ProfessorCardComponent {
    constructor() {
        this.reviewsString = '';
        this.reviews = [];
        this.prof = new proto_prof_pb__WEBPACK_IMPORTED_MODULE_0__["Professor"]();
    }
    ngOnInit() {
        console.log(this.prof);
        this.reviewsString = this.prof.getReviews();
        this.reviews = this.reviewsString.split(';');
    }
}
ProfessorCardComponent.ɵfac = function ProfessorCardComponent_Factory(t) { return new (t || ProfessorCardComponent)(); };
ProfessorCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfessorCardComponent, selectors: [["app-professor-card"]], inputs: { prof: "prof" }, decls: 29, vars: 7, consts: [[1, "title-container"], [1, "title-code"], [1, "title-rating"], [1, "keywords"], [1, "flex-item"], [1, "number"], [1, "tags"], [1, "reviews"], [4, "ngFor", "ngForOf"]], template: function ProfessorCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Would take again");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Level of Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Number of Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Top Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProfessorCardComponent_div_28_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Professor ", ctx.prof.getName(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.prof.getRating(), "/5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.prof.getWouldtakeagain());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.prof.getLevelofdifficulty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.prof.getNumreviews());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.prof.getToptags());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".title-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    background: #f2f2f2;\n    font-size: 1.6em;\n    font-weight: 300;\n    background: rgba(0,0,0,0.05);\n    border-left: 3px solid #b31b1b;\n    padding: 0.5em 66px 0.5em 0.75em;\n  }\n  \n  .title-code[_ngcontent-%COMP%] {\n    height: 100%;\n    text-align: left;\n    padding-right: 0.5em;\n    font-weight: bold;\n    float: left;\n  }\n  \n  .title-rating[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: blue;\n  }\n  \n  .number[_ngcontent-%COMP%] {\n    display: flex;\n    color: blue;\n    font-size: 1.6em;\n}\n  \n  .keywords[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n  \n  .flex-item[_ngcontent-%COMP%] {\n    flex: 33%;\n  }\n  \n  .tags[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Zlc3Nvci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUY7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7RUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0VBRUU7SUFDRSxTQUFTO0VBQ1g7O0VBRUY7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InByb2Zlc3Nvci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiMzFiMWI7XG4gICAgcGFkZGluZzogMC41ZW0gNjZweCAwLjVlbSAwLjc1ZW07XG4gIH1cbiAgXG4gIC50aXRsZS1jb2RlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC50aXRsZS1yYXRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG5cbi5udW1iZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuLmtleXdvcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbiAgLmZsZXgtaXRlbSB7XG4gICAgZmxleDogMzMlO1xuICB9XG5cbi50YWdzIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59Il19 */"] });


/***/ }),

/***/ "aYUR":
/*!*************************************************!*\
  !*** ./src/app/roster/roster-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RosterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterRoutingModule", function() { return RosterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster/roster.component */ "Nv32");
/* harmony import */ var _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roster-class/roster-class.component */ "gy0x");
/* harmony import */ var _roster_professor_roster_professor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roster-professor/roster-professor.component */ "oh39");
/* harmony import */ var _roster_class_roster_class_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roster-class/roster-class.resolver */ "6pfS");
/* harmony import */ var _roster_professor_roster_professor_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roster-professor/roster-professor.resolver */ "gbgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _roster_roster_component__WEBPACK_IMPORTED_MODULE_1__["RosterComponent"]
    },
    {
        path: 'class/ECE/:code',
        component: _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_2__["RosterClassComponent"],
        resolve: {
            classes: _roster_class_roster_class_resolver__WEBPACK_IMPORTED_MODULE_4__["RosterClassResolver"]
        }
    },
    {
        path: 'prof/:name',
        component: _roster_professor_roster_professor_component__WEBPACK_IMPORTED_MODULE_3__["RosterProfessorComponent"],
        resolve: {
            profs: _roster_professor_roster_professor_resolver__WEBPACK_IMPORTED_MODULE_5__["RosterProfessorResolver"]
        }
    }
];
class RosterRoutingModule {
}
RosterRoutingModule.ɵfac = function RosterRoutingModule_Factory(t) { return new (t || RosterRoutingModule)(); };
RosterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RosterRoutingModule });
RosterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RosterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fFEM":
/*!*************************************************!*\
  !*** ./src/app/services/prof-client.service.ts ***!
  \*************************************************/
/*! exports provided: ProfClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfClientService", function() { return ProfClientService; });
/* harmony import */ var _proto_ProfServiceClientPb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../proto/ProfServiceClientPb */ "1wmj");
/* harmony import */ var _proto_prof_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../proto/prof_pb */ "80kh");
/* harmony import */ var _proto_prof_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_proto_prof_pb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _tracer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracer.service */ "Th7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ProfClientService {
    constructor() {
        this.tracerService = new _tracer_service__WEBPACK_IMPORTED_MODULE_3__["TracerService"]();
        this.classCollections = {};
        this.client = new _proto_ProfServiceClientPb__WEBPACK_IMPORTED_MODULE_0__["profClient"]('http://localhost:8081');
    }
    getProf(name) {
        const span = this.tracerService.getTracer().startSpan('getProf', undefined, this.tracerService.getActiveContext());
        var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            var request = new _proto_prof_pb__WEBPACK_IMPORTED_MODULE_1__["profRequest"];
            var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _proto_prof_pb__WEBPACK_IMPORTED_MODULE_1__["Professor"]());
            request.setName(name);
            console.log(name);
            this.client.getProf(request, { 'custom-header-1': 'value1', 'traceid': span.spanContext().traceId, 'spanid': span.spanContext().spanId, 'traceflags': span.spanContext().traceFlags.toString() }, (err, response) => {
                if (err) {
                    console.log('Error code: ' + err.code + ' "' + err.message + '"');
                }
                result.next(response.getProf());
            });
            return result;
        });
        span.end();
        return result;
    }
    getProfList() {
        const span = this.tracerService.getTracer().startSpan('getProfList', undefined, this.tracerService.getActiveContext());
        var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            console.log("getProfList");
            var request = new _proto_prof_pb__WEBPACK_IMPORTED_MODULE_1__["profListRequest"];
            var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.client.getProfList(request, { 'custom-header-1': 'value1', 'traceid': span.spanContext().traceId, 'spanid': span.spanContext().spanId, 'traceflags': span.spanContext().traceFlags.toString() }, (err, response) => {
                if (err) {
                    console.log('Error code: ' + err.code + ' "' + err.message + '"');
                }
                result.next(response.getProfsList());
            });
            return result;
        });
        span.end();
        return result;
    }
}
ProfClientService.ɵfac = function ProfClientService_Factory(t) { return new (t || ProfClientService)(); };
ProfClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProfClientService, factory: ProfClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gbgK":
/*!**********************************************************************!*\
  !*** ./src/app/roster/roster-professor/roster-professor.resolver.ts ***!
  \**********************************************************************/
/*! exports provided: RosterProfessorResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterProfessorResolver", function() { return RosterProfessorResolver; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_prof_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/prof-client.service */ "fFEM");



class RosterProfessorResolver {
    constructor(client) {
        this.client = client;
    }
    resolve() {
        let ob = this.client.getProfList().asObservable();
        ob.subscribe(x => console.log(x));
        return ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(2));
    }
}
RosterProfessorResolver.ɵfac = function RosterProfessorResolver_Factory(t) { return new (t || RosterProfessorResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_prof_client_service__WEBPACK_IMPORTED_MODULE_2__["ProfClientService"])); };
RosterProfessorResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RosterProfessorResolver, factory: RosterProfessorResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gy0x":
/*!***************************************************************!*\
  !*** ./src/app/roster/roster-class/roster-class.component.ts ***!
  \***************************************************************/
/*! exports provided: RosterClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterClassComponent", function() { return RosterClassComponent; });
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../proto/classList_pb */ "s0aR");
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../roster-card/roster-card.component */ "STuS");




class RosterClassComponent {
    constructor(route) {
        this.route = route;
        this.semester = '';
        this.group = '';
        this.classNum = '';
        this.class_ = new _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__["Class"]();
        this.classes = [];
        // this.semester = this.route.snapshot.url[1].path; 
        this.group = this.route.snapshot.url[1].path;
        this.classNum = this.route.snapshot.url[2].path;
        this.route.data.subscribe((r) => console.log(r));
        this.classes = this.route.snapshot.data['classes'];
        console.log(this.classes);
        this.class_ = this.classes.filter(temp => temp.getCode() == (this.group + " " + this.classNum))[0];
    }
    ngOnInit() {
    }
}
RosterClassComponent.ɵfac = function RosterClassComponent_Factory(t) { return new (t || RosterClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RosterClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RosterClassComponent, selectors: [["app-roster-class"]], decls: 1, vars: 2, template: function RosterClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-roster-card");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class_);
    } }, directives: [_roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_3__["RosterCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItY2xhc3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "oh39":
/*!***********************************************************************!*\
  !*** ./src/app/roster/roster-professor/roster-professor.component.ts ***!
  \***********************************************************************/
/*! exports provided: RosterProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterProfessorComponent", function() { return RosterProfessorComponent; });
/* harmony import */ var proto_prof_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proto/prof_pb */ "80kh");
/* harmony import */ var proto_prof_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(proto_prof_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_prof_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/prof-client.service */ "fFEM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _professor_card_professor_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../professor-card/professor-card.component */ "a+Y4");





class RosterProfessorComponent {
    constructor(client, route) {
        this.client = client;
        this.route = route;
        this.profName = '';
        this.prof_ = new proto_prof_pb__WEBPACK_IMPORTED_MODULE_0__["Professor"]();
        this.profs = [];
        this.profName = this.route.snapshot.url[1].path;
        console.log(this.profName);
        // this.client.getProf(this.profName).asObservable().subscribe(val => {
        //   this.prof_ = val;
        //   console.log(this.prof_);
        // })
        this.route.data.subscribe((r) => console.log(r));
        this.profs = this.route.snapshot.data['profs'];
        console.log(this.profs);
        this.prof_ = this.profs.filter(temp => temp.getName().includes(this.profName))[0];
        console.log(this.prof_);
    }
    ngOnInit() {
    }
}
RosterProfessorComponent.ɵfac = function RosterProfessorComponent_Factory(t) { return new (t || RosterProfessorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_prof_client_service__WEBPACK_IMPORTED_MODULE_2__["ProfClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RosterProfessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RosterProfessorComponent, selectors: [["app-roster-professor"]], decls: 1, vars: 1, consts: [[3, "prof"]], template: function RosterProfessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-professor-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prof", ctx.prof_);
    } }, directives: [_professor_card_professor_card_component__WEBPACK_IMPORTED_MODULE_4__["ProfessorCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItcHJvZmVzc29yLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "seXH":
/*!*****************************************************************!*\
  !*** ./src/app/roster/roster-search/roster-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: RosterSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterSearchComponent", function() { return RosterSearchComponent; });
/* harmony import */ var _services_classlist_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/classlist-client.service */ "9GJm");
/* harmony import */ var _services_tracer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tracer.service */ "Th7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");








function RosterSearchComponent_mat_card_7_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterSearchComponent_mat_card_7_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const class_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.visitClass(class_r5.getNbr()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", class_r5.getCode(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", class_r5.getTitle(), " ");
} }
function RosterSearchComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RosterSearchComponent_mat_card_7_a_1_Template, 4, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.searchResults);
} }
function RosterSearchComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No matches found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RosterSearchComponent_mat_card_15_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RosterSearchComponent_mat_card_15_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const prof_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.visitProf(prof_r9.getName()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prof_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](prof_r9.getName());
} }
function RosterSearchComponent_mat_card_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RosterSearchComponent_mat_card_15_a_1_Template, 3, 1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.searchProfResults);
} }
function RosterSearchComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No matches found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RosterSearchComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.allClasses = [];
        this.searchResults = [];
        this.searchProfResults = [];
        this.noClassMatch = false;
        this.noProfMatch = false;
        this.client = new _services_classlist_client_service__WEBPACK_IMPORTED_MODULE_0__["ClasslistClientService"]();
        this.tracerService = new _services_tracer_service__WEBPACK_IMPORTED_MODULE_1__["TracerService"]();
        this.classes = [];
        this.profs = [];
    }
    ngOnInit() {
        const span = this.tracerService.getTracer().startSpan('ngOnInit-rostersearch', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            this.client.getClassList("all").asObservable().subscribe(val => {
                this.allClasses = val;
            });
        });
        span.end();
    }
    search(event) {
        const span = this.tracerService.getTracer().startSpan('search', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            this.searchResults = [];
            let query = event.target.value;
            span.setAttribute("query", query);
            if (query != '') {
                this.searchResults = this.allClasses.filter(class_ => (class_.getTitle().includes(query) || class_.getCode().includes(query) || class_.getTitle().toLowerCase().includes(query.toLowerCase()) || class_.getCode().toLowerCase().includes(query.toLowerCase())));
                if (this.searchResults.length == 0) {
                    this.noClassMatch = true;
                }
                else {
                    this.noClassMatch = false;
                }
            }
            else {
                this.noClassMatch = false;
            }
        });
        span.end();
    }
    visitClass(classNum) {
        const span = this.tracerService.getTracer().startSpan('visitClass', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            span.setAttribute("coursecode", classNum);
            span.end();
            this.router.navigate(['class/ECE/' + classNum], { relativeTo: this.route });
        });
    }
    searchProf(event) {
        const span = this.tracerService.getTracer().startSpan('searchProf', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            this.searchProfResults = [];
            let query = event.target.value;
            span.setAttribute("query", query);
            if (query != '') {
                console.log(this.profs);
                console.log(query);
                this.searchProfResults = this.profs.filter(prof_ => (prof_.getName().includes(query) || prof_.getName().toLowerCase().includes(query.toLowerCase())));
                if (this.searchProfResults.length == 0) {
                    this.noProfMatch = true;
                }
                else {
                    this.noProfMatch = false;
                }
                console.log("noProfMatch = " + this.noProfMatch);
            }
            else {
                this.noProfMatch = false;
            }
            span.end();
        });
    }
    visitProf(profName) {
        const span = this.tracerService.getTracer().startSpan('visitProf', undefined, this.tracerService.getActiveContext());
        this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
            span.setAttribute("prof", profName);
            console.log(profName);
            span.end();
            this.router.navigate(['prof/' + profName], { relativeTo: this.route });
        });
    }
}
RosterSearchComponent.ɵfac = function RosterSearchComponent_Factory(t) { return new (t || RosterSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RosterSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RosterSearchComponent, selectors: [["app-roster-search"]], inputs: { classes: "classes", profs: "profs" }, decls: 17, vars: 4, consts: [[1, "container"], ["appearance", "outline", 2, "margin-bottom", "-1.25em"], ["matInput", "", "type", "text", "autocomplete", "off", "required", "", 3, "input"], [4, "ngIf"], ["class", "search-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-card", 3, "click"]], template: function RosterSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " SEARCH BY COURSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Search by Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function RosterSearchComponent_Template_input_input_6_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RosterSearchComponent_mat_card_7_Template, 2, 1, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RosterSearchComponent_mat_error_8_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " SEARCH BY PROFESSOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Search by Professor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function RosterSearchComponent_Template_input_input_14_listener($event) { return ctx.searchProf($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RosterSearchComponent_mat_card_15_Template, 2, 1, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RosterSearchComponent_mat_error_16_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchResults.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noClassMatch == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchProfResults.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noProfMatch == true);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 0.2em; \n  display: flex;\n  flex-direction: column;\n}\n\n.search-card[_ngcontent-%COMP%] {\n  margin: 0px; \n  height: 3em;\n  overflow: hidden;\n  text-decoration: none;\n  color:black;\n}\n\n.search-card[_ngcontent-%COMP%]:hover {\n  border-left: 3px solid #b31b1b;\n  background: #f2f2f2;\n  background: rgba(0,0,0,0.05);\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:not(mat-card:hover)    > .search-card[_ngcontent-%COMP%]:first-child {\n  border-left: 3px solid #b31b1b;\n  background: #f2f2f2;\n  background: rgba(0,0,0,0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJyb3N0ZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDAuMmVtOyBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlYXJjaC1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7IFxuICBoZWlnaHQ6IDNlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjpibGFjaztcbn1cblxuLnNlYXJjaC1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjMxYjFiO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpub3QobWF0LWNhcmQ6aG92ZXIpID4gLnNlYXJjaC1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjMxYjFiO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4vKiA6bm90KG1hdElucHV0OmZvY3VzKSA+IG1hdC1jYXJkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1hdElucHV0OmZvY3VzID4gbWF0LWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbn0gKi8iXX0= */"] });


/***/ }),

/***/ "vgxn":
/*!*****************************************!*\
  !*** ./src/app/roster/roster.module.ts ***!
  \*****************************************/
/*! exports provided: RosterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterModule", function() { return RosterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _roster_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roster-routing.module */ "aYUR");
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roster/roster.component */ "Nv32");
/* harmony import */ var _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./roster-card/roster-card.component */ "STuS");
/* harmony import */ var _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./roster-class/roster-class.component */ "gy0x");
/* harmony import */ var _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roster-search/roster-search.component */ "seXH");
/* harmony import */ var _roster_professor_roster_professor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roster-professor/roster-professor.component */ "oh39");
/* harmony import */ var _professor_card_professor_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./professor-card/professor-card.component */ "a+Y4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");


// material

















class RosterModule {
}
RosterModule.ɵfac = function RosterModule_Factory(t) { return new (t || RosterModule)(); };
RosterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: RosterModule });
RosterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _roster_routing_module__WEBPACK_IMPORTED_MODULE_11__["RosterRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](RosterModule, { declarations: [_roster_roster_component__WEBPACK_IMPORTED_MODULE_12__["RosterComponent"], _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_13__["RosterCardComponent"], _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_14__["RosterClassComponent"], _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_15__["RosterSearchComponent"], _roster_professor_roster_professor_component__WEBPACK_IMPORTED_MODULE_16__["RosterProfessorComponent"], _professor_card_professor_card_component__WEBPACK_IMPORTED_MODULE_17__["ProfessorCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _roster_routing_module__WEBPACK_IMPORTED_MODULE_11__["RosterRoutingModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=roster-roster-module.js.map