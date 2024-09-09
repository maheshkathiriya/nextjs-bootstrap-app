// app/page.tsx
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Next.js with Bootstrap</title>
      </Head>
      <div className="container mt-4">
        {/* Bootstrap Carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/slide1.jpg"
                className="d-block w-100"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/slide2.jpg"
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/slide3.jpg"
                className="d-block w-100"
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Services Section */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Building modern and responsive websites.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  Developing mobile applications for Android and iOS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">SEO Services</h5>
                <p className="card-text">
                  Improving your website's search engine visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
