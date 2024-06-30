import mongoose from 'mongoose'

let Schema = mongoose.Schema

// News, Events
const NewsAndEventSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  date: { type: Date, required: true },
  content: {
    type: String,
    required: true,
  },
})

// Project
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  descp: String,
  collabs: [String],
})

// Review
const ReviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  stars: {
    required: true,
    type: Number,
    min: 1,
    max: 5,
  },
  message: {
    type: String,
    required: true,
  },
})

const News = mongoose.models.News || mongoose.model('News', NewsAndEventSchema)

const Event = mongoose.models.Event || mongoose.model('Event', NewsAndEventSchema)

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema)

const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema)

export async function mongooseConnect() {
  if (mongoose.connections[0].readyState) {
    return true
  }
  try {
    await mongoose.connect(process.env.URI)
    return true
  } catch (err) {
    throw new Error(err)
  }
}

export function getNews() {
  return News.find().exec()
}

export function getNewsById(id) {
  return News.findOne({ _id: id }).exec()
}

export function getEvents() {
  return Event.find().exec()
}

export function getEventById(id) {
  return Event.findOne({ _id: id }).exec()
}

export function getProjects() {
  return Project.find({}).exec()
}

export function getReviews() {
  return Review.find({}).exec()
}

export function postNews(data) {
  let news = new News({
    heading: data.heading,
    author: data.author,
    tags: [...data.tags],
    date: data.date,
    content: data.content,
  })
  return news.save()
}

export function postEvent(data) {
  let event = new Event({
    heading: data.heading,
    author: data.author,
    tags: [...data.tags],
    date: data.date,
    content: data.content,
  })
  return event.save()
}

export function postProject(data) {
  let project = new Project({
    name: data.name,
    descp: data.descp,
    collabs: [...data.collabs],
  })
  return project.save()
}

export function postReview(data) {
  let review = new Review({
    name: data.name,
    email: data.email,
    stars: data.stars,
    message: data.message,
  })
  return review.save()
}

export function putNewsById(id, data) {
  return News.updateOne({ _id: id }, { $set: { ...data } }).exec()
}

export function putEventById(id, data) {
  return Event.updateOne({ _id: id }, { $set: { ...data } }).exec()
}

export function putProjectById(id, data) {
  return Project.updateOne({ _id: id }, { $set: { ...data } }).exec()
}

export function putReviewById(id, data) {
  return Review.updateOne({ _id: id }, { $set: { ...data } }).exec()
}

export function deleteNewsById(id) {
  return News.deleteOne({ _id: id }).exec()
}

export function deleteEventById(id) {
  return Event.deleteOne({ _id: id }).exec()
}

export function deleteProjectById(id) {
  return Project.deleteOne({ _id: id }).exec()
}

export function deleteReviewById(id) {
  return Review.deleteOne({ _id: id }).exec()
}
