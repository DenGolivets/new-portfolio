const Summary = () => {
  return (
  <div className="relative">
    <p className="text-4xl mb-8 uppercase font-poppins text-lightcyan absolute -top-[4rem] -right-[10rem]">
      About me
    </p>
      <article className="desktop:text-xl mobile:text-md font-poppins" itemScope itemType="https://schema.org/author">
        <p className="mb-5">
          Hello! I&apos;m Den Holivets, a young, promising front-end developer passionate about creating visually appealing, user-friendly websites. 
          My journey in the world of web development has equipped me with a versatile skill set, including proficiency in HTML, CSS, JavaScript, 
          ReactJs, NextJs, TypeScript, MongoDB, API integration, and a touch of MERN stack development. I also took courses at the IT Institute 
          with Senior <b><a className="hover:animate-pulse" href="https://www.instagram.com/nik.kipniak"><span className="text-purple-500">Mykola Kipnyak</span></a></b>. 
        </p>
        <p className="mb-5">
          At the moment I&apos;m participating in a startup project and studying 🎓 new technologies in the world of IT.
        </p>
        <p className="mb-5">
          When I&apos;m not at the computer, I create electronic music 🎶.
        </p>
        <p className="text-2xl mb-8 uppercase font-poppins text-lightcyan">
          Tech Stack Highlights:
        </p>
        <p className="mb-5">
          <p><b className="text-slate-500">HTML, CSS, JavaScript:</b> The foundation of my web development expertise, ensuring solid and responsive designs.</p>
          <p><b className="text-slate-500">ReactJs, NextJs:</b> Leveraging these powerful frameworks to create dynamic and efficient user interfaces.</p>
          <p><b className="text-slate-500">TypeScript:</b> Enhancing code quality and maintainability through static typing.</p>
          <p><b className="text-slate-500">Database:</b> Experience in handling and managing data in a NoSQL environment. I also work with PostgresQl, GraaphQl.</p>
          <p><b className="text-slate-500">API Integration:</b> Seamlessly connect apps and leverage popular services for scalable, real-time functionality.</p>
        </p>
      </article>
  </div>
  );
}

export default Summary;