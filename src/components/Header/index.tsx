
export function Header({title}:{title?:string}){
    return(
        <header className=" text-center mb-8 text-white100">
            <h1 className="text-5xl">{title}</h1>
        </header>
    )
}