

function Button(props) {
    return (
        <div>
            <button className={`py-3 px-8 text-white bg-red-400 font-medium rounded-lg hover:bg-gradient-to-r from-red-400 to-green-200 ${props.className}`}>{props.children}</button>
        </div>
    );
}

export default Button;