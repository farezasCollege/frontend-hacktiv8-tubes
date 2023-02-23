import Search from "./Search";

export default function Header() {
    return (
        <>
            <nav className=" bg-orange-400 h-20 w-full">
                <div className=" relative flex justify-between h-full w-full">
                    <div className="ml-5 my-6 text-white text-2xl" >tubes daftar film</div>
                    <div className="flex-wrap w-10/11">
                        <Search/>
                    </div>
                </div>
            </nav>
        </>
    )
}