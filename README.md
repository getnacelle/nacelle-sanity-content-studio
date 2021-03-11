# Nacelle x Sanity Content Studio Starter

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)


## Nacelle Base Schema

By cloning this Content Studio Starter we've already got all of the schemas needed to set up content on your Nacelle build.

### Local development

1. **Install the Sanity CLI globally with `npm install -g @sanity/cli`**

2. **Initialize project by running `sanity init` in the root folder.**
    - This will log you in to Sanity, create a project, set up a dataset, and generate the files needed to run the editing environment locally.

3. **Install dependencies with `npm install` in the root folder.**

4. **Start the development server by running `sanity start` or `npm run start` in root folder**
 
### Nacelle PIM Linker Plugin

This studio starter includes [@nacelle/sanity-plugin-pim-linker](https://www.npmjs.com/package/@nacelle/sanity-plugin-pim-linker). This plugin provides a custom input component that makes it easier to reference product & collection data stored in Nacelle indices.

Check out [./schemas/productGrid.js](https://github.com/getnacelle/nacelle-sanity-content-studio/blob/master/schemas/productGrid.js) to see some of the possibilities.

Be sure to add your Nacelle spaceID and token in **./config/@nacelle/sanity-plugin-pim-linker.json**. Or you can remove that file and instead set spaceId and token in `.env.development` / .`env.production`.

### Preview Plugin

This studio starter also includes the [@sanity/production-preview](https://www.sanity.io/docs/preview-content-on-site). With this plugin you can preview unpublished drafts of your page entries on your site.

Include your preview URL in a .env file. This is the default base route for your site's pages.

With our Nuxt starter this would be:

```sh
PREVIEW_URL="https://myshop-preview.foo.app/"
```

With our Next.js starter this would be:

```sh
PREVIEW_URL="https://myshop-preview.foo.app/api/preview?path=/"
```

In `./resolveProductionUrl.js` you can customize how you would like previewing to work for different page routes or content types.

Now with the studio running locally or deployed you will see an 'Open preview' menu item appear in the document's context menu. Click that and you'll see you're draft content just like it were live!
