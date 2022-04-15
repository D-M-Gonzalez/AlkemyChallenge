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
        if (el[prop].toString().includes(params.get("search"))){
            bool = true;
        }
    }

    return bool;
}

