import mongoose from 'mongoose';

const { ObjectId, Number} = mongoose.Schema.Types;

const CartSchema = new mongoose.Schema ({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    products: [ 
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: ObjectId,
                ref: "product"
            }

        }
    ]
})

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);