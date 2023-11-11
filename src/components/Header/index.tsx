
export function Header({title}:{title?:string}){
    return(
        <header className="flex items-center justify-center h-20 mb-8 text-white100">
            <h1 className="text-5xl">{title}</h1>
        </header>
    )
}