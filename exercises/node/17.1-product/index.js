const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/product-exercise', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique : true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    details:{
        description: {
            type: String,
            required: true,
            trim: true,
            validate(value){
                if(value.length<10) throw new Error(`description has to be at least 10 letters in length`)
            }
        },
        price:{
            type: Number,
            required: true,
            trim: true,
            validate(value){
                if(value<0) throw new Error(`Price has to be a positive value`)
            }
        },
        discount:{
            type: Number,
            default:0,
        },
        images: {
            type: Array,
            required: true,
            validate(value) {
                if (value.length < 2) {
                    throw new Error("Must contain 2 images at least");
                }
            },
        },
        date: {
            type: Date,
            default: Date.now(),
        },
        phone: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, ["he-IL"]))
                    throw new Error("The phone number is not valid");
            },
        },
    }
})


const dyson = new Product({
	name: "dyson vacuume",
	category: "vacuume",
	isActive: true,
	details: {
		description: "best vacuume",
		price: 3000,
		discount: 270,
		images: ["img1", "img2"],
		phone: "0502696006",
	},
});

dyson.save()
	.then(() => {
		console.log(dyson);
	})
	.catch((error) => {
		console.log(error);
	});

const ps5 = new Product({
	name: "ps5",
	category: "game consoles",
	isActive: true,
	details: {
		description: "new sony console",
		price: 2500,
		images: ["img1", "img2"],
		phone: "0502696006",
	},
});

ps5
	.save()
	.then(() => {
		console.log(ps5);
	})
	.catch((error) => {
		console.log(error);
	});

