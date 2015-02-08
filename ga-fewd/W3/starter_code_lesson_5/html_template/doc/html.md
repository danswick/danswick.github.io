[HTML5 Boilerplate homepage](http://html5boilerplate.com) | [Documentation
table of contents](TOC.md)

# The HTML


## The order of meta tags, and `<title>`

As recommended by [the HTML5
spec](http://www.whatwg.org/specs/web-apps/current-work/complete/semantics.html#charset)
(4.2.5.5 Specifying the document's character encoding), add your charset
declaration early (before any ASCII art ;) to avoid a potential
[encoding-related security
issue](http://code.google.com/p/doctype-mirror/wiki/ArticleUtf7) in IE. It
should come in the first [1024
bytes](http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#charset).

The charset should also come before the `<title>` tag, due to [potential XSS
vectors](http://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).

The meta tag for compatibility mode [needs to be before all elements except
title and meta](http://h5bp.com/f "Defining Document Compatibility - MSDN").
And that same meta tag can only be invoked for Google Chrome Frame if it is
within the [first 1024
bytes](http://code.google.com/p/chromium/issues/detail?id=23003).


## X-UA-Compatible

This makes sure the latest version of IE is used in versions of IE that contain
multiple rendering engines. Even if a site visitor is using IE8 or IE9, it's
possible that they're not using the latest rendering engine their browser
contains. To fix this, use:

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

The `meta` tag tells the IE rendering engine it should use the latest, or edge,
version of the IE rendering environment.

This `meta` tag ensures that anyone browsing your site in IE is treated to the
best possible user experience that their browser can offer.

This line breaks validation. To avoid this edge case issue it is recommended
that you **remove this line and use the `.htaccess`** (or other server config)
to send these headers instead. You also might want to read [Validating:
X-UA-Compatible](http://groups.google.com/group/html5boilerplate/browse_thread/thread/6d1b6b152aca8ed2).

If you are serving your site on a non-standard port, you will need to set this
header on the server-side. This is because the IE preference option 'Display
intranet sites in Compatibility View' is checked by default.


## Mobile viewport

There are a few different options that you can use with the [`viewport` meta
tag](https://docs.google.com/present/view?id=dkx3qtm_22dxsrgcf4 "Viewport and
Media Queries - The Complete Idiot's Guide"). You can find out more in [the
Apple developer docs](http://j.mp/mobileviewport). HTML5 Boilerplate comes with
a simple setup that strikes a good balance for general use cases.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Favicons and Touch Icon

The shortcut icons should be put in the root directory of your site. HTML5
Boilerplate comes with a default set of icons (include favicon and one Apple
Touch Icon) that you can use as a baseline to create your own.

Please refer to the more detailed description in the [Extend section](extend.md)
of these docs.


## The content area

The central part of the boilerplate template is pretty much empty. This is
intentional, in order to make the boilerplate suitable for both web page and
web app development.

### Google Chrome Frame

The main content area of the boilerplate includes a prompt to install Chrome
Frame (which no longer requires administrative rights) for users of IE 6. If
you intended to support IE 6, then you should remove the snippet of code.

