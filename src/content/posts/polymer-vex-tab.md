---
title: The VexTab Polymer Element!
collection: posts
template: post.hbt
date: 2014-11-19
---

I recently discovered [Polymer](https://www.polymer-project.org/) a new web 
framework that utilizes the Web Components technology in a very neat way.
Polymer helps you create new Web Components in a very intuitive, descriptive
an simple fashion. And the best thing about it is that the Web Components
technology doesn't rely on polymer, you can simply create a component that
interacts with other Web Components created with e.g. [x-Tags](http://www.x-tags.org/).

I just created the vex-tab Component that heavily relies on the 
[VexTab](http://www.vexflow.com/vextab/) project but makes it usage easier.
This post will guide you through my steps of creating the vex-tab element and I
hope you will see why Polymer is so great.

# Setting it all up

Polymer provides a short guide on how to create a new element. You can find it
here. When starting a new element it is very helpful to use Polymers
[seed element](https://github.com/PolymerLabs/seed-element). If you are lazy like
me you also can simply use [Yeoman](http://yeoman.io/) to create a new element.
For this you simply install the polymer generator and create your new element.

```
> [sudo] npm install -g generator-polymer
> cd To/Your/Polymer/Folder
> mkdir vex-tab && cd vex-tab
> yo polymer:seed vex-tab

     _-----_
    |       |    .--------------------------.
    |--(o)--|    | Out of the box I include |
   `---------´   |        the Polymer       |
    ( _´U`_ )    |       seed-element.      |
    /___A___\    '--------------------------'
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What is your GitHub username? LittleHelicase
? What is your element's name: vex-tab
```

I recommend to use a separate folder for Polymer projects. If you install the
dependencies for the seed project they are placed into the parent folder (*../*).
This is done because your element will eventually be a dependency too and thus it
should already be in the correct relative path to all the other elements you
are using. Yeoman will create some files and bower will install the dependencies.
Bower is the main contribution channel for Polymer elements.

Now we have a seed project that contains some `.html` files. To view those in your
browser you have to start a HTTP server on your machine. Polymer uses HTML imports
which contain the Web Components and further dependencies. Current browsers don't
like to import `.html` files due to security issues. I find the simplest way to
start a HTTP server is to use Python. You simply call in the parent folder 
(in which your element folder is located) the following command:

```
python -m SimpleHTTPServer
```

For all folks that don't want to use Python, have a look at the [http-server](https://www.npmjs.org/package/http-server)
NPM package.

Now you can visit the site under `localhost:8000/vex-tab`. Please pay attention
to the port used by your server it might differ. You get an exemplary documentation
with a link to an demo in the top bar. But I want to draw your attention to the
example given on this page. it simply says: 

```
<vex-tab></vex-tab>
```

Well that is nearly how I want my element to be. I only want to include the
VexTab code in the `vex-tab` element like this:

```
<vex-tab>
tabstave
  notation=true
  key=A time=4/4

  notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
  notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4
  text :w, |#segno, ,|, :hd, , #tr
</vex-tab>
```

We need only two things for this. First the VexTab library, second one
databinding. The library dependency is simply handled by the `vex-tab-library´
Polymer component. I wrote it and it simply loads the Javascript file. It would
be possible to include the Javascript file in our current project, but if there
is some other element that uses the same library we don't want them to load it
multiple times. Polymer will take care of that, if we have a Polymer component.

The second thing we need is a databinding inside the `vex-tab` element. We
want to bind the content of the tag to a routine that calls the appropriate 
VexTab method to generate the scores.
