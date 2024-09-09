// app/contact/page.tsx
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Full Stack Developer</title>
      </Head>
      <div className="container mt-4">
        <h1>Contact Me</h1>
        <p>Here are my contact details:</p>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Upwork Profile:</strong> <a href="https://www.upwork.com/freelancers/maheshkathiriya2" target="_blank" rel="noopener noreferrer">My Upwork Profile</a>
          </li>
          <li className="list-group-item">
            <strong>Website:</strong> <a href="https://sensiblewave.com/" target="_blank" rel="noopener noreferrer">mywebsite.com</a>
          </li>
          <li className="list-group-item">
            <strong>Phone:</strong> +91-7405352631
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> phpmk888@gmail.com
          </li>
        </ul>
      </div>
    </>
  );
}
