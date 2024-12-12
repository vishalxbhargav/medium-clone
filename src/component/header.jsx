import medium from '../../public/medium.svg'
const Header=()=>{
    return (
        <div className='max-w-[1440px] h-full flex flex-col justify-center items-center'>
            <div className="h-[4rem] flex justify-between items-center border-b-2">
                <div className='h-7 flex items-center'>
                    <img src={medium} className="h-full w-full" alt="" srcset="" />
                </div>
                <div>
                    <div>write</div>
                    <div>sigin</div>
                    <div>get start</div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;