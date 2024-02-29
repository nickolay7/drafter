import Link from "next/link";

const HomePage = () => (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Welcome to Next.js experiments:)</h1>
        <Link href="/tasks" className="btn btn-accent">Get started</Link>
    </div>
);

export default HomePage;