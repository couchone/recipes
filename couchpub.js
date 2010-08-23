
# couchpub json format

var couchpub_template = 
{ 

	"_id": "<uuid>",
	"_rev": "<rev>",

    "title": "<some title for the whole document not necessarily identical to the content title inside _meta>",

	"meta": { 
	 "_content_format": "<Markdown, LaTeX, DocBook blah blah>",
	 "_title": "actual title of content",
	 "_toc": "table of contents in some format TBD"	
	 "other_meta_attr": "<other_meta_value>",
	 "and":	"<.... other metadata....>"
		
	},

	"_attachment": {
	 "_content": "single blob - body of content>",
 	 "_assets": "supporting images and other media - a nested object generally"

	}

}