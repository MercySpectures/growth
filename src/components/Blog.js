import React from "react";
import "./Blog.scss";
import Header from "./Header";
import Footer from "./Footer";

const blogPosts = [
  {
    title: "Top 10 Must-Visit Destinations for 2024",
    excerpt: "From hidden gems to iconic landmarks, discover the most exciting travel destinations that should be on your radar this year. We've curated a list of places that offer unique experiences, stunning landscapes, and unforgettable memories.",
    author: "Travel Team",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Destinations",
    image: "travel01.jpg"
  },
  {
    title: "Essential Travel Tips for First-Time Travelers",
    excerpt: "Embarking on your first international trip? Don't worry! We've compiled everything you need to know to make your journey smooth, enjoyable, and stress-free. From packing essentials to cultural etiquette.",
    author: "Sarah Johnson",
    date: "January 10, 2024",
    readTime: "8 min read",
    category: "Travel Tips",
    image: "travel02.jpg"
  },
  {
    title: "Budget Travel: How to Explore the World for Less",
    excerpt: "Travel doesn't have to break the bank! Discover smart strategies to travel more while spending less, without compromising on experiences. Learn about budget accommodations, local transportation, and money-saving tips.",
    author: "Mike Chen",
    date: "January 5, 2024",
    readTime: "6 min read",
    category: "Budget Travel",
    image: "travel03.jpg"
  },
  {
    title: "Family Travel: Making Memories with Kids",
    excerpt: "Planning a family vacation? We share tips and tricks for creating unforgettable family adventures that everyone will enjoy. From kid-friendly destinations to activities that keep the whole family engaged.",
    author: "Emma Davis",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "Family Travel",
    image: "travel04.jpg"
  },
  {
    title: "Adventure Travel: Pushing Your Limits",
    excerpt: "Ready for an adrenaline rush? Explore inspiring stories and comprehensive guides for those who seek thrilling travel experiences. From mountain climbing to deep-sea diving, discover your next adventure.",
    author: "Alex Rodriguez",
    date: "December 20, 2023",
    readTime: "9 min read",
    category: "Adventure",
    image: "travel05.jpg"
  },
  {
    title: "Sustainable Travel: Exploring Responsibly",
    excerpt: "Travel with purpose! Learn how to explore the world in a way that benefits local communities and protects the environment. Discover eco-friendly accommodations, responsible tourism practices, and conservation efforts.",
    author: "Lisa Green",
    date: "December 15, 2023",
    readTime: "6 min read",
    category: "Sustainability",
    image: "travel06.jpg"
  }
];

const Blog = () => (
  <div className="blog-page">
    <Header />
    
    <div className="blog-hero">
      <div className="blog-hero-content">
        <h1>Travel Blog</h1>
        <p>Discover stories, tips, and inspiration from around the world</p>
      </div>
    </div>

    <section className="blog-section">
      <div className="blog-intro">
        <h2>Latest Stories & Insights</h2>
        <p>
          From expert travel tips to destination guides and inspiring stories, 
          our blog is your go-to resource for everything travel-related. 
          Stay updated with the latest trends, hidden gems, and travel advice from our experts.
        </p>
      </div>
      
      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <article className="blog-card" key={i}>
            <div className="blog-image">
              <img src={require(`../assets/${post.image}`)} alt={post.title} />
              <div className="blog-overlay">
                <span className="category">{post.category}</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="read-time">{post.readTime}</span>
                <span className="date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-footer">
                <span className="author">By {post.author}</span>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest travel stories, tips, and exclusive offers.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Blog;