var F = Object.defineProperty;
var q = (s, e, t) => e in s ? F(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var w = (s, e, t) => q(s, typeof e != "symbol" ? e + "" : e, t);
import { jsx as z } from "react/jsx-runtime";
import { useState as G, useRef as J, useEffect as K } from "react";
import { L as X } from "./context-CoVyjGLq.js";
var V = /* @__PURE__ */ ((s) => (s[s.GameCreated = 1] = "GameCreated", s[s.GameJoined = 2] = "GameJoined", s[s.GameStarting = 3] = "GameStarting", s[s.GameStarted = 4] = "GameStarted", s[s.RulesExplaining = 5] = "RulesExplaining", s[s.RulesExplained = 6] = "RulesExplained", s[s.MiniGameStarting = 7] = "MiniGameStarting", s[s.MiniGameStarted = 8] = "MiniGameStarted", s[s.MiniGameEnding = 9] = "MiniGameEnding", s[s.MiniGameEnded = 10] = "MiniGameEnded", s[s.GameEnding = 11] = "GameEnding", s[s.GameEnded = 12] = "GameEnded", s))(V || {});
const Le = {
  1: "GameCreated",
  2: "GameJoined",
  3: "GameStarting",
  4: "GameStarted",
  5: "RulesExplaining",
  6: "RulesExplained",
  7: "MiniGameStarting",
  8: "MiniGameStarted",
  9: "MiniGameEnding",
  10: "MiniGameEnded",
  11: "GameEnding",
  12: "GameEnded"
};
class y extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(e, t) {
    const n = new.target.prototype;
    super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = n;
  }
}
class x extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class C extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const t = new.target.prototype;
    super(e), this.__proto__ = t;
  }
}
class Q extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const n = new.target.prototype;
    super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = n;
  }
}
class Y extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const n = new.target.prototype;
    super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = n;
  }
}
class Z extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, t) {
    const n = new.target.prototype;
    super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = n;
  }
}
class W extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const t = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
  }
}
class ee extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(e, t) {
    const n = new.target.prototype;
    super(e), this.innerErrors = t, this.__proto__ = n;
  }
}
class B {
  constructor(e, t, n) {
    this.statusCode = e, this.statusText = t, this.content = n;
  }
}
class D {
  get(e, t) {
    return this.send({
      ...t,
      method: "GET",
      url: e
    });
  }
  post(e, t) {
    return this.send({
      ...t,
      method: "POST",
      url: e
    });
  }
  delete(e, t) {
    return this.send({
      ...t,
      method: "DELETE",
      url: e
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(e) {
    return "";
  }
}
var i;
(function(s) {
  s[s.Trace = 0] = "Trace", s[s.Debug = 1] = "Debug", s[s.Information = 2] = "Information", s[s.Warning = 3] = "Warning", s[s.Error = 4] = "Error", s[s.Critical = 5] = "Critical", s[s.None = 6] = "None";
})(i || (i = {}));
class I {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, t) {
  }
}
I.instance = new I();
const te = "8.0.7";
class f {
  static isRequired(e, t) {
    if (e == null)
      throw new Error(`The '${t}' argument is required.`);
  }
  static isNotEmpty(e, t) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${t}' argument should not be empty.`);
  }
  static isIn(e, t, n) {
    if (!(e in t))
      throw new Error(`Unknown ${n} value: ${e}.`);
  }
}
class _ {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !_.isNode && typeof window == "object" && typeof window.document == "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !_.isNode && typeof self == "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !_.isNode && typeof window == "object" && typeof window.document > "u";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
}
function T(s, e) {
  let t = "";
  return k(s) ? (t = `Binary data of length ${s.byteLength}`, e && (t += `. Content: '${ne(s)}'`)) : typeof s == "string" && (t = `String data of length ${s.length}`, e && (t += `. Content: '${s}'`)), t;
}
function ne(s) {
  const e = new Uint8Array(s);
  let t = "";
  return e.forEach((n) => {
    const o = n < 16 ? "0" : "";
    t += `0x${o}${n.toString(16)} `;
  }), t.substr(0, t.length - 1);
}
function k(s) {
  return s && typeof ArrayBuffer < "u" && (s instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  s.constructor && s.constructor.name === "ArrayBuffer");
}
async function j(s, e, t, n, o, r) {
  const c = {}, [a, l] = E();
  c[a] = l, s.log(i.Trace, `(${e} transport) sending data. ${T(o, r.logMessageContent)}.`);
  const u = k(o) ? "arraybuffer" : "text", d = await t.post(n, {
    content: o,
    headers: { ...c, ...r.headers },
    responseType: u,
    timeout: r.timeout,
    withCredentials: r.withCredentials
  });
  s.log(i.Trace, `(${e} transport) request complete. Response status: ${d.statusCode}.`);
}
function oe(s) {
  return s === void 0 ? new R(i.Information) : s === null ? I.instance : s.log !== void 0 ? s : new R(s);
}
class se {
  constructor(e, t) {
    this._subject = e, this._observer = t;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((t) => {
    });
  }
}
class R {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, t) {
    if (e >= this._minLevel) {
      const n = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${i[e]}: ${t}`;
      switch (e) {
        case i.Critical:
        case i.Error:
          this.out.error(n);
          break;
        case i.Warning:
          this.out.warn(n);
          break;
        case i.Information:
          this.out.info(n);
          break;
        default:
          this.out.log(n);
          break;
      }
    }
  }
}
function E() {
  let s = "X-SignalR-User-Agent";
  return _.isNode && (s = "User-Agent"), [s, re(te, ie(), ae(), ce())];
}
function re(s, e, t, n) {
  let o = "Microsoft SignalR/";
  const r = s.split(".");
  return o += `${r[0]}.${r[1]}`, o += ` (${s}; `, e && e !== "" ? o += `${e}; ` : o += "Unknown OS; ", o += `${t}`, n ? o += `; ${n}` : o += "; Unknown Runtime Version", o += ")", o;
}
function ie() {
  if (_.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function ce() {
  if (_.isNode)
    return process.versions.node;
}
function ae() {
  return _.isNode ? "NodeJS" : "Browser";
}
function $(s) {
  return s.stack ? s.stack : s.message ? s.message : `${s}`;
}
function le() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class he extends D {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u" || _.isNode) {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (t("tough-cookie")).CookieJar(), typeof fetch > "u" ? this._fetchType = t("node-fetch") : this._fetchType = fetch, this._fetchType = t("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(le());
    if (typeof AbortController > "u") {
      const t = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = t("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new C();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const t = new this._abortControllerType();
    let n;
    e.abortSignal && (e.abortSignal.onabort = () => {
      t.abort(), n = new C();
    });
    let o = null;
    if (e.timeout) {
      const l = e.timeout;
      o = setTimeout(() => {
        t.abort(), this._logger.log(i.Warning, "Timeout from HTTP request."), n = new x();
      }, l);
    }
    e.content === "" && (e.content = void 0), e.content && (e.headers = e.headers || {}, k(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
    let r;
    try {
      r = await this._fetchType(e.url, {
        body: e.content,
        cache: "no-cache",
        credentials: e.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          ...e.headers
        },
        method: e.method,
        mode: "cors",
        redirect: "follow",
        signal: t.signal
      });
    } catch (l) {
      throw n || (this._logger.log(i.Warning, `Error from HTTP request. ${l}.`), l);
    } finally {
      o && clearTimeout(o), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!r.ok) {
      const l = await N(r, "text");
      throw new y(l || r.statusText, r.status);
    }
    const a = await N(r, e.responseType);
    return new B(r.status, r.statusText, a);
  }
  getCookieString(e) {
    let t = "";
    return _.isNode && this._jar && this._jar.getCookies(e, (n, o) => t = o.join("; ")), t;
  }
}
function N(s, e) {
  let t;
  switch (e) {
    case "arraybuffer":
      t = s.arrayBuffer();
      break;
    case "text":
      t = s.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      t = s.text();
      break;
  }
  return t;
}
class ue extends D {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new C()) : e.method ? e.url ? new Promise((t, n) => {
      const o = new XMLHttpRequest();
      o.open(e.method, e.url, !0), o.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.content === "" && (e.content = void 0), e.content && (k(e.content) ? o.setRequestHeader("Content-Type", "application/octet-stream") : o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
      const r = e.headers;
      r && Object.keys(r).forEach((c) => {
        o.setRequestHeader(c, r[c]);
      }), e.responseType && (o.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        o.abort(), n(new C());
      }), e.timeout && (o.timeout = e.timeout), o.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), o.status >= 200 && o.status < 300 ? t(new B(o.status, o.statusText, o.response || o.responseText)) : n(new y(o.response || o.responseText || o.statusText, o.status));
      }, o.onerror = () => {
        this._logger.log(i.Warning, `Error from HTTP request. ${o.status}: ${o.statusText}.`), n(new y(o.statusText, o.status));
      }, o.ontimeout = () => {
        this._logger.log(i.Warning, "Timeout from HTTP request."), n(new x());
      }, o.send(e.content);
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class de extends D {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || _.isNode)
      this._httpClient = new he(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new ue(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new C()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class b {
  static write(e) {
    return `${e}${b.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== b.RecordSeparator)
      throw new Error("Message is incomplete.");
    const t = e.split(b.RecordSeparator);
    return t.pop(), t;
  }
}
b.RecordSeparatorCode = 30;
b.RecordSeparator = String.fromCharCode(b.RecordSeparatorCode);
class ge {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return b.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let t, n;
    if (k(e)) {
      const a = new Uint8Array(e), l = a.indexOf(b.RecordSeparatorCode);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const u = l + 1;
      t = String.fromCharCode.apply(null, Array.prototype.slice.call(a.slice(0, u))), n = a.byteLength > u ? a.slice(u).buffer : null;
    } else {
      const a = e, l = a.indexOf(b.RecordSeparator);
      if (l === -1)
        throw new Error("Message is incomplete.");
      const u = l + 1;
      t = a.substring(0, u), n = a.length > u ? a.substring(u) : null;
    }
    const o = b.parse(t), r = JSON.parse(o[0]);
    if (r.type)
      throw new Error("Expected a handshake response from the server.");
    return [n, r];
  }
}
var h;
(function(s) {
  s[s.Invocation = 1] = "Invocation", s[s.StreamItem = 2] = "StreamItem", s[s.Completion = 3] = "Completion", s[s.StreamInvocation = 4] = "StreamInvocation", s[s.CancelInvocation = 5] = "CancelInvocation", s[s.Ping = 6] = "Ping", s[s.Close = 7] = "Close", s[s.Ack = 8] = "Ack", s[s.Sequence = 9] = "Sequence";
})(h || (h = {}));
class _e {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const t of this.observers)
      t.next(e);
  }
  error(e) {
    for (const t of this.observers)
      t.error && t.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new se(this, e);
  }
}
class fe {
  constructor(e, t, n) {
    this._bufferSize = 1e5, this._messages = [], this._totalMessageCount = 0, this._waitForSequenceMessage = !1, this._nextReceivingSequenceId = 1, this._latestReceivedSequenceId = 0, this._bufferedByteCount = 0, this._reconnectInProgress = !1, this._protocol = e, this._connection = t, this._bufferSize = n;
  }
  async _send(e) {
    const t = this._protocol.writeMessage(e);
    let n = Promise.resolve();
    if (this._isInvocationMessage(e)) {
      this._totalMessageCount++;
      let o = () => {
      }, r = () => {
      };
      k(t) ? this._bufferedByteCount += t.byteLength : this._bufferedByteCount += t.length, this._bufferedByteCount >= this._bufferSize && (n = new Promise((c, a) => {
        o = c, r = a;
      })), this._messages.push(new pe(t, this._totalMessageCount, o, r));
    }
    try {
      this._reconnectInProgress || await this._connection.send(t);
    } catch {
      this._disconnected();
    }
    await n;
  }
  _ack(e) {
    let t = -1;
    for (let n = 0; n < this._messages.length; n++) {
      const o = this._messages[n];
      if (o._id <= e.sequenceId)
        t = n, k(o._message) ? this._bufferedByteCount -= o._message.byteLength : this._bufferedByteCount -= o._message.length, o._resolver();
      else if (this._bufferedByteCount < this._bufferSize)
        o._resolver();
      else
        break;
    }
    t !== -1 && (this._messages = this._messages.slice(t + 1));
  }
  _shouldProcessMessage(e) {
    if (this._waitForSequenceMessage)
      return e.type !== h.Sequence ? !1 : (this._waitForSequenceMessage = !1, !0);
    if (!this._isInvocationMessage(e))
      return !0;
    const t = this._nextReceivingSequenceId;
    return this._nextReceivingSequenceId++, t <= this._latestReceivedSequenceId ? (t === this._latestReceivedSequenceId && this._ackTimer(), !1) : (this._latestReceivedSequenceId = t, this._ackTimer(), !0);
  }
  _resetSequence(e) {
    if (e.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = e.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = !0, this._waitForSequenceMessage = !0;
  }
  async _resend() {
    const e = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
    await this._connection.send(this._protocol.writeMessage({ type: h.Sequence, sequenceId: e }));
    const t = this._messages;
    for (const n of t)
      await this._connection.send(n._message);
    this._reconnectInProgress = !1;
  }
  _dispose(e) {
    e ?? (e = new Error("Unable to reconnect to server."));
    for (const t of this._messages)
      t._rejector(e);
  }
  _isInvocationMessage(e) {
    switch (e.type) {
      case h.Invocation:
      case h.StreamItem:
      case h.Completion:
      case h.StreamInvocation:
      case h.CancelInvocation:
        return !0;
      case h.Close:
      case h.Sequence:
      case h.Ping:
      case h.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 && (this._ackTimerHandle = setTimeout(async () => {
      try {
        this._reconnectInProgress || await this._connection.send(this._protocol.writeMessage({ type: h.Ack, sequenceId: this._latestReceivedSequenceId }));
      } catch {
      }
      clearTimeout(this._ackTimerHandle), this._ackTimerHandle = void 0;
    }, 1e3));
  }
}
class pe {
  constructor(e, t, n, o) {
    this._message = e, this._id = t, this._resolver = n, this._rejector = o;
  }
}
const me = 30 * 1e3, we = 15 * 1e3, be = 1e5;
var g;
(function(s) {
  s.Disconnected = "Disconnected", s.Connecting = "Connecting", s.Connected = "Connected", s.Disconnecting = "Disconnecting", s.Reconnecting = "Reconnecting";
})(g || (g = {}));
class A {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, t, n, o, r, c, a) {
    return new A(e, t, n, o, r, c, a);
  }
  constructor(e, t, n, o, r, c, a) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(i.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, f.isRequired(e, "connection"), f.isRequired(t, "logger"), f.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = r ?? me, this.keepAliveIntervalInMilliseconds = c ?? we, this._statefulReconnectBufferSize = a ?? be, this._logger = t, this._protocol = n, this.connection = e, this._reconnectPolicy = o, this._handshakeProtocol = new ge(), this.connection.onreceive = (l) => this._processIncomingData(l), this.connection.onclose = (l) => this._connectionClosed(l), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = g.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: h.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(e) {
    if (this._connectionState !== g.Disconnected && this._connectionState !== g.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== g.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = g.Connecting, this._logger.log(i.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), _.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = g.Connected, this._connectionStarted = !0, this._logger.log(i.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = g.Disconnected, this._logger.log(i.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((t, n) => {
      this._handshakeResolver = t, this._handshakeRejecter = n;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let t = this._protocol.version;
      this.connection.features.reconnect || (t = 1);
      const n = {
        protocol: this._protocol.name,
        version: t
      };
      if (this._logger.log(i.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)), this._logger.log(i.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) && (this._messageBuffer = new fe(this._protocol, this.connection, this._statefulReconnectBufferSize), this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer), this.connection.features.resend = () => {
        if (this._messageBuffer)
          return this._messageBuffer._resend();
      }), this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage);
    } catch (t) {
      throw this._logger.log(i.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t;
    }
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const e = this._startPromise;
    this.connection.features.reconnect = !1, this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    if (this._connectionState === g.Disconnected)
      return this._logger.log(i.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === g.Disconnecting)
      return this._logger.log(i.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    const t = this._connectionState;
    return this._connectionState = g.Disconnecting, this._logger.log(i.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(i.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (t === g.Connected && this._sendCloseMessage(), this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new C("The connection was stopped before the hub handshake could complete."), this.connection.stop(e));
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {
    }
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(e, ...t) {
    const [n, o] = this._replaceStreamingParams(t), r = this._createStreamInvocation(e, t, o);
    let c;
    const a = new _e();
    return a.cancelCallback = () => {
      const l = this._createCancelInvocation(r.invocationId);
      return delete this._callbacks[r.invocationId], c.then(() => this._sendWithProtocol(l));
    }, this._callbacks[r.invocationId] = (l, u) => {
      if (u) {
        a.error(u);
        return;
      } else l && (l.type === h.Completion ? l.error ? a.error(new Error(l.error)) : a.complete() : a.next(l.item));
    }, c = this._sendWithProtocol(r).catch((l) => {
      a.error(l), delete this._callbacks[r.invocationId];
    }), this._launchStreams(n, c), a;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(e) {
    return this._messageBuffer ? this._messageBuffer._send(e) : this._sendMessage(this._protocol.writeMessage(e));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(e, ...t) {
    const [n, o] = this._replaceStreamingParams(t), r = this._sendWithProtocol(this._createInvocation(e, t, !0, o));
    return this._launchStreams(n, r), r;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(e, ...t) {
    const [n, o] = this._replaceStreamingParams(t), r = this._createInvocation(e, t, !1, o);
    return new Promise((a, l) => {
      this._callbacks[r.invocationId] = (d, S) => {
        if (S) {
          l(S);
          return;
        } else d && (d.type === h.Completion ? d.error ? l(new Error(d.error)) : a(d.result) : l(new Error(`Unexpected message type: ${d.type}`)));
      };
      const u = this._sendWithProtocol(r).catch((d) => {
        l(d), delete this._callbacks[r.invocationId];
      });
      this._launchStreams(n, u);
    });
  }
  on(e, t) {
    !e || !t || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(t) === -1 && this._methods[e].push(t));
  }
  off(e, t) {
    if (!e)
      return;
    e = e.toLowerCase();
    const n = this._methods[e];
    if (n)
      if (t) {
        const o = n.indexOf(t);
        o !== -1 && (n.splice(o, 1), n.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(e) {
    e && this._reconnectedCallbacks.push(e);
  }
  _processIncomingData(e) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
      const t = this._protocol.parseMessages(e, this._logger);
      for (const n of t)
        if (!(this._messageBuffer && !this._messageBuffer._shouldProcessMessage(n)))
          switch (n.type) {
            case h.Invocation:
              this._invokeClientMethod(n).catch((o) => {
                this._logger.log(i.Error, `Invoke client method threw error: ${$(o)}`);
              });
              break;
            case h.StreamItem:
            case h.Completion: {
              const o = this._callbacks[n.invocationId];
              if (o) {
                n.type === h.Completion && delete this._callbacks[n.invocationId];
                try {
                  o(n);
                } catch (r) {
                  this._logger.log(i.Error, `Stream callback threw error: ${$(r)}`);
                }
              }
              break;
            }
            case h.Ping:
              break;
            case h.Close: {
              this._logger.log(i.Information, "Close message received from server.");
              const o = n.error ? new Error("Server returned an error on close: " + n.error) : void 0;
              n.allowReconnect === !0 ? this.connection.stop(o) : this._stopPromise = this._stopInternal(o);
              break;
            }
            case h.Ack:
              this._messageBuffer && this._messageBuffer._ack(n);
              break;
            case h.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(n);
              break;
            default:
              this._logger.log(i.Warning, `Invalid message type: ${n.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let t, n;
    try {
      [n, t] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (o) {
      const r = "Error parsing handshake response: " + o;
      this._logger.log(i.Error, r);
      const c = new Error(r);
      throw this._handshakeRejecter(c), c;
    }
    if (t.error) {
      const o = "Server returned handshake error: " + t.error;
      this._logger.log(i.Error, o);
      const r = new Error(o);
      throw this._handshakeRejecter(r), r;
    } else
      this._logger.log(i.Debug, "Server handshake complete.");
    return this._handshakeResolver(), n;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if ((!this.connection.features || !this.connection.features.inherentKeepAlive) && (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), this._pingServerHandle === void 0)) {
      let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
      e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        if (this._connectionState === g.Connected)
          try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
      }, e);
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  async _invokeClientMethod(e) {
    const t = e.target.toLowerCase(), n = this._methods[t];
    if (!n) {
      this._logger.log(i.Warning, `No client method with the name '${t}' found.`), e.invocationId && (this._logger.log(i.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)));
      return;
    }
    const o = n.slice(), r = !!e.invocationId;
    let c, a, l;
    for (const u of o)
      try {
        const d = c;
        c = await u.apply(this, e.arguments), r && c && d && (this._logger.log(i.Error, `Multiple results provided for '${t}'. Sending error to server.`), l = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)), a = void 0;
      } catch (d) {
        a = d, this._logger.log(i.Error, `A callback for the method '${t}' threw error '${d}'.`);
      }
    l ? await this._sendWithProtocol(l) : r ? (a ? l = this._createCompletionMessage(e.invocationId, `${a}`, null) : c !== void 0 ? l = this._createCompletionMessage(e.invocationId, null, c) : (this._logger.log(i.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), l = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(l)) : c && this._logger.log(i.Error, `Result given for '${t}' method but server is not expecting a result.`);
  }
  _connectionClosed(e) {
    this._logger.log(i.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new C("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === g.Disconnecting ? this._completeClose(e) : this._connectionState === g.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === g.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = g.Disconnected, this._connectionStarted = !1, this._messageBuffer && (this._messageBuffer._dispose(e ?? new Error("Connection closed.")), this._messageBuffer = void 0), _.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((t) => t.apply(this, [e]));
      } catch (t) {
        this._logger.log(i.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
      }
    }
  }
  async _reconnect(e) {
    const t = Date.now();
    let n = 0, o = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), r = this._getNextRetryDelay(n++, 0, o);
    if (r === null) {
      this._logger.log(i.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = g.Reconnecting, e ? this._logger.log(i.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(i.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((c) => c.apply(this, [e]));
      } catch (c) {
        this._logger.log(i.Error, `An onreconnecting callback called with error '${e}' threw error '${c}'.`);
      }
      if (this._connectionState !== g.Reconnecting) {
        this._logger.log(i.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; r !== null; ) {
      if (this._logger.log(i.Information, `Reconnect attempt number ${n} will start in ${r} ms.`), await new Promise((c) => {
        this._reconnectDelayHandle = setTimeout(c, r);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== g.Reconnecting) {
        this._logger.log(i.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = g.Connected, this._logger.log(i.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
          } catch (c) {
            this._logger.log(i.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${c}'.`);
          }
        return;
      } catch (c) {
        if (this._logger.log(i.Information, `Reconnect attempt failed because of error '${c}'.`), this._connectionState !== g.Reconnecting) {
          this._logger.log(i.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === g.Disconnecting && this._completeClose();
          return;
        }
        o = c instanceof Error ? c : new Error(c.toString()), r = this._getNextRetryDelay(n++, Date.now() - t, o);
      }
    }
    this._logger.log(i.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${n} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, t, n) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: t,
        previousRetryCount: e,
        retryReason: n
      });
    } catch (o) {
      return this._logger.log(i.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${o}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const t = this._callbacks;
    this._callbacks = {}, Object.keys(t).forEach((n) => {
      const o = t[n];
      try {
        o(null, e);
      } catch (r) {
        this._logger.log(i.Error, `Stream 'error' callback called with '${e}' threw error: ${$(r)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, t, n, o) {
    if (n)
      return o.length !== 0 ? {
        arguments: t,
        streamIds: o,
        target: e,
        type: h.Invocation
      } : {
        arguments: t,
        target: e,
        type: h.Invocation
      };
    {
      const r = this._invocationId;
      return this._invocationId++, o.length !== 0 ? {
        arguments: t,
        invocationId: r.toString(),
        streamIds: o,
        target: e,
        type: h.Invocation
      } : {
        arguments: t,
        invocationId: r.toString(),
        target: e,
        type: h.Invocation
      };
    }
  }
  _launchStreams(e, t) {
    if (e.length !== 0) {
      t || (t = Promise.resolve());
      for (const n in e)
        e[n].subscribe({
          complete: () => {
            t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(n)));
          },
          error: (o) => {
            let r;
            o instanceof Error ? r = o.message : o && o.toString ? r = o.toString() : r = "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(n, r)));
          },
          next: (o) => {
            t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(n, o)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const t = [], n = [];
    for (let o = 0; o < e.length; o++) {
      const r = e[o];
      if (this._isObservable(r)) {
        const c = this._invocationId;
        this._invocationId++, t[c] = r, n.push(c.toString()), e.splice(o, 1);
      }
    }
    return [t, n];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, t, n) {
    const o = this._invocationId;
    return this._invocationId++, n.length !== 0 ? {
      arguments: t,
      invocationId: o.toString(),
      streamIds: n,
      target: e,
      type: h.StreamInvocation
    } : {
      arguments: t,
      invocationId: o.toString(),
      target: e,
      type: h.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: h.CancelInvocation
    };
  }
  _createStreamItemMessage(e, t) {
    return {
      invocationId: e,
      item: t,
      type: h.StreamItem
    };
  }
  _createCompletionMessage(e, t, n) {
    return t ? {
      error: t,
      invocationId: e,
      type: h.Completion
    } : {
      invocationId: e,
      result: n,
      type: h.Completion
    };
  }
  _createCloseMessage() {
    return { type: h.Close };
  }
}
const Ce = [0, 2e3, 1e4, 3e4, null];
class L {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : Ce;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class v {
}
v.Authorization = "Authorization";
v.Cookie = "Cookie";
class Se extends D {
  constructor(e, t) {
    super(), this._innerClient = e, this._accessTokenFactory = t;
  }
  async send(e) {
    let t = !0;
    this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (t = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(e);
    const n = await this._innerClient.send(e);
    return t && n.statusCode === 401 && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(e), await this._innerClient.send(e)) : n;
  }
  _setAuthorizationHeader(e) {
    e.headers || (e.headers = {}), this._accessToken ? e.headers[v.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[v.Authorization] && delete e.headers[v.Authorization];
  }
  getCookieString(e) {
    return this._innerClient.getCookieString(e);
  }
}
var p;
(function(s) {
  s[s.None = 0] = "None", s[s.WebSockets = 1] = "WebSockets", s[s.ServerSentEvents = 2] = "ServerSentEvents", s[s.LongPolling = 4] = "LongPolling";
})(p || (p = {}));
var m;
(function(s) {
  s[s.Text = 1] = "Text", s[s.Binary = 2] = "Binary";
})(m || (m = {}));
let ye = class {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class U {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(e, t, n) {
    this._httpClient = e, this._logger = t, this._pollAbort = new ye(), this._options = n, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    if (f.isRequired(e, "url"), f.isRequired(t, "transferFormat"), f.isIn(t, m, "transferFormat"), this._url = e, this._logger.log(i.Trace, "(LongPolling transport) Connecting."), t === m.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [n, o] = E(), r = { [n]: o, ...this._options.headers }, c = {
      abortSignal: this._pollAbort.signal,
      headers: r,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    t === m.Binary && (c.responseType = "arraybuffer");
    const a = `${e}&_=${Date.now()}`;
    this._logger.log(i.Trace, `(LongPolling transport) polling: ${a}.`);
    const l = await this._httpClient.get(a, c);
    l.statusCode !== 200 ? (this._logger.log(i.Error, `(LongPolling transport) Unexpected response code: ${l.statusCode}.`), this._closeError = new y(l.statusText || "", l.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, c);
  }
  async _poll(e, t) {
    try {
      for (; this._running; )
        try {
          const n = `${e}&_=${Date.now()}`;
          this._logger.log(i.Trace, `(LongPolling transport) polling: ${n}.`);
          const o = await this._httpClient.get(n, t);
          o.statusCode === 204 ? (this._logger.log(i.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : o.statusCode !== 200 ? (this._logger.log(i.Error, `(LongPolling transport) Unexpected response code: ${o.statusCode}.`), this._closeError = new y(o.statusText || "", o.statusCode), this._running = !1) : o.content ? (this._logger.log(i.Trace, `(LongPolling transport) data received. ${T(o.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(o.content)) : this._logger.log(i.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (n) {
          this._running ? n instanceof x ? this._logger.log(i.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = n, this._running = !1) : this._logger.log(i.Trace, `(LongPolling transport) Poll errored after shutdown: ${n.message}`);
        }
    } finally {
      this._logger.log(i.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? j(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(i.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(i.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [t, n] = E();
      e[t] = n;
      const o = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      };
      let r;
      try {
        await this._httpClient.delete(this._url, o);
      } catch (c) {
        r = c;
      }
      r ? r instanceof y && (r.statusCode === 404 ? this._logger.log(i.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.") : this._logger.log(i.Trace, `(LongPolling transport) Error sending a DELETE request: ${r}`)) : this._logger.log(i.Trace, "(LongPolling transport) DELETE request accepted.");
    } finally {
      this._logger.log(i.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(i.Trace, e), this.onclose(this._closeError);
    }
  }
}
class ve {
  constructor(e, t, n, o) {
    this._httpClient = e, this._accessToken = t, this._logger = n, this._options = o, this.onreceive = null, this.onclose = null;
  }
  async connect(e, t) {
    return f.isRequired(e, "url"), f.isRequired(t, "transferFormat"), f.isIn(t, m, "transferFormat"), this._logger.log(i.Trace, "(SSE transport) Connecting."), this._url = e, this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise((n, o) => {
      let r = !1;
      if (t !== m.Text) {
        o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let c;
      if (_.isBrowser || _.isWebWorker)
        c = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const a = this._httpClient.getCookieString(e), l = {};
        l.Cookie = a;
        const [u, d] = E();
        l[u] = d, c = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...l, ...this._options.headers } });
      }
      try {
        c.onmessage = (a) => {
          if (this.onreceive)
            try {
              this._logger.log(i.Trace, `(SSE transport) data received. ${T(a.data, this._options.logMessageContent)}.`), this.onreceive(a.data);
            } catch (l) {
              this._close(l);
              return;
            }
        }, c.onerror = (a) => {
          r ? this._close() : o(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, c.onopen = () => {
          this._logger.log(i.Information, `SSE connected to ${this._url}`), this._eventSource = c, r = !0, n();
        };
      } catch (a) {
        o(a);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? j(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class ke {
  constructor(e, t, n, o, r, c) {
    this._logger = n, this._accessTokenFactory = t, this._logMessageContent = o, this._webSocketConstructor = r, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = c;
  }
  async connect(e, t) {
    f.isRequired(e, "url"), f.isRequired(t, "transferFormat"), f.isIn(t, m, "transferFormat"), this._logger.log(i.Trace, "(WebSockets transport) Connecting.");
    let n;
    return this._accessTokenFactory && (n = await this._accessTokenFactory()), new Promise((o, r) => {
      e = e.replace(/^http/, "ws");
      let c;
      const a = this._httpClient.getCookieString(e);
      let l = !1;
      if (_.isNode || _.isReactNative) {
        const u = {}, [d, S] = E();
        u[d] = S, n && (u[v.Authorization] = `Bearer ${n}`), a && (u[v.Cookie] = a), c = new this._webSocketConstructor(e, void 0, {
          headers: { ...u, ...this._headers }
        });
      } else
        n && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(n)}`);
      c || (c = new this._webSocketConstructor(e)), t === m.Binary && (c.binaryType = "arraybuffer"), c.onopen = (u) => {
        this._logger.log(i.Information, `WebSocket connected to ${e}.`), this._webSocket = c, l = !0, o();
      }, c.onerror = (u) => {
        let d = null;
        typeof ErrorEvent < "u" && u instanceof ErrorEvent ? d = u.error : d = "There was an error with the transport", this._logger.log(i.Information, `(WebSockets transport) ${d}.`);
      }, c.onmessage = (u) => {
        if (this._logger.log(i.Trace, `(WebSockets transport) data received. ${T(u.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(u.data);
          } catch (d) {
            this._close(d);
            return;
          }
      }, c.onclose = (u) => {
        if (l)
          this._close(u);
        else {
          let d = null;
          typeof ErrorEvent < "u" && u instanceof ErrorEvent ? d = u.error : d = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", r(new Error(d));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(i.Trace, `(WebSockets transport) sending data. ${T(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(i.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const O = 100;
class Ee {
  constructor(e, t = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, f.isRequired(e, "url"), this._logger = oe(t.logger), this.baseUrl = this._resolveUrl(e), t = t || {}, t.logMessageContent = t.logMessageContent === void 0 ? !1 : t.logMessageContent, typeof t.withCredentials == "boolean" || t.withCredentials === void 0)
      t.withCredentials = t.withCredentials === void 0 ? !0 : t.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    t.timeout = t.timeout === void 0 ? 100 * 1e3 : t.timeout;
    let n = null, o = null;
    if (_.isNode && typeof require < "u") {
      const r = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      n = r("ws"), o = r("eventsource");
    }
    !_.isNode && typeof WebSocket < "u" && !t.WebSocket ? t.WebSocket = WebSocket : _.isNode && !t.WebSocket && n && (t.WebSocket = n), !_.isNode && typeof EventSource < "u" && !t.EventSource ? t.EventSource = EventSource : _.isNode && !t.EventSource && typeof o < "u" && (t.EventSource = o), this._httpClient = new Se(t.httpClient || new de(this._logger), t.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || m.Binary, f.isIn(e, m, "transferFormat"), this._logger.log(i.Debug, `Starting connection with transfer format '${m[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const t = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(i.Error, t), await this._stopPromise, Promise.reject(new C(t));
    } else if (this._connectionState !== "Connected") {
      const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(i.Error, t), Promise.reject(new C(t));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new M(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(i.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(i.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((t) => {
      this._stopPromiseResolver = t;
    }), await this._stopInternal(e), await this._stopPromise;
  }
  async _stopInternal(e) {
    this._stopError = e;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (t) {
        this._logger.log(i.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(i.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let t = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === p.WebSockets)
          this.transport = this._constructTransport(p.WebSockets), await this._startTransport(t, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let n = null, o = 0;
        do {
          if (n = await this._getNegotiationResponse(t), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new C("The connection was stopped during negotiation.");
          if (n.error)
            throw new Error(n.error);
          if (n.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (n.url && (t = n.url), n.accessToken) {
            const r = n.accessToken;
            this._accessTokenFactory = () => r, this._httpClient._accessToken = r, this._httpClient._accessTokenFactory = void 0;
          }
          o++;
        } while (n.url && o < O);
        if (o === O && n.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(t, this._options.transport, n, e);
      }
      this.transport instanceof U && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(i.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (n) {
      return this._logger.log(i.Error, "Failed to start the connection: " + n), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(n);
    }
  }
  async _getNegotiationResponse(e) {
    const t = {}, [n, o] = E();
    t[n] = o;
    const r = this._resolveNegotiateUrl(e);
    this._logger.log(i.Debug, `Sending negotiation request: ${r}.`);
    try {
      const c = await this._httpClient.post(r, {
        content: "",
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (c.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${c.statusCode}'`));
      const a = JSON.parse(c.content);
      return (!a.negotiateVersion || a.negotiateVersion < 1) && (a.connectionToken = a.connectionId), a.useStatefulReconnect && this._options._useStatefulReconnect !== !0 ? Promise.reject(new W("Client didn't negotiate Stateful Reconnect but the server did.")) : a;
    } catch (c) {
      let a = "Failed to complete negotiation with the server: " + c;
      return c instanceof y && c.statusCode === 404 && (a = a + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(i.Error, a), Promise.reject(new W(a));
    }
  }
  _createConnectUrl(e, t) {
    return t ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${t}` : e;
  }
  async _createTransport(e, t, n, o) {
    let r = this._createConnectUrl(e, n.connectionToken);
    if (this._isITransport(t)) {
      this._logger.log(i.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(r, o), this.connectionId = n.connectionId;
      return;
    }
    const c = [], a = n.availableTransports || [];
    let l = n;
    for (const u of a) {
      const d = this._resolveTransportOrError(u, t, o, (l == null ? void 0 : l.useStatefulReconnect) === !0);
      if (d instanceof Error)
        c.push(`${u.transport} failed:`), c.push(d);
      else if (this._isITransport(d)) {
        if (this.transport = d, !l) {
          try {
            l = await this._getNegotiationResponse(e);
          } catch (S) {
            return Promise.reject(S);
          }
          r = this._createConnectUrl(e, l.connectionToken);
        }
        try {
          await this._startTransport(r, o), this.connectionId = l.connectionId;
          return;
        } catch (S) {
          if (this._logger.log(i.Error, `Failed to start the transport '${u.transport}': ${S}`), l = void 0, c.push(new Z(`${u.transport} failed: ${S}`, p[u.transport])), this._connectionState !== "Connecting") {
            const H = "Failed to select transport before stop() was called.";
            return this._logger.log(i.Debug, H), Promise.reject(new C(H));
          }
        }
      }
    }
    return c.length > 0 ? Promise.reject(new ee(`Unable to connect to the server with any of the available transports. ${c.join(" ")}`, c)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case p.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new ke(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case p.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new ve(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case p.LongPolling:
        return new U(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, t) {
    return this.transport.onreceive = this.onreceive, this.features.reconnect ? this.transport.onclose = async (n) => {
      let o = !1;
      if (this.features.reconnect)
        try {
          this.features.disconnected(), await this.transport.connect(e, t), await this.features.resend();
        } catch {
          o = !0;
        }
      else {
        this._stopConnection(n);
        return;
      }
      o && this._stopConnection(n);
    } : this.transport.onclose = (n) => this._stopConnection(n), this.transport.connect(e, t);
  }
  _resolveTransportOrError(e, t, n, o) {
    const r = p[e.transport];
    if (r == null)
      return this._logger.log(i.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (Ie(t, r))
      if (e.transferFormats.map((a) => m[a]).indexOf(n) >= 0) {
        if (r === p.WebSockets && !this._options.WebSocket || r === p.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(i.Debug, `Skipping transport '${p[r]}' because it is not supported in your environment.'`), new Q(`'${p[r]}' is not supported in your environment.`, r);
        this._logger.log(i.Debug, `Selecting transport '${p[r]}'.`);
        try {
          return this.features.reconnect = r === p.WebSockets ? o : void 0, this._constructTransport(r);
        } catch (a) {
          return a;
        }
      } else
        return this._logger.log(i.Debug, `Skipping transport '${p[r]}' because it does not support the requested transfer format '${m[n]}'.`), new Error(`'${p[r]}' does not support ${m[n]}.`);
    else
      return this._logger.log(i.Debug, `Skipping transport '${p[r]}' because it was disabled by the client.`), new Y(`'${p[r]}' is disabled by the client.`, r);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(i.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(i.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(i.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(i.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(i.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t) => {
      this._logger.log(i.Error, `TransportSendQueue.stop() threw error '${t}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (t) {
        this._logger.log(i.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!_.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const t = window.document.createElement("a");
    return t.href = e, this._logger.log(i.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
  }
  _resolveNegotiateUrl(e) {
    const t = new URL(e);
    t.pathname.endsWith("/") ? t.pathname += "negotiate" : t.pathname += "/negotiate";
    const n = new URLSearchParams(t.searchParams);
    return n.has("negotiateVersion") || n.append("negotiateVersion", this._negotiateVersion.toString()), n.has("useStatefulReconnect") ? n.get("useStatefulReconnect") === "true" && (this._options._useStatefulReconnect = !0) : this._options._useStatefulReconnect === !0 && n.append("useStatefulReconnect", "true"), t.search = n.toString(), t.toString();
  }
}
function Ie(s, e) {
  return !s || (e & s) !== 0;
}
class M {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new P(), this._transportResult = new P(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new P()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(e) {
    if (this._buffer.length && typeof this._buffer[0] != typeof e)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
    this._buffer.push(e), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new P();
      const e = this._transportResult;
      this._transportResult = void 0;
      const t = typeof this._buffer[0] == "string" ? this._buffer.join("") : M._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(t), e.resolve();
      } catch (n) {
        e.reject(n);
      }
    }
  }
  static _concatBuffers(e) {
    const t = e.map((r) => r.byteLength).reduce((r, c) => r + c), n = new Uint8Array(t);
    let o = 0;
    for (const r of e)
      n.set(new Uint8Array(r), o), o += r.byteLength;
    return n.buffer;
  }
}
class P {
  constructor() {
    this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const Te = "json";
class Pe {
  constructor() {
    this.name = Te, this.version = 2, this.transferFormat = m.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    t === null && (t = I.instance);
    const n = b.parse(e), o = [];
    for (const r of n) {
      const c = JSON.parse(r);
      if (typeof c.type != "number")
        throw new Error("Invalid payload.");
      switch (c.type) {
        case h.Invocation:
          this._isInvocationMessage(c);
          break;
        case h.StreamItem:
          this._isStreamItemMessage(c);
          break;
        case h.Completion:
          this._isCompletionMessage(c);
          break;
        case h.Ping:
          break;
        case h.Close:
          break;
        case h.Ack:
          this._isAckMessage(c);
          break;
        case h.Sequence:
          this._isSequenceMessage(c);
          break;
        default:
          t.log(i.Information, "Unknown message type '" + c.type + "' ignored.");
          continue;
      }
      o.push(c);
    }
    return o;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(e) {
    return b.write(JSON.stringify(e));
  }
  _isInvocationMessage(e) {
    this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(e) {
    if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(e) {
    if (e.result && e.error)
      throw new Error("Invalid payload for Completion message.");
    !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(e, t) {
    if (typeof e != "string" || e === "")
      throw new Error(t);
  }
}
const Re = {
  trace: i.Trace,
  debug: i.Debug,
  info: i.Information,
  information: i.Information,
  warn: i.Warning,
  warning: i.Warning,
  error: i.Error,
  critical: i.Critical,
  none: i.None
};
function De(s) {
  const e = Re[s.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${s}`);
}
class $e {
  configureLogging(e) {
    if (f.isRequired(e, "logging"), xe(e))
      this.logger = e;
    else if (typeof e == "string") {
      const t = De(e);
      this.logger = new R(t);
    } else
      this.logger = new R(e);
    return this;
  }
  withUrl(e, t) {
    return f.isRequired(e, "url"), f.isNotEmpty(e, "url"), this.url = e, typeof t == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...t } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: t
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return f.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new L(e) : this.reconnectPolicy = e : this.reconnectPolicy = new L(), this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(e) {
    return f.isRequired(e, "milliseconds"), this._serverTimeoutInMilliseconds = e, this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(e) {
    return f.isRequired(e, "milliseconds"), this._keepAliveIntervalInMilliseconds = e, this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(e) {
    return this.httpConnectionOptions === void 0 && (this.httpConnectionOptions = {}), this.httpConnectionOptions._useStatefulReconnect = !0, this._statefulReconnectBufferSize = e == null ? void 0 : e.bufferSize, this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const t = new Ee(this.url, e);
    return A.create(t, this.logger || I.instance, this.protocol || new Pe(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function xe(s) {
  return s.log !== void 0;
}
class Ae {
  constructor(e, t, n) {
    w(this, "hubConnection");
    w(this, "interval", null);
    w(this, "onConnectedCallbacks", []);
    w(this, "onDisconnectedCallbacks", []);
    w(this, "callbacks", {
      GameStatusUpdate: {},
      Pong: {},
      SelectAnswer: {},
      MiniGameNotification: {}
    });
    w(this, "addOnConnectedCallback", (e) => {
      this.onConnectedCallbacks.push(e);
    });
    w(this, "addOnDisconnectedCallback", (e) => {
      this.onDisconnectedCallbacks.push(e);
    });
    w(this, "removeOnConnectedCallback", (e) => {
      this.onConnectedCallbacks = this.onConnectedCallbacks.filter(
        (t) => t !== e
      );
    });
    w(this, "removeOnDisconnectedCallback", (e) => {
      this.onDisconnectedCallbacks = this.onDisconnectedCallbacks.filter(
        (t) => t !== e
      );
    });
    w(this, "onSync", (e, t, n) => {
      this.callbacks[e][n] = t, this.reloadSync(e);
    });
    w(this, "offSync", (e, t) => {
      t && delete this.callbacks[e][t], this.reloadSync(e);
    });
    w(this, "reloadSync", (e) => {
      var n, o;
      const t = Object.entries(this.callbacks[e]);
      (n = this.hubConnection) == null || n.off(e), (o = this.hubConnection) == null || o.on(e, (r) => {
        t.forEach(([, c]) => c(r));
      });
    });
    w(this, "sendSync", async (e, t) => {
      var n, o;
      t != null ? await ((n = this.hubConnection) == null ? void 0 : n.invoke(e, t)) : await ((o = this.hubConnection) == null ? void 0 : o.invoke(e));
    });
    w(this, "_reconnectInterval", () => {
      this.interval = setTimeout(async () => {
        var e;
        ((e = this.hubConnection) == null ? void 0 : e.state) === g.Disconnected && await this._connect();
      }, 1e3);
    });
    this.wsUrl = e, t && this.onConnectedCallbacks.push(t), n && this.onDisconnectedCallbacks.push(n), this.hubConnection = new $e().withUrl(this.wsUrl).withKeepAliveInterval(12e4).build();
  }
  async _connect() {
    var e, t;
    try {
      (e = this.hubConnection) == null || e.onclose(() => {
        this.onDisconnectedCallbacks.forEach((n) => n());
      }), await ((t = this.hubConnection) == null ? void 0 : t.start()), this.onConnectedCallbacks.forEach((n) => n());
    } catch (n) {
      console.error("Error while starting connection: ", n), this.onDisconnectedCallbacks.forEach((o) => o());
    }
  }
  async init() {
    var e;
    if (this.isConnected()) {
      console.warn(
        `LocalSyncService is already connected to ${(e = this.hubConnection) == null ? void 0 : e.baseUrl}`
      );
      return;
    }
    this.removeOnDisconnectedCallback(this._reconnectInterval), this.addOnDisconnectedCallback(this._reconnectInterval), await this._connect();
  }
  isConnected() {
    var e;
    return ((e = this.hubConnection) == null ? void 0 : e.state) === g.Connected;
  }
  async dispose() {
    if (this.interval && (clearInterval(this.interval), this.interval = null), this.hubConnection)
      try {
        await this.hubConnection.stop();
      } catch (e) {
        console.error("Error while stopping connection: ", e);
      }
  }
}
const Oe = ({
  children: s,
  wsUrl: e
}) => {
  const [t, n] = G(!1), o = J(
    new Ae(
      e,
      () => {
        n(!0), console.log("Connected to LocalSyncService");
      },
      () => {
        n(!1), console.log("Disconnected from LocalSyncService");
      }
    )
  );
  return K(() => {
    const r = o.current;
    return r.init(), () => {
      r.dispose();
    };
  }, [o]), /* @__PURE__ */ z(
    X.Provider,
    {
      value: {
        addOnConnect: o.current.addOnConnectedCallback,
        addOnDisconnect: o.current.addOnDisconnectedCallback,
        removeOnConnect: o.current.removeOnConnectedCallback,
        removeOnDisconnect: o.current.removeOnDisconnectedCallback,
        connected: t,
        offSync: o.current.offSync,
        onSync: o.current.onSync,
        sendSync: o.current.sendSync
      },
      children: s
    }
  );
};
export {
  V as GameStatus,
  Le as GameStatusNames,
  Oe as LocalSyncServiceProvider
};
//# sourceMappingURL=main.js.map
