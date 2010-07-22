Chapter Outline
===============

I have created a strawman "chapter" arrangement in the order that a person needs to know the info, for instance one needs to know how to install something before one needs to know how to do xyz, however installation is usually in the back if at all.  I have kept it up front so a new user can just work through the cookbook in order of difficulty/complexity of subject matter at least for the first 3-4 chapters.

If you want to add to this outline please use the Github, Markdown conventions

Nitin 

Installation
------------

Unix
*  how to install from source (get these from the wiki)
*  how to install couchdb on Ubuntu < Karmic
*  how to install couchdb on Ubuntu >= Karmic

Android
*  how to install couchdb on Android

Mac
*  CouchDBX
*  Source

Windows
*  Binary
  *  how to bring up Futon on Windows

CouchDB Basic Admin
-------------------

Futon
*  database
*  document
*  users

Compaction
*  when to do
*  when not to do

Development Tools
-----------------

How to access couchdb
*  curl
*  various language clients
** ruby
** python
** php
** java

How to debug
*  firebug
*  debugging via other browser
*  debugging on Android

CouchDB as pure REST JSON db
----------------------------

CRUD operations
*  database
*  document

Bulk writes
*  using other clients
*  using hovercraft

Performance testing using Relaxamation
*  multiple recipes one for each scenario

Auth and _user db

Changes feed 

Replication

Virtual host

URL rewriting

Writing Views
-------------

Temp views on curl command line

How to use temp views in Futon

How to generate keys for best performance

How to use create composite keys

How to use map vs map + reduce

How to get good performance from views
*  don't emit the whole doc
*  ??? what else

_list
*  templating using Mustache.js
*  what is not permitted inside an _list

_show
*  templating using Mustache.js

Using Views
-----------

Single key lookups

Range queries

Paging

CouchDB Extensions
------------------

*  Lucene
** installing
** writing views

*  GeoCouch
** installing
** writing views

*  Other lang view servers
** Python
** Ruby

CouchApp
--------

Installing CouchApp

Using couchapp from inside your VCS 
*  in git staging
*  in SVN sandbox

Using couchapp inside Eclipse

Using jquery couch plugin

Using Mustache.js

Mobile development
------------------

Android
*  install
*  dev setup using Eclipse
*  dev setup using Textmate or other editors

Nokia N900
*  install

iPad/iPhone


Couchdb Advanced Admin
----------------------

how to install a new version over an old one

how to backup

how to cluster using replication

how to shard using Lounge

how to shard using Open Cloudant (coming)


Deployment
----------

How to integrate into existing webservers
*  apache
*  nginx
*  mongrel
*  mongrel2 ?
*  cherrypy
*  django
*  tomcat

Enterprise
----------

How to integrate into existing permissions systems
*  Java security
*  Active Directory
*  GSS API 
*  LDAP
