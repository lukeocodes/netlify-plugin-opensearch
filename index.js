// index.js
const path = require('path')
const fs = require('fs')

module.exports = {
  async onPostBuild(opts) {
    const {
      inputs: {
        // https://your-app.netlify.app/search?q=
        searchUrl = `${process.env.URL}/search?q=`,
        searchFile = 'search.xml',
        siteShortName = 'Search',
        siteDescription = null,
        siteTags = null,
        siteContact = null,
      },
      constants: { PUBLISH_DIR },
    } = opts

    let filePath = path.join(
      PUBLISH_DIR,
      searchFile
    )

    data = `<?xml version="1.0" encoding="UTF-8"?>
  <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${siteShortName}</ShortName>
    <Url type="text/html" template="${searchUrl}{searchTerms}"/>
`

    if (siteDescription !== null) {
      data += `    <Description>${siteDescription}</Description>
`
    }
    if (siteTags !== null) {
      data += `    <Tags>${siteTags}</Tags>
`
    }
    if (siteContact !== null) {
      data += `    <Contact>${siteContact}</Contact>
`
    }

    data += `</OpenSearchDescription>`
    
    fs.writeFile(filePath, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  },
}