
export default function  TabButton({children}) {
// export default function  TabButton(props) {
//     return <li> <button>{props.children}</button></li>
    return <li> <button onClick={handleClick}>{children}</button></li>

    function handleClick () {

    }

}
