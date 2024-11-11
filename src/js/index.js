require("@babel/polyfill");
import Search from "./model/search";
import { elements,renderLoader,clearLoader} from "./view/base";
import * as searchView from './view/SearchView'


// let search = new Search("burger");

// search.doSearch().then(r => console.log(r));



const state ={};

const controlSearch = async() => {
    // 1. Вэбээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = searchView.getInput();
    
    if(query){
        // 2. Шинээр хайлтын обьектийг үүсгэж өгнө.
        state.search = new Search(query);
        // 3.Хайлт хийхэд зориулж дэлгэцийг UI  бэлтгэнэ.
            searchView.clearSeearch();
            searchView.clearSearchResult();
            renderLoader(elements.searchResultDev);
        // 4. Хайлтын гүйцэтгэнэ
        await state.search.doSearch();
        // 5. Хайлтыг үр дүнг дэлгэцэнд үзүүлнэ.
        clearLoader();
        if(state.search.result===undefined)  alert("Хайлт олдсонгүй....");
        else searchView.renderRecipes(state.search.result);
            
    }
};

elements.searchForm.addEventListener("submit", e =>{
    e.preventDefault();
    controlSearch();
})