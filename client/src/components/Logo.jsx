import docs from "/assets/docs.svg"

const Logo = () => {
  return (
    <>
        <div className="flex items-center w-fit p-2 hover:text-black hover:bg-slate-200 transition-all* text-gray-600 rounded-lg ">
            <img src={docs} alt="docs logo" />
            <h1 className=" text-lg cursor-default ">
                <span className="font-bold text-xl">Google</span> Docs Clone
            </h1>
        </div>
    </>
  )
}

export default Logo