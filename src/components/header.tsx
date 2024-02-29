import Link from "next/link";

const Header = () => (
    <nav className='bg-base-300 py-4'>
        <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row sm:justify-between'>
            <div>
                <Link href='/' className='btn btn-primary'>
                    DRAFTER TEST
                </Link>
            </div>
        </div>
    </nav>

);

export default Header;