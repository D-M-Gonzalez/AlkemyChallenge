//Script utilizado para la barra de búsqueda, solamente matchea en uppercase con ciertas categorías

export default function searchItem(items,params){
    let count = 0;
    const result = items.map((el)=>{
        let item = "";
        if ( params.get("quantity") === "ALL" || count < params.get("quantity")){
            if ( params.get("category") === "ALL" || el.category === params.get("category")){
                if ( params.get("type") === "ALL" || el.type === params.get("type")){
                    if (params.get("search") === "" || params.get("search") === "undefined" || ( objectSearch(el,params))){
                        item = el;
                        count++;
                    }
                }
            }
        }
        return item
    })

    return result;
}

function objectSearch(el,params){
    let bool = false;

    for (let prop in el){
        if ( prop !== "_id" && prop !== "createdAt" && prop !== "updatedAt"){
            if ( prop === "date" ){
                if (new Date(el[prop]).toLocaleDateString().includes(params.get("search").toUpperCase())){
                    bool = true;
                }
            } else {
                if (el[prop].toString().toUpperCase().includes(params.get("search").toUpperCase())){
                    bool = true;
                }
            }
        }
    }

    return bool;
}

