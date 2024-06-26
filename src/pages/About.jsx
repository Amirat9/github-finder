const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4 text-neutral-50'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light text-neutral-100'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a
          className='text-white align-middle ml-2'
          href='https://twitter.com/hassibmoddasser'
        >
          Hassib Moddasser
        </a>
      </p>
    </>
  );
};

export default About;
