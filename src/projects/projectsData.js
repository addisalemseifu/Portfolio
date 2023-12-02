import projectFour from '../assets/doc.png';
import projectFive from '../assets/bolo4.png';
import projectSix from '../assets/book.png';
import projectSeven from '../assets/space.png';

const projects = {
  1: {
    title: 'Book A Doctor',
    image: projectFour,
    description: (
      <>
        <p>
          A Full-stack app that allows
          users to sign up, see a list
          of doctors, and reserve
          or manage reservations.
          It uses a proper authentication system - JWT.
          Built with: (React,  Redux,  Rails, HTML5, CSS)
        </p>
      </>
    ),
    github: 'https://github.com/kamranasif506/Book-A-Doctor',
    demo: 'https://book-a-doctor.onrender.com/',
  },
  2: {
    title: 'Budget Tracking App',
    image: projectFive,
    description: (
      <>
        <p>
          A Full-stack website that
          enables the user to sign
          up, see their expense for
          the month, track their
          expenses, and add additional
          ones on the go. It uses an
          authentication-using device
          and authorization-using ability.
          Built with: (Rails, HTML5, CSS)

        </p>
      </>
    ),
    github: 'https://github.com/addisalemseifu/budget-app-on-rails',
    demo: 'https://final-bolo.onrender.com/',
  },
  3: {
    title: 'Bookstore App',
    image: projectSix,
    description: (
      <>
        <p>
          This is a Bookstore App
          developed with React and
          Redux/toolkit that use
          BookstoreApi as a database
          and allows the user to
          add books and remove books from his cart.
        </p>
      </>
    ),
    github: 'https://github.com/addisalemseifu/bookstore-app-with-react',
    demo: 'https://bookstore-app-99rq.onrender.com',
  },
  4: {
    title: 'Bookstore App',
    image: projectSeven,
    description: (
      <>
        <p>
          This is the User Interface
          of React/Redux App
          with the Weather
          Forcaster fully
          working fetching
          appdated data from
          a free API called
          Weather API. We
          also used Routing to navigate inside the website.
          Built with: (React,  Redux,  Rails, HTML5, CSS)
        </p>
      </>
    ),
    github: 'https://github.com/addisalemseifu/space-travelers-hub-group-pro.git',
    demo: 'https://space-travelers-hub-ppz7.onrender.com',
  },
};

export default projects;
