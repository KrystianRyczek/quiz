export default function Btn({children, ...props}){

    return(
        <button {...props}>
            {children}
        </button>
    )
}