'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var LecturesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    urlName: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    }
});
mongoose.model('LecturesSchema', LecturesSchema);