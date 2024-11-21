const { mongoose, Schema } = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublic: {
        type:Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

videoSchema.plugin(mongooseAggregatePaginate);


module.exports = mongoose.model("Video", videoSchema);
