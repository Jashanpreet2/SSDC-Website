import Head from 'next/head'
import NewsList from '@/components/NewsList'
import IconList from '@/components/IconList';

const news = [
    {
      "id": 1,
      "title": "Exploring the Future of Technology: Insights from Our Programming Club",
      "author": "Jane Doe",
      "desc": "Join us as we dive into the latest advancements in technology and share our insights on the future of programming.",
      "date": "2024-06-01"
    },
    {
      "id": 2,
      "title": "Monthly Coding Challenge: June 2024",
      "author": "John Smith",
      "desc": "Our monthly coding challenge is here! Test your skills and compete with fellow club members for exciting prizes.",
      "date": "2024-06-05"
    },
    {
      "id": 3,
      "title": "Guest Speaker Event: AI and Machine Learning",
      "author": "Emily Johnson",
      "desc": "We are excited to welcome Dr. Alan Turing to discuss the latest trends in AI and Machine Learning.",
      "date": "2024-06-10"
    },
    {
      "id": 4,
      "title": "Hackathon Recap: Innovations and Winners",
      "author": "Michael Brown",
      "desc": "Catch up on the highlights from our recent hackathon, including innovative projects and winning teams.",
      "date": "2024-06-15"
    },
    {
      "id": 5,
      "title": "Workshop: Building Web Apps with React",
      "author": "Sarah Lee",
      "desc": "Learn how to build dynamic web applications using React in our upcoming workshop. All skill levels are welcome.",
      "date": "2024-06-20"
    },
    {
      "id": 6,
      "title": "Alumni Spotlight: Successful Careers in Tech",
      "author": "David Wilson",
      "desc": "Hear from our alumni who have gone on to achieve great success in the tech industry. Get inspired by their stories.",
      "date": "2024-06-25"
    },
    {
      "id": 7,
      "title": "Club Social Event: Networking Night",
      "author": "Lisa Adams",
      "desc": "Join us for a night of networking and fun. Meet fellow members and industry professionals in a relaxed setting.",
      "date": "2024-06-30"
    },
    {
      "id": 8,
      "title": "Tech Talk: The Rise of Quantum Computing",
      "author": "Robert Clark",
      "desc": "Explore the fascinating world of quantum computing and its potential to revolutionize technology as we know it.",
      "date": "2024-07-05"
    },
    {
      "id": 9,
      "title": "Summer Coding Bootcamp: Learn to Code in 8 Weeks",
      "author": "Karen Martinez",
      "desc": "Our intensive summer coding bootcamp is back! Sign up now to gain hands-on experience and improve your coding skills.",
      "date": "2024-07-10"
    },
    {
      "id": 10,
      "title": "Collaboration Project: Open Source Contribution",
      "author": "Steven Garcia, Project Lead",
      "desc": "Join our collaboration project focused on contributing to open source software. Learn, code, and make a difference.",
      "date": "2024-07-15"
    },
    {
      "id": 11,
      "title": "Summer Coding Bootcamp: Learn to Code in 8 Weeks",
      "author": "Karen Martinez",
      "desc": "Our intensive summer coding bootcamp is back! Sign up now to gain hands-on experience and improve your coding skills.",
      "date": "2024-07-10"
    },
    {
      "id": 12,
      "title": "Collaboration Project: Open Source Contribution",
      "author": "Steven Garcia, Project Lead",
      "desc": "Join our collaboration project focused on contributing to open source software. Learn, code, and make a difference.",
      "date": "2024-07-15"
    }
  ];
export default function News() {
  return (
    <>
      <Head>
        <title>SSDC Website - News</title>
        <meta
          name="description"
          content="Stay updated with our latest news. This website is run by ssdc seneca"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h2>Latest News</h2>
      </div>
      <NewsList news={news}/>
      <IconList />
    </>
  )
}
