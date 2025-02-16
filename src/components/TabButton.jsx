
export default function  TabButton({children, onSelect, isSelected}) {
// export default function  TabButton(props) {
//     return <li> <button>{props.children}</button></li>
//     return <li> <button onClick={handleClick}>{children}</button></li>
    return <li> <button className={isSelected? 'active': undefined} onClick={onSelect}>{children}</button></li>

    function handleClick () {

    }

}
