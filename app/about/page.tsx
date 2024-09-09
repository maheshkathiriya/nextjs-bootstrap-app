// app/about/page.tsx
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Full Stack Developer</title>
      </Head>
      <div className="container mt-4">
        <h1>About Me</h1>
        <p>
          I am a Full Stack Web Developer with 12+ years of experience in both
          front-end and back-end technologies. I specialize in building
          responsive websites and mobile applications.
        </p>
      </div>
    </>
  );
}
