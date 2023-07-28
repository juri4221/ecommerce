var isShoppingCartWidgetOpen = false;

function onclickShoppingCart() { 
    isShoppingCartWidgetOpen = !isShoppingCartWidgetOpen;

    var div = document.getElementById("shoppingCartWidget");
    
    
    if (isShoppingCartWidgetOpen) {
        
        div.style.display = "block"
    }else{
        div.style.display = "none"
    }
    
}