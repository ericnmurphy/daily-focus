!(function(t) {
  if ('object' == typeof exports && 'undefined' != typeof module)
    module.exports = t()
  else if ('function' == typeof define && define.amd) define([], t)
  else {
    ;('undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : this
    ).autosizeInput = t()
  }
})(function() {
  return (function() {
    return function t(e, n, i) {
      function r(f, d) {
        if (!n[f]) {
          if (!e[f]) {
            var a = 'function' == typeof require && require
            if (!d && a) return a(f, !0)
            if (o) return o(f, !0)
            var u = new Error("Cannot find module '" + f + "'")
            throw ((u.code = 'MODULE_NOT_FOUND'), u)
          }
          var l = (n[f] = { exports: {} })
          e[f][0].call(
            l.exports,
            function(t) {
              return r(e[f][1][t] || t)
            },
            l,
            l.exports,
            t,
            e,
            n,
            i
          )
        }
        return n[f].exports
      }
      for (
        var o = 'function' == typeof require && require, f = 0;
        f < i.length;
        f++
      )
        r(i[f])
      return r
    }
  })()(
    {
      1: [
        function(t, e, n) {
          var i = '__autosizeInputGhost',
            r = { ' ': 'nbsp', '<': 'lt', '>': 'gt' }
          function o(t) {
            return '&' + r[t] + ';'
          }
          e.exports = function(t, e) {
            var n = window.getComputedStyle(t),
              r =
                'box-sizing:' +
                n.boxSizing +
                ';border-left:' +
                n.borderLeftWidth +
                ' solid red;border-right:' +
                n.borderRightWidth +
                ' solid red;font-family:' +
                n.fontFamily +
                ';font-feature-settings:' +
                n.fontFeatureSettings +
                ';font-kerning:' +
                n.fontKerning +
                ';font-size:' +
                n.fontSize +
                ';font-stretch:' +
                n.fontStretch +
                ';font-style:' +
                n.fontStyle +
                ';font-variant:' +
                n.fontVariant +
                ';font-variant-caps:' +
                n.fontVariantCaps +
                ';font-variant-ligatures:' +
                n.fontVariantLigatures +
                ';font-variant-numeric:' +
                n.fontVariantNumeric +
                ';font-weight:' +
                n.fontWeight +
                ';letter-spacing:' +
                n.letterSpacing +
                ';margin-left:' +
                n.marginLeft +
                ';margin-right:' +
                n.marginRight +
                ';padding-left:' +
                n.paddingLeft +
                ';padding-right:' +
                n.paddingRight +
                ';text-indent:' +
                n.textIndent +
                ';text-transform:' +
                n.textTransform
            function f() {
              var e = t.value || t.getAttribute('placeholder') || '',
                n =
                  document.getElementById(i) ||
                  (function() {
                    var t = document.createElement('div')
                    return (
                      (t.id = i),
                      (t.style.cssText =
                        'display:inline-block;height:0;overflow:hidden;position:absolute;top:0;visibility:hidden;white-space:nowrap;'),
                      document.body.appendChild(t),
                      t
                    )
                  })()
              ;(n.style.cssText += r),
                (n.innerHTML = (function(t) {
                  return t.replace(/\s|<|>/g, o)
                })(e))
              var f = window.getComputedStyle(n).width
              return (t.style.width = f), f
            }
            t.addEventListener('input', f)
            var d = f()
            return (
              e && e.minWidth && '0px' !== d && (t.style.minWidth = d),
              function() {
                t.removeEventListener('input', f)
                var e = document.getElementById(i)
                e && e.parentNode.removeChild(e)
              }
            )
          }
        },
        {},
      ],
    },
    {},
    [1]
  )(1)
})
