export default async function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, I'm Taye. I'm a college student looking for oppurtunity.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a CS undergrad at <b>Georgia Institute of Technology</b> and where I have
          emersed myself in the world of frontend development, blockchain, and AI. My main area of
          expertise is Static Site Generation utilizing Next.js, a React framework, developing
          applications that are fast, scalable and user-friendly. I primarily utilize Tailwind for
          my styling needs, favoring its utility-first approach for speed and precision in designing
          beautiful UIs.
        </p>
        <p>
          Outside the classroom, I serve as a <b>Computer Science tutor</b>, where I have the
          privilege of fostering the next generation of coders. It's a role that has not only honed
          my knowledge of various concepts but also sharpened my communication and mentoring skills.
        </p>
        <p>
          I'm a strong believer in the potential of open-source communities and actively
          participate, share, and learn from them, with a particular focus on Next.js and React. I'm
          driven by the desire to create a faster and more accessible web, a vision that directly
          aligns with my studies and the projects I undertake.
        </p>
        <p className="mb-8">
          As I transition from academia to the software development industry, I am confident that my
          technical skills, coupled with my enthusiasm for growth and collaboration, will add value
          to any team I join. I'm excited to bring my passion for frontend development to the fore,
          and can't wait to contribute to the tech world's ongoing evolution.
        </p>
      </div>
    </section>
  );
}
