function Footer(){
    const copyRight = new Date()
    return (
        <>
        <div className="flex flex-row justify-center pt-30">
            <h1 className="text-white font-inter font-semibold text-md">
                Copyright © {
                    copyRight.getFullYear()
                } IgniSite Web Agency
            </h1>
        </div>
        </>
    )
}

export default Footer