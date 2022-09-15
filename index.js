// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var PlayerState;
(function(PlayerState) {
    PlayerState[PlayerState["UNSTARTED"] = -1] = "UNSTARTED";
    PlayerState[PlayerState["ENDED"] = 0] = "ENDED";
    PlayerState[PlayerState["PLAYING"] = 1] = "PLAYING";
    PlayerState[PlayerState["PAUSED"] = 2] = "PAUSED";
    PlayerState[PlayerState["BUFFERING"] = 3] = "BUFFERING";
    PlayerState[PlayerState["CUED"] = 5] = "CUED";
})(PlayerState || (PlayerState = {}));
class YouTubePlayerDelegate {
    __player__;
    __notifier__;
    __initialVideoID__;
    __onPlayerReadyPromise__;
    __onPlayerReadyPromiseResolve___;
    constructor(option){
        if (option?.stateUpdater) this.__notifier__ = option.stateUpdater;
        if (option?.initialVideoID) this.__initialVideoID__ = option.initialVideoID;
        this.__onPlayerReadyPromise__ = new Promise((resolve)=>{
            this.__onPlayerReadyPromiseResolve___ = resolve;
        });
    }
    onStateChange(ev) {
        if (this.__notifier__) this.__notifier__(ev.target.getPlayerState());
    }
    onError(ev) {
        console.error("[ERROR] fresh-youtube:YouTubePlayerDelegate", ev);
    }
    onReady(ev) {
        this.__onPlayerReadyPromiseResolve___(ev.target);
    }
    __onPlayerLoaded__(player) {
        this.__player__ = player;
    }
    get ready() {
        return this.__onPlayerReadyPromise__;
    }
    initialVideoID() {
        if (this.__initialVideoID__) return this.__initialVideoID__;
        return "";
    }
    play() {
        this.__player__?.playVideo();
    }
    stop() {
        this.__player__?.stopVideo();
    }
    pause() {
        this.__player__?.pauseVideo();
    }
    load(videoId, startSeconds, suggestedQuality) {
        console.log(this.__player__, this.__player__?.loadVideoById);
        this.__player__.loadVideoById(videoId, startSeconds, suggestedQuality);
    }
    cue(videoId, startSeconds, suggestedQuality) {
        this.__player__?.cueVideoById(videoId, startSeconds, suggestedQuality);
    }
    next() {
        this.__player__?.nextVideo();
    }
    prev() {
        this.__player__?.previousVideo();
    }
    get muted() {
        return this.__player__.isMuted();
    }
    set muted(yes) {
        yes ? this.__player__?.mute() : this.__player__?.unMute();
    }
    set volume(vol) {
        this.__player__?.setVolume(vol);
    }
    get volume() {
        return this.__player__.getVolume();
    }
    get currentTime() {
        return this.__player__.getCurrentTime();
    }
    set currentTime(seconds) {
        this.__player__?.seekTo(seconds, true);
    }
    get duration() {
        return this.__player__.getDuration();
    }
    get state() {
        return this.__player__.getPlayerState();
    }
    get progress() {
        return Math.round(100 * this.currentTime / this.duration);
    }
    set progress(percentage) {
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        const sec = this.duration * (percentage / 100);
        this.__player__?.seekTo(Math.round(sec), true);
    }
    __destroy__() {
        this.__player__?.destroy();
    }
}
export { PlayerState as PlayerState };
export { YouTubePlayerDelegate as YouTubePlayerDelegate };
var P, d, $, S, F, T = {}, V = [], Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(t, e) {
    for(var n in e)t[n] = e[n];
    return t;
}
function j(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
}
function ee(t, e, n) {
    var r, l, o, s = {};
    for(o in e)o == "key" ? r = e[o] : o == "ref" ? l = e[o] : s[o] = e[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? P.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for(o in t.defaultProps)s[o] === void 0 && (s[o] = t.defaultProps[o]);
    return w(t, s, r, l, null);
}
function w(t, e, n, r, l) {
    var o = {
        type: t,
        props: e,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l ?? ++$
    };
    return l == null && d.vnode != null && d.vnode(o), o;
}
function L(t) {
    return t.children;
}
function U(t, e) {
    this.props = t, this.context = e;
}
function C(t, e) {
    if (e == null) return t.__ ? C(t.__, t.__.__k.indexOf(t) + 1) : null;
    for(var n; e < t.__k.length; e++)if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
    return typeof t.type == "function" ? C(t) : null;
}
function z(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
        for(t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)if ((n = t.__k[e]) != null && n.__e != null) {
            t.__e = t.__c.base = n.__e;
            break;
        }
        return z(t);
    }
}
function M(t) {
    (!t.__d && (t.__d = !0) && S.push(t) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
}
function D() {
    for(var t; D.__r = S.length;)t = S.sort(function(e, n) {
        return e.__v.__b - n.__v.__b;
    }), S = [], t.some(function(e) {
        var n, r, l, o, s, f;
        e.__d && (s = (o = (n = e).__v).__e, (f = n.__P) && (r = [], (l = k({}, o)).__v = o.__v + 1, W(f, o, l, n.__n, f.ownerSVGElement !== void 0, o.__h != null ? [
            s
        ] : null, r, s ?? C(o), o.__h), K(r, o), o.__e != s && z(o)));
    });
}
function G(t, e, n, r, l, o, s, f, p, a) {
    var _, h, c, i, u, b, v, y = r && r.__k || V, g = y.length;
    for(n.__k = [], _ = 0; _ < e.length; _++)if ((i = n.__k[_] = (i = e[_]) == null || typeof i == "boolean" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? w(null, i, null, null, i) : Array.isArray(i) ? w(L, {
        children: i
    }, null, null, null) : i.__b > 0 ? w(i.type, i.props, i.key, null, i.__v) : i) != null) {
        if (i.__ = n, i.__b = n.__b + 1, (c = y[_]) === null || c && i.key == c.key && i.type === c.type) y[_] = void 0;
        else for(h = 0; h < g; h++){
            if ((c = y[h]) && i.key == c.key && i.type === c.type) {
                y[h] = void 0;
                break;
            }
            c = null;
        }
        W(t, i, c = c || T, l, o, s, f, p, a), u = i.__e, (h = i.ref) && c.ref != h && (v || (v = []), c.ref && v.push(c.ref, null, i), v.push(h, i.__c || u, i)), u != null ? (b == null && (b = u), typeof i.type == "function" && i.__k === c.__k ? i.__d = p = q(i, p, t) : p = J(t, i, c, y, u, p), typeof n.type == "function" && (n.__d = p)) : p && c.__e == p && p.parentNode != t && (p = C(c));
    }
    for(n.__e = b, _ = g; _--;)y[_] != null && (typeof n.type == "function" && y[_].__e != null && y[_].__e == n.__d && (n.__d = C(r, _ + 1)), X(y[_], y[_]));
    if (v) for(_ = 0; _ < v.length; _++)Q(v[_], v[++_], v[++_]);
}
function q(t, e, n) {
    for(var r, l = t.__k, o = 0; l && o < l.length; o++)(r = l[o]) && (r.__ = t, e = typeof r.type == "function" ? q(r, e, n) : J(n, r, r, l, r.__e, e));
    return e;
}
function J(t, e, n, r, l, o) {
    var s, f, p;
    if (e.__d !== void 0) s = e.__d, e.__d = void 0;
    else if (n == null || l != o || l.parentNode == null) e: if (o == null || o.parentNode !== t) t.appendChild(l), s = null;
    else {
        for(f = o, p = 0; (f = f.nextSibling) && p < r.length; p += 2)if (f == l) break e;
        t.insertBefore(l, o), s = o;
    }
    return s !== void 0 ? s : l.nextSibling;
}
function ne(t, e, n, r, l) {
    var o;
    for(o in n)o === "children" || o === "key" || o in e || N(t, o, null, n[o], r);
    for(o in e)l && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || N(t, o, e[o], n[o], r);
}
function I(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Z.test(e) ? n : n + "px";
}
function N(t, e, n, r, l) {
    var o;
    e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
    else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r) for(e in r)n && e in n || I(t.style, e, "");
        if (n) for(e in n)r && n[e] === r[e] || I(t.style, e, n[e]);
    }
    else if (e[0] === "o" && e[1] === "n") o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? R : O, o) : t.removeEventListener(e, o ? R : O, o);
    else if (e !== "dangerouslySetInnerHTML") {
        if (l) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t) try {
            t[e] = n ?? "";
            break e;
        } catch  {}
        typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e));
    }
}
function O(t) {
    this.l[t.type + !1](d.event ? d.event(t) : t);
}
function R(t) {
    this.l[t.type + !0](d.event ? d.event(t) : t);
}
function W(t, e, n, r, l, o, s, f, p) {
    var a, _, h, c, i, u, b, v, y, g, x, H, E, m = e.type;
    if (e.constructor !== void 0) return null;
    n.__h != null && (p = n.__h, f = e.__e = n.__e, e.__h = null, o = [
        f
    ]), (a = d.__b) && a(e);
    try {
        e: if (typeof m == "function") {
            if (v = e.props, y = (a = m.contextType) && r[a.__c], g = a ? y ? y.props.value : a.__ : r, n.__c ? b = (_ = e.__c = n.__c).__ = _.__E : ("prototype" in m && m.prototype.render ? e.__c = _ = new m(v, g) : (e.__c = _ = new U(v, g), _.constructor = m, _.render = oe), y && y.sub(_), _.props = v, _.state || (_.state = {}), _.context = g, _.__n = r, h = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), m.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = k({}, _.__s)), k(_.__s, m.getDerivedStateFromProps(v, _.__s))), c = _.props, i = _.state, h) m.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
            else {
                if (m.getDerivedStateFromProps == null && v !== c && _.componentWillReceiveProps != null && _.componentWillReceiveProps(v, g), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(v, _.__s, g) === !1 || e.__v === n.__v) {
                    _.props = v, _.state = _.__s, e.__v !== n.__v && (_.__d = !1), _.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(A) {
                        A && (A.__ = e);
                    }), _.__h.length && s.push(_);
                    break e;
                }
                _.componentWillUpdate != null && _.componentWillUpdate(v, _.__s, g), _.componentDidUpdate != null && _.__h.push(function() {
                    _.componentDidUpdate(c, i, u);
                });
            }
            if (_.context = g, _.props = v, _.__v = e, _.__P = t, x = d.__r, H = 0, "prototype" in m && m.prototype.render) _.state = _.__s, _.__d = !1, x && x(e), a = _.render(_.props, _.state, _.context);
            else do _.__d = !1, x && x(e), a = _.render(_.props, _.state, _.context), _.state = _.__s;
            while (_.__d && ++H < 25)
            _.state = _.__s, _.getChildContext != null && (r = k(k({}, r), _.getChildContext())), h || _.getSnapshotBeforeUpdate == null || (u = _.getSnapshotBeforeUpdate(c, i)), E = a != null && a.type === L && a.key == null ? a.props.children : a, G(t, Array.isArray(E) ? E : [
                E
            ], e, n, r, l, o, s, f, p), _.base = e.__e, e.__h = null, _.__h.length && s.push(_), b && (_.__E = _.__ = null), _.__e = !1;
        } else o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = _e(n.__e, e, n, r, l, o, s, p);
        (a = d.diffed) && a(e);
    } catch (A) {
        e.__v = null, (p || o != null) && (e.__e = f, e.__h = !!p, o[o.indexOf(f)] = null), d.__e(A, e, n);
    }
}
function K(t, e) {
    d.__c && d.__c(e, t), t.some(function(n) {
        try {
            t = n.__h, n.__h = [], t.some(function(r) {
                r.call(n);
            });
        } catch (r) {
            d.__e(r, n.__v);
        }
    });
}
function _e(t, e, n, r, l, o, s, f) {
    var p, a, _, h = n.props, c = e.props, i = e.type, u = 0;
    if (i === "svg" && (l = !0), o != null) {
        for(; u < o.length; u++)if ((p = o[u]) && "setAttribute" in p == !!i && (i ? p.localName === i : p.nodeType === 3)) {
            t = p, o[u] = null;
            break;
        }
    }
    if (t == null) {
        if (i === null) return document.createTextNode(c);
        t = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, c.is && c), o = null, f = !1;
    }
    if (i === null) h === c || f && t.data === c || (t.data = c);
    else {
        if (o = o && P.call(t.childNodes), a = (h = n.props || T).dangerouslySetInnerHTML, _ = c.dangerouslySetInnerHTML, !f) {
            if (o != null) for(h = {}, u = 0; u < t.attributes.length; u++)h[t.attributes[u].name] = t.attributes[u].value;
            (_ || a) && (_ && (a && _.__html == a.__html || _.__html === t.innerHTML) || (t.innerHTML = _ && _.__html || ""));
        }
        if (ne(t, c, h, l, f), _) e.__k = [];
        else if (u = e.props.children, G(t, Array.isArray(u) ? u : [
            u
        ], e, n, r, l && i !== "foreignObject", o, s, o ? o[0] : n.__k && C(n, 0), f), o != null) for(u = o.length; u--;)o[u] != null && j(o[u]);
        f || ("value" in c && (u = c.value) !== void 0 && (u !== t.value || i === "progress" && !u || i === "option" && u !== h.value) && N(t, "value", u, h.value, !1), "checked" in c && (u = c.checked) !== void 0 && u !== t.checked && N(t, "checked", u, h.checked, !1));
    }
    return t;
}
function Q(t, e, n) {
    try {
        typeof t == "function" ? t(e) : t.current = e;
    } catch (r) {
        d.__e(r, n);
    }
}
function X(t, e, n) {
    var r, l;
    if (d.unmount && d.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Q(r, null, e)), (r = t.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (o) {
            d.__e(o, e);
        }
        r.base = r.__P = null;
    }
    if (r = t.__k) for(l = 0; l < r.length; l++)r[l] && X(r[l], e, typeof t.type != "function");
    n || t.__e == null || j(t.__e), t.__e = t.__d = void 0;
}
function oe(t, e, n) {
    return this.constructor(t, n);
}
P = V.slice, d = {
    __e: function(t, e, n, r) {
        for(var l, o, s; e = e.__;)if ((l = e.__c) && !l.__) try {
            if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(t)), s = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, r || {}), s = l.__d), s) return l.__E = l;
        } catch (f) {
            t = f;
        }
        throw t;
    }
}, $ = 0, U.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, n), this.props)), t && k(n, t), t != null && this.__v && (e && this.__h.push(e), M(this));
}, U.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, 0;
function YouTubePlayerView(props) {
    const onDivLoaded = (ref)=>{
        let { context , eventListener , controller , delegate  } = props;
        if (!context) context = window;
        if (delegate) controller = eventListener = delegate;
        if (!eventListener || !controller) {
            throw new Error("Both `eventListener` and `controller` are required, or provide `delegate`");
        }
        const scriptOnLoad = ()=>{
            const yt = context.YT;
            context["onYouTubeIframeAPIReady"] = ()=>{
                const player = new yt.Player(ref, {
                    width: "100%",
                    height: "100%",
                    videoId: controller.initialVideoID ? controller?.initialVideoID() : null,
                    events: {
                        onStateChange: (ev)=>eventListener.onStateChange(ev),
                        onError: (ev)=>eventListener.onError(ev),
                        onReady: (ev)=>eventListener.onReady ? eventListener.onReady(ev) : null
                    }
                });
                controller.__onPlayerLoaded__(player);
            };
        };
        const script = context.document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.onload = scriptOnLoad;
        context.document.head.appendChild(script);
    };
    return ee("div", Object.assign({}, props), ee("div", {
        id: "player",
        ref: onDivLoaded
    }));
}
export { YouTubePlayerView as YouTubePlayerView };

