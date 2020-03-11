<h1>Read Me</h1>
<p>
    Run below commands on your terminal first to install node-modules repositories and other laravel dependencies:<br>
    <code>npm install</code><br>
    <code>composer install</code>
</p>
<p>
To use Svelte-Loader always run on your first test and everytime you make changes with our Svelte Files:<br>
    <code>npm run dev</code>
<p>
<p>Then run <br>
    <code>php artisan serve</code>
</p>
<p>
To add/create svelte components files go to /resource/js/components or you can also add more folder under /resources/js directory for your svelte resources.
<p>
    
<h3>Features of Svelte-Preprocess</h3>
<h4>Template tag support</h4>
<p>
Add vue-like support for defining your markup between a <template> tag. The tagname can be customized to something like markup for example. See #options.
</p>
<i>
Note: only for auto preprocessing
</i>
<p> 
    <code>
    < template ><br>
      < div > Hey < /div ><br>
    < /template ><br>
    < /code >
</p>
<p>
< style ></ style >
</p>
<p>
< script >< /script >
</p>
<h3>
External files support
</h3>
< template src="./template.html" >< /template > <br>
< script src="./script.js" >< /script > <br>
< style src="./style.css" >< /style > <br>
Global style support
Add a global attribute to your style tag and instead of scoping the css, all of its content will be interpreted as global style.

<style global>
  div {
    color: red;
  }
</style>
Note1: needs postcss to be installed Note2: if you're using it as a standalone processor, it works best if added to the end of the processors array.

To use PUG preprocessors for your HTML inside *.svelte file follow:

<template lang="pug">
  div Posts
  +each('posts as post')
    a(href="{post.url}") {post.title}
</template>

To use SASS inside your *.svelte file use:

<style lang="scss">
  $color: red;
  div {
    color: $color;
  }
</style>



Inside laravel.mix you can see this configuration

With svelte-loader
  ...
  module: {
    rules: [
      ...
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: require('svelte-preprocess')({ /* options */ })
          },
        },
      },
      ...
    ]
  }
  ...
  
Preprocessing modes

svelte-preprocess can be used in two ways: auto preprocessing and with stand-alone processors.

Limitations

pug
Template blocks
Some of Svelte's template syntax is invalid in pug. svelte-preprocess provides some pug mixins to represent svelte's {#...}{/...} blocks: +if(), +else(), +elseif(), +each(), +await(), +then(), +catch(), +debug().

ul
  +if('posts && posts.length > 1')
    +each('posts as post')
      li
        a(rel="prefetch" href="blog/{post.slug}") {post.title}
    +else()
      span No posts :c

Element attributes
Pug encodes everything inside an element attribute to html entities, so attr="{foo && bar}" becomes attr="foo &amp;&amp; bar". To prevent this from happening, instead of using the = operator use != which won't encode your attribute value:

button(disabled!="{foo && bar}")


Disclamer: Svelte-Preprocess info are from https://github.com/kaisermann/svelte-preprocess
           You can visit that github repo for more information and if you want to add more preprocess script-support
