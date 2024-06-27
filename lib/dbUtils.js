import 'dotenv/config';
import mongoose from 'mongoose';

let Schema = mongoose.Schema;

// News, Events
const NewsSchema = new Schema({
    heading: {
        type: String,
        required: true
    },
    author: String,
    tags: [String],
    date: Date,
    content: {
        type: String,
        required: true
    }
});

// Project
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    descp: String,
    collabs: [String]
});

// Review
const ReviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    stars: {
        required: true,
        type: Number,
        min: 1,
        max: 5
    },
    message: {
        type: String,
        required: true
    }
});

const News = mongoose.model('News', NewsSchema);

const Event = mongoose.model('Event', NewsSchema);

const Project = mongoose.model('Project', ProjectSchema);

const Review = mongoose.model('Review', ReviewSchema);

export async function mongooseConnect() {
    if (mongoose.connections[0].readyState) {
        return true;
    }
    try {
        await mongoose.connect(process.env.URI);
        return true;
    } catch (err) {
        throw new Error(err);
    }
}

export function getNews() {
    return News.find({tags: "news"}).exec();
}

export function getNewsById(id) {
    return News.findOne({_id: id}).exec();
}

export function getEvents() {
    return Event.find({tags: "event"}).exec();
}

export function getEventById(id) {
    return Event.findOne({_id: id}).exec();
}

export function getProjects() {
    return Project.find({}).exec();
}

export function getReviews() {
    return Review.find({}).exec();
}

export function postNews(data) {
    let news = new News({
        heading: data.heading,
        author: data.author,
        tags: [...data.tags],
        date: data.date,
        content: data.content
    });
    return news.save();
}

export function postEvent(data) {
    let event = new Event({
        heading: data.heading,
        author: data.author,
        tags: [...data.tags],
        date: data.date,
        content: data.content
    });
    return event.save();
}

export function postProject(data) {
    let project = new Project({
        name: data.name,
        descp: data.descp,
        collabs: [...data.collabs]
    });
    return project.save();
}

export function postReview(data) {
    let review = new Review({
        name: data.name,
        email: data.email,
        stars: data.stars,
        message: data.message
    });
    return review.save();
}
