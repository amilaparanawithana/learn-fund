
export default function  TabButton({children, onSelect}) {
// export default function  TabButton(props) {
//     return <li> <button>{props.children}</button></li>
//     return <li> <button onClick={handleClick}>{children}</button></li>
    return <li> <button onClick={onSelect}>{children}</button></li>

    function handleClick () {

    }

}
