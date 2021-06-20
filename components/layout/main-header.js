import Link from "next/Link"
function MainHeader(){

    return(
        <header>
            <div>
                <Link href='/'>NextEvent</Link>
            </div>
            <nav>
                
                <ul>
                    <li>
                        <Link href='/event'>Browse all events</Link>
                    </li>
                </ul>
               
            </nav>
        </header>
    )
}