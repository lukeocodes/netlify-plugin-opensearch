# Netlify Algolia Index Plugin

Automatically generate [opensearch](http://a9.com/-/spec/opensearch/1.1/) search.xml file postBuild on Netlify deploy.

## Usage

To install, add the plugin in your `netlify.toml`. No config is required but we show the default options here.

```toml
[[plugins]]
  package = netlify-plugin-opensearch
    # all inputs is optional, we just show you the defaults below
    # [plugins.inputs]
      # searchUrl = `${process.env.URL}/search?q=`
      # searchFile = 'search.xml'
      # siteShortName = 'Search'
      # siteDescription = null
      # siteTags = null
      # siteContact = null
```

Default config will generate the following file at `https://your-site-name.netlify.app/search.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Search</ShortName>
  <Url type="text/html" template="https://your-site-name.netlify.app/search?q={searchTerms}"/>
</OpenSearchDescription>
```

## With All The Sprinkles

```toml
[[plugins]]
  package = netlify-plugin-opensearch
    [plugins.inputs]
      searchUrl = `https://different-website.com/search?q=`
      searchFile = 'opensearch.xml'
      siteShortName = 'My Site'
      siteDescription = 'Search cool content from my site'
      siteTags = 'my site'
      siteContact = 'me@my-site.com'
```

Which will produce the following file at `https://your-site-name.netlify.app/opensearch.xml`

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

## Contributing

Make pull-requests, but follow [code of conduct](CODE_OF_CONDUCT.md) please.