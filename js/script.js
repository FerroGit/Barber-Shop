var app = new Vue ({
    
    el: "#app",
    data:{
        header: [
            {
                logo: "img/avadabarbers-logo-x1.png",
                shopping: "fas fa-shopping-cart",
                title: "Barber Shop",
                subtitle: "The pinnacle of male grooming",
                button: "learn more",
                img: "img/avadabarbers_hero_focalmirror-600x825.png",
                folder: "fas fa-folder-plus",
                span_1: "Demos",
                span_2: "On Sale",
                dollar: "$",
                price: "39"
            }
        ],
        count: 0,
        dropdown: ["Home", "Foto", "Prezzi", "Chi Siamo"],
        drop: false,
        indexCarousel : 0,
        carousel: [
            {
                prodotto: "brush",
                dettagli: [
                    {
                        name: "Brush",
                        img: "img/brush_dark-400x400.png",
                        price:"$15.00"
                    }
                ],
            },
            {
                prodotto: "scrissor",
                dettagli: [

                    {
                        name: "Scissors",
                        img: "img/scissors-400x400.png",
                        price: "$85.00"
                    }
                ],
            },
            {
                prodotto: "hot-oil",
                dettagli:[

                    {
                        name: "Hot Oil",
                        img: "img/hot_oil_dark-400x400.png",
                        price: "$15.00"
                    }
                ],
            },
            {
                prodotto: "razor",
                dettagli:[
                    {
                        name: "Razor",
                        img: "img/straight_razor_dark-400x400.png",
                        price: "$30.00"
                    }
                ]
            }
        ],
        socials: ['fab fa-facebook-square', 'fab fa-twitter-square', 'fab fa-instagram', 'fab fa-youtube'],
        shop:[
            {
                nome: "shop",
                poster: "img/avadabarbers_footer_shop_image-300x234.png",
                button: "shop our range now"
            }
        ],
        appointment:[
            {
                nome: "appointment",
                poster: "img/avadabarbers_footer_appointment_image-400x312.png",
                button: "book your appointment"
            }
        ],
        contact:[
            {
                nome: "contact",
                poster:"img/avadabarbers-logo-x1.png",
                title: "Avava Barbers",
                address: "123 New York City",
                city: "New York",
                email: "info@yourwebsite.com",
                phone: "+1(555)555-1212"
            }
        ],
        copyright: "@Copyright 2012-2020 | Avada Therme by ThemeFusion | All Rights Reserved | Powered by Lorenzo Ferretti"
    },
    methods:{
        active: function(index){
            if (index == this.indexCarousel) {
                return 'active';
            } else {
                return 'none';
            }
        },
        nextImg: function(){
            this.indexCarousel++;
            if (this.indexCarousel > (this.carousel.length - 1)) {
                this.indexCarousel = 0
            }
        },
        prevImg: function () {
            this.indexCarousel--;
            if (this.indexCarousel < 0) {
                this.indexCarousel = this.carousel.length - 1;
            }
        },
        incrementCounter: function () {
            this.count += 1;
        },
        resetCounter() {
            this.count = 0;
        }
    },

})