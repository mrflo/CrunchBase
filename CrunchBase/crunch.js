
// Create one item for each context type.
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Search CrunchBase for '%s'";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": function(info, tab){ sendSearch(info.selectionText); }});
  //console.log("'" + context + "' item:" + id);
}

//Send Search query and open result in a new tab
function sendSearch(query){
  chrome.tabs.create({url:"http://www.crunchbase.com/search?query="+query}, function(){})
}
