//----------------------------------------------------------------
// store (contains the products)
//
//
function store() {
    this.products = [
        new product("psvita", "Playstation Vita", "Blur the lines between entertainment and reality with PlayStation® Vita. Transform the way you connect, game and share. A stunning 5-inch OLED screen and front and back cameras transport your physical world into your digital one. The biggest and best games for a social world. And with always-on Wi-Fi, you can engage nearby gamers with a virtual gift or some good ol' fashioned smack talk, anywhere, anytime. The action never ends - just store it to the cloud and pick up on the Vita or back on the PS3.", 50),        
        new product("nexus", "Google Nexus", "HTC Google Nexus One has a 5 MP camera. It has 512MB RAM, 512MB ROM Internal memory. Dimensions are 119 x 59.8 x 11.5 mm and Weight is 130 g.It supports GPRS, EDGE, Wi-Fi, 3G and USB.", 100),
        new product("hmx", "Samsung HMX-H104", "Compact Full High Definition Camcorder gives you true 1920 x 1080i HD recording and 1280 x 720 progressive recording.", 250),
        new product("kindle", "Amazon Kindle Fire", "Kindle Fire HDX tablets are the first tablets to be powered by the 2.2 GHz quad-core Snapdragon 800 processor, making them the first to clock in at over 2 GHz.", 100),
        new product("lumix", "Panasonic LUMIX DMC-FH25", "The LUMIX DMC-FH25 shoots high-quality 16.1 megapixel images and combines a 28mm wide-angle*1 LEICA DC lens with a powerful 8x optical zoom to take amazing photos. Redesigned with an easy-to-hold grip and slim and stylish profile, it features a 2.7 Intelligent LCD, 720p High Definition (HD) video recording and advanced iA (Intelligent Auto) for ease of use. ", 159),
        new product("tomtom", "TomTom Start XL - Automotive GPS receiver", "The TomTom Start is specifically designed for occasional drivers and drivers who haven't had a chance to experience the benefits of car navigation. The simplified menu displays a two button user interface, 'Plan route' and 'Browse map'. The device is lightweight, has a compact 4.3 screen and has a semi-fixed EasyPort mount, making the whole navigation package fit into a pocket, small bag or glove compartment.", 30),
        ]

}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
