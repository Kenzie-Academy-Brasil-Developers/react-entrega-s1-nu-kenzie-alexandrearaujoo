const Button = ({children, className, type = 'button', onClick}) => {

    return (
        <button onClick={onClick} className={className} type={type}>{children}</button>
    )
}

export default Button