"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(Dn,I,n){n.d(I,{Z:function(){return sn},f:function(){return S}});var q=n(667294),S=q.createContext(!1);function sn(){return q.useContext(S)}},438746:function(Dn,I,n){n.d(I,{Z:function(){return m}});var q=n(97857),S=n.n(q),sn=n(952677),v=n.n(sn),C=n(805574),F=n.n(C),pn=n(385956),l=n(667294),R=n(302559);function M(O){return O.replace("-cn","").replace(/\/$/,"")}function m(){var O=(0,pn.useLocation)(),nn=O.search,rn=(0,R.default)(),s=F()(rn,2),o=s[1],u=l.useCallback(function(e,x){var g=M(e);if(o==="cn"&&(g="".concat(g,"-cn")),nn&&(g="".concat(g).concat(nn)),x){var j;v()(x)==="object"?j=x[o]:j=x,g="".concat(g,"#").concat(j)}return g},[o,nn]);return S()(S()({},O),{},{pathname:M(O.pathname),getLink:u})}},361446:function(Dn,I,n){var q=n(805574),S=n.n(q),sn=n(719632),v=n.n(sn),C=n(667294),F=n(844183),pn=n(566254),l=n(385956),R=n(472638),M=n(438746),m=n(785893),O=function(s){var o=s.before,u=s.after,e=s.link,x=s.title,g=s.subtitle,j=s.search,W=s.tag,G=W===void 0?"":W,c=s.className;return!o&&!u?(0,m.jsxs)(R.Z,{to:"".concat(e).concat(j),style:G?{display:"flex",alignItems:"center",justifyContent:"space-between"}:void 0,className:c,children:[(0,m.jsxs)("span",{children:[x,g&&(0,m.jsx)("span",{className:"chinese",children:g})]}),G&&(0,m.jsx)(F.Z,{bordered:!1,color:G==="New"?"success":"processing",style:{marginBlockEnd:0},children:G.replace("VERSION",pn.Z)})]}):(0,m.jsxs)(R.Z,{to:"".concat(e).concat(j),className:c,children:[o,x,g&&(0,m.jsx)("span",{className:"chinese",children:g}),u]})},nn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,l.useFullSidebarData)(),u=(0,M.Z)(),e=u.pathname,x=u.search,g=(0,l.useSidebarData)(),j=s.before,W=s.after,G=(0,C.useMemo)(function(){var c,E=v()(g!=null?g:[]);if(e.startsWith("/docs/spec")){var $=E.splice(0,1);E.push.apply(E,v()($))}if(e.startsWith("/docs/react")){var D,L=(D=Object.entries(o).find(function(V){var T=S()(V,1),B=T[0];return B.startsWith("/changelog")}))===null||D===void 0?void 0:D[1];L&&E.splice(1,0,L[0])}if(e.startsWith("/changelog")){var X,U=(X=Object.entries(o).find(function(V){var T=S()(V,1),B=T[0];return B.startsWith("/docs/react")}))===null||X===void 0?void 0:X[1];U&&(E.unshift(U[0]),E.push.apply(E,v()(U.slice(1))))}return(c=E==null?void 0:E.reduce(function(V,T){if(T!=null&&T.title)if(e.startsWith("/docs/spec")){var B,_,mn=T.children.reduce(function(w,h){var d,b,k=(d=(b=h.frontmatter)===null||b===void 0?void 0:b.type)!==null&&d!==void 0?d:"default";return w[k]||(w[k]=[]),w[k].push(h),w},{}),dn=[];dn.push.apply(dn,v()((B=(_=mn.default)===null||_===void 0?void 0:_.map(function(w){return{label:(0,m.jsxs)(R.Z,{to:"".concat(w.link).concat(x),children:[j,w==null?void 0:w.title,W]}),key:w.link.replace(/(-cn$)/g,"")}}))!==null&&B!==void 0?B:[])),Object.entries(mn).forEach(function(w){var h=S()(w,2),d=h[0],b=h[1];d!=="default"&&dn.push({type:"group",label:d,key:d,children:b==null?void 0:b.map(function(k){return{label:(0,m.jsxs)(R.Z,{to:"".concat(k.link).concat(x),children:[j,k==null?void 0:k.title,W]}),key:k.link.replace(/(-cn$)/g,"")}})})}),V.push({label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:dn})}else{var bn;V.push({type:"group",label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:(bn=T.children)===null||bn===void 0?void 0:bn.map(function(w){var h,d;return{label:(0,m.jsx)(O,{before:j,after:W,link:w.link,title:w==null?void 0:w.title,subtitle:(h=w.frontmatter)===null||h===void 0?void 0:h.subtitle,search:x,tag:(d=w.frontmatter)===null||d===void 0?void 0:d.tag}),key:w.link.replace(/(-cn$)/g,"")}})})}else{var H=T.children||[];H.every(function(w){var h;return w==null||(h=w.frontmatter)===null||h===void 0?void 0:h.date})&&H.sort(function(w,h){var d,b;return((d=w.frontmatter)===null||d===void 0?void 0:d.date)>((b=h.frontmatter)===null||b===void 0?void 0:b.date)?-1:1}),V.push.apply(V,v()(H.map(function(w){var h;return{label:(0,m.jsx)(O,{before:j,after:W,link:w.link,title:w==null?void 0:w.title,search:x,tag:(h=w.frontmatter)===null||h===void 0?void 0:h.tag}),key:w.link.replace(/(-cn$)/g,"")}})))}return V},[]))!==null&&c!==void 0?c:[]},[g,o,e,x,s]);return[G,e]};I.Z=nn},148050:function(Dn,I,n){n.r(I);var q=n(168400),S=n.n(q),sn=n(667294),v=n(639389),C=n.n(v),F=n(879587),pn=n(647759),l=n(785893),R,M="https://github.com/ant-design/ant-design/edit/master/",m=(0,pn.kc)(function(nn){var rn=nn.token,s=nn.css,o=rn.colorIcon,u=rn.colorText,e=rn.iconCls;return{editButton:s(R||(R=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,o,u)}}),O=function(rn){var s=rn.title,o=rn.filename,u=m(),e=u.styles;return(0,l.jsx)(F.Z,{title:s,children:(0,l.jsx)("a",{className:e.editButton,href:"".concat(M).concat(o),target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(v.EditOutlined,{})})})};I.default=O},787729:function(Dn,I,n){n.r(I),n.d(I,{default:function(){return lo}});var q=n(805574),S=n.n(q),sn=n(693967),v=n.n(sn),C=n(727484),F=n.n(C),pn=n(533852),l=n(667294),R=n(75529),M=n(715778),m=n(385956),O=n(302559),nn=n(438746),rn=n(168400),s=n.n(rn),o=n(370917),u=n(647759),e=n(785893),x,g={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},j=function(){var t=(0,u.Fg)(),r=function f(y){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(y,"-").concat(p,` {
  background: `).concat(t["".concat(y,"-").concat(p)],`;
}
`).concat(f(y,p+1),`
    `):""},i=function f(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return y<=13?`
.palette-gray-`.concat(y,` {
  background: `).concat(g[y],`;
}
`).concat(f(y+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(x||(x=s()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},W=j,G,c=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(G||(G=s()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},E,$=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(E||(E=s()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},D,L=function(){var a=(0,u.Fg)(),t=a.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(D||(D=s()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},X=n(510274),U,V=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(U||(U=s()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new X.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new X.C(i).setAlpha(.75).toHexString(),r,r,new X.C(i).setAlpha(.75).toHexString(),r,r,r,r,new X.C(i).setAlpha(.6).toHexString(),r,r,r)})},T=V,B,_=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(B||(B=s()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius,a.colorText)})},mn,dn=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(mn||(mn=s()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},bn=dn,H,w=function(){var a=(0,u.Fg)(),t=a.antCls,r=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(H||(H=s()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,a.colorPrimary,r,t)})},h,d=function(){var a=(0,u.Fg)(),t=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(h||(h=s()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,t,a.colorLinkHover)})},b,k=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(b||(b=s()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},A,en=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(A||(A=s()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},an,vn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(an||(an=s()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},yn,wn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(yn||(yn=s()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},gn,hn="dumi-default-",En=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(gn||(gn=s()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),hn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,hn,a.colorBgElevated,a.colorBgElevated,hn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},An,Mn=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(An||(An=s()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Tn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($,{}),(0,e.jsx)(L,{}),(0,e.jsx)(T,{}),(0,e.jsx)(_,{}),(0,e.jsx)(bn,{}),(0,e.jsx)(w,{}),(0,e.jsx)(d,{}),(0,e.jsx)(k,{}),(0,e.jsx)(en,{}),(0,e.jsx)(vn,{}),(0,e.jsx)(wn,{}),(0,e.jsx)(Mn,{}),(0,e.jsx)(W,{}),(0,e.jsx)(c,{}),(0,e.jsx)(En,{})]})},Ln=Tn,On=n(97857),z=n.n(On),J=n(9783),Sn=n.n(J),Cn=n(639389),Hn=n.n(Cn),In=n(469181),Kn=n(344682),Zn=n(11739),Wn=n(709894),Rn=n(883458),ae=n(722449),ie="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Jn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Qn=function(t){var r=t.direction;return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:r==="ltr"?ie:Jn})})},le=function(t){return(0,e.jsx)(Hn(),z()(z()({},t),{},{component:function(){return(0,e.jsx)(Qn,{direction:t.direction})}}))},pe=le,tt=n(840070),Bn=n(373638),ee=n(438199),me,ge,ot=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.headerHeight,f=t.colorTextHeading,y=t.fontFamily,p=t.mobileMaxWidth;return{logo:r(me||(me=s()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,f,y,i,f,p),title:r(ge||(ge=s()([`
      line-height: 32px;
    `])))}}),rt=function(t){var r=t.isZhCN,i=(0,m.useLocation)(),f=i.search,y=ot(),p=y.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(m.Link,{to:Bn.J1("/",r,f),className:p.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:p.title,children:"Ant Design"})]})})},at=rt,it=n(719632),lt=n.n(it),he=n(24768),Yn=n(472638),fe,xe,st={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},dt=(0,u.kc)(function(a){var t=a.token,r=t.antCls,i=t.iconCls,f=t.fontFamily,y=t.headerHeight,p=t.menuItemBorder,N=t.colorPrimary,P=t.colorText;return{nav:(0,u.iv)(fe||(fe=s()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),f,r,r,r,40+12*2,y,y,p,P,r,i,r,N,r,r),popoverMenuNav:(0,u.iv)(xe||(xe=s()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),ct=function(a){var t,r,i=a.isZhCN,f=a.isMobile,y=a.responsive,p=a.directionText,N=a.onLangChange,P=a.onDirectionChange,Q=(0,m.useLocation)(),Y=Q.pathname,cn=Q.search,un=(0,O.default)(st),ln=S()(un,1),tn=ln[0],kn=(0,m.useFullSidebarData)(),Z=((t=kn["/docs/blog"])===null||t===void 0||(t=t[0])===null||t===void 0?void 0:t.children)||[],fn=dt(),K=fn.styles,jn=f?"inline":"horizontal",zn=Y.split("/").filter(function(Vn){return Vn}).slice(0,-1).join("/"),Nn=zn||"home";Y.startsWith("/changelog")?Nn="docs/react":Y.startsWith("/docs/resources")&&(Nn="docs/resources");var xn,Fn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(m.FormattedMessage,{id:"app.header.lang"}),onClick:N,key:"switch-lang"},{label:p,onClick:P,key:"switch-direction"}];f?xn=Fn:y==="crowded"&&(xn=[{label:(0,e.jsx)(Cn.MenuOutlined,{}),key:"additional",children:[].concat(Fn)}]);var Un=[{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/spec/introduce",i,cn),children:tn.design}),key:"docs/spec"},{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/react/introduce",i,cn),children:tn.development}),key:"docs/react"},{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/components/overview/",i,cn),children:tn.components}),key:"components"},Z.length?{label:(0,e.jsx)(Yn.Z,{to:Bn.J1(Z.sort(function(Vn,ce){var Xn,qn;return((Xn=Vn.frontmatter)===null||Xn===void 0?void 0:Xn.date)>((qn=ce.frontmatter)===null||qn===void 0?void 0:qn.date)?-1:1})[0].link,i,cn),children:tn.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Yn.Z,{to:Bn.J1("/docs/resources",i,cn),children:tn.resources}),key:"docs/resources"},i?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(lt()((r=xn)!==null&&r!==void 0?r:[]));return(0,e.jsx)(he.Z,{mode:jn,selectedKeys:[Nn],className:K.nav,disabledOverflow:!0,items:Un,style:{borderRight:0}})},ut=n(879587),ve,be,ye,we,Ce,Gn="1.2em",pt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.colorText,f=t.colorBorder,y=t.colorBgContainer,p=t.colorBgTextHover,N=t.borderRadius,P=t.controlHeight,Q=t.motionDurationMid;return{btn:r(ve||(ve=s()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,f,P,P,N,Q,Q,p,Gn,Gn,Gn),innerDiv:r(be||(be=s()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Gn,Gn),labelStyle:r(ye||(ye=s()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Gn,i,i),label1Style:r(we||(we=s()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,y),label2Style:r(Ce||(Ce=s()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),mt=function(t){var r=t.label1,i=t.label2,f=t.tooltip1,y=t.tooltip2,p=t.value,N=t.pure,P=t.onClick,Q=pt(),Y=Q.styles,cn=Y.btn,un=Y.innerDiv,ln=Y.labelStyle,tn=Y.label1Style,kn=Y.label2Style,Z=(0,e.jsx)("button",{onClick:P,className:cn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[N&&(p===1?r:i),!N&&(0,e.jsxs)("div",{className:un,children:[(0,e.jsx)("span",{className:v()(ln,p===1?tn:kn),children:r}),(0,e.jsx)("span",{className:v()(ln,p===1?kn:tn),children:i})]})]})},"lang-button");return f||y?(0,e.jsx)(ut.Z,{title:p===1?f:y,children:Z}):Z},se=mt,je,Se,ke,Me,Ee,Te,Be=1120,Ae=1200,gt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},ht=(0,u.kc)(function(a){var t=a.token,r=a.css,i="#ced4d9";return{header:r(je||(je=s()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(Se||(Se=s()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(ke||(ke=s()([`
      width: 16px;
    `]))),popoverMenu:Sn()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(Me||(Me=s()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Ee||(Ee=s()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),t.mobileMaxWidth),icon:r(Te||(Te=s()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),ft=function(){var t=(0,O.default)(gt),r=S()(t,2),i=r[0],f=r[1],y=(0,m.useSiteData)(),p=y.pkg,N=(0,Bn.Is)(),P=(0,l.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),Q=S()(P,2),Y=Q[0],cn=Q[1],un=(0,l.useContext)(ee.Z),ln=un.direction,tn=un.isMobile,kn=un.bannerVisible,Z=un.updateSiteConfig,fn=(0,l.useRef)(null),K=(0,m.useLocation)(),jn=K.pathname,zn=K.search,Nn=ht(),xn=Nn.styles,Fn=(0,l.useCallback)(function(){cn(function(on){return z()(z()({},on),{},{menuVisible:!1})})},[]),Un=(0,l.useCallback)(function(){cn(function(on){return z()(z()({},on),{},{windowWidth:window.innerWidth})})},[]),Vn=(0,l.useCallback)(function(){cn(function(on){return z()(z()({},on),{},{menuVisible:!0})})},[]),ce=(0,l.useCallback)(function(on){cn(function(Pn){return z()(z()({},Pn),{},{menuVisible:on})})},[]),Xn=function(){Z({direction:ln!=="rtl"?"rtl":"ltr"})},qn=function(){Z({bannerVisible:!1}),Bn.Fy()&&localStorage.setItem(tt.ANT_DESIGN_NOT_SHOW_BANNER,F()().toISOString())};(0,l.useEffect)(function(){Fn()},[K]),(0,l.useEffect)(function(){return Un(),window.addEventListener("resize",Un),function(){window.removeEventListener("resize",Un),fn.current&&clearTimeout(fn.current)}},[]);var so=(0,l.useCallback)(function(on){var Pn=window.location.href,re=window.location.pathname;if(/overview/.test(re)&&/0?[1-39][0-3]?x/.test(on)){window.location.href=Pn.replace(window.location.origin,on).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(on)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Pn.replace(window.location.origin,on));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),Xe=(0,l.useCallback)(function(){var on="".concat(window.location.protocol,"//"),Pn=window.location.href.slice(on.length);Bn.Fy()&&localStorage.setItem("locale",Bn.KE(jn)?"en-US":"zh-CN"),window.location.href=on+Pn.replace(window.location.pathname,Bn.J1(jn,!Bn.KE(jn),zn).pathname)},[K]),co=(0,l.useMemo)(function(){return ln!=="rtl"?"RTL":"LTR"},[ln]),uo=(0,l.useMemo)(function(){return ln==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[ln]),po=Y.menuVisible,oe=Y.windowWidth,Je=Y.searching,Qe=z()(Sn()({},p.version,p.version),N==null?void 0:N.docVersions),mo=Object.keys(Qe).map(function(on){return{value:Qe[on],label:on}}),Ye=["","index","index-cn"].includes(jn),qe=f==="cn",go=ln==="rtl",ue=null;oe<Be?ue="crowded":oe<Ae&&(ue="narrow");var ho=v()(xn.header,"clearfix",{"home-header":Ye}),_e={isZhCN:qe,isRTL:go},nt=(0,e.jsx)(ct,z()(z()({},_e),{},{responsive:ue,isMobile:tn,directionText:co,onLangChange:Xe,onDirectionChange:Xn}),"nav"),_n=[nt,(0,e.jsx)(In.Z,{className:"version",size:"small",defaultValue:p.version,onChange:so,dropdownStyle:uo,popupMatchSelectWidth:!1,getPopupContainer:function(Pn){return Pn.parentNode},options:mo},"version"),(0,e.jsx)(se,{onClick:Xe,value:Bn.KE(jn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(se,{onClick:Xn,value:ln==="rtl"?2:1,label1:(0,e.jsx)(pe,{className:xn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(pe,{className:xn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(se,{value:1,label1:(0,e.jsx)(Cn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];oe<Be?_n=Je?[]:[nt]:oe<Ae&&(_n=Je?[]:_n);var et=Ye?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:ho,children:[tn&&(0,e.jsx)(Kn.Z,{overlayClassName:xn.popoverMenu,placement:"bottomRight",content:_n,trigger:"click",open:po,arrow:{pointAtCenter:!0},onOpenChange:ce,children:(0,e.jsx)(Cn.MenuOutlined,{className:"nav-phone-icon",onClick:Vn})}),qe&&kn&&(0,e.jsx)(R.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Zn.Z,{className:xn.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:tn?i.shortMessage:i.message}),(0,e.jsx)("a",{className:xn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Pn,re;(Pn=(re=window).gtag)===null||Pn===void 0||Pn.call(re,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:qn})}),(0,e.jsxs)(Wn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(Rn.Z,z()(z()({},et[0]),{},{children:(0,e.jsx)(at,z()(z()({},_e),{},{location:K}))})),(0,e.jsxs)(Rn.Z,z()(z()({},et[1]),{},{className:xn.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ae.ZP,{})}),!tn&&_n]}))]})]})},xt=ft,fo=n(945462),Le=n(777502),vt=function(t){var r=t.children,i=t.title,f=t.desc;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.Helmet,{children:[(0,e.jsx)("title",{children:i}),(0,e.jsx)("meta",{property:"og:title",content:i}),f&&(0,e.jsx)("meta",{name:"description",content:f})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(Le.default,{})]})},bt=vt,yt=n(86198),Pe=n(64714),De=n(49313),wt=function(){var t=(0,m.useRouteMeta)(),r=l.useMemo(function(){var p;if(!t.frontmatter.subtitle&&!t.frontmatter.title)p="404 Not Found - Ant Design";else{var N;p="".concat(t.frontmatter.subtitle||""," ").concat(((N=t.frontmatter)===null||N===void 0?void 0:N.title)||""," - Ant Design")}var P=t.frontmatter.description||"";return[p,P]},[t]),i=S()(r,2),f=i[0],y=i[1];return(0,e.jsxs)(m.Helmet,{children:[(0,e.jsx)("title",{children:f}),(0,e.jsx)("meta",{property:"og:title",content:f}),y&&(0,e.jsx)("meta",{name:"description",content:y})]})},ze=wt,Ct=n(148050),jt=n(468990),St=n(823493),kt=n.n(St),Mt=n(658192),Fe,Oe,Ne,Ie=["scroll","resize"],Et=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.boxShadowSecondary,f=t.antCls;return{affixTabs:r(Fe||(Fe=s()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity 0.3s,
        transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,f,f,f),affixTabsFixed:r(Oe||(Oe=s()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Ne||(Ne=s()([`
      text-transform: capitalize;
    `])))}}),Re=32,Tt=function(){var t=l.useRef(null),r=l.useRef([]),i=l.useState(!1),f=S()(i,2),y=f[0],p=f[1],N=l.useState(void 0),P=S()(N,2),Q=P[0],Y=P[1],cn=Et(),un=cn.styles,ln=un.affixTabs,tn=un.affixTabsFixed,kn=un.span;function Z(K){var jn=document.getElementById(K);if(jn){var zn=jn.offsetTop-t.current.offsetHeight-Re;(0,Mt.Z)(zn)}}l.useEffect(function(){var K=document.querySelectorAll("h2[id]");r.current=Array.from(K).map(function(jn){var zn=jn.id;return zn}),p(!0)},[]),l.useEffect(function(){var K=decodeURIComponent((location.hash||"").slice(1));K&&Z(K)},[y]);var fn=l.useMemo(function(){function K(){for(var jn=window,zn=jn.scrollY,Nn=t.current.offsetHeight,xn=r.current.length-1;xn>=0;xn-=1){var Fn=r.current[xn],Un=document.getElementById(Fn),Vn=Un.offsetTop-Nn-Re;if(Vn<=zn){Y(Fn);return}}Y(void 0)}return kt()(K)},[]);return l.useEffect(function(){return Ie.forEach(function(K){return window.addEventListener(K,fn)}),fn(),function(){Ie.forEach(function(K){return window.removeEventListener(K,fn)})}},[]),(0,e.jsx)("div",{className:v()(ln,Q&&tn),ref:t,children:(0,e.jsx)(jt.Z,{activeKey:Q,centered:!0,size:"large",onChange:Z,items:r.current.map(function(K){return{key:K,label:(0,e.jsx)("span",{className:kn,children:K.replace(/-/g," ")})}})})})},Bt=Tt,He,Ze,We,$e=40,te=1208,de=24,At=function(){var t=(0,De.Z)();return(0,u.kc)(function(r){var i=r.token,f=r.css,y=i.antCls;return{resourcePage:f(He||(He=s()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-right: 0;
            padding-left: 0;
          }
        }
      `])),te),resourceContent:f(Ze||(Ze=s()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }

            `,`-col {
              padding-top: 16px !important;
              padding-bottom: 16px !important;
            }
          }
        }
      `])),$e,te,de,y),banner:f(We||(We=s()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: 16px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),$e,t?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",te,te,de,de)}})()},Lt=function(t){var r,i=t.children,f=At(),y=f.styles,p=(0,m.useRouteMeta)(),N=(0,De.Z)(),P=(0,e.jsxs)(yt.Z,{children:[(0,e.jsx)(ze,{}),(0,e.jsxs)("div",{id:"resources-page",className:y.resourcePage,children:[(0,e.jsx)(Bt,{}),(0,e.jsxs)("div",{className:y.banner,children:[(0,e.jsxs)(Pe.Z.Title,{style:{fontSize:30},children:[(r=p.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(Ct.default,{title:(0,e.jsx)(m.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,e.jsx)("section",{children:p.frontmatter.description})]}),(0,e.jsx)("div",{className:y.resourceContent,children:i}),(0,e.jsx)(Le.default,{})]})]});return N?P:(0,e.jsx)(R.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:P})},Pt=Lt,Dt=n(106750),zt=n(217187),Ft=n(340908),Ot=n(524229),Nt=n(548657),It=n(442708),Rt=function(t){var r=t.children,i=t.fallback,f=i===void 0?(0,e.jsx)(Nt.Z.Input,{active:!0,size:"small"}):i,y=t.delay,p=y===void 0?200:y;return(0,e.jsx)(It.df,{triggerOnce:!0,delay:p,children:function(P){var Q=P.inView,Y=P.ref;return(0,e.jsx)("div",{ref:Y,children:(0,e.jsx)(l.Suspense,{fallback:f,children:Q?r:(0,e.jsx)("span",{})})})}})},$n=Rt,Ue,Ht=l.lazy(function(){return Promise.all([n.e(3156),n.e(7721)]).then(n.bind(n,617721))}),Zt=l.lazy(function(){return n.e(9148).then(n.bind(n,349148))}),Wt=l.lazy(function(){return n.e(8301).then(n.bind(n,368301))}),$t=l.lazy(function(){return n.e(8598).then(n.bind(n,458598))}),Ut=l.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),Vt=l.lazy(function(){return n.e(6720).then(n.bind(n,366720))}),Kt=l.lazy(function(){return Promise.all([n.e(9285),n.e(5926)]).then(n.bind(n,615926))}),Gt=l.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),Xt=(0,u.kc)(function(a){var t=a.token,r=a.css;return{articleWrapper:r(Ue||(Ue=s()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 48px;
      }
    }
  `])),t.screenLG)}}),Jt=function(t){var r,i,f,y=t.children,p=(0,m.useRouteMeta)(),N=(0,nn.Z)(),P=N.pathname,Q=N.hash,Y=(0,l.useContext)(ee.Z),cn=Y.direction,un=Xt(),ln=un.styles,tn=(0,zt.Z)(!1),kn=S()(tn,2),Z=kn[0],fn=kn[1],K=(0,l.useMemo)(function(){var xn;return((xn=p.toc)===null||xn===void 0?void 0:xn.filter(function(Fn){return Fn._debug_demo}).map(function(Fn){return Fn.id}))||[]},[p]),jn=K.includes(Q.slice(1));(0,l.useLayoutEffect)(function(){fn(jn)},[]);var zn=(0,l.useMemo)(function(){return{showDebug:Z,setShowDebug:fn}},[Z,K]),Nn=cn==="rtl";return(0,e.jsx)(Ot.Z.Provider,{value:zn,children:(0,e.jsxs)(Rn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Wt,{showDebug:Z,debugDemos:K})}),(0,e.jsxs)("article",{className:v()(ln.articleWrapper,{rtl:Nn}),children:[(r=p.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(Pe.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Dt.Z,{gap:"small",children:[(0,e.jsx)("div",{children:(i=p.frontmatter)===null||i===void 0?void 0:i.title}),(0,e.jsx)("div",{children:(f=p.frontmatter)===null||f===void 0?void 0:f.subtitle}),!P.startsWith("/components/overview")&&(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Gt,{title:(0,e.jsx)(m.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),P.startsWith("/components/")&&(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Kt,{pathname:P})})]}):null,(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)($t,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,p.frontmatter.category==="Components"&&String(p.frontmatter.showImport)!=="false"&&(0,e.jsx)(Ft.Z,{component:p.frontmatter.title,source:!0,filename:p.frontmatter.filename}),(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:y}),(0,e.jsx)($n,{children:(0,e.jsx)(Zt,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,e.jsx)($n,{fallback:(0,e.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,e.jsx)(Ht,{filename:p.frontmatter.filename})})]}),(0,e.jsx)($n,{fallback:null,children:(0,e.jsx)(Vt,{rtl:Nn})}),(0,e.jsx)(Ut,{})]})})},Qt=Jt,Yt=n(650010),qt=n(361446),Ve,Ke,_t=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls,f=t.fontFamily,y=t.colorSplit;return{asideContainer:r(Ve||(Ve=s()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),f,i,i,i,i,i,i,y,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(Ke||(Ke=s()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),no=function(){var t=(0,m.useSidebarData)(),r=(0,l.useContext)(ee.Z),i=r.isMobile,f=r.theme,y=_t(),p=y.styles,N=(0,qt.Z)(),P=S()(N,2),Q=P[0],Y=P[1],cn=f.includes("dark"),un=(0,u.Fg)(),ln=un.colorBgContainer,tn=(0,e.jsx)(R.ZP,{theme:{components:{Menu:{itemBg:ln,darkItemBg:ln}}},children:(0,e.jsx)(he.Z,{items:Q,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:cn?"dark":"light",selectedKeys:[Y],defaultOpenKeys:t==null?void 0:t.map(function(kn){var Z=kn.title;return Z}).filter(Boolean)})});return i?(0,e.jsx)(Yt.Z,{children:tn},"Mobile-menu"):(0,e.jsx)(Rn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:tn})})},eo=no,Ge,to=(0,u.kc)(function(a){var t=a.css,r=a.token;return{main:t(Ge||(Ge=s()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),oo=function(t){var r=t.children,i=to(),f=i.styles;return(0,e.jsxs)("main",{className:f.main,children:[(0,e.jsx)(ze,{}),(0,e.jsx)(eo,{}),(0,e.jsx)(Qt,{children:r})]})},ro=oo,ao={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},io=function(){var t=(0,m.useOutlet)(),r=(0,nn.Z)(),i=r.pathname,f=r.search,y=r.hash,p=(0,O.default)(ao),N=S()(p,2),P=N[0],Q=N[1],Y=(0,l.useRef)(null),cn=(0,l.useContext)(ee.Z),un=cn.direction,ln=(0,m.useSiteData)(),tn=ln.loading;(0,l.useLayoutEffect)(function(){Q==="cn"?F().locale("zh-cn"):F().locale("en")},[]),(0,l.useEffect)(function(){var Z=document.getElementById("nprogress-style");Z&&(Y.current=setTimeout(function(){var fn;(fn=Z.parentNode)===null||fn===void 0||fn.removeChild(Z)},0))},[]),(0,l.useEffect)(function(){var Z=y.replace("#","");if(Z){var fn;(fn=document.getElementById(decodeURIComponent(Z)))===null||fn===void 0||fn.scrollIntoView()}},[tn,y]),(0,l.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+f)},[r]);var kn=l.useMemo(function(){return["","/"].some(function(Z){return Z===i})||["/index"].some(function(Z){return i.startsWith(Z)})?(0,e.jsx)(bt,{title:P.title,desc:P.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(Pt,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(ro,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(m.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:Q==="cn"?"zh-CN":Q,"data-direction":un,className:v()({rtl:un==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:P.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(R.ZP,{direction:un,locale:Q==="cn"?M.default:void 0,children:[(0,e.jsx)(Ln,{}),(0,e.jsx)(xt,{}),kn]})]})},lo=io},840070:function(Dn,I,n){n.r(I),n.d(I,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return L},default:function(){return V}});var q=n(97857),S=n.n(q),sn=n(805574),v=n.n(sn),C=n(667294),F=n(900210),pn=n(368655),l=n(359020),R=n(965516),M=n(471232),m=n(385956),O=n(49313),nn=n(217187),rn=n(438746),s=n(513769),o=n.n(s),u=n(75529),e=n(647759),x=n(438199),g=n(785893),j=["children","theme"],W=64,G=38,c=function(B){var _=B.children,mn=B.theme,dn=o()(B,j),bn=(0,C.useContext)(u.ZP.ConfigContext),H=bn.getPrefixCls,w=bn.iconPrefixCls,h=H(),d=R.Z.useToken(),b=d.token,k=(0,C.useContext)(x.Z),A=k.bannerVisible;return C.useEffect(function(){u.ZP.config({theme:mn})},[mn]),(0,g.jsx)(e.f6,S()(S()({},dn),{},{theme:mn,customToken:{headerHeight:W,bannerHeight:G,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:b.colorFillTertiary,antCls:".".concat(h),iconCls:".".concat(w),marginFarXS:b.marginXXL/6*7,marginFarSM:b.marginXXL/3*5,marginFar:b.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:W+b.margin+(A?G:0)},children:_}))},E=c,$=C.lazy(function(){return Promise.all([n.e(7898),n.e(4137),n.e(263)]).then(n.bind(n,531434))}),D=768,L="ANT_DESIGN_NOT_SHOW_BANNER",X=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return B.map(function(_){return _==="dark"?R.Z.darkAlgorithm:_==="compact"?R.Z.compactAlgorithm:null}).filter(Boolean)},U=function(){var B=(0,m.useOutlet)(),_=(0,rn.Z)(),mn=_.pathname,dn=(0,m.useSearchParams)(),bn=v()(dn,2),H=bn[0],w=bn[1],h=(0,nn.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),d=v()(h,2),b=d[0],k=b.theme,A=k===void 0?[]:k,en=b.direction,an=b.isMobile,vn=b.bannerVisible,yn=vn===void 0?!1:vn,wn=d[1],gn=(0,C.useCallback)(function(J){wn(function(Hn){return S()(S()({},Hn),J)});var Sn=H.toString(),Cn=H;Object.entries(J).forEach(function(Hn){var In=v()(Hn,2),Kn=In[0],Zn=In[1];if(Kn==="direction"&&(Zn==="rtl"?Cn.set("direction","rtl"):Cn.delete("direction")),Kn==="theme"){var Wn;Cn=(0,m.createSearchParams)(S()(S()({},Cn),{},{theme:Zn.filter(function(Rn){return Rn!=="light"})})),(Wn=document.querySelector("html"))===null||Wn===void 0||Wn.setAttribute("data-prefers-color",Zn.includes("dark")?"dark":"light")}}),Cn.toString()!==Sn&&w(Cn)},[H,w]),hn=function(){gn({isMobile:window.innerWidth<D})};(0,C.useEffect)(function(){var J=H.getAll("theme"),Sn=H.get("direction");return wn({theme:J,direction:Sn==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",J.includes("dark")?"dark":"light"),hn(),window.addEventListener("resize",hn),function(){window.removeEventListener("resize",hn)}},[]);var En=C.useMemo(function(){return{direction:en,updateSiteConfig:gn,theme:A,isMobile:an,bannerVisible:yn}},[an,en,gn,A,yn]),An=C.useMemo(function(){return{algorithm:X(A),token:{motion:!A.includes("motion-off")},cssVar:!0,hashed:!1}},[A]),Mn=C.useState(function(){return(0,F.createCache)()}),Tn=v()(Mn,1),Ln=Tn[0];(0,m.useServerInsertedHTML)(function(){var J=(0,F.extractStyle)(Ln,{plain:!0,types:"style"});return(0,g.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:J}})}),(0,m.useServerInsertedHTML)(function(){var J=(0,F.extractStyle)(Ln,{plain:!0,types:["cssVar","token"]});return(0,g.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:J}})}),(0,m.useServerInsertedHTML)(function(){return(0,g.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,l.$Z)()}})});var On=mn.startsWith("/~demos"),z=B;return On||(z=(0,g.jsxs)(M.Z,{children:[B,(0,g.jsx)(C.Suspense,{children:(0,g.jsx)($,{value:A,onChange:function(Sn){return gn({theme:Sn})}})})]})),(0,g.jsx)(O.f.Provider,{value:A.includes("dark"),children:(0,g.jsx)(F.StyleProvider,{cache:Ln,linters:[F.legacyNotSelectorLinter,F.parentSelectorLinter,F.NaNLinter],children:(0,g.jsx)(x.Z.Provider,{value:En,children:(0,g.jsx)(E,{theme:An,children:(0,g.jsx)(pn.HappyProvider,{disabled:!A.includes("happy-work"),children:z})})})})})},V=U},777502:function(Dn,I,n){n.r(I),n.d(I,{default:function(){return E}});var q=n(805574),S=n.n(q),sn=n(168400),v=n.n(sn),C=n(639389),F=n(510274),pn=n(647759),l=n(385956),R=n(391298),M=n(667294),m=n(630770),O=n(302559),nn=n(438746),rn=n(438199),s=n(693399),o=n(785893),u="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function x(){var $=(0,O.default)(e),D=S()($,1),L=D[0],X=M.useState(!0),U=S()(X,2),V=U[0],T=U[1];return M.useEffect(function(){var B=document.createElement("p");B.className=u,B.style.position="fixed",B.style.pointerEvents="none",B.style.visibility="hidden",B.style.width="0",document.body.appendChild(B),(0,s.updateCSS)(`
:where(.`.concat(u,`) {
  content: "__CHECK__";
}
    `),u);var _=getComputedStyle(B),mn=_.content;T(String(mn).includes("CHECK")),document.body.removeChild(B),(0,s.removeCSS)(u)},[]),V?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[L.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:L.whereDocUrl,children:L.whereDocTitle})]})})}var g,j,W={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},G=function(){var D=(0,M.useContext)(rn.Z),L=D.isMobile;return(0,pn.kc)(function(X){var U=X.token,V=X.css,T=new F.C((0,m.Z)("#f0f3fa","#fff")).onBackground(U.colorBgContainer).toHexString();return{holder:V(g||(g=v()([`
      background: `,`;
    `])),T),footer:V(j||(j=v()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),T,U.colorTextSecondary,U.colorText,L?60:0,L?20:0,U.marginXXL,U.fontSize)}})()},c=function(){var D=(0,nn.Z)(),L=(0,O.default)(W),X=S()(L,2),U=X[0],V=X[1],T=G(),B=T.styles,_=D.getLink,mn=M.useMemo(function(){var dn=V==="cn",bn={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:dn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:dn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:dn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},H={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(C.AntDesignOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(C.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(C.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(C.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};dn&&H.items.push({icon:(0,o.jsx)(C.UsergroupAddOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:_("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var w={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(C.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(C.HistoryOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:_("/changelog"),LinkComponent:l.Link},{icon:(0,o.jsx)(C.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:_("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,o.jsx)(C.BugOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(C.IssuesCloseOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(C.MessageOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(C.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(C.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},h={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(C.BgColorsOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:_("/theme-editor"),LinkComponent:l.Link}]};return[bn,H,w,h]},[V,D.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(R.Z,{columns:mn,className:B.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:U.owner})]})}),(0,o.jsx)(x,{})]})},E=c},373638:function(Dn,I,n){n.d(I,{J1:function(){return M},Is:function(){return s},Fy:function(){return O},KE:function(){return R},qE:function(){return m}});var q=n(661227),S=n(805574),sn=n(97857),v=n(385564),C=n(842348),F=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),pn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":F?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function l(o,u,e,x){var g=o.map(function(c){return c.meta}).filter(function(c){return!c.skip}),j=[],W=function(E,$){return(E.order||0)-($.order||0)};g.sort(W).forEach(function(c){if(c.category&&(c.category=c.category[u]||c.category),c.type&&(c.type=c.type[u]||c.type),c!=null&&c.title&&(c.title=c.title[u]||c.title),!c.category){j.push(c);return}if(c.category==="Components"&&c.type){var E=j.find(function(L){return(L==null?void 0:L.title)===c.type});E||(E={type:"type",title:c.type,children:[],order:x[c.type]},j.push(E)),E.children=E.children||[],E.children.push(c);return}var $=j.find(function(L){return(L==null?void 0:L.title)===c.category});if($||($={type:"category",title:c.category,children:[],order:e[c.category]},j.push($)),$.children=$.children||[],c.type){var D=$.children.filter(function(L){return(L==null?void 0:L.title)===c.type})[0];D||(D={type:"type",title:c.type,children:[],order:x[c.type]},$.children.push(D)),D.children=D.children||[],D.children.push(c)}else $.children.push(c)});function G(c){return c.sort(W).map(function(E){return E.children?_objectSpread(_objectSpread({},E),{},{children:G(E.children)}):E})}return G(j)}function R(o){return/-cn\/?$/.test(o)}function M(o,u,e,x){var g=o.startsWith("/")?o:"/".concat(o),j;if(u?g==="/"?j="/index-cn":g.endsWith("/")?j=g.replace(/\/$/,"-cn/"):(j="".concat(g,"-cn"),j=j.replace(/(-cn)+/,"-cn")):j=/\/?index-cn/.test(g)?"/":g.replace("-cn",""),x){var W=x[u?"zhCN":"enUS"];j+="#".concat(W)}return{pathname:j,search:e}}function m(o){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,x,g=function(W){x||(x=!0,e.src="",o(W))};return e.onload=function(){return g("responded")},e.onerror=function(){return g("error")},e.src=u,setTimeout(function(){return g("timeout")},1500)}function O(){var o="test",u=window.localStorage;try{return u.setItem(o,"1"),u.removeItem(o),!0}catch(e){return!1}}function nn(o){return new Promise(function(u,e){var x=document.createElement("script");x.type="text/javascript",x.src=o,x.onload=u,x.onerror=e,document.head.appendChild(x)})}function rn(o){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(x){if(Array.isArray(x)){var g=_slicedToArray(x,1),j=g[0];return j==="p"}return!1}).map(function(x){var g=flatten(x),j=_toArray(g),W=j[0],G=j.slice(1),c=G.filter(function(E){return typeof E=="string"&&!u.includes(E)}).join("");return[W,c]})).find(function(x){return x&&typeof x=="string"&&!u.includes(x)});return e}var s=function(){return pn}},647727:function(Dn,I,n){n.d(I,{Z:function(){return q.Z}});var q=n(843534)},471232:function(Dn,I,n){n.d(I,{Z:function(){return W}});var q=n(97857),S=n.n(q),sn=n(805574),v=n.n(sn),C=n(667294),F=n(693967),pn=n.n(F),l=n(73287),R=n(215570),M=n(269924),m=n(890887),O=n(414466),nn=n(9783),rn=n.n(nn),s=n(286665),o=function(c){var E=c.componentCls,$=c.colorText,D=c.fontSize,L=c.lineHeight,X=c.fontFamily;return rn()({},E,{color:$,fontSize:D,lineHeight:L,fontFamily:X})},u=function(){return{}},e=(0,s.I$)("App",o,u),x=n(785893),g=function(){return C.useContext(O.Z)},j=function(c){var E=c.prefixCls,$=c.children,D=c.className,L=c.rootClassName,X=c.message,U=c.notification,V=c.style,T=c.component,B=T===void 0?"div":T,_=(0,C.useContext)(l.E_),mn=_.getPrefixCls,dn=mn("app",E),bn=e(dn),H=v()(bn,3),w=H[0],h=H[1],d=H[2],b=pn()(h,dn,D,L,d),k=(0,C.useContext)(O.J),A=C.useMemo(function(){return{message:S()(S()({},k.message),X),notification:S()(S()({},k.notification),U)}},[X,U,k.message,k.notification]),en=(0,R.Z)(A.message),an=v()(en,2),vn=an[0],yn=an[1],wn=(0,m.Z)(A.notification),gn=v()(wn,2),hn=gn[0],En=gn[1],An=(0,M.Z)(),Mn=v()(An,2),Tn=Mn[0],Ln=Mn[1],On=C.useMemo(function(){return{message:vn,notification:hn,modal:Tn}},[vn,hn,Tn]),z=B===!1?C.Fragment:B,J={className:b,style:V};return w((0,x.jsx)(O.Z.Provider,{value:On,children:(0,x.jsx)(O.J.Provider,{value:A,children:(0,x.jsxs)(z,S()(S()({},B===!1?void 0:J),{},{children:[Ln,yn,En,$]}))})}))};j.useApp=g;var W=j},86198:function(Dn,I,n){n.d(I,{Z:function(){return w}});var q=n(719632),S=n.n(q),sn=n(9783),v=n.n(sn),C=n(805574),F=n.n(C),pn=n(513769),l=n.n(pn),R=n(97857),M=n.n(R),m=n(667294),O=n(693967),nn=n.n(O),rn=n(518475),s=n(73287),o=n(121790),u=n(45598),e=n(296708);function x(h,d,b){if(typeof b=="boolean")return b;if(h.length)return!0;var k=(0,u.default)(d);return k.some(function(A){return A.type===e.Z})}var g=n(900210),j=n(286665),W=function(d){var b=d.componentCls,k=d.bodyBg,A=d.lightSiderBg,en=d.lightTriggerBg,an=d.lightTriggerColor;return v()({},"".concat(b,"-sider-light"),v()(v()({background:A},"".concat(b,"-sider-trigger"),{color:an,background:en}),"".concat(b,"-sider-zero-width-trigger"),{color:an,background:en,border:"1px solid ".concat(k),borderInlineStart:0}))},G=W,c=function(d){var b=d.antCls,k=d.componentCls,A=d.colorText,en=d.triggerColor,an=d.footerBg,vn=d.triggerBg,yn=d.headerHeight,wn=d.headerPadding,gn=d.headerColor,hn=d.footerPadding,En=d.triggerHeight,An=d.zeroTriggerHeight,Mn=d.zeroTriggerWidth,Tn=d.motionDurationMid,Ln=d.motionDurationSlow,On=d.fontSize,z=d.borderRadius,J=d.bodyBg,Sn=d.headerBg,Cn=d.siderBg;return v()(v()(v()(v()({},k,M()(M()(v()(v()(v()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:J,"&, *":{boxSizing:"border-box"}},"&".concat(k,"-has-sider"),v()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),"".concat(k,"-sider"),{position:"relative",minWidth:0,background:Cn,transition:"all ".concat(Tn,", background 0s"),"&-children":v()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(b,"-menu").concat(b,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:En},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:En,color:en,lineHeight:(0,g.unit)(En),textAlign:"center",background:vn,cursor:"pointer",transition:"all ".concat(Tn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:yn,insetInlineEnd:d.calc(Mn).mul(-1).equal(),zIndex:1,width:Mn,height:An,color:en,fontSize:d.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Cn,borderStartStartRadius:0,borderStartEndRadius:z,borderEndEndRadius:z,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Ln," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Ln),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:d.calc(Mn).mul(-1).equal(),borderStartStartRadius:z,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:z}}}}),G(d)),{},{"&-rtl":{direction:"rtl"}})),"".concat(k,"-header"),v()({height:yn,padding:wn,color:gn,lineHeight:(0,g.unit)(yn),background:Sn},"".concat(b,"-menu"),{lineHeight:"inherit"})),"".concat(k,"-footer"),{padding:hn,color:A,fontSize:On,background:an}),"".concat(k,"-content"),{flex:"auto",color:A,minHeight:0})},E=function(d){var b=d.colorBgLayout,k=d.controlHeight,A=d.controlHeightLG,en=d.colorText,an=d.controlHeightSM,vn=d.marginXXS,yn=d.colorTextLightSolid,wn=d.colorBgContainer,gn=A*1.25;return{colorBgHeader:"#001529",colorBgBody:b,colorBgTrigger:"#002140",bodyBg:b,headerBg:"#001529",headerHeight:k*2,headerPadding:"0 ".concat(gn,"px"),headerColor:en,footerPadding:"".concat(an,"px ").concat(gn,"px"),footerBg:b,siderBg:"#001529",triggerHeight:A+vn*2,triggerBg:"#002140",triggerColor:yn,zeroTriggerWidth:A,zeroTriggerHeight:A,lightSiderBg:wn,lightTriggerBg:wn,lightTriggerColor:en}},$=(0,j.I$)("Layout",function(h){return[c(h)]},E,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),D=n(785893),L=["prefixCls","suffixCls","className","tagName"],X=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function U(h){var d=h.suffixCls,b=h.tagName,k=h.displayName;return function(A){var en=m.forwardRef(function(an,vn){return(0,D.jsx)(A,M()({ref:vn,suffixCls:d,tagName:b},an))});return en}}var V=m.forwardRef(function(h,d){var b=h.prefixCls,k=h.suffixCls,A=h.className,en=h.tagName,an=l()(h,L),vn=m.useContext(s.E_),yn=vn.getPrefixCls,wn=yn("layout",b),gn=$(wn),hn=F()(gn,3),En=hn[0],An=hn[1],Mn=hn[2],Tn=k?"".concat(wn,"-").concat(k):wn;return En((0,D.jsx)(en,M()({className:nn()(b||Tn,A,An,Mn),ref:d},an)))}),T=m.forwardRef(function(h,d){var b=m.useContext(s.E_),k=b.direction,A=m.useState([]),en=F()(A,2),an=en[0],vn=en[1],yn=h.prefixCls,wn=h.className,gn=h.rootClassName,hn=h.children,En=h.hasSider,An=h.tagName,Mn=h.style,Tn=l()(h,X),Ln=(0,rn.default)(Tn,["suffixCls"]),On=m.useContext(s.E_),z=On.getPrefixCls,J=On.layout,Sn=z("layout",yn),Cn=x(an,hn,En),Hn=$(Sn),In=F()(Hn,3),Kn=In[0],Zn=In[1],Wn=In[2],Rn=nn()(Sn,v()(v()({},"".concat(Sn,"-has-sider"),Cn),"".concat(Sn,"-rtl"),k==="rtl"),J==null?void 0:J.className,wn,gn,Zn,Wn),ae=m.useMemo(function(){return{siderHook:{addSider:function(Jn){vn(function(Qn){return[].concat(S()(Qn),[Jn])})},removeSider:function(Jn){vn(function(Qn){return Qn.filter(function(le){return le!==Jn})})}}}},[]);return Kn((0,D.jsx)(o.V.Provider,{value:ae,children:(0,D.jsx)(An,M()(M()({ref:d,className:Rn,style:M()(M()({},J==null?void 0:J.style),Mn)},Ln),{},{children:hn}))}))}),B=U({tagName:"div",displayName:"Layout"})(T),_=U({suffixCls:"header",tagName:"header",displayName:"Header"})(V),mn=U({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(V),dn=U({suffixCls:"content",tagName:"main",displayName:"Content"})(V),bn=B,H=bn;H.Header=_,H.Footer=mn,H.Content=dn,H.Sider=e.Z,H._InternalSiderContext=e.D;var w=H},715778:function(Dn,I,n){n.r(I),n.d(I,{default:function(){return O}});var q=n(174219),S=n(97857),sn=n.n(S),v=n(585369),C={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},F=C,pn={lang:sn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:sn()({},F)};pn.lang.ok="\u786E\u5B9A";var l=pn,R=l,M="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",m={locale:"zh-cn",Pagination:q.Z,DatePicker:l,TimePicker:F,Calendar:R,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:M,method:M,array:M,object:M,number:M,date:M,boolean:M,integer:M,float:M,regexp:M,email:M,url:M,hex:M},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},O=m}}]);
