
import './Header.css';

function Header() {
    return <>
    <div className='w-[75rem] head mx-auto mt-6'>
        <a href="">Our logo</a>
        <ul>
            <li className='hover:text-red-500'><a href="">Home</a></li>
            <li className='hover:text-red-500'><a href="">About</a></li>
            <li className='hover:text-red-500'><a href="">Services</a></li>
            <li className='hover:text-red-500'><a href="">Contact</a></li>
        </ul>
        <button className="bg-white hover:bg-rose-400 py-1 px-5 rounded-md">Search</button>
    </div>
    </>
}

export default Header;