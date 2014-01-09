


  var title = "Search CrunchBase for '%s'";
  var id = chrome.contextMenus.create({"title": title, "contexts":["selection","link"],
                                       "onclick": function(info, tab){ sendSearch(info.selectionText); }});


//Send Search query and open result in a new tab
function sendSearch(query){
  chrome.tabs.create({url:"http://www.crunchbase.com/search?query="+query}, function(){})
}
