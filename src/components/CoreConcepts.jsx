// export default function CoreConcepts ({image, title, description}) { // directly use variable(called object destructuring)
// export default function CoreConcepts ({concept}) { // concept.image
export default function CoreConcepts(props) { // or can use {image, title, description}
    return (
        <li>
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
        /*<li>
            <img src={concept.image}/>
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
        </li>*/
    )
}
