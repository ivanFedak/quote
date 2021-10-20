import def from './services/default'
import burger from './modules/burger'
import quote from './modules/quote'

window.onload = function (){
    def();
    burger();
    quote();
}