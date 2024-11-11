import Search from "./model/search";

let search = new Search("burger");

search.doSearch().then(r => console.log(r));
// doSearch("pizza");