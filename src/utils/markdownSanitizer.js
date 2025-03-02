const marked = require('marked');
const sanitizeHtml=require('sanitize-html');
var TurndownService = require('turndown')
function sanitizeMarkdownContent(markdownContent){
    var turndownService = new TurndownService()
    const convertedHtml=marked.parse(markdownContent);
    console.log("convertedHTML",convertedHtml);
    const sanitizedHtml=sanitizeHtml(convertedHtml,{
        allowedTags:sanitizeHtml.defaults.allowedTags.concat([img])
    });
    console.log("sanitizedHtml",sanitizeHtml);

    const sanitizedMarkdown=turndownService.turndown(sanitizedHtml);
    console.log("sanitizedMarkdown",sanitizedMarkdown);
    return sanitizedMarkdown;

   
}

module.exports=sanitizeMarkdownContent;