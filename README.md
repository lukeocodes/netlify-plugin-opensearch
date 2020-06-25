![](https://img.shields.io/badge/main-not%20master-green)
![](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)
![](https://img.shields.io/npm/v/netlify-plugin-opensearch)
![](https://img.shields.io/github/contributors/lukeocodes/netlify-plugin-opensearch)
![](https://img.shields.io/github/issues/lukeocodes/netlify-plugin-opensearch)

# Netlify Opensearch Plugin

Automatically generate [OpenSearch](http://a9.com/-/spec/opensearch/1.1/) search.xml file postBuild on Netlify deploy.

## What is this?

Ever wondered why when you type a URL and the browser says "press TAB to search"? That's opensearch! In Chrome or Chromium, the URL bar (or Omnibox) offers the ability to search a site without navigating to the sites homepage. Once Chromium has determined it can search a site, any time the user types the URL of the site the user is reminded they can "press TAB to search". 

Once the user presses TAB, they can type in a string and presses the enter. This automatically sents the user to the URL of the site search, along with their search terms, where the search is performed and results shown.

Type in the URL of the search demo site and see! [https://netlify-plugins-by-lukeocodes.netlify.app](https://netlify-plugins-by-lukeocodes.netlify.app)

![Screenshot 2020-06-24 at 08 58 25](https://user-images.githubusercontent.com/956290/85519211-0e529a00-b5f9-11ea-8909-b8fb2024d6f5.png)

Then press TAB and you can search the demo site directly!

![Screenshot 2020-06-24 at 08 58 30](https://user-images.githubusercontent.com/956290/85519208-0d216d00-b5f9-11ea-9dfd-705d5384e4e3.png)

## Usage

To install, add the plugin in your `netlify.toml`. No config is required.

```toml
[[plugins]]
  package = "netlify-plugin-opensearch"
```

Default config will generate the following file at `https://your-site-name.netlify.app/search.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Search</ShortName>
  <Url type="text/html" template="https://your-site-name.netlify.app/search?q={searchTerms}"/>
</OpenSearchDescription>
```

## Options

The available options.

| plugins.inputs  | type  | required  | default  | description  |
|---|---|---|---|---|
| searchUrl | String | false | `<env.URL>/search?q=` | The URL of the search query, remembering that the search parameters are concatenated to the end as `{searchTerms}` |
| searchFile | String | false | `search.xml` | The name of the file to be saved to. You'll need to configure your metadata to point to this file. |
| siteShortName | String | false | Search | A short name of the site to search. **It must be 16 or fewer characters** |
| siteDescription | String|null | false | null | A description of the site to search. **It must be 1024 or fewer characters** |
| siteTags | String|null | false | null | Comma separated list of keywords and strings |
| siteContact | String|null | false | null | Email address to contact the site |

### Options Applied

How to use these options:

```toml
[[plugins]]
  package = "netlify-plugin-opensearch"
    [plugins.inputs]
      searchUrl = "https://different-website.com/search?q="
      searchFile = "opensearch.xml"
      siteShortName = "My Site"
      siteDescription = "Search cool content from my site"
      siteTags = "my site"
      siteContact = "me@my-site.com"
```

Which will produce the following file at `https://your-site-name.netlify.app/opensearch.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>My Site</ShortName>
  <Url type="text/html" template="https://different-website.com/search?q={searchTerms}"/>
  <Description>Search cool content from my site</Description>
  <Tags>my site</Tags>
  <Contact>me@my-site.com</Contact>
</OpenSearchDescription>
```

### Options On the Demo Site

For more context, this is how the demo site is configured:

```toml
[[plugins]]
  package = "netlify-plugin-opensearch"
    [plugins.inputs]
      siteShortName = "Demo Site"
      siteDescription = "Find stuff on the demo site"
      siteTags = "demos"
      siteContact = "luke@lukeoliff.com"
```

Which produced the following file as you can [see here](https://netlify-plugin-algolia-index.netlify.app/search.xml)

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Demo Site</ShortName>
  <Url type="text/html" template="https://netlify-plugin-algolia-index.netlify.app/search?q={searchTerms}"/>
  <Description>Find stuff on the demo site</Description>
  <Tags>demos</Tags>
  <Contact>luke@lukeoliff.com</Contact>
</OpenSearchDescription>
```

## Install on your website

Now, a search metatag to the head of your site, changing `search.xml` to match your configuration above.

```html
<link rel="search" href="search.xml" type="application/opensearchdescription+xml" title="Your Site Name" />
```

## To do

- Better support for the OpenSearch specification [as documented here](http://a9.com/-/spec/opensearch/1.1/) and [here](https://developer.mozilla.org/en-US/docs/Web/OpenSearch).

## Contributing

Make pull-requests, but follow [code of conduct](CODE_OF_CONDUCT.md) please.
